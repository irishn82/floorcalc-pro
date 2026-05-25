import type { GuideSlug, ToolSlug } from "@/data/types";

export const troubleshootingGuideSlugs: GuideSlug[] = [
  "why-is-my-floor-clicking",
  "why-is-my-lvp-floor-clicking",
  "why-is-my-lvp-lifting",
  "why-is-my-laminate-floor-separating",
  "laminate-floor-separating-what-to-check-first",
  "why-does-my-floor-feel-hollow",
  "why-are-my-carpet-seams-visible",
  "why-is-my-transition-strip-moving",
  "why-is-my-hardwood-floor-cupping"
];

export const toolGuideLinks: Record<ToolSlug, GuideSlug[]> = {
  "flooring-square-footage-calculator": [
    "how-much-flooring-do-i-need",
    "which-direction-should-flooring-run",
    "flooring-direction-mistakes",
    "can-engineered-hardwood-go-over-concrete",
    "lvp-waste-percentage-guide"
  ],
  "waste-calculator": [
    "lvp-waste-percentage-guide",
    "flooring-direction-mistakes",
    "how-much-extra-flooring-should-i-keep",
    "how-much-extra-carpet-should-i-order",
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
    "luxury-vinyl-over-tile"
  ]
};
