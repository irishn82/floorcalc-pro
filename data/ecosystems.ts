import type { GuideEcosystemSlug, ToolSlug } from "@/data/types";

export type GuideEcosystem = {
  slug: GuideEcosystemSlug;
  title: string;
  shortTitle: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  relatedTools: ToolSlug[];
};

export const guideEcosystems: GuideEcosystem[] = [
  {
    slug: "lvp",
    title: "LVP / Luxury Vinyl Plank",
    shortTitle: "LVP",
    description:
      "Guides for vinyl plank waste, subfloor flatness, over-tile installs, radiant heat, transitions, and layout planning.",
    metadataTitle: "LVP Flooring Guides: Installation, Layout, and Troubleshooting",
    metadataDescription:
      "Practical guides for luxury vinyl plank installation — waste, subfloor prep, over-tile installs, radiant heat compatibility, layout direction, and transitions.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "lvt",
    title: "LVT / Luxury Vinyl Tile",
    shortTitle: "LVT",
    description:
      "Guides for luxury vinyl tile planning, layout, subfloor prep, grout-line concerns, transitions, and waste.",
    metadataTitle: "LVT Flooring Guides: Layout, Subfloor, and Grout Lines",
    metadataDescription:
      "Luxury vinyl tile planning guides for subfloor prep, layout direction, grout-line concerns, transitions, and waste estimates.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "laminate",
    title: "Laminate",
    shortTitle: "Laminate",
    description:
      "Guides for laminate layout, underlayment, subfloor flatness, transitions, waste, and room planning.",
    metadataTitle: "Laminate Flooring Guides: Layout, Underlayment, and Transitions",
    metadataDescription:
      "Guides for laminate flooring projects — measuring, waste, layout direction, underlayment selection, expansion gaps, and transition planning.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "hardwood-engineered-hardwood",
    title: "Hardwood & Engineered Hardwood",
    shortTitle: "Hardwood",
    description:
      "Guides for hardwood layout, acclimation, waste, transitions, subfloor concerns, and repair material planning.",
    metadataTitle: "Hardwood Flooring Guides: Acclimation, Waste, and Installation",
    metadataDescription:
      "Hardwood and engineered hardwood guides for acclimation, waste planning, layout direction, repair stock, transitions, and subfloor conditions.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "tile",
    title: "Tile: Ceramic, Porcelain, Stone",
    shortTitle: "Tile",
    description:
      "Guides for ceramic, porcelain, and stone tile planning, waste, subfloor prep, transitions, and install considerations.",
    metadataTitle: "Tile Flooring Guides: Ceramic, Porcelain, and Stone Planning",
    metadataDescription:
      "Ceramic, porcelain, and stone tile planning guides for measuring, waste, subfloor prep, transitions, and installation considerations.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "sheet-vinyl",
    title: "Sheet Vinyl",
    shortTitle: "Sheet Vinyl",
    description:
      "Guides for sheet vinyl measuring, seams, waste, subfloor prep, and room layout.",
    metadataTitle: "Sheet Vinyl Flooring Guides: Seams, Waste, and Subfloor Prep",
    metadataDescription:
      "Sheet vinyl guides for room measuring, seam planning, waste, subfloor preparation, and layout considerations.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "carpet-padding",
    title: "Carpet & Padding",
    shortTitle: "Carpet",
    description:
      "Guides for carpet seam direction, roll width, padding, stairs, pattern repeat, waste, and layout planning.",
    metadataTitle: "Carpet Guides: Roll Width, Seams, Padding, and Stair Planning",
    metadataDescription:
      "Carpet and padding guides for seam direction, roll width selection, pattern repeat, stair coverage, padding types, and waste estimates.",
    relatedTools: ["carpet-seam-planner", "stair-flooring-calculator", "pattern-repeat-calculator"]
  },
  {
    slug: "planning-measuring-transitions",
    title: "Planning, Measuring & Transitions",
    shortTitle: "Planning",
    description:
      "Guides for square footage, attic stock, reducers, T-molds, stair noses, cartons, and general project planning.",
    metadataTitle: "Flooring Planning Guides: Square Footage, Waste, and Transitions",
    metadataDescription:
      "Practical guides for measuring rooms, estimating waste, ordering attic stock, and planning transitions, T-molds, reducers, and stair noses.",
    relatedTools: [
      "flooring-square-footage-calculator",
      "waste-calculator",
      "stair-flooring-calculator",
      "transition-estimator"
    ]
  }
];

export function getGuideEcosystemBySlug(slug: string) {
  return guideEcosystems.find((ecosystem) => ecosystem.slug === slug);
}
