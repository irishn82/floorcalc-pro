import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { guides } from "../data/guides";
import type { GuideEcosystemSlug, MaterialType, TopicCluster } from "../data/types";
import { renderEditorialChecklistMarkdown } from "../lib/content/editorial-checklist";
import type { GuidePromotionCandidate, PromotionInternalLink } from "../lib/content/validation";
import { validateGuideContent } from "../lib/content/validation";

type FrontmatterValue = string | boolean | string[];
type Frontmatter = Record<string, FrontmatterValue>;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const draftsDir = path.join(projectRoot, "content", "drafts");
const promotedDir = path.join(projectRoot, "content", "promoted");

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

function unquote(value: string) {
  const trimmed = value.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    return JSON.parse(trimmed) as string;
  }

  return trimmed;
}

function parseFrontmatter(markdown: string) {
  const normalized = markdown.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    throw new Error("Draft is missing frontmatter.");
  }

  const endIndex = normalized.indexOf("\n---", 4);
  if (endIndex < 0) {
    throw new Error("Draft frontmatter is not closed.");
  }

  const frontmatterText = normalized.slice(4, endIndex).trim();
  const body = normalized.slice(endIndex + 4).trim();
  const frontmatter: Frontmatter = {};
  const lines = frontmatterText.split("\n");

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

    if (!match) {
      continue;
    }

    const [, key, rawValue] = match;
    if (rawValue === "") {
      const values: string[] = [];
      while (lines[i + 1]?.startsWith("  - ")) {
        i += 1;
        values.push(unquote(lines[i].replace(/^  -\s*/, "")));
      }
      frontmatter[key] = values;
      continue;
    }

    if (rawValue === "true" || rawValue === "false") {
      frontmatter[key] = rawValue === "true";
      continue;
    }

    frontmatter[key] = unquote(rawValue);
  }

  return { frontmatter, body };
}

function getString(frontmatter: Frontmatter, key: string) {
  const value = frontmatter[key];
  return typeof value === "string" ? value.trim() : undefined;
}

function getBoolean(frontmatter: Frontmatter, key: string) {
  const value = frontmatter[key];
  return typeof value === "boolean" ? value : undefined;
}

function extractSection(body: string, title: string) {
  const lines = body.split("\n");
  const startIndex = lines.findIndex((line) => line.trim() === `## ${title}`);

  if (startIndex < 0) {
    return "";
  }

  const collected: string[] = [];
  for (let index = startIndex + 1; index < lines.length; index += 1) {
    if (lines[index].startsWith("## ")) {
      break;
    }
    collected.push(lines[index]);
  }

  return collected.join("\n").trim();
}

function extractBulletItems(section: string) {
  return section
    .split("\n")
    .map((line) => line.match(/^- (.+)$/)?.[1]?.trim())
    .filter((item): item is string => Boolean(item));
}

function extractLinks(section: string): PromotionInternalLink[] {
  const links: PromotionInternalLink[] = [];
  const regex = /^- \[([^\]]+)\]\(([^)]+)\)(?: - (.+))?$/gm;
  let match = regex.exec(section);

  while (match) {
    const [, label, href, reason] = match;
    links.push({
      label,
      href,
      reason,
      type: href.startsWith("/tools/") ? "tool" : "guide"
    });
    match = regex.exec(section);
  }

  return links;
}

function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toConstName(slug: string) {
  return `${slug
    .split("-")
    .map((part, index) => (index === 0 ? part : `${part[0]?.toUpperCase() ?? ""}${part.slice(1)}`))
    .join("")}Guide`;
}

function toToolSlug(href: string) {
  const prefix = "/tools/";
  return href.startsWith(prefix) ? href.slice(prefix.length) : undefined;
}

function unique<T>(items: T[]) {
  return [...new Set(items)];
}

function inferText(candidate: GuidePromotionCandidate) {
  return `${candidate.title ?? ""} ${candidate.slug ?? ""} ${candidate.category ?? ""} ${candidate.metaDescription ?? ""}`.toLowerCase();
}

function inferPrimaryEcosystem(candidate: GuidePromotionCandidate): GuideEcosystemSlug {
  const text = inferText(candidate);

  if (text.includes("carpet")) {
    return "carpet-padding";
  }

  if (text.includes("sheet vinyl")) {
    return "sheet-vinyl";
  }

  if (text.includes("lvt") || text.includes("luxury vinyl tile")) {
    return "lvt";
  }

  if (text.includes("lvp") || text.includes("vinyl plank") || text.includes("luxury vinyl plank")) {
    return "lvp";
  }

  if (text.includes("laminate")) {
    return "laminate";
  }

  if (text.includes("hardwood") || text.includes("engineered wood")) {
    return "hardwood-engineered-hardwood";
  }

  if (text.includes("tile") || text.includes("ceramic") || text.includes("porcelain") || text.includes("stone")) {
    return "tile";
  }

  return "planning-measuring-transitions";
}

