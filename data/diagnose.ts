import type { GuideSlug, ToolSlug } from "@/data/types";

export type DiagnosisOption = {
  id: string;
  label: string;
  summary: string;
  likelyCauses: string[];
  recommendedGuides: GuideSlug[];
  relatedCalculators: ToolSlug[];
  relatedHubs: GuideSlug[];
};

export const diagnosisOptions: DiagnosisOption[] = [
  {
    id: "clicking",
    label: "Clicking",
    summary: "Repeated clicks often point to movement, low spots, underlayment issues, damaged locking joints, or a pinned floating floor.",
    likelyCauses: ["Uneven subfloor or low spot", "Unapproved or soft underlayment", "Damaged locking joint", "Expansion pressure near trim or cabinets"],
    recommendedGuides: ["why-is-my-floor-clicking", "why-is-my-lvp-floor-clicking", "why-does-my-floor-feel-hollow"],
    relatedCalculators: ["flooring-square-footage-calculator", "transition-estimator"],
    relatedHubs: ["flooring-movement-problems", "flooring-separation-problems"]
  },
  {
    id: "separating",
    label: "Separating",
    summary: "Opening joints can come from humidity changes, subfloor movement, damaged locking systems, poor acclimation, or blocked expansion.",
    likelyCauses: ["Seasonal humidity or moisture movement", "Unsupported areas under the floor", "Damaged locking tabs or bond failure", "Fixed objects pinning a floating floor"],
    recommendedGuides: ["why-are-my-flooring-joints-opening", "why-is-my-laminate-floor-separating", "why-is-my-lvp-floor-separating"],
    relatedCalculators: ["waste-calculator", "transition-estimator"],
    relatedHubs: ["flooring-separation-problems", "flooring-movement-problems", "flooring-moisture-problems"]
  },
  {
    id: "buckling",
    label: "Buckling",
    summary: "Buckling usually means the floor is under pressure, affected by moisture, or trapped without enough room to move.",
    likelyCauses: ["Missing expansion space", "Moisture or high humidity", "Heavy fixed objects over floating flooring", "Long connected runs without required breaks"],
    recommendedGuides: ["why-is-my-laminate-floor-buckling", "why-is-my-lvp-floor-buckling", "why-is-my-floor-expanding"],
    relatedCalculators: ["waste-calculator", "transition-estimator"],
    relatedHubs: ["flooring-movement-problems", "flooring-moisture-problems"]
  },
  {
    id: "lifting",
    label: "Lifting",
    summary: "Lifting can happen when LVP, laminate, glue-down flooring, or transitions are affected by moisture, pressure, bond failure, or subfloor issues.",
    likelyCauses: ["Adhesive release or poor slab prep", "Moisture near doors, slabs, or appliances", "Expansion pressure", "Subfloor humps, debris, or low spots"],
    recommendedGuides: ["why-is-my-lvp-lifting", "why-is-my-transition-strip-moving", "why-flooring-fails-over-concrete"],
    relatedCalculators: ["transition-estimator", "flooring-square-footage-calculator"],
    relatedHubs: ["flooring-movement-problems", "concrete-floor-problems"]
  },
  {
    id: "peaking",
    label: "Peaking",
    summary: "Peaking is often a floating-floor pressure issue, especially near walls, doorways, long runs, cabinets, islands, or transitions.",
    likelyCauses: ["Blocked expansion space", "Fixed cabinets or islands", "Long-run pressure", "Moisture or temperature movement"],
    recommendedGuides: ["why-is-my-lvp-floor-peaking", "why-is-my-lvp-floor-buckling", "can-you-install-cabinets-over-floating-lvp"],
    relatedCalculators: ["transition-estimator", "waste-calculator"],
    relatedHubs: ["flooring-movement-problems", "flooring-separation-problems"]
  },
  {
    id: "squeaking",
    label: "Squeaking",
    summary: "Squeaks usually come from movement between layers: subfloor panels, fasteners, framing, underlayment, or seasonal wood movement.",
    likelyCauses: ["Loose subfloor panels or fasteners", "Wood framing movement", "Floating floor movement over uneven support", "Seasonal humidity changes"],
    recommendedGuides: ["why-is-my-floor-squeaking", "why-is-my-floor-bouncing", "seasonal-flooring-movement"],
    relatedCalculators: ["flooring-square-footage-calculator"],
    relatedHubs: ["flooring-movement-problems"]
  },
  {
    id: "hollow-sound",
    label: "Hollow Sound",
    summary: "A hollow sound can be normal for some floating floors, but localized hollow areas may point to low spots, poor bond, hollow tile, or slab issues.",
    likelyCauses: ["Floating floor sound", "Low spots or unsupported areas", "Tile mortar coverage issues", "Glue-down bond release"],
    recommendedGuides: ["why-does-my-floor-feel-hollow", "why-is-my-floor-moving", "why-flooring-fails-over-concrete"],
    relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedHubs: ["flooring-movement-problems", "concrete-floor-problems"]
  },
  {
    id: "swelling",
    label: "Swelling",
    summary: "Swelling usually means moisture, humidity, leaks, wet cleaning, or a wet subfloor is affecting the flooring or supporting layers.",
    likelyCauses: ["High humidity", "Active leak or wet cleaning", "Wet wood subfloor", "Concrete moisture or trapped moisture"],
    recommendedGuides: ["why-is-my-floor-swelling", "why-is-my-subfloor-wet", "signs-of-moisture-damage-under-flooring"],
    relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"],
    relatedHubs: ["flooring-moisture-problems", "flooring-separation-problems"]
  },
  {
    id: "moisture",
    label: "Moisture",
    summary: "Moisture problems often show up as swelling, cupping, odor, gaps, buckling, adhesive release, or recurring floor movement.",
    likelyCauses: ["Concrete slab moisture", "High indoor humidity", "Wet crawlspace or wood subfloor", "Leaks, exterior doors, or damp rooms"],
    recommendedGuides: ["flooring-moisture-problems", "moisture-level-too-high-for-flooring", "how-to-test-concrete-moisture"],
    relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"],
    relatedHubs: ["flooring-moisture-problems", "concrete-floor-problems"]
  },
  {
    id: "concrete-issues",
    label: "Concrete Issues",
    summary: "Concrete floor problems usually start with moisture, cracks, flatness, surface prep, adhesive compatibility, or the wrong underlayment system.",
    likelyCauses: ["Slab moisture or vapor", "Cracks or slab movement", "Dust, paint, sealer, or contaminants", "Low spots, humps, or weak patching"],
    recommendedGuides: ["concrete-floor-problems", "concrete-slab-flooring-guide", "why-flooring-fails-over-concrete"],
    relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedHubs: ["concrete-floor-problems", "flooring-moisture-problems"]
  },
  {
    id: "tile-cracking",
    label: "Tile Cracking",
    summary: "Tile cracking can point to subfloor movement, slab cracks, deflection, poor mortar coverage, missing movement accommodation, or hollow spots.",
    likelyCauses: ["Subfloor or slab movement", "Poor mortar coverage", "Cracks transferring from concrete", "Missing movement joints or perimeter space"],
    recommendedGuides: ["why-is-my-tile-cracking", "how-flat-should-a-floor-be-for-tile", "concrete-slab-cracks-under-flooring"],
    relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedHubs: ["concrete-floor-problems", "flooring-movement-problems"]
  },
  {
    id: "carpet-seams",
    label: "Carpet Seams",
    summary: "Visible carpet seams can be influenced by roll width, lighting, pile direction, pattern match, seam placement, and carpet construction.",
    likelyCauses: ["Light direction or pile direction", "Pattern mismatch", "Room wider than roll width", "Seam opening, fraying, or poor placement"],
    recommendedGuides: ["why-are-my-carpet-seams-visible", "carpet-seam-direction-guide", "what-is-pattern-match-in-carpet"],
    relatedCalculators: ["carpet-seam-planner", "pattern-repeat-calculator", "flooring-square-footage-calculator"],
    relatedHubs: ["flooring-movement-problems"]
  },
  {
    id: "wrinkling-carpet",
    label: "Wrinkling Carpet",
    summary: "Carpet wrinkles or buckles often come from loose stretch, padding issues, humidity, furniture movement, age, or backing problems.",
    likelyCauses: ["Loose stretch or no power stretching", "Wrong or worn carpet padding", "Humidity or damp cushion", "Furniture movement or backing failure"],
    recommendedGuides: ["why-is-my-carpet-wrinkling-or-buckling", "carpet-padding-thickness-guide", "can-carpet-be-installed-over-concrete"],
    relatedCalculators: ["carpet-seam-planner", "stair-flooring-calculator", "flooring-square-footage-calculator"],
    relatedHubs: ["flooring-moisture-problems"]
  }
];
