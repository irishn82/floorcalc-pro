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
    slug: "flooring-movement-problems",
    startHere: [
      "Name the main symptom first: clicking, lifting, peaking, buckling, separating, gapping, squeaking, bouncing, or hollow sound.",
      "Identify the flooring type and installation method before choosing a repair. Floating floors, glue-down floors, nailed wood, and tile assemblies move for different reasons.",
      "Sort the likely cause into moisture, expansion pressure, subfloor flatness/support, or structure/framing before forcing joints closed or fastening anything down."
    ],
    symptomLookup: [
      { label: "Clicking", guideSlug: "why-is-my-lvp-floor-clicking", note: "Likely cause: low spots, locking stress, soft underlayment, or pinned floating floor. Urgency: inspect if repeated. Next step: check support and movement." },
      { label: "Lifting", guideSlug: "why-is-my-lvp-lifting", note: "Likely cause: pressure, moisture, adhesive release, or unsupported edges. Urgency: inspect before forcing flat. Next step: identify floating vs glue-down." },
      { label: "Peaking", guideSlug: "why-is-my-lvp-floor-peaking", note: "Likely cause: expansion pressure, fixed objects, heat, or moisture. Urgency: medium to high if spreading. Next step: check gaps and pinning." },
      { label: "Buckling", guideSlug: "why-is-my-lvp-floor-buckling", note: "Likely cause: blocked movement, moisture, long runs, or heavy fixed objects. Urgency: high if raised or tripping. Next step: relieve the cause, not just the ridge." },
      { label: "Laminate separating", guideSlug: "why-is-my-laminate-floor-separating", note: "Likely cause: unsupported joints, humidity swings, damaged locks, or expansion problems. Urgency: inspect if recurring. Next step: map the gap pattern." },
      { label: "Engineered hardwood separating", guideSlug: "why-is-my-engineered-hardwood-separating", note: "Likely cause: humidity, concrete moisture, adhesive bond, flatness, or acclimation. Urgency: inspect if widening. Next step: check installation method and moisture." },
      { label: "Squeaking", guideSlug: "why-is-my-floor-squeaking", note: "Likely cause: subfloor movement, fasteners, framing, or seasonal wood movement. Urgency: inspect if spreading. Next step: locate the movement layer." },
      { label: "Bouncing", guideSlug: "why-is-my-floor-bouncing", note: "Likely cause: underlayment compression, loose panels, joist movement, or weak support. Urgency: higher if soft or unsafe. Next step: check structure/support." },
      { label: "Hollow sound", guideSlug: "why-does-my-floor-feel-hollow", note: "Likely cause: floating floor sound, low spots, adhesive release, mortar coverage, or slab prep. Urgency: inspect if localized. Next step: compare sound with movement." }
    ],
    calculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    checklists: ["lvp-installation-checklist", "laminate-installation-checklist", "engineered-hardwood-installation-checklist", "tile-installation-checklist"],
    troubleshooting: [
      "why-is-my-lvp-floor-clicking",
      "why-is-my-lvp-lifting",
      "why-is-my-lvp-floor-peaking",
      "why-is-my-lvp-floor-buckling",
      "why-is-my-laminate-floor-separating",
      "why-is-my-engineered-hardwood-separating",
      "why-is-my-floor-bouncing",
      "why-is-my-floor-squeaking",
      "why-does-my-floor-feel-hollow"
    ],
    relatedHubs: ["flooring-separation-problems", "flooring-moisture-problems", "concrete-floor-problems"]
  },
  {
    slug: "flooring-separation-problems",
    startHere: [
      "Identify the flooring type and whether it is floating, glue-down, nail-down, staple-down, or tile.",
      "Map where the separation appears and whether the gaps are spreading, seasonal, or connected to moisture.",
      "Check expansion space, subfloor support, humidity, transitions, and fixed objects before forcing joints closed."
    ],
    symptomLookup: [
      { label: "Clicking", guideSlug: "why-is-my-floor-clicking", note: "Likely cause: joint stress, low spots, or movement before gaps appear. Urgency: inspect if repeated. Next step: check support near the sound." },
      { label: "Separating", guideSlug: "why-are-my-flooring-joints-opening", note: "Likely cause: material movement, damaged joints, humidity, or blocked expansion. Urgency: inspect if recurring. Next step: identify floor type." },
      { label: "Laminate gaps", guideSlug: "why-is-my-laminate-floor-separating", note: "Likely cause: humidity swings, low spots, damaged locks, or pinned floating floor. Urgency: inspect if gaps return. Next step: map hallway and doorway gaps." },
      { label: "LVP gaps", guideSlug: "why-is-my-lvp-floor-separating", note: "Likely cause: locking stress, expansion pressure, debris, or uneven substrate. Urgency: inspect before tapping. Next step: check flatness and movement." },
      { label: "Engineered hardwood gaps", guideSlug: "why-is-my-engineered-hardwood-separating", note: "Likely cause: humidity, concrete moisture, poor acclimation, or adhesive issues. Urgency: inspect if widening. Next step: review moisture records." },
      { label: "Buckling or peaking", guideSlug: "why-is-my-lvp-floor-peaking", note: "Likely cause: blocked expansion, fixed objects, long runs, or moisture. Urgency: high if raised. Next step: check pressure points first." },
      { label: "Bouncy or springy floor", guideSlug: "are-bouncy-floors-dangerous", note: "Likely cause: support movement, loose panels, or framing. Urgency: higher if soft or spreading. Next step: rule out structural concerns." }
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
      { label: "Swelling", guideSlug: "why-is-my-floor-swelling", note: "Likely cause: moisture from above, below, or room humidity. Urgency: high if spreading. Next step: find the moisture source before repair." },
      { label: "Buckling", guideSlug: "why-is-my-laminate-floor-buckling", note: "Likely cause: moisture, blocked expansion, or both. Urgency: high if raised or growing. Next step: check water, humidity, and gaps." },
      { label: "Wet subfloor", guideSlug: "why-is-my-subfloor-wet", note: "Likely cause: leak, crawlspace, slab, condensation, or trapped moisture. Urgency: high. Next step: stop water and inspect below." },
      { label: "High humidity", guideSlug: "can-high-humidity-damage-flooring", note: "Likely cause: unstable indoor conditions or HVAC issues. Urgency: monitor to medium. Next step: measure room humidity." },
      { label: "Concrete moisture", guideSlug: "how-to-test-concrete-moisture", note: "Likely cause: slab vapor, basement conditions, or missing vapor control. Urgency: test before flooring. Next step: follow required slab test method." },
      { label: "Hardwood cupping", guideSlug: "why-is-my-hardwood-floor-cupping", note: "Likely cause: moisture imbalance through the board. Urgency: inspect before sanding. Next step: identify and stabilize moisture." },
      { label: "Moisture damage signs", guideSlug: "signs-of-moisture-damage-under-flooring", note: "Likely cause: hidden dampness, leak history, or trapped moisture. Urgency: high with odor or soft spots. Next step: investigate layers below." }
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
      { label: "Moisture", guideSlug: "how-to-test-concrete-moisture", note: "Likely cause: slab vapor, basement humidity, or construction moisture. Urgency: test before installation. Next step: confirm required method." },
      { label: "Flooring failure", guideSlug: "why-flooring-fails-over-concrete", note: "Likely cause: moisture, flatness, contaminants, adhesive, or compatibility. Urgency: diagnose before reinstall. Next step: inspect slab conditions." },
      { label: "Cracking", guideSlug: "concrete-slab-cracks-under-flooring", note: "Likely cause: slab movement, settlement, control joints, or crack transfer. Urgency: inspect if wide or displaced. Next step: evaluate crack type." },
      { label: "Tile cracks", guideSlug: "why-is-my-tile-cracking", note: "Likely cause: movement, deflection, mortar coverage, or crack transfer. Urgency: inspect if spreading. Next step: check substrate movement." },
      { label: "Hollow Sound", guideSlug: "why-does-my-floor-feel-hollow", note: "Likely cause: low spots, adhesive release, mortar coverage, or floating floor behavior. Urgency: inspect if localized. Next step: compare sound and movement." },
      { label: "Moisture through slab", guideSlug: "why-is-moisture-coming-through-my-slab", note: "Likely cause: vapor drive, drainage, cracks, or basement humidity. Urgency: high with odor or dampness. Next step: identify source." },
      { label: "LVP over concrete", guideSlug: "can-you-install-lvp-over-concrete", note: "Likely concern: moisture, flatness, vapor layer, cracks, and expansion. Urgency: verify before ordering. Next step: match slab to product instructions." },
      { label: "Engineered hardwood over concrete", guideSlug: "can-engineered-hardwood-go-over-concrete", note: "Likely concern: slab moisture, adhesive/floating system, acclimation, and humidity. Urgency: verify before choosing wood. Next step: review moisture controls." }
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
