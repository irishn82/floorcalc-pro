export type FAQItem = {
  question: string;
  answer: string;
};

export type ToolSlug =
  | "flooring-square-footage-calculator"
  | "waste-calculator"
  | "stair-flooring-calculator"
  | "carpet-seam-planner"
  | "pattern-repeat-calculator"
  | "transition-estimator";

export type CalculatorType =
  | "square-footage"
  | "waste"
  | "stairs"
  | "carpet-seam"
  | "pattern-repeat"
  | "transition";

export type Tool = {
  slug: ToolSlug;
  title: string;
  shortTitle: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  calculatorType: CalculatorType;
  formula: string;
  notes: string[];
  faq: FAQItem[];
  relatedTools: ToolSlug[];
};

export type GuideSlug =
  | "how-much-flooring-do-i-need"
  | "lvp-waste-percentage-guide"
  | "carpet-seam-direction-guide"
  | "flooring-transition-guide"
  | "best-flooring-for-dogs"
  | "luxury-vinyl-over-tile"
  | "flooring-over-radiant-heat";

export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Guide = {
  slug: GuideSlug;
  title: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  dateModified: string;
  readTime: string;
  sections: GuideSection[];
  faq: FAQItem[];
  relatedTools: ToolSlug[];
  disclaimer?: string;
};
