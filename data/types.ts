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
  flooringSystem: string;
  metadataTitle: string;
  metadataDescription: string;
  calculatorType: CalculatorType;
  formula: string;
  notes: string[];
  faq: FAQItem[];
  relatedTools: ToolSlug[];
};

export type GuideEcosystemSlug =
  | "lvp"
  | "lvt"
  | "laminate"
  | "hardwood-engineered-hardwood"
  | "tile"
  | "sheet-vinyl"
  | "carpet-padding"
  | "planning-measuring-transitions";

export type MaterialType =
  | "lvp"
  | "lvt"
  | "laminate"
  | "hardwood"
  | "engineered-hardwood"
  | "ceramic-tile"
  | "porcelain-tile"
  | "stone-tile"
  | "sheet-vinyl"
  | "carpet"
  | "carpet-padding"
  | "transitions";

export type TopicCluster =
  | "measurement"
  | "waste"
  | "layout"
  | "subfloor-prep"
  | "transitions"
  | "stairs"
  | "radiant-heat"
  | "pets"
  | "repairs"
  | "installation-method";

export type GuideSlug =
  | "how-much-flooring-do-i-need"
  | "lvp-waste-percentage-guide"
  | "carpet-seam-direction-guide"
  | "flooring-transition-guide"
  | "best-flooring-for-dogs"
  | "luxury-vinyl-over-tile"
  | "flooring-over-radiant-heat"
  | "which-direction-should-flooring-run"
  | "glue-down-vs-floating-floor"
  | "subfloor-flatness-requirements-lvp"
  | "how-much-extra-flooring-should-i-keep"
  | "t-mold-vs-reducer-vs-end-cap"
  | "best-underlayment-for-lvp"
  | "can-you-install-lvp-over-concrete"
  | "how-long-should-lvp-acclimate"
  | "why-is-my-lvp-floor-clicking"
  | "can-you-install-cabinets-over-floating-lvp"
  | "best-underlayment-for-laminate-flooring"
  | "can-laminate-flooring-be-waterproof"
  | "why-is-my-laminate-floor-separating"
  | "how-flat-should-a-subfloor-be-for-laminate"
  | "laminate-vs-lvp-for-pets"
  | "solid-hardwood-vs-engineered-hardwood"
  | "how-long-should-hardwood-acclimate"
  | "can-engineered-hardwood-go-over-concrete"
  | "why-is-my-hardwood-floor-cupping"
  | "best-hardwood-flooring-for-dogs"
  | "carpet-padding-thickness-guide"
  | "what-direction-should-carpet-run"
  | "what-is-pattern-match-in-carpet"
  | "can-carpet-be-installed-over-concrete"
  | "how-much-extra-carpet-should-i-order"
  | "porcelain-vs-ceramic-tile"
  | "how-flat-should-a-floor-be-for-tile"
  | "can-you-install-tile-over-tile"
  | "what-size-grout-line-should-i-use"
  | "tile-layout-planning-guide";

export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export type Guide = {
  slug: GuideSlug;
  title: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  dateModified: string;
  readTime: string;
  primaryEcosystem: GuideEcosystemSlug;
  secondaryEcosystems?: GuideEcosystemSlug[];
  materialTypes?: MaterialType[];
  topicCluster?: TopicCluster;
  sections: GuideSection[];
  faq: FAQItem[];
  relatedTools: ToolSlug[];
  relatedGuides?: GuideSlug[];
  disclaimer?: string;
};
