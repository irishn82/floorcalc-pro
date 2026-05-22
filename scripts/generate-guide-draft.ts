import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { keywordTopics } from "../data/keywords";
import { buildContentBrief } from "../lib/content/brief-builder";
import type { ContentBrief, InternalLinkSuggestion, KeywordTopic } from "../lib/content/content-types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const draftsDir = path.join(projectRoot, "content", "drafts");

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

  if (positional) {
    return positional;
  }

  return undefined;
}

function yamlString(value: string) {
  return JSON.stringify(value);
}

function yamlArray(values: string[]) {
  if (values.length === 0) {
    return "[]";
  }

  return `\n${values.map((value) => `  - ${yamlString(value)}`).join("\n")}`;
}

function renderLinkList(links: InternalLinkSuggestion[]) {
  if (links.length === 0) {
    return "- No internal links suggested yet.";
  }

  return links.map((link) => `- [${link.label}](${link.href}) - ${link.reason}`).join("\n");
}

function renderBrief(topic: KeywordTopic, brief: ContentBrief) {
  const generatedAt = new Date().toISOString();

  return `---
title: ${yamlString(brief.title)}
slug: ${yamlString(brief.slug)}
status: ${yamlString("NOT PUBLISHED")}
draft: true
sourceKeywordId: ${yamlString(topic.id)}
targetKeyword: ${yamlString(brief.targetKeyword)}
searchIntent: ${yamlString(brief.searchIntent)}
category: ${yamlString(brief.category)}
difficulty: ${yamlString(topic.difficulty)}
priority: ${yamlString(topic.priority)}
metaTitle: ${yamlString(brief.metaTitle)}
metaDescription: ${yamlString(brief.metaDescription)}
relatedKeywords:${yamlArray(topic.relatedKeywords)}
generatedAt: ${yamlString(generatedAt)}
---

# ${brief.title}

> NOT PUBLISHED. This is a local SEO content draft brief for manual editorial review. Do not copy it into a live guide until the facts, recommendations, links, and disclaimers have been reviewed.

## Content Brief

- Target keyword: ${brief.targetKeyword}
- Search intent: ${brief.searchIntent}
- Category: ${brief.category}
- Priority: ${topic.priority}
- Difficulty: ${topic.difficulty}
- Editorial notes: ${brief.notes}

## Meta Draft

- Meta title: ${brief.metaTitle}
- Meta description: ${brief.metaDescription}

## Suggested H2s

${brief.suggestedH2s.map((heading) => `- ${heading}`).join("\n")}

## Draft Outline

Use this section to write the article manually after review.

${brief.suggestedH2s
  .map(
    (heading) => `### ${heading}

- Add practical flooring advice for "${brief.targetKeyword}".
- Include product-specific caveats where needed.
- Link to related calculators or guides when the reader needs the next planning step.`
  )
  .join("\n\n")}

## FAQ Ideas

${brief.faqQuestions.map((question) => `- ${question}`).join("\n")}

## Related Calculator Links

${renderLinkList(brief.relatedCalculatorLinks)}

## Internal Link Suggestions

${renderLinkList(brief.internalLinkSuggestions)}

## Disclaimer To Include

${brief.disclaimerText}

## Manual Review Checklist

- Verify the search intent and title angle.
- Confirm all flooring claims against manufacturer or installer requirements where appropriate.
- Replace outline bullets with original article copy.
- Check related calculator links and guide links.
- Add real examples only when they are accurate and useful.
- Keep the estimate disclaimer visible before publishing.
`;
}

async function writeDraft(topic: KeywordTopic) {
  const brief = buildContentBrief(topic);
  const filePath = path.join(draftsDir, `${brief.slug}.md`);
  await writeFile(filePath, renderBrief(topic, brief), "utf8");
  return filePath;
}

async function main() {
  const slug = getArgValue("slug");
  const topics = slug ? keywordTopics.filter((topic) => topic.slug === slug) : keywordTopics;

  if (slug && topics.length === 0) {
    console.error(`No keyword topic found for slug "${slug}".`);
    process.exitCode = 1;
    return;
  }

  await mkdir(draftsDir, { recursive: true });
  const written = await Promise.all(topics.map(writeDraft));

  console.log(`Generated ${written.length} draft${written.length === 1 ? "" : "s"} in content/drafts:`);
  for (const filePath of written) {
    console.log(`- ${path.relative(projectRoot, filePath)}`);
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
