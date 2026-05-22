import type { ToolSlug } from "../../data/types";

export type KeywordDifficulty = "low" | "medium" | "high";

export type KeywordPriority = "low" | "medium" | "high";

export type SearchIntent =
  | "informational"
  | "calculator"
  | "comparison"
  | "commercial"
  | "installation-planning";

export type ContentCategory =
  | "measurement"
  | "waste"
  | "carpet"
  | "transitions"
  | "vinyl"
  | "pets"
  | "radiant-heat"
  | "underlayment"
  | "basement"
  | "bathroom"
  | "kitchen"
  | "comparison"
  | "rental"
  | "subfloor"
  | "stairs";

export type KeywordTopic = {
  id: string;
  primaryKeyword: string;
  slug: string;
  searchIntent: SearchIntent;
  category: ContentCategory;
  difficulty: KeywordDifficulty;
  priority: KeywordPriority;
  relatedKeywords: string[];
  relatedTools: ToolSlug[];
  notes: string;
};

export type InternalLinkSuggestion = {
  label: string;
  href: string;
  reason: string;
  type: "tool" | "guide";
};

export type ContentBrief = {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  searchIntent: SearchIntent;
  category: ContentCategory;
  suggestedH2s: string[];
  faqQuestions: string[];
  relatedCalculatorLinks: InternalLinkSuggestion[];
  internalLinkSuggestions: InternalLinkSuggestion[];
  disclaimerText: string;
  notes: string;
};