function inferTopicCluster(candidate: GuidePromotionCandidate): TopicCluster {
  const text = inferText(candidate);

  if (text.includes("waste")) return "waste";
  if (text.includes("transition") || text.includes("t-mold") || text.includes("reducer")) return "transitions";
  if (text.includes("flatness") || text.includes("subfloor") || text.includes("underlayment")) return "subfloor-prep";
  if (text.includes("direction") || text.includes("layout") || text.includes("seam")) return "layout";
  if (text.includes("stair")) return "stairs";
  if (text.includes("radiant")) return "radiant-heat";
  if (text.includes("dog") || text.includes("pet")) return "pets";
  if (text.includes("repair") || text.includes("extra flooring") || text.includes("attic stock")) return "repairs";
  if (text.includes("glue") || text.includes("floating")) return "installation-method";

  return "measurement";
}

function inferMaterialTypes(candidate: GuidePromotionCandidate): MaterialType[] {
  const text = inferText(candidate);
  const materialTypes: MaterialType[] = [];

  if (text.includes("lvp") || text.includes("vinyl plank") || text.includes("luxury vinyl plank")) materialTypes.push("lvp");
  if (text.includes("lvt") || text.includes("luxury vinyl tile")) materialTypes.push("lvt");
  if (text.includes("laminate")) materialTypes.push("laminate");
  if (text.includes("hardwood")) materialTypes.push("hardwood", "engineered-hardwood");
  if (text.includes("tile") || text.includes("ceramic")) materialTypes.push("ceramic-tile", "porcelain-tile");
  if (text.includes("stone")) materialTypes.push("stone-tile");
  if (text.includes("sheet vinyl")) materialTypes.push("sheet-vinyl");
  if (text.includes("carpet")) materialTypes.push("carpet");
  if (text.includes("transition") || text.includes("t-mold") || text.includes("reducer")) materialTypes.push("transitions");

  return unique(materialTypes);
}

function buildCandidate(frontmatter: Frontmatter, body: string): GuidePromotionCandidate {
  const relatedCalculatorLinks = extractLinks(extractSection(body, "Related Calculator Links"));
  const internalLinks = extractLinks(extractSection(body, "Internal Link Suggestions"));
  const headings = extractBulletItems(extractSection(body, "Suggested H2s"));
  const faqItems = extractBulletItems(extractSection(body, "FAQ Ideas")).map((question) => ({ question }));
  const relatedTools = unique(
    relatedCalculatorLinks.map((link) => toToolSlug(link.href)).filter((slug): slug is string => Boolean(slug))
  );
  const metaDescription = getString(frontmatter, "metaDescription");

  return {
    title: getString(frontmatter, "title"),
    slug: getString(frontmatter, "slug"),
    metaTitle: getString(frontmatter, "metaTitle"),
    metaDescription,
    excerpt: getString(frontmatter, "excerpt") ?? metaDescription,
    category: getString(frontmatter, "category"),
    headings,
    faqItems,
    relatedTools,
    internalLinks,
    disclaimer: extractSection(body, "Disclaimer To Include"),
    status: getString(frontmatter, "status"),
    draft: getBoolean(frontmatter, "draft")
  };
}

