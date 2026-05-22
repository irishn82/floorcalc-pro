import type { Guide } from "../../data/types";

export type QaSeverity = "pass" | "warn" | "fail";

export type QaIssue = {
  id: string;
  severity: Exclude<QaSeverity, "pass">;
  message: string;
  recommendation: string;
};

export type QaRuleResult = {
  id: string;
  label: string;
  severity: QaSeverity;
  message: string;
  recommendation?: string;
};

export type QaPromotedGuide = {
  sourceFile: string;
  rawText: string;
  slug?: string;
  title?: string;
  description?: string;
  metadataTitle?: string;
  metadataDescription?: string;
  category?: string;
  relatedTools: string[];
  sections: Array<{
    id?: string;
    title?: string;
    paragraphs: string[];
  }>;
  faq: Array<{
    question?: string;
    answer?: string;
  }>;
  disclaimer?: string;
  internalLinks: string[];
  status?: string;
  draft?: boolean;
};

export type QaScanContext = {
  liveGuides: Guide[];
};

export type QaScanResult = {
  fileName: string;
  slug: string;
  status: QaSeverity;
  results: QaRuleResult[];
  failCount: number;
  warnCount: number;
};

function isBlank(value: unknown) {
  return typeof value !== "string" || value.trim().length === 0;
}

function hasTodo(value: string | undefined) {
  return Boolean(value && /\bTODO\b|placeholder|Replace this placeholder/i.test(value));
}

function pass(id: string, label: string, message: string): QaRuleResult {
  return { id, label, severity: "pass", message };
}

function warn(id: string, label: string, message: string, recommendation: string): QaRuleResult {
  return { id, label, severity: "warn", message, recommendation };
}

function fail(id: string, label: string, message: string, recommendation: string): QaRuleResult {
  return { id, label, severity: "fail", message, recommendation };
}

function uniqueDuplicateValues(values: string[]) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) {
      duplicates.add(value);
    }
    seen.add(value);
  }

  return [...duplicates];
}

