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
      "why-is-my-lvp-floor-buckling",
      "why-are-my-lvp-seams-showing",
      "why-is-my-floor-swelling",
      "why-is-my-floor-expanding",
      "why-are-my-flooring-joints-opening",
      "moisture-level-too-high-for-flooring",
      "how-to-test-concrete-moisture",
      "can-moisture-come-through-concrete",
      "subfloor-flatness-requirements-lvp",
      "can-you-install-lvp-over-concrete",
      "what-happens-if-flooring-is-installed-too-soon",
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
      "why-is-my-floor-bouncing",
      "why-are-my-flooring-joints-opening",
      "why-is-my-floor-swelling",
      "why-is-my-floor-expanding",
      "why-is-my-subfloor-wet",
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
      "why-is-my-engineered-hardwood-separating",
      "why-are-my-flooring-joints-opening",
      "why-is-my-floor-swelling",
      "why-is-my-subfloor-wet",
      "why-is-my-floor-expanding",
      "why-is-my-floor-squeaking",
      "hardwood-installation-humidity",
      "how-long-should-hardwood-acclimate",
      "hardwood-acclimation-mistakes",
      "what-happens-if-flooring-is-installed-too-soon",
      "can-engineered-hardwood-go-over-concrete",
      "how-to-test-concrete-moisture",
      "can-moisture-come-through-concrete",
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
      "why-flooring-fails-over-concrete",
      "common-basement-flooring-problems",
      "why-is-my-subfloor-wet",
      "can-moisture-come-through-concrete",
      "what-happens-if-flooring-is-installed-too-soon",
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
  "why-is-my-floor-bouncing": {
    group: "laminate",
    causeRows: [
      { cause: "Joist or subfloor movement", symptom: "Springy feel across a wider area", check: "Check framing, subfloor panels, and whether movement changes under load." },
      { cause: "Low spot under floating floor", symptom: "Bounce in one traffic path", check: "Look for hollow movement, clicking, or gaps near the soft area." },
      { cause: "Soft or wrong underlayment", symptom: "Cushioned feel with joint stress", check: "Verify pad thickness, density, and product approval." },
      { cause: "Loose subfloor panels", symptom: "Bounce with squeaks or rubbing", check: "Inspect from below if accessible and look for panel movement." }
    ],
    whatToCheckFirst: [
      "Mark whether the bounce is localized, room-wide, or only in a traffic path.",
      "Identify whether the substrate is wood framing or concrete.",
      "Look for squeaks, hollow sounds, clicking, gaps, cracked grout, or lifted planks.",
      "Review underlayment approval and subfloor flatness if the floor is floating."
    ],
    whenToCallAPro: [
      "The floor feels unsafe, springy, or is getting worse.",
      "Tile is cracking, laminate or LVP joints are opening, or hardwood is moving.",
      "Joists, beams, stairs, or structural framing may be involved.",
      "Repair would require lifting finished flooring or evaluating framing."
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
  "why-is-my-floor-swelling": {
    group: "laminate",
    causeRows: [
      { cause: "Moisture exposure", symptom: "Raised seams, swollen edges, or soft spots", check: "Look for leaks, wet cleaning, pet accidents, or exterior door water." },
      { cause: "High humidity", symptom: "Widespread swelling or seasonal movement", check: "Measure indoor humidity and check HVAC operation." },
      { cause: "Wet subfloor or slab", symptom: "Swelling with odor, hollow sound, or recurring gaps", check: "Check subfloor moisture and concrete testing requirements." },
      { cause: "Blocked expansion", symptom: "Peaking, buckling, or tight trim", check: "Inspect walls, transitions, cabinets, and islands." }
    ],
    whatToCheckFirst: [
      "Stop any active leak or water source first.",
      "Identify whether the finished flooring is laminate, LVP, hardwood, engineered hardwood, or tile.",
      "Check the subfloor, slab, crawlspace, and nearby exterior openings.",
      "Look for related symptoms such as peaking, buckling, cupping, or separation."
    ],
    whenToCallAPro: [
      "Swelling is spreading, soft, or paired with odor or stains.",
      "The moisture source is unclear or below the finished floor.",
      "The floor is over concrete, crawlspace, or a recent leak.",
      "Boards, planks, adhesive, or subfloor panels may need replacement."
    ]
  },
  "why-is-my-subfloor-wet": {
    group: "hardwood",
    causeRows: [
      { cause: "Plumbing or appliance leak", symptom: "Localized wetness near kitchen, bath, laundry, or refrigerator", check: "Inspect supply lines, drains, toilets, and appliance connections." },
      { cause: "Crawlspace or basement moisture", symptom: "Widespread dampness, odor, or hardwood movement", check: "Check ventilation, vapor control, drainage, and humidity." },
      { cause: "Concrete vapor", symptom: "Moisture under floating floors or adhesive problems", check: "Use the slab test required by the flooring system." },
      { cause: "Construction moisture", symptom: "Wet subfloor after remodel or new work", check: "Confirm wet trades, patching, and HVAC conditions are stable." }
    ],
    whatToCheckFirst: [
      "Find and stop active water before planning flooring repairs.",
      "Identify the substrate: plywood, OSB, concrete, or an existing floor.",
      "Look for staining, softness, odor, swelling, or mold-like growth.",
      "Take moisture readings when repair decisions depend on dryness."
    ],
    whenToCallAPro: [
      "The wet area is large, hidden, recurring, or near structural components.",
      "The floor feels soft or unsafe.",
      "Concrete, crawlspace, or foundation moisture is suspected.",
      "Flooring must be removed to inspect or dry the subfloor."
    ]
  },
  "can-moisture-come-through-concrete": {
    group: "hardwood",
    causeRows: [
      { cause: "Ground vapor below slab", symptom: "Musty odor, adhesive failure, or damp flooring", check: "Review slab grade, vapor retarder history, and moisture tests." },
      { cause: "New or recently patched concrete", symptom: "Surface looks dry but readings are high", check: "Use the test method required by the product." },
      { cause: "Basement conditions", symptom: "Seasonal dampness or repeated flooring issues", check: "Check drainage, humidity, walls, and slab moisture." },
      { cause: "Wrong vapor system", symptom: "Trapped moisture or failed bond", check: "Verify vapor barrier, adhesive, primer, and underlayment compatibility." }
    ],
    whatToCheckFirst: [
      "Check the exact flooring and adhesive instructions for required testing.",
      "Identify whether the slab is above grade, on grade, or below grade.",
      "Look for efflorescence, musty odor, old adhesive, sealers, stains, or prior failures.",
      "Do not rely on appearance alone to approve a concrete slab."
    ],
    whenToCallAPro: [
      "The project is below grade or the slab history is unknown.",
      "Glue-down flooring or engineered hardwood is planned.",
      "Previous flooring failed over the same slab.",
      "Moisture mitigation may be required."
    ]
  },
  "why-is-my-floor-expanding": {
    group: "lvp",
    causeRows: [
      { cause: "Humidity or moisture", symptom: "Swelling, cupping, or seasonal tightness", check: "Measure room humidity and look for water sources." },
      { cause: "Blocked expansion", symptom: "Peaking or buckling near walls and transitions", check: "Inspect trim, tracks, door jambs, cabinets, and islands." },
      { cause: "Temperature movement", symptom: "Movement near sun, doors, or heat sources", check: "Check direct sunlight, room temperature, and product limits." },
      { cause: "Long connected runs", symptom: "Pressure through hallways or open rooms", check: "Review expansion break and transition requirements." }
    ],
    whatToCheckFirst: [
      "Identify the flooring type and whether it is floating, glue-down, nailed, or tile-set.",
      "Check room humidity, temperature changes, sunlight, and moisture sources.",
      "Inspect expansion space around all edges and fixed objects.",
      "Look for related buckling, peaking, swelling, or joint openings."
    ],
    whenToCallAPro: [
      "The floor is lifting, buckling, peaking, or pushing transitions loose.",
      "Moisture or slab conditions are suspected.",
      "A floating floor may be pinned by cabinets or islands.",
      "The repair may require cutting relief, lifting flooring, or replacing damaged material."
    ]
  },
  "what-happens-if-flooring-is-installed-too-soon": {
    group: "hardwood",
    causeRows: [
      { cause: "Unstable HVAC or humidity", symptom: "Gaps, swelling, cupping, or crowning", check: "Review room conditions before and during installation." },
      { cause: "Concrete not tested or dry enough", symptom: "Adhesive release, hollow sound, or moisture problems", check: "Check slab testing and product limits." },
      { cause: "Poor acclimation or storage", symptom: "Hardwood movement or LVP joint stress", check: "Review delivery, storage, and acclimation instructions." },
      { cause: "Subfloor not ready", symptom: "Clicking, bounce, cracks, or separation", check: "Check flatness, cleanliness, moisture, and loose panels." }
    ],
    whatToCheckFirst: [
      "Review the installation timeline and jobsite conditions.",
      "Look for moisture tests, acclimation records, HVAC status, and slab prep notes.",
      "Match the symptom to the flooring type and installation method.",
      "Document conditions before replacing or repairing material."
    ],
    whenToCallAPro: [
      "Moisture, concrete, adhesive, hardwood movement, or tile cracks are involved.",
      "The same problem returned after a repair.",
      "The project lacks moisture testing or installation records.",
      "Large areas may need removal before the cause is visible."
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
  "why-are-my-flooring-joints-opening": {
    group: "lvp",
    causeRows: [
      { cause: "Seasonal movement", symptom: "Gaps change with humidity", check: "Track indoor humidity and whether gaps open or close seasonally." },
      { cause: "Unsupported floating floor joints", symptom: "Gaps near bounce or hollow movement", check: "Check subfloor flatness and support under the joints." },
      { cause: "Pinned floating floor", symptom: "Gaps away from tight trim or fixed objects", check: "Inspect cabinets, islands, transitions, trim, and perimeter space." },
      { cause: "Damaged locking edges", symptom: "Joint will not stay closed", check: "Inspect plank edges before forcing repair or filling." }
    ],
    whatToCheckFirst: [
      "Identify the flooring type and whether it is floating, glue-down, nailed, or stapled.",
      "Map where the joints are opening and whether they are widening.",
      "Check humidity, moisture history, and recent seasonal changes.",
      "Look for bounce, clicking, peaking, lifting, or hollow movement near the openings."
    ],
    whenToCallAPro: [
      "Joints keep reopening after being closed.",
      "Gaps are spreading, lifting, or paired with moisture signs.",
      "Hardwood gaps are wide, uneven, or not seasonal.",
      "Repair may require lifting planks, replacing damaged boards, or checking moisture."
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
  "why-is-my-lvp-floor-buckling": {
    group: "lvp",
    causeRows: [
      { cause: "Blocked expansion", symptom: "Raised or tented area near walls or transitions", check: "Inspect perimeter gaps, trim, transition tracks, and door jambs." },
      { cause: "Fixed objects pinning the floor", symptom: "Buckling near cabinets or islands", check: "Verify whether the floating floor is trapped by built-ins." },
      { cause: "Moisture or heat movement", symptom: "Buckling near doors, slabs, appliances, or sunny areas", check: "Check moisture, temperature swings, and direct sunlight." },
      { cause: "Long run pressure", symptom: "Buckling through connected rooms", check: "Review product limits for expansion breaks and transitions." }
    ],
    whatToCheckFirst: [
      "Confirm whether the LVP is floating or glue-down.",
      "Check walls, transitions, door jambs, cabinets, and islands for trapped movement.",
      "Look for moisture, heat, or direct sunlight patterns near the buckled area.",
      "Do not force planks flat until pressure or moisture is addressed."
    ],
    whenToCallAPro: [
      "Buckling is spreading or damaging locking joints.",
      "Moisture, slab conditions, or adhesive release may be involved.",
      "Cabinets, islands, or built-ins may be pinning the floor.",
      "The repair may require lifting rows or replacing damaged planks."
    ]
  },
  "why-are-my-lvp-seams-showing": {
    group: "lvp",
    causeRows: [
      { cause: "Normal bevel or lighting", symptom: "Even seams visible in low-angle light", check: "View from multiple angles and compare across the room." },
      { cause: "Joint movement", symptom: "Seam opens, clicks, or collects dirt", check: "Check support, expansion pressure, and locking edges." },
      { cause: "Uneven subfloor", symptom: "Seams show in one traffic path", check: "Look for bounce, hollow feel, or low spots." },
      { cause: "Damaged or dirty locking joint", symptom: "One seam sits unevenly", check: "Inspect for debris, chipped corners, or damaged tabs." }
    ],
    whatToCheckFirst: [
      "Decide whether the seam is only visible or actually open, lifted, or moving.",
      "Look for clicking, hollow sound, dirt collection, or height differences.",
      "Check whether sunlight or long sight lines are making normal bevels more obvious.",
      "Review subfloor support and expansion space if multiple seams are changing."
    ],
    whenToCallAPro: [
      "Seams are widening, lifting, clicking, or collecting dirt.",
      "Visible seams follow low spots, moisture areas, or long connected runs.",
      "Locking edges may be damaged.",
      "Repair requires lifting planks to inspect the subfloor or joint."
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
  "why-is-my-engineered-hardwood-separating": {
    group: "hardwood",
    causeRows: [
      { cause: "Humidity or poor acclimation", symptom: "Gaps soon after install or seasonal movement", check: "Review HVAC stability, jobsite conditions, and moisture readings." },
      { cause: "Concrete slab moisture", symptom: "Gaps with cupping, hollow areas, or adhesive issues", check: "Check slab moisture testing and moisture-control requirements." },
      { cause: "Floating floor stress", symptom: "Joints reopen over low spots or near fixed objects", check: "Inspect flatness, expansion space, cabinets, and transitions." },
      { cause: "Glue-down bond failure", symptom: "Loose or hollow boards", check: "Evaluate adhesive compatibility, slab prep, and contamination." }
    ],
    whatToCheckFirst: [
      "Identify whether the engineered hardwood is floating, glue-down, nail-down, or staple-down.",
      "Map where gaps appear and whether they are widening.",
      "Check indoor humidity, acclimation records, and subfloor or slab moisture requirements.",
      "Look for hollow sounds, cupping, crowning, loose boards, or fixed objects pinning the floor."
    ],
    whenToCallAPro: [
      "Separation is spreading or boards are loose.",
      "The floor is installed over concrete or moisture is suspected.",
      "Hollow sounds, adhesive release, cupping, or crowning are present.",
      "Repair may require lifting or replacing boards."
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
