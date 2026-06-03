import type { GuideSlug, ToolSlug } from "@/data/types";

export type ProblemSymptomLink = {
  label: string;
  href: string;
  description: string;
};

export type ProblemBrowseSection = {
  slug: string;
  title: string;
  description: string;
  guideSlugs: GuideSlug[];
  toolSlugs: ToolSlug[];
};

export const problemSymptomLinks: ProblemSymptomLink[] = [
  {
    label: "Clicking",
    href: "/guides/why-is-my-floor-clicking",
    description: "Start here for repeated clicks, snaps, or joint noise."
  },
  {
    label: "Separating",
    href: "/guides/why-are-my-flooring-joints-opening",
    description: "Check opening joints, gaps, and separation patterns."
  },
  {
    label: "Buckling",
    href: "/guides/why-is-my-laminate-floor-buckling",
    description: "Review raised areas, moisture, and trapped expansion."
  },
  {
    label: "Lifting",
    href: "/guides/why-is-my-lvp-lifting",
    description: "Look at loose planks, adhesive release, and expansion pressure."
  },
  {
    label: "Peaking",
    href: "/guides/why-is-my-lvp-floor-peaking",
    description: "Troubleshoot raised seams or ridges in floating floors."
  },
  {
    label: "Squeaking",
    href: "/guides/why-is-my-floor-squeaking",
    description: "Narrow down subfloor movement, fasteners, and wood movement."
  },
  {
    label: "Gapping",
    href: "/guides/why-is-my-hardwood-floor-gapping",
    description: "Understand seasonal gaps and moisture-related movement."
  },
  {
    label: "Swelling",
    href: "/guides/why-is-my-floor-swelling",
    description: "Check moisture, humidity, leaks, and wet subfloors."
  },
  {
    label: "Moisture",
    href: "/guides/flooring-moisture-problems",
    description: "Browse swelling, cupping, slab moisture, and humidity issues."
  },
  {
    label: "Concrete slab",
    href: "/guides/concrete-slab-flooring-guide",
    description: "Start with slab moisture, cracks, flatness, and compatibility."
  },
  {
    label: "Carpet seams",
    href: "/guides/why-are-my-carpet-seams-visible",
    description: "Review seam visibility, roll width, pattern match, and lighting."
  }
];

