import type { GuideSlug, ToolSlug } from "@/data/types";

export type DiagnosisSeriousness =
  | "Cosmetic / minor"
  | "Needs inspection"
  | "Possible moisture issue"
  | "Possible structural concern"
  | "Installer/professional review recommended";

export type DiagnosisOption = {
  id: string;
  label: string;
  summary: string;
  whatItUsuallyMeans: string;
  seriousness: {
    level: DiagnosisSeriousness;
    note: string;
  };
  likelyCauses: string[];
  checkFirst: string[];
  whenSerious: string[];
  recommendedGuides: GuideSlug[];
  relatedCalculators: ToolSlug[];
  relatedChecklists: GuideSlug[];
  relatedHubs: GuideSlug[];
};

export const diagnosisOptions: DiagnosisOption[] = [
  {
    id: "movement-problems",
    label: "Movement Problems",
    summary: "Start here when the floor clicks, lifts, separates, buckles, peaks, gaps, squeaks, bounces, or sounds hollow.",
    whatItUsuallyMeans:
      "Movement problems usually point toward moisture, expansion pressure, subfloor flatness/support, or structure/framing movement. The visible symptom helps you choose the next guide.",
    seriousness: {
      level: "Needs inspection",
      note: "Some movement can be normal, but spreading movement, moisture clues, lifted areas, cracked tile, strong bounce, or trip hazards should be checked."
    },
    likelyCauses: ["Moisture or humidity movement", "Blocked expansion space", "Uneven or unsupported substrate", "Subfloor or framing movement"],
    checkFirst: [
      "Name the main symptom and identify the flooring type.",
      "Map whether the movement is local, spreading, seasonal, or tied to a doorway, slab, cabinet, or transition.",
      "Check moisture, expansion space, subfloor support, underlayment, and nearby fixed objects before forcing a repair."
    ],
    whenSerious: [
      "The floor is lifting, buckling, peaking, or creating a trip hazard.",
      "There are moisture signs, odor, swelling, cupping, or adhesive release.",
      "The floor feels soft, strongly bouncy, sagging, or unsafe."
    ],
    recommendedGuides: ["flooring-movement-problems", "flooring-problem-comparison-guide", "why-is-my-lvp-floor-clicking"],
    relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedChecklists: ["lvp-installation-checklist", "laminate-installation-checklist", "engineered-hardwood-installation-checklist"],
    relatedHubs: ["flooring-movement-problems", "flooring-separation-problems", "flooring-moisture-problems"]
  },
  {
    id: "clicking",
    label: "Clicking",
    summary: "Repeated clicks often point to movement, low spots, underlayment issues, damaged locking joints, or a pinned floating floor.",
    whatItUsuallyMeans:
      "Clicking usually means something is moving under foot. The cause may be a floating floor flexing over a low spot, a locking joint under stress, a transition rubbing, or subfloor movement below the finished floor.",
    seriousness: {
      level: "Needs inspection",
      note: "One light click may be minor, but repeated clicks that spread, happen with gaps, or follow a traffic path should be checked."
    },
    likelyCauses: ["Uneven subfloor or low spot", "Unapproved or soft underlayment", "Damaged locking joint", "Expansion pressure near trim or cabinets"],
    checkFirst: [
      "Mark the exact boards or traffic path where the sound repeats.",
      "Look for gaps, peaking, hollow movement, or loose transitions near the click.",
      "Check whether the floor is floating and whether expansion space may be blocked."
    ],
    whenSerious: [
      "Clicking is spreading across the room.",
      "Joints are separating or planks are lifting.",
      "The floor feels soft, bouncy, or unsupported."
    ],
    recommendedGuides: ["clicking-vs-lifting-flooring", "why-is-my-floor-clicking", "why-is-my-lvp-floor-clicking"],
    relatedCalculators: ["flooring-square-footage-calculator", "transition-estimator"],
    relatedChecklists: ["lvp-installation-checklist", "laminate-installation-checklist"],
    relatedHubs: ["flooring-movement-problems", "flooring-separation-problems"]
  },
  {
    id: "separating",
    label: "Separating",
    summary: "Opening joints can come from humidity changes, subfloor movement, damaged locking systems, poor acclimation, or blocked expansion.",
    whatItUsuallyMeans:
      "Separation means the flooring is moving, unsupported, damaged, or reacting to moisture and humidity. The right path depends on whether the floor is LVP, laminate, hardwood, engineered wood, or another system.",
    seriousness: {
      level: "Needs inspection",
      note: "Small seasonal wood gaps can be expected, but spreading gaps, repeated reopening, or separation with moisture clues should be investigated."
    },
    likelyCauses: ["Seasonal humidity or moisture movement", "Unsupported areas under the floor", "Damaged locking tabs or bond failure", "Fixed objects pinning a floating floor"],
    checkFirst: [
      "Map where the gaps appear: end joints, side joints, doorways, hallways, or the whole room.",
      "Check indoor humidity and recent moisture events.",
      "Look for bounce, clicking, peaking, lifting, or hollow sounds near the gap."
    ],
    whenSerious: [
      "Gaps are widening or returning after repair.",
      "The floor is buckling, lifting, or showing swelling.",
      "Moisture, soft subfloor, or slab issues may be involved."
    ],
    recommendedGuides: ["why-are-my-flooring-joints-opening", "why-is-my-laminate-floor-separating", "why-is-my-lvp-floor-separating"],
    relatedCalculators: ["waste-calculator", "transition-estimator"],
    relatedChecklists: ["lvp-installation-checklist", "laminate-installation-checklist", "engineered-hardwood-installation-checklist"],
    relatedHubs: ["flooring-separation-problems", "flooring-movement-problems", "flooring-moisture-problems"]
  },
  {
    id: "buckling",
    label: "Buckling",
    summary: "Buckling usually means the floor is under pressure, affected by moisture, or trapped without enough room to move.",
    whatItUsuallyMeans:
      "Buckling is a pressure symptom. Floating floors can buckle when expansion space is blocked, moisture changes the floor or subfloor, or heavy fixed objects prevent movement.",
    seriousness: {
      level: "Possible moisture issue",
      note: "Buckling deserves prompt review because moisture, trapped expansion, or fixed objects can keep stressing the floor."
    },
    likelyCauses: ["Missing expansion space", "Moisture or high humidity", "Heavy fixed objects over floating flooring", "Long connected runs without required breaks"],
    checkFirst: [
      "Check walls, transitions, cabinets, islands, and doorways for blocked expansion.",
      "Look for swelling, wet areas, recent leaks, or high humidity.",
      "Do not force the floor flat until the pressure source is understood."
    ],
    whenSerious: [
      "Buckling appears suddenly after water exposure.",
      "The floor feels soft or the subfloor may be wet.",
      "Buckling continues after trim or transition pressure is relieved."
    ],
    recommendedGuides: ["buckling-vs-peaking-flooring", "why-is-my-laminate-floor-buckling", "why-is-my-lvp-floor-buckling"],
    relatedCalculators: ["waste-calculator", "transition-estimator"],
    relatedChecklists: ["lvp-installation-checklist", "laminate-installation-checklist"],
    relatedHubs: ["flooring-movement-problems", "flooring-moisture-problems"]
  },
  {
    id: "lifting",
    label: "Lifting",
    summary: "Lifting can happen when LVP, laminate, glue-down flooring, or transitions are affected by moisture, pressure, bond failure, or subfloor issues.",
    whatItUsuallyMeans:
      "Lifting means a plank, tile, transition, or glued area is no longer staying seated. The cause may be expansion pressure, adhesive release, moisture, debris, or uneven substrate conditions.",
    seriousness: {
      level: "Needs inspection",
      note: "A loose edge may be small, but lifting near moisture, concrete, doors, or multiple planks should be reviewed before repair."
    },
    likelyCauses: ["Adhesive release or poor slab prep", "Moisture near doors, slabs, or appliances", "Expansion pressure", "Subfloor humps, debris, or low spots"],
    checkFirst: [
      "Check whether the flooring is floating, glue-down, or attached trim.",
      "Look for moisture sources near doors, appliances, bathrooms, basements, or slabs.",
      "Check nearby transitions and baseboards for trapped movement."
    ],
    whenSerious: [
      "More pieces are lifting over time.",
      "Adhesive is soft, wet, dusty, or releasing over concrete.",
      "The lifted area is near water, slab moisture, or a soft subfloor."
    ],
    recommendedGuides: ["clicking-vs-lifting-flooring", "why-is-my-lvp-lifting", "why-is-my-transition-strip-moving"],
    relatedCalculators: ["transition-estimator", "flooring-square-footage-calculator"],
    relatedChecklists: ["lvp-installation-checklist", "tile-installation-checklist"],
    relatedHubs: ["flooring-movement-problems", "concrete-floor-problems"]
  },
  {
    id: "peaking",
    label: "Peaking",
    summary: "Peaking is often a floating-floor pressure issue, especially near walls, doorways, long runs, cabinets, islands, or transitions.",
    whatItUsuallyMeans:
      "Peaking usually means adjacent planks are being pushed together and rising at a seam. It is common in floating-floor problems where movement has been blocked or moisture has changed the floor system.",
    seriousness: {
      level: "Needs inspection",
      note: "Peaking should be checked before seams, locking joints, or trim systems are damaged further."
    },
    likelyCauses: ["Blocked expansion space", "Fixed cabinets or islands", "Long-run pressure", "Moisture or temperature movement"],
    checkFirst: [
      "Check expansion areas at walls, transitions, islands, cabinets, and heavy fixed objects.",
      "Look for high humidity, water exposure, or swelling.",
      "Check whether the peak follows a doorway, hallway, or long run."
    ],
    whenSerious: [
      "Peaking is growing across the room.",
      "There are moisture signs or swollen edges.",
      "The floor is trapped under fixed cabinets, islands, or trim."
    ],
    recommendedGuides: ["buckling-vs-peaking-flooring", "why-is-my-lvp-floor-peaking", "why-is-my-lvp-floor-buckling"],
    relatedCalculators: ["transition-estimator", "waste-calculator"],
    relatedChecklists: ["lvp-installation-checklist", "laminate-installation-checklist"],
    relatedHubs: ["flooring-movement-problems", "flooring-separation-problems"]
  },
  {
    id: "squeaking",
    label: "Squeaking",
    summary: "Squeaks usually come from movement between layers: subfloor panels, fasteners, framing, underlayment, or seasonal wood movement.",
    whatItUsuallyMeans:
      "Squeaking usually means two parts of the floor system are rubbing or moving against each other. It may be a finished-floor issue, a subfloor fastening issue, or wood framing movement below.",
    seriousness: {
      level: "Needs inspection",
      note: "A small squeak may be minor, but squeaks with bounce, soft areas, gaps, or structural movement clues deserve review."
    },
    likelyCauses: ["Loose subfloor panels or fasteners", "Wood framing movement", "Floating floor movement over uneven support", "Seasonal humidity changes"],
    checkFirst: [
      "Mark whether the squeak is one spot, a traffic path, or the whole room.",
      "Check if the subfloor is wood framing or concrete.",
      "Look for bounce, hollow sound, gaps, or clicking near the squeak."
    ],
    whenSerious: [
      "The squeak happens with a soft, sagging, or bouncy area.",
      "Stairs, joists, beams, or subfloor panels may be moving.",
      "The noise is new, worsening, or spreading."
    ],
    recommendedGuides: ["why-is-my-floor-squeaking", "why-is-my-floor-bouncing", "seasonal-flooring-movement"],
    relatedCalculators: ["flooring-square-footage-calculator"],
    relatedChecklists: ["engineered-hardwood-installation-checklist", "laminate-installation-checklist"],
    relatedHubs: ["flooring-movement-problems"]
  },
  {
    id: "bouncing",
    label: "Bouncing",
    summary: "A bouncing floor can come from floating floor feel, underlayment compression, subfloor movement, loose panels, joist movement, or structural concerns.",
    whatItUsuallyMeans:
      "Bounce means the floor system is flexing. Sometimes that is the feel of a floating floor over underlayment, but localized, worsening, springy, or soft movement may point to subfloor or framing concerns.",
    seriousness: {
      level: "Possible structural concern",
      note: "Do not assume bounce is dangerous, but strong, worsening, or localized bounce should be evaluated instead of treated as cosmetic."
    },
    likelyCauses: ["Floating floor movement", "Soft or unapproved underlayment", "Loose or flexing subfloor panels", "Joist span or framing movement"],
    checkFirst: [
      "Compare the bouncing area with nearby rooms and traffic paths.",
      "Look for squeaks, hollow sound, cracked tile, gaps, or soft spots.",
      "Identify whether the floor is over wood framing, concrete, or a basement/crawlspace."
    ],
    whenSerious: [
      "The floor feels unsafe, springy, sagging, or soft.",
      "Tile is cracking or joints are opening near the bounce.",
      "The bounce involves stairs, beams, joists, or a large area."
    ],
    recommendedGuides: ["are-bouncy-floors-dangerous", "why-is-my-floor-bouncing", "why-is-my-floor-squeaking"],
    relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedChecklists: ["laminate-installation-checklist", "engineered-hardwood-installation-checklist", "tile-installation-checklist"],
    relatedHubs: ["flooring-movement-problems", "flooring-separation-problems"]
  },
  {
    id: "hollow-sound",
    label: "Hollow Sound",
    summary: "A hollow sound can be normal for some floating floors, but localized hollow areas may point to low spots, poor bond, hollow tile, or slab issues.",
    whatItUsuallyMeans:
      "Hollow sound usually means there is a change in support or attachment below the surface. Floating floors can sound hollow by design, while tile or glue-down flooring may sound hollow when bond or substrate support is uneven.",
    seriousness: {
      level: "Needs inspection",
      note: "Hollow sound is more concerning when it is localized, spreading, paired with cracks, or connected to moisture or adhesive release."
    },
    likelyCauses: ["Floating floor sound", "Low spots or unsupported areas", "Tile mortar coverage issues", "Glue-down bond release"],
    checkFirst: [
      "Listen for one isolated hollow area versus the overall sound of the floor.",
      "Check for cracks, loose tile, lifting, gaps, or slab moisture clues.",
      "Compare the sound near walls, transitions, and high-traffic areas."
    ],
    whenSerious: [
      "Tile is cracking, rocking, or sounding hollow in many spots.",
      "Glue-down flooring is lifting or adhesive is releasing.",
      "The hollow sound appears after water exposure or slab issues."
    ],
    recommendedGuides: ["why-does-my-floor-feel-hollow", "why-is-my-floor-moving", "why-flooring-fails-over-concrete"],
    relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedChecklists: ["tile-installation-checklist", "lvp-installation-checklist"],
    relatedHubs: ["flooring-movement-problems", "concrete-floor-problems"]
  },
  {
    id: "swelling",
    label: "Swelling",
    summary: "Swelling usually means moisture, humidity, leaks, wet cleaning, or a wet subfloor is affecting the flooring or supporting layers.",
    whatItUsuallyMeans:
      "Swelling is usually a moisture warning sign. It can happen at laminate seams, wood edges, LVP joints, carpet cushion, or subfloor layers depending on the source and material.",
    seriousness: {
      level: "Possible moisture issue",
      note: "Swelling should be treated as a moisture investigation until the source is ruled out."
    },
    likelyCauses: ["High humidity", "Active leak or wet cleaning", "Wet wood subfloor", "Concrete moisture or trapped moisture"],
    checkFirst: [
      "Look for a leak, damp room, exterior door, basement wall, appliance, or wet cleaning history.",
      "Check whether swelling is at edges, seams, corners, or a broad area.",
      "Avoid covering swollen flooring with new material until the source is known."
    ],
    whenSerious: [
      "Swelling is spreading or paired with odor, soft spots, or staining.",
      "A subfloor may be wet or weakened.",
      "Concrete moisture, crawlspace moisture, or repeated leaks are suspected."
    ],
    recommendedGuides: ["why-is-my-floor-swelling", "why-is-my-subfloor-wet", "signs-of-moisture-damage-under-flooring"],
    relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"],
    relatedChecklists: ["lvp-installation-checklist", "laminate-installation-checklist", "engineered-hardwood-installation-checklist"],
    relatedHubs: ["flooring-moisture-problems", "flooring-separation-problems"]
  },
  {
    id: "moisture",
    label: "Moisture",
    summary: "Moisture problems often show up as swelling, cupping, odor, gaps, buckling, adhesive release, or recurring floor movement.",
    whatItUsuallyMeans:
      "Moisture may come from the room, crawlspace, subfloor, concrete slab, plumbing, exterior water, or trapped construction moisture. Product limits vary, so testing and manufacturer requirements matter.",
    seriousness: {
      level: "Possible moisture issue",
      note: "Moisture should be investigated before repair or replacement because covering it can repeat the failure."
    },
    likelyCauses: ["Concrete slab moisture", "High indoor humidity", "Wet crawlspace or wood subfloor", "Leaks, exterior doors, or damp rooms"],
    checkFirst: [
      "Stop active water first.",
      "Identify whether the flooring is over wood subfloor, concrete slab, basement, or crawlspace.",
      "Look for odor, staining, swelling, buckling, cupping, or adhesive release."
    ],
    whenSerious: [
      "There is musty odor, soft subfloor, visible mold-like growth, or recurring dampness.",
      "A concrete slab or basement is involved.",
      "Flooring has already failed once in the same area."
    ],
    recommendedGuides: ["flooring-moisture-problems", "moisture-vs-acclimation-problems", "how-to-test-concrete-moisture"],
    relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"],
    relatedChecklists: ["lvp-installation-checklist", "engineered-hardwood-installation-checklist", "carpet-installation-checklist"],
    relatedHubs: ["flooring-moisture-problems", "concrete-floor-problems"]
  },
  {
    id: "concrete-issues",
    label: "Concrete Problems",
    summary: "Concrete floor problems usually start with moisture, cracks, flatness, surface prep, adhesive compatibility, or the wrong underlayment system.",
    whatItUsuallyMeans:
      "Concrete problems are usually jobsite-condition problems. Moisture, pH, surface contaminants, cracks, flatness, old adhesive, or incompatible underlayment can affect LVP, laminate, carpet, tile, and engineered hardwood.",
    seriousness: {
      level: "Installer/professional review recommended",
      note: "Concrete conditions should be checked before installation or repair because product limits and adhesive systems vary."
    },
    likelyCauses: ["Slab moisture or vapor", "Cracks or slab movement", "Dust, paint, sealer, or contaminants", "Low spots, humps, or weak patching"],
    checkFirst: [
      "Find out whether the slab is below grade, on grade, or above grade.",
      "Check moisture testing requirements for the exact flooring and adhesive.",
      "Look for cracks, sealers, old adhesive, dusty surface, or uneven areas."
    ],
    whenSerious: [
      "Moisture is coming through the slab or a prior floor failed.",
      "Cracks are moving, widening, or transferring through flooring.",
      "A glue-down or tile system is releasing, hollow, or cracking."
    ],
    recommendedGuides: ["concrete-floor-problems", "concrete-slab-flooring-guide", "why-flooring-fails-over-concrete"],
    relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedChecklists: ["lvp-installation-checklist", "engineered-hardwood-installation-checklist", "tile-installation-checklist"],
    relatedHubs: ["concrete-floor-problems", "flooring-moisture-problems"]
  },
  {
    id: "cracks",
    label: "Cracks",
    summary: "Cracks in tile, slab areas, grout, or flooring surfaces can point to movement, impact damage, substrate problems, or missing movement accommodation.",
    whatItUsuallyMeans:
      "Cracks are movement clues. In tile, cracks often relate to substrate movement, deflection, mortar coverage, or concrete cracks transferring upward. In concrete, the question is whether the crack is stable and compatible with the flooring system.",
    seriousness: {
      level: "Installer/professional review recommended",
      note: "Cracks should be reviewed when they spread, repeat, affect tile, or appear to follow concrete slab movement."
    },
    likelyCauses: ["Subfloor or slab movement", "Tile deflection or mortar coverage issues", "Concrete cracks transferring through flooring", "Impact or product damage"],
    checkFirst: [
      "Identify whether the crack is in tile, grout, concrete, plank flooring, or the subfloor.",
      "Check whether cracks follow a straight slab line, doorway, or high-load area.",
      "Look for hollow tile, bounce, moisture, or movement nearby."
    ],
    whenSerious: [
      "Cracks are widening, spreading, or recurring after repair.",
      "Tile is loose, hollow, or cracking in multiple areas.",
      "A structural slab or framing concern may be involved."
    ],
    recommendedGuides: ["why-is-my-tile-cracking", "concrete-slab-cracks-under-flooring", "why-flooring-fails-over-concrete"],
    relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedChecklists: ["tile-installation-checklist"],
    relatedHubs: ["concrete-floor-problems", "flooring-movement-problems"]
  },
  {
    id: "carpet-seams",
    label: "Carpet Seams",
    summary: "Visible carpet seams can be influenced by roll width, lighting, pile direction, pattern match, seam placement, and carpet construction.",
    whatItUsuallyMeans:
      "Carpet seam visibility is often a layout and material issue, not simply a bad seam. Roll width, traffic direction, light, pile direction, pattern match, and room shape all affect what you see.",
    seriousness: {
      level: "Cosmetic / minor",
      note: "Some seam visibility can be normal, but opening seams, fraying, ripples, or mismatched pattern should be reviewed."
    },
    likelyCauses: ["Light direction or pile direction", "Pattern mismatch", "Room wider than roll width", "Seam opening, fraying, or poor placement"],
    checkFirst: [
      "Check whether the room is wider than the carpet roll width.",
      "Look at the seam from different light and traffic directions.",
      "Check for pattern mismatch, fraying, opening, or ripples near the seam."
    ],
    whenSerious: [
      "The seam is opening, fraying, or pulling apart.",
      "The carpet is wrinkling or buckling near the seam.",
      "A patterned carpet is visibly mismatched."
    ],
    recommendedGuides: ["why-are-my-carpet-seams-visible", "carpet-seam-direction-guide", "what-is-pattern-match-in-carpet"],
    relatedCalculators: ["carpet-seam-planner", "pattern-repeat-calculator", "flooring-square-footage-calculator"],
    relatedChecklists: ["carpet-installation-checklist"],
    relatedHubs: []
  },
  {
    id: "carpet-buckling",
    label: "Carpet Buckling",
    summary: "Carpet wrinkles or buckles often come from loose stretch, padding issues, humidity, furniture movement, age, or backing problems.",
    whatItUsuallyMeans:
      "Carpet buckling usually means the carpet is no longer held flat under normal use. Stretch, cushion, humidity, furniture movement, and backing condition can all contribute.",
    seriousness: {
      level: "Installer/professional review recommended",
      note: "Wrinkles can become a trip concern and usually need installer evaluation rather than more tape or surface fixes."
    },
    likelyCauses: ["Loose stretch or no power stretching", "Wrong or worn carpet padding", "Humidity or damp cushion", "Furniture movement or backing failure"],
    checkFirst: [
      "Check whether wrinkles appear in traffic paths, near seams, near furniture, or across the whole room.",
      "Look for damp cushion, odor, or humidity issues.",
      "Review carpet age, padding condition, and whether the carpet was power-stretched."
    ],
    whenSerious: [
      "Wrinkles create a trip concern.",
      "Carpet feels damp, smells musty, or the cushion may be affected.",
      "Buckling returns after restretching."
    ],
    recommendedGuides: ["why-is-my-carpet-wrinkling-or-buckling", "carpet-padding-thickness-guide", "can-carpet-be-installed-over-concrete"],
    relatedCalculators: ["carpet-seam-planner", "stair-flooring-calculator", "flooring-square-footage-calculator"],
    relatedChecklists: ["carpet-installation-checklist"],
    relatedHubs: ["flooring-moisture-problems"]
  },
  {
    id: "pattern-match",
    label: "Pattern Match",
    summary: "Pattern match problems happen when patterned carpet or flooring is not planned with repeat size, seam location, roll variation, and extra material in mind.",
    whatItUsuallyMeans:
      "Pattern match issues usually point to layout planning, repeat size, material allowance, seam placement, or installation difficulty with patterned goods. Patterned products may need more material than a plain product.",
    seriousness: {
      level: "Cosmetic / minor",
      note: "Pattern mismatch is often visual, but correcting it can require extra material or reinstalling affected areas."
    },
    likelyCauses: ["Pattern repeat not included in material estimate", "Seam location makes mismatch visible", "Roll or product variation", "Installer layout constraints"],
    checkFirst: [
      "Find the pattern repeat length and width from the product information.",
      "Check whether seams land in visible areas or high-light areas.",
      "Use a pattern repeat estimate before assuming standard waste is enough."
    ],
    whenSerious: [
      "The mismatch is across a main sightline or doorway.",
      "There is not enough attic stock or extra material for correction.",
      "Patterned carpet seams are also opening or wrinkling."
    ],
    recommendedGuides: ["what-is-pattern-match-in-carpet", "carpet-seam-direction-guide", "why-are-my-carpet-seams-visible"],
    relatedCalculators: ["pattern-repeat-calculator", "carpet-seam-planner", "flooring-square-footage-calculator"],
    relatedChecklists: ["carpet-installation-checklist"],
    relatedHubs: []
  }
];