function renderTsSnippet(candidate: GuidePromotionCandidate) {
  const title = candidate.title ?? "";
  const slug = candidate.slug ?? "";
  const constName = toConstName(slug);
  const date = new Date().toISOString().slice(0, 10);
  const sections = candidate.headings ?? [];
  const faqs = candidate.faqItems ?? [];
  const primaryEcosystem = inferPrimaryEcosystem(candidate);
  const topicCluster = inferTopicCluster(candidate);
  const materialTypes = inferMaterialTypes(candidate);

  return `import type { Guide } from "../../data/types";

type PromotionGuideSnippet = Omit<Guide, "slug"> & {
  slug: string;
};

// Promotion preview generated from content/drafts/${slug}.md.
// Manual review is still required before adding this to data/guides.ts.
// When publishing, add the final slug to GuideSlug in data/types.ts if it is a new live route.
// Editorial category: ${candidate.category ?? "review-required"}

export const ${constName}: PromotionGuideSnippet = {
  slug: ${JSON.stringify(slug)},
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(candidate.excerpt ?? "")},
  metadataTitle: ${JSON.stringify(candidate.metaTitle ?? "")},
  metadataDescription: ${JSON.stringify(candidate.metaDescription ?? "")},
  dateModified: ${JSON.stringify(date)},
  readTime: "Review before publishing",
  primaryEcosystem: ${JSON.stringify(primaryEcosystem)},
  secondaryEcosystems: ${JSON.stringify(primaryEcosystem === "planning-measuring-transitions" ? [] : ["planning-measuring-transitions"])},
  materialTypes: ${JSON.stringify(materialTypes, null, 2)},
  topicCluster: ${JSON.stringify(topicCluster)},
  relatedTools: ${JSON.stringify(candidate.relatedTools ?? [], null, 2)},
  sections: ${JSON.stringify(
    sections.map((heading) => ({
      id: slugifyHeading(heading),
      title: heading,
      paragraphs: [
        "TODO: Replace this placeholder with reviewed, original guide copy before adding this entry to data/guides.ts."
      ]
    })),
    null,
    2
  )},
  faq: ${JSON.stringify(
    faqs.map((item) => ({
      question: item.question,
      answer: "TODO: Add a reviewed answer before publishing."
    })),
    null,
    2
  )},
  disclaimer: ${JSON.stringify(candidate.disclaimer ?? "")}
};
`;
}

function renderMarkdownPreview(candidate: GuidePromotionCandidate, validation: ReturnType<typeof validateGuideContent>) {
  const errors = validation.errors.length
    ? validation.errors.map((issue) => `- ${issue.field}: ${issue.message}`).join("\n")
    : "- None";
  const warnings = validation.warnings.length
    ? validation.warnings.map((issue) => `- ${issue.field}: ${issue.message}`).join("\n")
    : "- None";

  return `# Promotion Preview: ${candidate.title}

Status: NOT PUBLISHED

This file is a manual editorial promotion preview. It does not publish content and it does not modify live guide data.

## Validation

Valid: ${validation.valid ? "yes" : "no"}

### Errors

${errors}

### Warnings

${warnings}

## Guide Fields

- Slug: ${candidate.slug}
- Meta title: ${candidate.metaTitle}
- Meta description: ${candidate.metaDescription}
- Excerpt: ${candidate.excerpt}
- Category: ${candidate.category}
- Related tools: ${candidate.relatedTools?.join(", ") || "None"}

## Internal Links

${candidate.internalLinks?.map((link) => `- [${link.label}](${link.href}) - ${link.reason ?? "Review placement."}`).join("\n") || "- None"}

## Editorial Checklist

${renderEditorialChecklistMarkdown()}

## Manual Next Step

Review the TypeScript snippet next to this preview. Replace placeholder section copy and FAQ answers with reviewed guide content before manually adding the entry to data/guides.ts.
`;
}

async function main() {
  const slug = getArgValue("slug");

  if (!slug) {
    console.error("Missing required draft slug. Example: npm run promote:draft -- --slug lvp-waste-percentage");
    process.exitCode = 1;
    return;
  }

  const draftPath = path.join(draftsDir, `${slug}.md`);
  const draft = await readFile(draftPath, "utf8");
  const { frontmatter, body } = parseFrontmatter(draft);
  const candidate = buildCandidate(frontmatter, body);
  const validation = validateGuideContent(candidate, {
    existingGuideSlugs: guides.map((guide) => guide.slug)
  });

  if (!validation.valid) {
    console.error(`Draft "${slug}" is not ready for promotion preview.`);
    for (const issue of validation.errors) {
      console.error(`- ${issue.field}: ${issue.message}`);
    }
    process.exitCode = 1;
    return;
  }

  await mkdir(promotedDir, { recursive: true });
  const tsPath = path.join(promotedDir, `${slug}.guide-snippet.ts`);
  const previewPath = path.join(promotedDir, `${slug}.promotion-preview.md`);
  await writeFile(tsPath, renderTsSnippet(candidate), "utf8");
  await writeFile(previewPath, renderMarkdownPreview(candidate, validation), "utf8");

  console.log(`Promotion preview created for "${slug}".`);
  console.log(`- ${path.relative(projectRoot, previewPath)}`);
  console.log(`- ${path.relative(projectRoot, tsPath)}`);
  if (validation.warnings.length > 0) {
    console.log("Warnings:");
    for (const issue of validation.warnings) {
      console.log(`- ${issue.field}: ${issue.message}`);
    }
  }
  console.log("Manual review required. This script did not modify data/guides.ts.");
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