export const problemBrowseSections: ProblemBrowseSection[] = [
  {
    slug: "movement",
    title: "Movement Problems",
    description:
      "Use these guides when a floor clicks, squeaks, bounces, lifts, buckles, peaks, separates, gaps, or sounds hollow.",
    guideSlugs: [
      "flooring-movement-problems",
      "flooring-separation-problems",
      "why-is-my-floor-clicking",
      "why-is-my-floor-squeaking",
      "why-is-my-floor-bouncing",
      "why-is-my-lvp-lifting",
      "why-is-my-lvp-floor-buckling",
      "why-is-my-lvp-floor-peaking",
      "why-are-my-flooring-joints-opening",
      "why-is-my-hardwood-floor-gapping",
      "why-does-my-floor-feel-hollow"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "moisture",
    title: "Moisture Problems",
    description:
      "Start here for swelling, concrete moisture, moisture under flooring, cupping, crowning, moisture testing, and high humidity.",
    guideSlugs: [
      "flooring-moisture-problems",
      "concrete-floor-problems",
      "flooring-separation-problems",
      "why-is-my-floor-swelling",
      "why-is-my-subfloor-wet",
      "can-moisture-come-through-concrete",
      "signs-of-moisture-damage-under-flooring",
      "why-is-my-hardwood-floor-cupping",
      "why-is-my-hardwood-floor-crowning",
      "how-to-test-concrete-moisture",
      "can-high-humidity-damage-flooring"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator"]
  },
  {
    slug: "concrete",
    title: "Concrete Slab Problems",
    description:
      "Review flooring over concrete, moisture through slabs, cracks, underlayment, vapor barriers, and flooring failures over concrete.",
    guideSlugs: [
      "concrete-floor-problems",
      "concrete-slab-flooring-guide",
      "can-engineered-hardwood-go-over-concrete",
      "can-you-install-lvp-over-concrete",
      "can-moisture-come-through-concrete",
      "concrete-slab-cracks-under-flooring",
      "best-underlayment-for-concrete-floors",
      "moisture-barrier-engineered-hardwood-over-concrete",
      "why-flooring-fails-over-concrete"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "lvp",
    title: "LVP Problems",
    description:
      "Troubleshoot LVP clicking, lifting, peaking, buckling, separating, visible seams, subfloor support, and floating-floor movement.",
    guideSlugs: [
      "flooring-separation-problems",
      "why-is-my-lvp-floor-clicking",
      "why-is-my-lvp-lifting",
      "why-is-my-lvp-floor-peaking",
      "why-is-my-lvp-floor-buckling",
      "why-is-my-lvp-floor-separating",
      "why-are-my-lvp-seams-showing",
      "subfloor-flatness-requirements-lvp",
      "can-you-install-lvp-over-concrete"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "laminate",
    title: "Laminate Problems",
    description:
      "Use these guides for laminate separating, buckling, clicking, underlayment questions, flatness issues, and moisture or humidity concerns.",
    guideSlugs: [
      "flooring-separation-problems",
      "why-is-my-laminate-floor-separating",
      "why-is-my-laminate-floor-buckling",
      "laminate-floor-separating-what-to-check-first",
      "why-is-my-floor-clicking",
      "best-underlayment-for-laminate-flooring",
      "how-flat-should-a-subfloor-be-for-laminate",
      "can-laminate-flooring-be-waterproof",
      "moisture-level-too-high-for-flooring"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "hardwood",
    title: "Hardwood Problems",
    description:
      "Browse acclimation, gapping, cupping, crowning, engineered hardwood separation, concrete installs, and moisture-related hardwood movement.",
    guideSlugs: [
      "flooring-separation-problems",
      "flooring-moisture-problems",
      "how-long-should-hardwood-acclimate",
      "hardwood-acclimation-mistakes",
      "why-is-my-hardwood-floor-gapping",
      "why-is-my-hardwood-floor-cupping",
      "why-is-my-hardwood-floor-crowning",
      "why-is-my-engineered-hardwood-separating",
      "can-engineered-hardwood-go-over-concrete",
      "hardwood-installation-humidity"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator"]
  },
  {
    slug: "carpet",
    title: "Carpet Problems",
    description:
      "Plan around visible seams, wrinkles, buckling, pattern match, carpet over concrete, padding choices, and roll-width layout issues.",
    guideSlugs: [
      "why-are-my-carpet-seams-visible",
      "why-is-my-carpet-wrinkling-or-buckling",
      "what-is-pattern-match-in-carpet",
      "can-carpet-be-installed-over-concrete",
      "carpet-padding-thickness-guide",
      "carpet-seam-direction-guide",
      "what-direction-should-carpet-run"
    ],
    toolSlugs: ["carpet-seam-planner", "pattern-repeat-calculator", "flooring-square-footage-calculator"]
  },
  {
    slug: "tile",
    title: "Tile Problems",
    description:
      "Check cracked tile, hollow-sounding areas, tile-over-tile conditions, flatness, grout-line planning, and layout concerns.",
    guideSlugs: [
      "why-is-my-tile-cracking",
      "why-does-my-floor-feel-hollow",
      "can-you-install-tile-over-tile",
      "how-flat-should-a-floor-be-for-tile",
      "what-size-grout-line-should-i-use",
      "tile-layout-planning-guide",
      "concrete-slab-cracks-under-flooring"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "transitions-planning",
    title: "Transitions / Planning Problems",
    description:
      "Use these guides for transition strips, T-molds, reducers, flooring direction, waste planning, stair planning, and material estimating.",
    guideSlugs: [
      "why-is-my-transition-strip-moving",
      "t-mold-vs-reducer-vs-end-cap",
      "flooring-transition-guide",
      "which-direction-should-flooring-run",
      "flooring-direction-mistakes",
      "lvp-waste-percentage-guide",
      "how-much-flooring-do-i-need"
    ],
    toolSlugs: [
      "transition-estimator",
      "waste-calculator",
      "stair-flooring-calculator",
      "flooring-square-footage-calculator"
    ]
  }
];

export const relatedProblemGuideSlugs: Partial<Record<GuideSlug, GuideSlug[]>> = {
  "flooring-separation-problems": [
    "why-is-my-laminate-floor-separating",
    "why-is-my-lvp-floor-separating",
    "why-is-my-engineered-hardwood-separating",
    "why-are-my-flooring-joints-opening"
  ],
  "concrete-floor-problems": [
    "how-to-test-concrete-moisture",
    "why-flooring-fails-over-concrete",
    "concrete-slab-cracks-under-flooring",
    "why-is-moisture-coming-through-my-slab"
  ],
  "flooring-moisture-problems": [
    "moisture-level-too-high-for-flooring",
    "how-to-test-concrete-moisture",
    "why-is-my-hardwood-floor-cupping",
    "why-is-my-floor-swelling"
  ],
  "why-is-my-lvp-floor-clicking": [
    "flooring-separation-problems",
    "why-is-my-lvp-lifting",
    "why-is-my-lvp-floor-peaking",
    "why-is-my-lvp-floor-buckling",
    "why-is-my-lvp-floor-separating"
  ],
  "why-is-my-laminate-floor-separating": [
    "flooring-separation-problems",
    "why-is-my-laminate-floor-buckling",
    "why-are-my-flooring-joints-opening",
    "flooring-moisture-problems",
    "how-flat-should-a-subfloor-be-for-laminate"
  ],
  "can-engineered-hardwood-go-over-concrete": [
    "concrete-floor-problems",
    "flooring-separation-problems",
    "how-to-test-concrete-moisture",
    "moisture-barrier-engineered-hardwood-over-concrete",
    "how-long-should-hardwood-acclimate",
    "why-is-my-engineered-hardwood-separating"
  ],
  "carpet-seam-direction-guide": [
    "why-are-my-carpet-seams-visible",
    "what-is-pattern-match-in-carpet",
    "why-is-my-carpet-wrinkling-or-buckling"
  ],
  "why-are-my-carpet-seams-visible": [
    "carpet-seam-direction-guide",
    "what-is-pattern-match-in-carpet",
    "why-is-my-carpet-wrinkling-or-buckling"
  ],
  "what-is-pattern-match-in-carpet": [
    "carpet-seam-direction-guide",
    "why-are-my-carpet-seams-visible",
    "why-is-my-carpet-wrinkling-or-buckling"
  ],
  "why-is-my-tile-cracking": [
    "how-flat-should-a-floor-be-for-tile",
    "why-does-my-floor-feel-hollow",
    "concrete-slab-cracks-under-flooring",
    "can-you-install-tile-over-tile"
  ]
};
