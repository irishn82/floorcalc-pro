import type { GuideSlug, ToolSlug } from "@/data/types";

export const troubleshootingGuideSlugs: GuideSlug[] = [
  "why-is-my-floor-clicking",
  "why-is-my-lvp-floor-clicking",
  "why-is-my-lvp-lifting",
  "why-is-my-lvp-floor-separating",
  "why-is-my-laminate-floor-separating",
  "why-is-my-laminate-floor-buckling",
  "laminate-floor-separating-what-to-check-first",
  "why-is-my-floor-squeaking",
  "why-does-my-floor-feel-hollow",
  "moisture-level-too-high-for-flooring",
  "why-are-my-carpet-seams-visible",
  "why-is-my-carpet-wrinkling-or-buckling",
  "why-is-my-transition-strip-moving",
  "why-is-my-hardwood-floor-cupping",
  "why-is-my-hardwood-floor-gapping",
  "why-is-my-hardwood-floor-crowning",
  "why-is-my-lvp-floor-peaking",
  "why-is-my-tile-cracking"
];

export const toolGuideLinks: Record<ToolSlug, GuideSlug[]> = {
  "flooring-square-footage-calculator": [
    "how-much-flooring-do-i-need",
    "which-direction-should-flooring-run",
    "flooring-direction-mistakes",
    "can-engineered-hardwood-go-over-concrete",
    "best-underlayment-for-concrete-floors",
    "lvp-waste-percentage-guide"
  ],
  "waste-calculator": [
    "lvp-waste-percentage-guide",
    "flooring-direction-mistakes",
    "how-much-extra-flooring-should-i-keep",
    "how-much-extra-carpet-should-i-order",
    "moisture-level-too-high-for-flooring",
    "moisture-barrier-engineered-hardwood-over-concrete"
  ],
  "stair-flooring-calculator": [
    "how-much-flooring-do-i-need",
    "carpet-padding-thickness-guide",
    "t-mold-vs-reducer-vs-end-cap"
  ],
  "carpet-seam-planner": [
    "carpet-seam-direction-guide",
    "why-are-my-carpet-seams-visible",
    "why-is-my-carpet-wrinkling-or-buckling",
    "what-is-pattern-match-in-carpet",
    "what-direction-should-carpet-run"
  ],
  "pattern-repeat-calculator": [
    "what-is-pattern-match-in-carpet",
    "carpet-seam-direction-guide",
    "tile-layout-planning-guide"
  ],
  "transition-estimator": [
    "flooring-transition-guide",
    "t-mold-vs-reducer-vs-end-cap",
    "flooring-direction-mistakes",
    "why-is-my-transition-strip-moving",
    "why-is-my-tile-cracking",
    "why-is-my-lvp-floor-peaking",
    "luxury-vinyl-over-tile"
  ]
};
