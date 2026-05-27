import type { CauseSymptomCheckRow } from "@/components/troubleshooting/CauseSymptomCheckTable";
import type { GuideEcosystemSlug, GuideSlug, ToolSlug } from "@/data/types";

export type TroubleshootingProblemGroupSlug = "lvp" | "laminate" | "hardwood" | "carpet" | "tile" | "transitions";

export type TroubleshootingFlow = {
  group: TroubleshootingProblemGroupSlug;
  causeRows: CauseSymptomCheckRow[];
  whatToCheckFirst: string[];
  whenToCallAPro: string[];
};

export type TroubleshootingProblemGroup = {
  slug: TroubleshootingProblemGroupSlug;
  title: string;
  description: string;
  ecosystemSlug?: GuideEcosystemSlug;
  guideSlugs: GuideSlug[];
  toolSlugs: ToolSlug[];
};

export const troubleshootingProblemGroups: TroubleshootingProblemGroup[] = [
  {
    slug: "lvp",
    title: "LVP Problems",
    description:
      "Diagnose vinyl plank clicking, lifting, separating, subfloor movement, expansion issues, and floating-floor restrictions.",
    ecosystemSlug: "lvp",
    guideSlugs: [
      "why-is-my-lvp-floor-clicking",
      "why-is-my-lvp-lifting",
      "why-is-my-lvp-floor-separating",
      "why-is-my-lvp-floor-peaking",
      "moisture-level-too-high-for-flooring",
      "subfloor-flatness-requirements-lvp",
      "can-you-install-lvp-over-concrete",
      "can-you-install-cabinets-over-floating-lvp",
      "glue-down-vs-floating-floor"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "laminate",
    title: "Laminate Problems",
    description:
      "Troubleshoot laminate gaps, buckling, hollow or clicking movement, underlayment mistakes, moisture limits, and flatness issues.",
    ecosystemSlug: "laminate",
    guideSlugs: [
      "why-is-my-laminate-floor-separating",
      "why-is-my-laminate-floor-buckling",
      "laminate-floor-separating-what-to-check-first",
      "why-is-my-floor-clicking",
      "why-is-my-floor-squeaking",
      "why-does-my-floor-feel-hollow",
      "moisture-level-too-high-for-flooring",
      "how-flat-should-a-subfloor-be-for-laminate",
      "best-underlayment-for-laminate-flooring",
      "can-laminate-flooring-be-waterproof"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "hardwood",
    title: "Hardwood Problems",
    description:
      "Understand hardwood cupping, gapping, acclimation mistakes, moisture imbalance, concrete conditions, and engineered wood risks.",
    ecosystemSlug: "hardwood-engineered-hardwood",
    guideSlugs: [
      "why-is-my-hardwood-floor-cupping",
      "why-is-my-hardwood-floor-gapping",
      "why-is-my-hardwood-floor-crowning",
      "why-is-my-floor-squeaking",
      "how-long-should-hardwood-acclimate",
      "hardwood-acclimation-mistakes",
      "can-engineered-hardwood-go-over-concrete",
      "moisture-level-too-high-for-flooring",
      "moisture-barrier-engineered-hardwood-over-concrete"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator"]
  },
  {
    slug: "carpet",
    title: "Carpet Problems",
    description:
      "Plan around visible seams, carpet wrinkles, pattern match, padding choices, roll width, and room layout issues.",
    ecosystemSlug: "carpet-padding",
    guideSlugs: [
      "why-are-my-carpet-seams-visible",
      "why-is-my-carpet-wrinkling-or-buckling",
      "what-is-pattern-match-in-carpet",
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
      "Check cracked tile, subfloor flatness, tile-over-tile conditions, layout planning, mortar support, and movement concerns.",
    ecosystemSlug: "tile",
    guideSlugs: [
      "why-is-my-tile-cracking",
      "how-flat-should-a-floor-be-for-tile",
      "can-you-install-tile-over-tile",
      "tile-layout-planning-guide",
      "porcelain-vs-ceramic-tile"
    ],
    toolSlugs: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
  },
  {
    slug: "transitions",
    title: "Transition Problems",
    description:
      "Troubleshoot loose transition strips, height differences, trim selection, expansion space, and traffic at doorways.",
    ecosystemSlug: "planning-measuring-transitions",
    guideSlugs: [
      "why-is-my-transition-strip-moving",
      "t-mold-vs-reducer-vs-end-cap",
      "flooring-transition-guide",
      "which-direction-should-flooring-run"
    ],
    toolSlugs: ["transition-estimator", "flooring-square-footage-calculator", "waste-calculator"]
  }
];

const troubleshootingFlows: Partial<Record<GuideSlug, TroubleshootingFlow>> = {
  "why-is-my-floor-clicking": {
    group: "laminate",
    causeRows: [
      { cause: "Uneven subfloor", symptom: "Click repeats in one spot", check: "Look for low spots, humps, or flex under the joint." },
      { cause: "Underlayment issue", symptom: "Soft or bouncy feel", check: "Verify the pad is approved and not doubled up." },
      { cause: "Tight expansion", symptom: "Noise near walls or doorways", check: "Inspect trim, transitions, and perimeter gaps." },
      { cause: "Damaged locking joint", symptom: "Click with visible movement", check: "Inspect plank edges before forcing repair." }
    ],
    whatToCheckFirst: [
      "Mark whether the click repeats in one location or across the room.",
      "Check nearby transitions, trim, cabinets, and door jambs.",
      "Look for visible gaps, lifting, or joint movement.",
      "Review underlayment and subfloor flatness if installation details are available."
    ],
    whenToCallAPro: [
      "The clicking is getting louder or spreading.",
      "Joints are separating, lifting, or visibly moving.",
      "Moisture, slab issues, or damaged locking tabs are suspected.",
      "The floor may need to be lifted to check the subfloor."
    ]
  },
  "why-is-my-floor-squeaking": {
    group: "laminate",
    causeRows: [
      { cause: "Subfloor movement", symptom: "Squeak repeats in one spot", check: "Check for panel movement, joist flex, or loose fasteners." },
      { cause: "Floating floor movement", symptom: "Squeak with hollow or clicking feel", check: "Look for low spots, soft underlayment, or tight trim." },
      { cause: "Seasonal wood movement", symptom: "Noise changes with humidity", check: "Track indoor humidity and hardwood movement." },
      { cause: "Transition or trim rub", symptom: "Sound near doorway or wall", check: "Inspect trim, tracks, stair parts, and thresholds." }
    ],
    whatToCheckFirst: [
      "Mark the exact spot where the squeak repeats.",
      "Identify whether the subfloor is wood or concrete.",
      "Check nearby transitions, trim, cabinets, stairs, and doorways.",
      "Look for hollow movement, gaps, peaking, or separation before forcing a repair."
    ],
    whenToCallAPro: [
      "The floor feels soft, unsafe, or is getting louder.",
      "The squeak is paired with gaps, lifting, peaking, or hollow movement.",
      "Stairs, joists, or subfloor panels may be involved.",
      "Repair would require lifting finished flooring."
    ]
  },
  "moisture-level-too-high-for-flooring": {
    group: "hardwood",
    causeRows: [
      { cause: "Concrete moisture", symptom: "Adhesive release, cupping, or musty odor", check: "Use the test method required by the product." },
      { cause: "Wood subfloor moisture", symptom: "Hardwood movement or swelling", check: "Compare subfloor and flooring readings to product limits." },
      { cause: "Unstable room conditions", symptom: "Seasonal gaps or swelling", check: "Check HVAC, humidity, and recent wet work." },
      { cause: "Active leak or water source", symptom: "Localized staining, lifting, or swollen edges", check: "Stop the source before covering the floor." }
    ],
    whatToCheckFirst: [
      "Find the exact moisture test and limit in the flooring instructions.",
      "Identify whether the substrate is concrete, wood, or an existing floor.",
      "Check for active leaks, damp crawlspaces, exterior door issues, and recent wet work.",
      "Confirm the room is conditioned before relying on readings."
    ],
    whenToCallAPro: [
      "The project is over concrete, below grade, or over a crawlspace.",
      "Glue-down flooring, hardwood, or moisture-sensitive products are planned.",
      "There has been a leak, flood, or unknown slab history.",
      "Documented moisture testing is required before installation."
    ]
  },
  "why-is-my-laminate-floor-separating": {
    group: "laminate",
    causeRows: [
      { cause: "Uneven subfloor", symptom: "Gap returns in one traffic path", check: "Check for bounce, low spots, or humps." },
      { cause: "Moisture or humidity", symptom: "Seasonal gaps or swollen edges", check: "Look for leaks, wet cleaning, or humidity swings." },
      { cause: "Pinned floating floor", symptom: "Gaps away from tight trim", check: "Inspect expansion space and fixed objects." },
      { cause: "Damaged locking joint", symptom: "Joint will not stay closed", check: "Inspect plank edges before forcing repair." }
    ],
    whatToCheckFirst: [
      "Mark every gap and note whether it returns after closing.",
      "Check expansion space around walls, door frames, and transitions.",
      "Look for low spots, bounce, or hollow movement near the gap.",
      "Inspect for swollen edges, moisture, or damaged locking tabs."
    ],
    whenToCallAPro: [
      "The same gaps keep reopening.",
      "The floor is lifting, buckling, or spreading across a large area.",
      "Moisture or broken locking joints are suspected.",
      "Repair may require lifting planks or replacing damaged boards."
    ]
  },
  "why-is-my-lvp-floor-clicking": {
    group: "lvp",
    causeRows: [
      { cause: "Low spot under joint", symptom: "Click in the same location", check: "Use a straightedge if the floor can be inspected." },
      { cause: "Damaged locking tab", symptom: "Click plus loose joint", check: "Inspect plank edges and installation damage." },
      { cause: "Unapproved underlayment", symptom: "Soft movement underfoot", check: "Compare pad to the product instructions." },
      { cause: "Pinned floating floor", symptom: "Noise near trim or cabinets", check: "Check expansion and fixed objects." }
    ],
    whatToCheckFirst: [
      "Identify whether the click is local or room-wide.",
      "Check for gaps, lifting, or visible plank movement.",
      "Look for tight transitions, cabinets, islands, or trim.",
      "Review subfloor flatness and underlayment rules."
    ],
    whenToCallAPro: [
      "The click repeats in one high-traffic spot.",
      "The floor is also lifting, separating, or sounding hollow.",
      "A low spot or broken locking joint is likely.",
      "The repair may require lifting part of the floor."
    ]
  },
  "why-is-my-lvp-lifting": {
    group: "lvp",
    causeRows: [
      { cause: "Missing expansion", symptom: "Edges or middle areas lift", check: "Inspect walls, transitions, and fixed objects." },
      { cause: "Moisture", symptom: "Lifting near doors, sinks, or slabs", check: "Check leaks, wet cleaning, and concrete conditions." },
      { cause: "Adhesive failure", symptom: "Glue-down plank releases", check: "Check slab prep, adhesive, and contamination." },
      { cause: "Subfloor flatness", symptom: "Lift with movement or clicking", check: "Look for humps, low spots, or debris." }
    ],
    whatToCheckFirst: [
      "Confirm whether the LVP is floating or glue-down.",
      "Look for moisture before forcing the floor flat.",
      "Check transitions, walls, cabinets, islands, and door jambs.",
      "Inspect nearby subfloor movement or lifted plank edges."
    ],
    whenToCallAPro: [
      "Lifting affects multiple areas.",
      "Moisture, adhesive failure, or slab issues are suspected.",
      "The floor is pinned by cabinets or built-ins.",
      "Locking joints look damaged or planks need replacement."
    ]
  },
  "why-is-my-lvp-floor-separating": {
    group: "lvp",
    causeRows: [
      { cause: "Locking stress", symptom: "End gaps or joints reopening", check: "Inspect locking edges and nearby flex." },
      { cause: "Uneven subfloor", symptom: "Gap returns in one traffic path", check: "Check low spots, humps, and hollow movement." },
      { cause: "Pinned floating floor", symptom: "Gaps near cabinets or transitions", check: "Check expansion space and fixed objects." },
      { cause: "Moisture", symptom: "Swollen edges or lifting", check: "Look for slab moisture, leaks, or wet cleaning." }
    ],
    whatToCheckFirst: [
      "Mark every gap and note whether it reopens after being closed.",
      "Check whether the floor is floating or glue-down.",
      "Inspect expansion space around walls, transitions, cabinets, and islands.",
      "Look for broken locking tabs, swelling, or nearby subfloor flex."
    ],
    whenToCallAPro: [
      "Gaps keep returning after closing.",
      "Several joints are opening or planks are lifting.",
      "The floor may be pinned by cabinets or fixed objects.",
      "Damaged planks may need replacement."
    ]
  },
  "why-is-my-lvp-floor-peaking": {
    group: "lvp",
    causeRows: [
      { cause: "Blocked expansion", symptom: "Raised ridge near walls or transitions", check: "Inspect perimeter gaps, trim, and transition tracks." },
      { cause: "Fixed cabinets or islands", symptom: "Pressure shows away from built-ins", check: "Verify whether the floating floor is pinned." },
      { cause: "Long run pressure", symptom: "Peaking through connected rooms or hallways", check: "Review product limits for expansion breaks." },
      { cause: "Moisture or heat", symptom: "Peaking near doors, slabs, or sunny areas", check: "Check moisture, direct sun, and room conditions." }
    ],
    whatToCheckFirst: [
      "Identify whether the floor is floating or glue-down.",
      "Check expansion space at walls, doorways, transitions, cabinets, and islands.",
      "Look for moisture, heat, or direct sunlight patterns near the peak.",
      "Review long-run and transition requirements before cutting or forcing the floor flat."
    ],
    whenToCallAPro: [
      "The peak is spreading or the planks are separating.",
      "Moisture or slab conditions are suspected.",
      "Cabinets, islands, or built-ins may be pinning the floor.",
      "Planks may need to be lifted or replaced."
    ]
  },
  "why-is-my-laminate-floor-buckling": {
    group: "laminate",
    causeRows: [
      { cause: "Moisture", symptom: "Raised seams or swollen edges", check: "Check leaks, exterior doors, cleaning, and subfloor moisture." },
      { cause: "Blocked expansion", symptom: "Peaking near walls or transitions", check: "Inspect perimeter gaps, trim, and transitions." },
      { cause: "Fixed objects", symptom: "Pressure away from cabinets", check: "Check whether the floating floor is pinned." },
      { cause: "Wrong underlayment", symptom: "Soft movement or buckling", check: "Verify approved pad and no doubled layers." }
    ],
    whatToCheckFirst: [
      "Look for active moisture before stepping the floor flat.",
      "Check raised seams, swollen edges, or soft spots.",
      "Inspect expansion space at walls, doorways, and transitions.",
      "Review underlayment and acclimation requirements."
    ],
    whenToCallAPro: [
      "Buckling is spreading or getting higher.",
      "Water or swelling is visible.",
      "The floor is pinned by fixed objects.",
      "Boards may need to be removed or replaced."
    ]
  },
  "why-is-my-hardwood-floor-cupping": {
    group: "hardwood",
    causeRows: [
      { cause: "Moisture from below", symptom: "Board edges rise", check: "Check crawlspace, slab, leaks, or subfloor moisture." },
      { cause: "High humidity", symptom: "Widespread cupping", check: "Measure indoor humidity and HVAC operation." },
      { cause: "Wet cleaning", symptom: "Localized edge swelling", check: "Review cleaning methods and standing water." },
      { cause: "Early sanding", symptom: "Crowning after repair", check: "Let the floor stabilize before sanding decisions." }
    ],
    whatToCheckFirst: [
      "Find and stop moisture sources before repair.",
      "Measure room humidity and compare affected areas.",
      "Check crawlspaces, basements, slabs, appliances, and plumbing.",
      "Avoid sanding until the floor has stabilized."
    ],
    whenToCallAPro: [
      "Cupping is widespread or worsening.",
      "A leak, slab, crawlspace, or HVAC issue is likely.",
      "The floor was recently installed or sanded.",
      "Moisture readings are needed before repair."
    ]
  },
  "why-is-my-hardwood-floor-gapping": {
    group: "hardwood",
    causeRows: [
      { cause: "Seasonal dryness", symptom: "Small winter gaps", check: "Track indoor humidity and whether gaps close later." },
      { cause: "Poor acclimation", symptom: "Gaps soon after install", check: "Review jobsite conditions and moisture readings." },
      { cause: "Moisture imbalance", symptom: "Gaps plus cupping or crowning", check: "Check crawlspace, slab, leaks, and HVAC." },
      { cause: "Product behavior", symptom: "Wider movement in solid wood", check: "Compare solid vs engineered expectations." }
    ],
    whatToCheckFirst: [
      "Track indoor humidity for several weeks.",
      "Note whether gaps are seasonal, stable, growing, or localized.",
      "Look for cupping, crowning, squeaks, stains, or loose boards.",
      "Review acclimation and moisture readings if available."
    ],
    whenToCallAPro: [
      "Gaps are wide, uneven, or growing.",
      "Gaps do not close seasonally.",
      "The floor also shows cupping, crowning, or moisture signs.",
      "You are considering filler or board replacement."
    ]
  },
  "why-is-my-hardwood-floor-crowning": {
    group: "hardwood",
    causeRows: [
      { cause: "Moisture imbalance", symptom: "Board centers higher than edges", check: "Find moisture sources above or below the boards." },
      { cause: "Sanded too early", symptom: "Crowning after a cupping repair", check: "Review whether sanding happened before the floor dried." },
      { cause: "High humidity or wet cleaning", symptom: "Widespread raised centers or finish changes", check: "Check indoor humidity and cleaning history." },
      { cause: "Slab or crawlspace moisture", symptom: "Crowning with cupping, gaps, or stains", check: "Evaluate concrete, crawlspace, HVAC, and moisture readings." }
    ],
    whatToCheckFirst: [
      "Confirm whether the board shape is crowning or cupping.",
      "Look for leaks, wet cleaning, slab moisture, crawlspace moisture, or HVAC changes.",
      "Check whether the floor was recently sanded or repaired after cupping.",
      "Avoid sanding until moisture readings and stability are confirmed."
    ],
    whenToCallAPro: [
      "Crowning is widespread, worsening, or appeared after a leak.",
      "The floor was recently sanded after cupping.",
      "Concrete, crawlspace, or HVAC conditions may be involved.",
      "You need moisture readings before deciding on repair."
    ]
  },
  "why-are-my-carpet-seams-visible": {
    group: "carpet",
    causeRows: [
      { cause: "Lighting angle", symptom: "Seam shows from one direction", check: "View seam at different times of day." },
      { cause: "Pile direction", symptom: "Color shift across seam", check: "Check nap direction between carpet drops." },
      { cause: "Pattern match", symptom: "Design does not align", check: "Compare repeat alignment at the seam." },
      { cause: "Roll width", symptom: "Seam unavoidable in wide room", check: "Review room width and carpet roll width." }
    ],
    whatToCheckFirst: [
      "Look at the seam from multiple angles and lighting conditions.",
      "Check whether the seam is raised, open, frayed, or separating.",
      "Compare pattern alignment and pile direction.",
      "Confirm whether roll width made a seam unavoidable."
    ],
    whenToCallAPro: [
      "The seam is opening, peaking, fraying, or misaligned.",
      "The seam becomes more visible after stretching or cleaning.",
      "Pattern match appears wrong.",
      "The seam location does not match the agreed layout."
    ]
  },
  "why-is-my-carpet-wrinkling-or-buckling": {
    group: "carpet",
    causeRows: [
      { cause: "Loose stretch", symptom: "Ripples across open room", check: "Ask whether power stretching was used." },
      { cause: "Padding issue", symptom: "Soft movement or early wrinkles", check: "Check pad thickness, density, and condition." },
      { cause: "Furniture movement", symptom: "Wrinkles along traffic paths", check: "Look for dragged furniture or rolling loads." },
      { cause: "Backing failure", symptom: "Bubbles, soft spots, or crunching", check: "Have backing and delamination evaluated." }
    ],
    whatToCheckFirst: [
      "Check whether wrinkles run across the room, near seams, or near furniture paths.",
      "Look for seam opening, fraying, or backing issues.",
      "Review whether the carpet was power-stretched.",
      "Check whether pad thickness and density match carpet requirements."
    ],
    whenToCallAPro: [
      "Wrinkles create a trip hazard.",
      "The carpet is newer or wrinkles are spreading.",
      "Seams are affected.",
      "The carpet feels separated, bubbly, or crunchy."
    ]
  },
  "why-does-my-floor-feel-hollow": {
    group: "laminate",
    causeRows: [
      { cause: "Floating floor sound", symptom: "Hollow sound across whole room", check: "Compare product and underlayment expectations." },
      { cause: "Low spots", symptom: "Localized hollow feel", check: "Check flatness and support under the area." },
      { cause: "Hollow tile", symptom: "Tap sound plus cracked grout", check: "Check for loose tile or poor mortar coverage." },
      { cause: "Glue-down release", symptom: "Area sounds loose or moves", check: "Inspect adhesive bond and moisture." }
    ],
    whatToCheckFirst: [
      "Compare hollow areas to solid-feeling areas.",
      "Check for movement, cracks, gaps, lifting, or soft spots.",
      "Confirm whether the floor is floating, glue-down, or tile.",
      "Look for moisture sources near hollow or loose areas."
    ],
    whenToCallAPro: [
      "The hollow area is localized and getting worse.",
      "Tile or grout is cracking.",
      "Glue-down flooring appears to be releasing.",
      "The floor feels soft, unsafe, or moisture is suspected."
    ]
  },
  "why-is-my-transition-strip-moving": {
    group: "transitions",
    causeRows: [
      { cause: "Wrong profile", symptom: "Trim does not sit securely", check: "Compare T-mold, reducer, end cap, and stair nose needs." },
      { cause: "Loose track", symptom: "Transition pops up", check: "Inspect fasteners, concrete anchors, and track fit." },
      { cause: "Height mismatch", symptom: "Edge rocks or catches", check: "Measure both finished floor heights." },
      { cause: "Floating floor pressure", symptom: "Trim moves with floor", check: "Check expansion space and whether trim pins the floor." }
    ],
    whatToCheckFirst: [
      "Identify the transition profile and both flooring surfaces.",
      "Check whether the trim is loose from the track or the track is loose from the subfloor.",
      "Measure height differences between floors.",
      "Check whether a floating floor is pushing against the transition."
    ],
    whenToCallAPro: [
      "The transition keeps coming loose.",
      "The floor is buckling or peaking nearby.",
      "The transition is on stairs or a high-traffic doorway.",
      "Concrete anchors or height differences need correction."
    ]
  },
  "why-is-my-tile-cracking": {
    group: "tile",
    causeRows: [
      { cause: "Subfloor movement", symptom: "Cracks or grout lines repeating", check: "Check framing, deflection, and underlayment." },
      { cause: "Poor coverage", symptom: "Hollow sound near cracks", check: "Tap nearby tiles and check loose areas." },
      { cause: "Slab crack", symptom: "Crack follows a straight line", check: "Inspect concrete and isolation requirements." },
      { cause: "Expansion movement", symptom: "Cracks near edges or sunny areas", check: "Review movement joints and perimeter gaps." }
    ],
    whatToCheckFirst: [
      "Map whether cracks are isolated, repeating, or in a straight line.",
      "Check for hollow sounds, loose tiles, or cracked grout nearby.",
      "Review subfloor structure and underlayment over wood framing.",
      "Look for slab cracks or moisture over concrete."
    ],
    whenToCallAPro: [
      "Cracks repeat or follow a straight line.",
      "Tiles sound hollow or grout is cracking.",
      "The floor flexes or a slab crack is involved.",
      "The tile is in a wet area or replacement keeps failing."
    ]
  }
};

export function getTroubleshootingFlow(slug: GuideSlug) {
  return troubleshootingFlows[slug];
}

export function getTroubleshootingProblemGroup(slug: TroubleshootingProblemGroupSlug) {
  return troubleshootingProblemGroups.find((group) => group.slug === slug);
}