export function runPromotedGuideQaRules(guide: QaPromotedGuide, context: QaScanContext): QaScanResult {
  const results: QaRuleResult[] = [];
  const allBodyText = [
    guide.title,
    guide.description,
    guide.metadataTitle,
    guide.metadataDescription,
    guide.disclaimer,
    ...guide.sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...guide.faq.flatMap((item) => [item.question, item.answer])
  ]
    .filter((value): value is string => Boolean(value))
    .join("\n");

  results.push(
    hasTodo(allBodyText)
      ? fail("todo-placeholders", "TODO placeholders", "TODO or placeholder copy is still present.", "Replace all placeholder body copy and FAQ answers before publishing.")
      : pass("todo-placeholders", "TODO placeholders", "No TODO placeholders found.")
  );

  const emptyFaqAnswers = guide.faq.filter((item) => isBlank(item.answer) || hasTodo(item.answer)).length;
  results.push(
    emptyFaqAnswers > 0
      ? fail("empty-faq-answers", "FAQ answers", `${emptyFaqAnswers} FAQ answer(s) are empty or placeholder text.`, "Write reviewed answers for every FAQ item.")
      : pass("empty-faq-answers", "FAQ answers", "FAQ answers are present.")
  );

  const shortSections = guide.sections.filter((section) => section.paragraphs.join(" ").trim().length < 240);
  results.push(
    shortSections.length > 0
      ? warn("short-sections", "Section depth", `${shortSections.length} section(s) look too short for publication.`, "Expand sections with practical flooring advice, examples, and caveats.")
      : pass("short-sections", "Section depth", "Sections have enough body copy for a first review.")
  );

  results.push(
    isBlank(guide.disclaimer)
      ? fail("missing-disclaimer", "Disclaimer", "No disclaimer found.", "Add a clear disclaimer about estimates, product requirements, and installer/manufacturer verification.")
      : pass("missing-disclaimer", "Disclaimer", "Disclaimer is present.")
  );

  const hasCalculatorLink = guide.relatedTools.length > 0 || guide.internalLinks.some((href) => href.startsWith("/tools/"));
  const hasInternalLink = guide.internalLinks.length > 0;
  results.push(
    !hasCalculatorLink || !hasInternalLink
      ? fail("missing-links", "Calculator/internal links", "Missing calculator links or internal links.", "Include at least one related calculator and at least one internal link suggestion.")
      : pass("missing-links", "Calculator/internal links", "Calculator and internal links are present.")
  );

  const duplicateLinks = uniqueDuplicateValues(guide.internalLinks);
  results.push(
    duplicateLinks.length > 0
      ? warn("duplicate-internal-links", "Duplicate internal links", `Duplicate links found: ${duplicateLinks.join(", ")}.`, "Remove repeated links unless repetition is intentional and useful.")
      : pass("duplicate-internal-links", "Duplicate internal links", "No duplicate internal links found.")
  );

  results.push(
    isBlank(guide.metadataTitle) || (guide.metadataTitle?.trim().length ?? 0) < 20
      ? warn("weak-meta-title", "Meta title", "Meta title is missing or too short.", "Write a specific meta title that reflects the reviewed guide.")
      : pass("weak-meta-title", "Meta title", "Meta title looks usable.")
  );

  const metaDescriptionLength = guide.metadataDescription?.trim().length ?? 0;
  const weakMetaDescription = metaDescriptionLength < 80;
  results.push(
    isBlank(guide.metadataDescription) || weakMetaDescription
      ? fail("weak-meta-description", "Meta description", "Meta description is missing or too weak.", "Write a specific reader-facing meta description before publishing.")
      : pass("weak-meta-description", "Meta description", "Meta description is present.")
  );

  results.push(
    metaDescriptionLength < 140 || metaDescriptionLength > 160
      ? warn("meta-description-length", "Meta description length", `Meta description is ${metaDescriptionLength} characters; target 140-160.`, "Adjust length while keeping the description accurate.")
      : pass("meta-description-length", "Meta description length", "Meta description is within the 140-160 character target.")
  );

  const duplicateSlug = Boolean(guide.slug && context.liveGuides.some((liveGuide) => liveGuide.slug === guide.slug));
  results.push(
    duplicateSlug
      ? fail("duplicate-live-slug", "Duplicate live slug", `Slug "${guide.slug}" already exists in live guide data.`, "Choose a unique slug or intentionally update the existing guide manually.")
      : pass("duplicate-live-slug", "Duplicate live slug", "Slug is not currently live.")
  );

  results.push(
    isBlank(guide.category)
      ? fail("missing-category", "Category", "No editorial category found.", "Keep the category comment or add category metadata to the promoted snippet.")
      : pass("missing-category", "Category", "Category is present.")
  );

  results.push(
    isBlank(guide.description)
      ? fail("missing-excerpt", "Excerpt", "Description/excerpt is missing.", "Add a concise excerpt for the guide card and page intro.")
      : pass("missing-excerpt", "Excerpt", "Excerpt is present.")
  );

  results.push(
    guide.relatedTools.length === 0
      ? fail("missing-related-tools", "Related tools", "No related tools found.", "Connect the guide to at least one calculator.")
      : pass("missing-related-tools", "Related tools", "Related tools are present.")
  );

  results.push(
    guide.sections.length === 0 || guide.sections.every((section) => section.paragraphs.join(" ").trim().length === 0)
      ? fail("missing-article-body", "Article body", "No article body sections found.", "Add reviewed sections before publishing.")
      : pass("missing-article-body", "Article body", "Article body sections are present.")
  );

  const statusLooksLive = /status:\s*["']?(live|published|active|ready)["']?/i.test(guide.rawText);
  const draftFalse = /draft:\s*false/i.test(guide.rawText);
  results.push(
    statusLooksLive || draftFalse
      ? fail("draft-live-status", "Draft/live status", "Snippet appears to be marked live, published, ready, or draft false.", "Keep promoted snippets in manual review state until live data is edited intentionally.")
      : pass("draft-live-status", "Draft/live status", "No accidental live status found.")
  );

  const failCount = results.filter((result) => result.severity === "fail").length;
  const warnCount = results.filter((result) => result.severity === "warn").length;

  return {
    fileName: guide.sourceFile,
    slug: guide.slug ?? "unknown-slug",
    status: failCount > 0 ? "fail" : warnCount > 0 ? "warn" : "pass",
    results,
    failCount,
    warnCount
  };
}
