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
  | "how-to-fix-laminate-floor-separation"
  | "laminate-floor-not-clicking-together"
  | "why-is-my-laminate-floor-not-laying-flat"
  | "laminate-floor-separation-repair-guide"
  | "how-flat-should-a-subfloor-be-for-laminate"
  | "laminate-vs-lvp-for-pets"
  | "solid-hardwood-vs-engineered-hardwood"
  | "how-long-should-hardwood-acclimate"
  | "can-engineered-hardwood-go-over-concrete"
  | "moisture-barrier-engineered-hardwood-over-concrete"
  | "floating-vs-glue-down-engineered-hardwood-over-concrete"
  | "hardwood-acclimation-mistakes"
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
  | "tile-layout-planning-guide"
  | "why-is-my-floor-clicking"
  | "why-are-my-carpet-seams-visible"
  | "why-is-my-lvp-lifting"
  | "why-is-my-lvp-floor-separating"
  | "why-is-my-laminate-floor-buckling"
  | "why-wont-my-laminate-floor-click-together"
  | "why-is-my-hardwood-floor-gapping"
  | "why-is-my-carpet-wrinkling-or-buckling"
  | "why-is-my-tile-cracking"
  | "laminate-floor-separating-what-to-check-first"
  | "flooring-direction-mistakes"
  | "why-is-my-transition-strip-moving"
  | "why-does-my-floor-feel-hollow"
  | "why-is-my-floor-squeaking"
  | "are-bouncy-floors-dangerous"
  | "moisture-level-too-high-for-flooring"
  | "why-is-my-lvp-floor-peaking"
  | "why-is-my-hardwood-floor-crowning"
  | "best-underlayment-for-concrete-floors"
  | "how-to-test-concrete-moisture"
  | "why-flooring-fails-over-concrete"
  | "common-basement-flooring-problems"
  | "why-is-my-floor-bouncing"
  | "why-are-my-flooring-joints-opening"
  | "hardwood-installation-humidity"
  | "why-is-my-engineered-hardwood-separating"
  | "why-is-my-lvp-floor-buckling"
  | "why-are-my-lvp-seams-showing"
  | "why-is-my-floor-swelling"
  | "why-is-my-subfloor-wet"
  | "can-moisture-come-through-concrete"
  | "why-is-my-floor-expanding"
  | "what-happens-if-flooring-is-installed-too-soon"
  | "concrete-slab-flooring-guide"
  | "can-concrete-be-too-dry-for-flooring"
  | "concrete-slab-cracks-under-flooring"
  | "why-is-moisture-coming-through-my-slab"
  | "best-flooring-for-concrete-slabs"
  | "flooring-movement-problems"
  | "why-is-my-floor-moving"
  | "why-do-floors-expand-and-contract"
  | "seasonal-flooring-movement"
  | "what-flooring-movement-is-normal"
  | "flooring-separation-problems"
  | "concrete-floor-problems"
  | "lvp-installation-checklist"
  | "laminate-installation-checklist"
  | "engineered-hardwood-installation-checklist"
  | "tile-installation-checklist"
  | "carpet-installation-checklist"
  | "flooring-moisture-problems"
  | "can-high-humidity-damage-flooring"
  | "ideal-humidity-for-flooring"
  | "signs-of-moisture-damage-under-flooring"
  | "clicking-vs-lifting-flooring"
  | "buckling-vs-peaking-flooring"
  | "cupping-vs-crowning-hardwood"
  | "moisture-vs-acclimation-problems"
  | "flooring-symptom-comparison-guide"
  | "flooring-problem-comparison-guide"
  | "is-floor-clicking-normal"
  | "is-floor-separation-serious"
  | "is-this-flooring-movement-normal"
  | "can-i-keep-installing-laminate"
  | "when-to-stop-floor-installation";

export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  comparisonTable?: {
    columns: string[];
    rows: string[][];
  };
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
