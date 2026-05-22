export type PromotionFaqItem = {
  question: string;
  answer?: string;
};

export type PromotionInternalLink = {
  label: string;
  href: string;
  reason?: string;
  type?: "tool" | "guide";
};

export type GuidePromotionCandidate = {
  title?: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt?: string;
  category?: string;
  headings?: string[];
  faqItems?: PromotionFaqItem[];
  relatedTools?: string[];
  internalLinks?: PromotionInternalLink[];
  disclaimer?: string;
  status?: string;
  draft?: boolean;
};

export type ValidationIssue = {
  field: string;
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
};

type GuideContentValidationOptions = {
  existingGuideSlugs?: string[];
};

function isBlank(value: unknown) {
  return typeof value !== "string" || value.trim().length === 0;
}

function hasItems<T>(items: T[] | undefined) {
  return Array.isArray(items) && items.length > 0;
}

function normalizeStatus(status: string | undefined) {
  return status?.trim().toLowerCase();
}

export function validateGuideContent(
  candidate: GuidePromotionCandidate,
  options: GuideContentValidationOptions = {}
): ValidationResult {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];

  if (isBlank(candidate.title)) {
    errors.push({ field: "title", message: "A reviewed guide title is required." });
  }

  if (isBlank(candidate.slug)) {
    errors.push({ field: "slug", message: "A stable guide slug is required." });
  }

  if (!isBlank(candidate.slug) && options.existingGuideSlugs?.includes(candidate.slug as string)) {
    errors.push({ field: "slug", message: `The slug "${candidate.slug}" already exists in live guide data.` });
  }

  if (isBlank(candidate.metaTitle)) {
    errors.push({ field: "metaTitle", message: "A reviewed SEO meta title is required." });
  }

  if (isBlank(candidate.metaDescription)) {
    errors.push({ field: "metaDescription", message: "A reviewed SEO meta description is required." });
  } else {
    const length = candidate.metaDescription?.trim().length ?? 0;
    if (length < 140 || length > 160) {
      warnings.push({
        field: "metaDescription",
        message: `Meta description is ${length} characters; target roughly 140-160 characters.`
      });
    }
  }

  if (isBlank(candidate.excerpt)) {
    errors.push({ field: "excerpt", message: "A short reader-facing excerpt is required." });
  }

  if (isBlank(candidate.category)) {
    errors.push({ field: "category", message: "A guide category is required for editorial organization." });
  }

  if (!hasItems(candidate.headings)) {
    errors.push({ field: "headings", message: "At least one reviewed H2 heading is required." });
  }

  if (!hasItems(candidate.faqItems)) {
    errors.push({ field: "faqItems", message: "At least one FAQ item is required." });
  } else if (candidate.faqItems?.some((item) => isBlank(item.question))) {
    errors.push({ field: "faqItems", message: "FAQ items must include non-empty questions." });
  }

  if (!hasItems(candidate.relatedTools)) {
    errors.push({ field: "relatedTools", message: "At least one related calculator/tool link is required." });
  }

  if (!hasItems(candidate.internalLinks)) {
    errors.push({ field: "internalLinks", message: "At least one internal link suggestion is required." });
  }

  const status = normalizeStatus(candidate.status);
  if (status && ["live", "published", "active", "ready"].includes(status)) {
    errors.push({ field: "status", message: "Draft content must not be marked live or published during promotion preview." });
  }

  if (candidate.draft === false) {
    errors.push({ field: "draft", message: "Draft content must not set draft: false before manual live promotion." });
  }

  if (isBlank(candidate.disclaimer)) {
    warnings.push({ field: "disclaimer", message: "A disclaimer is strongly recommended before publishing flooring advice." });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}
