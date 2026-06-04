import type { GuideSlug, ToolSlug } from "@/data/types";

export type AuthorityHubSymptom = {
  label: string;
  guideSlug: GuideSlug;
  note: string;
};

export type AuthorityHubPathway = {
  slug: GuideSlug;
  startHere: string[];
  symptomLookup: AuthorityHubSymptom[];
  calculators: ToolSlug[];
  checklists: GuideSlug[];
  troubleshooting: GuideSlug[];
  relatedHubs: GuideSlug[];
};

export const authorityHubPathways: AuthorityHubPathway[] = [
  {
    slug: "flooring-separation-problems",
    startHere: [
      "Identify the flooring type and whether it is floating, glue-down, nail-down, staple-down, or tile.",
      "Map where the separation appears and whether the gaps are spreading, seasonal, or connected to moisture.",
      "Check expansion space, subfloor support, humidity, transitions, and fixed objects before forcing joints closed."
    ],
    symptomLookup: [
      { label: "Clicking", guideSlug: "why-is-my-floor-clicking", note: "Clicks often overlap with low spots, joint stress, and separation." },
      { label: "Separating", guideSlug: "why-are-my-flooring-joints-opening", note: "Start here for open joints across several floor types." },
      { label: "Laminate gaps", guideSlug: "why-is-my-laminate-floor-separating", note: "Use this when laminate seams or end joints keep opening." },
      { label: "LVP gaps", guideSlug: "why-is-my-lvp-floor-separating", note: "Use this when vinyl plank joints reopen or show locking stress." },
      { label: "Engineered hardwood gaps", guideSlug: "why-is-my-engineered-hardwood-separating", note: "Use this when wood movement, slab moisture, or bond issues may be involved." },
      { label: "Buckling or peaking", guideSlug: "why-is-my-lvp-floor-peaking", note: "Raised ridges often point to pressure, fixed objects, or moisture." },
      { label: "Bouncy or springy floor", guideSlug: "are-bouncy-floors-dangerous", note: "Use this when movement feels concerning or may involve subfloor support." }
    ],
    calculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    checklists: ["lvp-installation-checklist", "laminate-installation-checklist", "engineered-hardwood-installation-checklist"],
    troubleshooting: [
      "why-is-my-floor-clicking",
      "why-is-my-lvp-floor-clicking",
      "why-is-my-laminate-floor-buckling",
      "why-are-my-flooring-joints-opening"
    ],
    relatedHubs: ["flooring-movement-problems", "flooring-moisture-problems", "concrete-floor-problems"]
  },
  {
    slug: "flooring-moisture-problems",
    startHere: [
      "Stop active water first, then identify whether the moisture is coming from the room, the subfloor, the slab, or the building conditions.",
      "Document swelling, odor, stains, cupping, crowning, buckling, or soft areas before lifting flooring.",
      "Compare moisture readings and room conditions to the exact flooring, adhesive, and underlayment requirements."
    ],
    symptomLookup: [
      { label: "Swelling", guideSlug: "why-is-my-floor-swelling", note: "Raised or swollen flooring usually means moisture needs to be ruled out." },
      { label: "Buckling", guideSlug: "why-is-my-laminate-floor-buckling", note: "Buckling can come from moisture, blocked expansion, or both." },
      { label: "Wet subfloor", guideSlug: "why-is-my-subfloor-wet", note: "Start here when the substrate or layers below the floor may be damp." },
      { label: "High humidity", guideSlug: "can-high-humidity-damage-flooring", note: "Use this when room conditions may be stressing the floor." },
      { label: "Concrete moisture", guideSlug: "how-to-test-concrete-moisture", note: "Use this when flooring is over a slab or basement." },
      { label: "Hardwood cupping", guideSlug: "why-is-my-hardwood-floor-cupping", note: "Cupping often points to a moisture imbalance." },
      { label: "Moisture damage signs", guideSlug: "signs-of-moisture-damage-under-flooring", note: "Use this when odor, stains, or soft areas suggest hidden damage." }
    ],
    calculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    checklists: [
      "lvp-installation-checklist",
      "laminate-installation-checklist",
      "engineered-hardwood-installation-checklist",
      "tile-installation-checklist",
      "carpet-installation-checklist"
    ],
    troubleshooting: [
      "why-is-my-floor-swelling",
      "why-is-my-lvp-lifting",
      "why-is-my-laminate-floor-buckling",
      "why-is-my-hardwood-floor-cupping"
    ],
    relatedHubs: ["concrete-floor-problems", "flooring-separation-problems", "flooring-movement-problems"]
  },
  {
    slug: "concrete-floor-problems",
    startHere: [
      "Start with slab conditions: moisture, flatness, cracks, surface prep, contaminants, and approved installation method.",
      "Match the slab to the flooring system before choosing underlayment, adhesive, vapor control, or repair materials.",
      "If a prior floor failed over concrete, diagnose moisture, bond, surface prep, and slab movement before reinstalling."
    ],
    symptomLookup: [
      { label: "Moisture", guideSlug: "how-to-test-concrete-moisture", note: "Use this before moisture-sensitive flooring goes over a slab." },
      { label: "Flooring failure", guideSlug: "why-flooring-fails-over-concrete", note: "Use this when a finished floor has already failed over concrete." },
      { label: "Cracking", guideSlug: "concrete-slab-cracks-under-flooring", note: "Use this when cracks may transfer through tile, plank, or adhesive systems." },
      { label: "Tile cracks", guideSlug: "why-is-my-tile-cracking", note: "Use this when the finished tile or grout is cracking over a slab or subfloor." },
      { label: "Hollow Sound", guideSlug: "why-does-my-floor-feel-hollow", note: "Localized hollow sounds can point to support, bond, or slab prep problems." },
      { label: "Moisture through slab", guideSlug: "why-is-moisture-coming-through-my-slab", note: "Use this when moisture or odor appears to come from below." },
      { label: "LVP over concrete", guideSlug: "can-you-install-lvp-over-concrete", note: "Use this when planning vinyl plank over a slab." },
      { label: "Engineered hardwood over concrete", guideSlug: "can-engineered-hardwood-go-over-concrete", note: "Use this before choosing wood over concrete." }
    ],
    calculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    checklists: ["lvp-installation-checklist", "laminate-installation-checklist", "engineered-hardwood-installation-checklist", "tile-installation-checklist"],
    troubleshooting: [
      "how-to-test-concrete-moisture",
      "why-flooring-fails-over-concrete",
      "common-basement-flooring-problems",
      "why-does-my-floor-feel-hollow"
    ],
    relatedHubs: ["concrete-slab-flooring-guide", "flooring-moisture-problems", "flooring-separation-problems"]
  }
];

export function getAuthorityHubPathway(slug: string) {
  return authorityHubPathways.find((hub) => hub.slug === slug);
}
