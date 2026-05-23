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
    metadataTitle: "LVP Flooring Guides",
    metadataDescription:
      "Explore luxury vinyl plank guides for waste, layout, subfloor prep, over-tile installs, transitions, and measuring.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "lvt",
    title: "LVT / Luxury Vinyl Tile",
    shortTitle: "LVT",
    description:
      "Guides for luxury vinyl tile planning, layout, subfloor prep, grout-line concerns, transitions, and waste.",
    metadataTitle: "LVT Flooring Guides",
    metadataDescription:
      "Browse luxury vinyl tile guides for subfloor prep, layout planning, grout-line concerns, transitions, and waste.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "laminate",
    title: "Laminate",
    shortTitle: "Laminate",
    description:
      "Guides for laminate layout, underlayment, subfloor flatness, transitions, waste, and room planning.",
    metadataTitle: "Laminate Flooring Guides",
    metadataDescription:
      "Read laminate flooring guides for measuring, waste, layout direction, underlayment, transitions, and subfloor planning.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "hardwood-engineered-hardwood",
    title: "Hardwood & Engineered Hardwood",
    shortTitle: "Hardwood",
    description:
      "Guides for hardwood layout, acclimation, waste, transitions, subfloor concerns, and repair material planning.",
    metadataTitle: "Hardwood and Engineered Hardwood Guides",
    metadataDescription:
      "Plan hardwood and engineered hardwood projects with guides for waste, layout, repair stock, transitions, and subfloors.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "tile",
    title: "Tile: Ceramic, Porcelain, Stone",
    shortTitle: "Tile",
    description:
      "Guides for ceramic, porcelain, and stone tile planning, waste, subfloor prep, transitions, and install considerations.",
    metadataTitle: "Tile Flooring Guides",
    metadataDescription:
      "Explore ceramic, porcelain, and stone tile planning guides for measuring, waste, transitions, and subfloor prep.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "sheet-vinyl",
    title: "Sheet Vinyl",
    shortTitle: "Sheet Vinyl",
    description:
      "Guides for sheet vinyl measuring, seams, waste, subfloor prep, and room layout.",
    metadataTitle: "Sheet Vinyl Flooring Guides",
    metadataDescription:
      "Browse sheet vinyl planning guides for measuring, layout, seams, subfloor prep, waste, and transitions.",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "carpet-padding",
    title: "Carpet & Padding",
    shortTitle: "Carpet",
    description:
      "Guides for carpet seam direction, roll width, padding, stairs, pattern repeat, waste, and layout planning.",
    metadataTitle: "Carpet and Padding Guides",
    metadataDescription:
      "Plan carpet projects with guides for seams, roll width, pattern repeat, stairs, padding, measuring, and layout.",
    relatedTools: ["carpet-seam-planner", "stair-flooring-calculator", "pattern-repeat-calculator"]
  },
  {
    slug: "planning-measuring-transitions",
    title: "Planning, Measuring & Transitions",
    shortTitle: "Planning",
    description:
      "Guides for square footage, attic stock, reducers, T-molds, stair noses, cartons, and general project planning.",
    metadataTitle: "Flooring Planning, Measuring, and Transition Guides",
    metadataDescription:
      "Use flooring planning guides for measuring rooms, waste, attic stock, cartons, transitions, T-molds, and stair noses.",
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
