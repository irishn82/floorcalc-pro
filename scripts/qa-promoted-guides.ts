import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { guides } from "../data/guides";
import { runPromotedGuideQaRules, type QaPromotedGuide, type QaScanResult } from "../lib/content/qa-rules";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const promotedDir = path.join(projectRoot, "content", "promoted");
const reportDir = path.join(projectRoot, "content", "qa-reports");

function getArgValue(name: string) {
  const prefix = `--${name}=`;
  const inline = process.argv.find((arg) => arg.startsWith(prefix));

  if (inline) {
    return inline.slice(prefix.length);
  }

  const index = process.argv.indexOf(`--${name}`);
  if (index >= 0) {
    return process.argv[index + 1];
  }

  const positional = process.argv.slice(2).find((arg) => !arg.startsWith("-"));
  const npmConfigValue = process.env[`npm_config_${name}`];

  if (npmConfigValue && npmConfigValue !== "true") {
    return npmConfigValue;
  }

  return positional;
}

function getStringProperty(source: string, property: string) {
  const regex = new RegExp(`${property}:\\s*"([^"]*)"`);
  return source.match(regex)?.[1];
}

function getArrayProperty(source: string, property: string) {
  const regex = new RegExp(`${property}:\\s*\\[([\\s\\S]*?)\\]`, "m");
  const match = source.match(regex);
  if (!match) {
    return [];
  }

  return [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]);
}

function extractJsonArray(source: string, property: string) {
  const startMatch = new RegExp(`${property}:\\s*\\[`).exec(source);
  if (!startMatch) {
    return "";
  }

  const startIndex = startMatch.index + startMatch[0].lastIndexOf("[");
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = startIndex; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
      continue;
    }

    if (char === "[") {
      depth += 1;
    } else if (char === "]") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(startIndex, index + 1);
      }
    }
  }

  return "";
}

function getCategory(source: string) {
  return source.match(/Editorial category:\s*([^\r\n]+)/)?.[1]?.trim();
}

function extractMarkdownSection(markdown: string, heading: string) {
  const lines = markdown.split(/\r?\n/);
  const startIndex = lines.findIndex((line) => line.trim() === `## ${heading}`);

  if (startIndex < 0) {
    return "";
  }

  const sectionLines: string[] = [];
  for (let index = startIndex + 1; index < lines.length; index += 1) {
    if (lines[index].startsWith("## ")) {
      break;
    }
    sectionLines.push(lines[index]);
  }

  return sectionLines.join("\n");
}

function getInternalLinks(preview: string) {
  const section = extractMarkdownSection(preview, "Internal Link Suggestions") || preview;
  return [...section.matchAll(/^- \[[^\]]+\]\(([^)]+)\)/gm)].map((match) => match[1]);
}

function parseSnippet(sourceFile: string, snippet: string, preview: string): QaPromotedGuide {
  const sectionsJson = extractJsonArray(snippet, "sections");
  const faqJson = extractJsonArray(snippet, "faq");

  return {
    sourceFile,
    rawText: snippet,
    slug: getStringProperty(snippet, "slug"),
    title: getStringProperty(snippet, "title"),
    description: getStringProperty(snippet, "description"),
    metadataTitle: getStringProperty(snippet, "metadataTitle"),
    metadataDescription: getStringProperty(snippet, "metadataDescription"),
    category: getCategory(snippet),
    relatedTools: getArrayProperty(snippet, "relatedTools"),
    sections: sectionsJson ? (JSON.parse(sectionsJson) as QaPromotedGuide["sections"]) : [],
    faq: faqJson ? (JSON.parse(faqJson) as QaPromotedGuide["faq"]) : [],
    disclaimer: getStringProperty(snippet, "disclaimer"),
    internalLinks: getInternalLinks(preview),
    status: getStringProperty(snippet, "status")
  };
}

function renderReport(result: QaScanResult) {
  const generatedAt = new Date().toISOString();
  const statusLabel = result.status.toUpperCase();

  return `# QA Report: ${result.slug}

Generated: ${generatedAt}

Source file: ${result.fileName}

Overall status: ${statusLabel}

Critical failures: ${result.failCount}

Warnings: ${result.warnCount}

This report is a local manual-review artifact. It does not publish content or modify live guide data.

## Results

${result.results
  .map((item) => {
    const status = item.severity.toUpperCase();
    const recommendation = item.recommendation ? `\n  Recommendation: ${item.recommendation}` : "";
    return `- ${status}: ${item.label} - ${item.message}${recommendation}`;
  })
  .join("\n")}

## Manual Publishing Gate

- Resolve every FAIL before adding the guide to live data.
- Review every WARN and document the editorial choice if it remains.
- Confirm all calculator links, internal guide links, disclaimers, FAQ answers, and mobile readability.
- Manually add approved content to data/guides.ts only after review.
`;
}

function terminalStatus(status: QaScanResult["status"]) {
  return status.toUpperCase();
}

async function readOptional(filePath: string) {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return "";
    }
    throw error;
  }
}

async function main() {
  const requestedSlug = getArgValue("slug");
  const entries = await readdir(promotedDir, { withFileTypes: true });
  const snippetFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".guide-snippet.ts"))
    .map((entry) => entry.name)
    .filter((fileName) => !requestedSlug || fileName === `${requestedSlug}.guide-snippet.ts`);

  if (requestedSlug && snippetFiles.length === 0) {
    console.error(`No promoted guide snippet found for slug "${requestedSlug}".`);
    process.exitCode = 1;
    return;
  }

  if (snippetFiles.length === 0) {
    console.log("No promoted guide snippets found in content/promoted.");
    return;
  }

  await mkdir(reportDir, { recursive: true });
  const results: QaScanResult[] = [];

  for (const fileName of snippetFiles) {
    const slug = fileName.replace(/\.guide-snippet\.ts$/, "");
    const snippet = await readFile(path.join(promotedDir, fileName), "utf8");
    const preview = await readOptional(path.join(promotedDir, `${slug}.promotion-preview.md`));
    const parsed = parseSnippet(fileName, snippet, preview);
    const result = runPromotedGuideQaRules(parsed, { liveGuides: guides });
    const reportPath = path.join(reportDir, `${slug}.qa-report.md`);

    await writeFile(reportPath, renderReport(result), "utf8");
    results.push(result);
  }

  for (const result of results) {
    console.log(`${terminalStatus(result.status)} ${result.slug} (${result.failCount} fail, ${result.warnCount} warn)`);
    for (const issue of result.results.filter((item) => item.severity !== "pass")) {
      console.log(`- ${issue.severity.toUpperCase()}: ${issue.label} - ${issue.message}`);
    }
  }

  console.log(`Wrote ${results.length} QA report${results.length === 1 ? "" : "s"} to content/qa-reports.`);

  if (results.some((result) => result.failCount > 0)) {
    process.exitCode = 1;
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
