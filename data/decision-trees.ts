import type { GuideSlug, ToolSlug } from "@/data/types";

export type DecisionTreeUrgency =
  | "Monitor / compare symptoms"
  | "Needs inspection"
  | "Possible moisture concern"
  | "Professional review recommended"
  | "Possible structural concern";

export type DecisionTreeOption = {
  label: string;
  nextQuestionId?: string;
  resultId?: string;
};

export type DecisionTreeQuestion = {
  id: string;
  question: string;
  helperText: string;
  options: DecisionTreeOption[];
};

export type DecisionTreeResult = {
  id: string;
  title: string;
  likelyCause: string;
  summary: string;
  urgency: DecisionTreeUrgency;
  whatToCheckFirst: string[];
  whenToCallAPro: string[];
  relatedGuides: GuideSlug[];
  relatedCalculators: ToolSlug[];
};

export type DecisionTree = {
  id: string;
  title: string;
  description: string;
  startingQuestionId: string;
  questions: DecisionTreeQuestion[];
  results: DecisionTreeResult[];
};

export const decisionTrees: DecisionTree[] = [
  {
    id: "floor-clicking",
    title: "Floor Clicking",
    description: "Narrow down repeated clicks, snaps, hollow sounds, and movement under foot.",
    startingQuestionId: "clicking-when",
    questions: [
      {
        id: "clicking-when",
        question: "Does the clicking happen mainly when someone walks on the floor?",
        helperText: "A click that repeats under foot often points to movement, support, underlayment, or a stressed joint.",
        options: [
          { label: "Yes, mostly when walking", nextQuestionId: "clicking-install-method" },
          { label: "No, it sounds like broader floor movement", nextQuestionId: "clicking-bounce" },
          { label: "It is paired with raised planks or gaps", resultId: "clicking-with-separation" }
        ]
      },
      {
        id: "clicking-install-method",
        question: "Is the floor floating, glue-down, or are you not sure?",
        helperText: "Floating floors and glue-down floors fail or move for different reasons.",
        options: [
          { label: "Floating LVP, laminate, or engineered floor", nextQuestionId: "clicking-age" },
          { label: "Glue-down flooring over concrete", resultId: "clicking-glue-down-slab" },
          { label: "Not sure", nextQuestionId: "clicking-hollow" }
        ]
      },
      {
        id: "clicking-age",
        question: "Is the installation new or did the sound appear after a change?",
        helperText: "Recent installation, new trim, furniture, humidity, or temperature changes can all affect movement.",
        options: [
          { label: "New install or recent repair", nextQuestionId: "clicking-hollow" },
          { label: "Older floor with seasonal changes", nextQuestionId: "clicking-moisture" },
          { label: "After cabinets, trim, or transitions changed", resultId: "clicking-pinned-floor" }
        ]
      },
      {
        id: "clicking-hollow",
        question: "Do you also feel a low spot, hollow sound, or bounce?",
        helperText: "A hollow or springy feel can point to substrate support before the finished floor is blamed.",
        options: [
          { label: "Yes, hollow or low spot", resultId: "clicking-low-spot" },
          { label: "Yes, bouncy or springy", resultId: "clicking-bounce-support" },
          { label: "No, it is mostly a click at the joint", resultId: "clicking-joint-stress" }
        ]
      },
      {
        id: "clicking-bounce",
        question: "Does the floor feel soft, springy, sagging, or unsafe?",
        helperText: "Strong bounce or sagging should be treated more cautiously than a small repeatable click.",
        options: [
          { label: "Yes, it feels soft or unsafe", resultId: "clicking-possible-structure" },
          { label: "No, mostly sound", resultId: "clicking-low-spot" },
          { label: "It changes with seasons", resultId: "clicking-moisture-movement" }
        ]
      },
      {
        id: "clicking-moisture",
        question: "Did the sound appear with humidity, moisture, temperature, or slab conditions?",
        helperText: "Moisture and temperature movement can stress floating floors, wood floors, and slab installations.",
        options: [
          { label: "Yes, moisture or humidity may be involved", resultId: "clicking-moisture-movement" },
          { label: "No obvious moisture clues", resultId: "clicking-joint-stress" },
          { label: "The floor is over concrete", resultId: "clicking-glue-down-slab" }
        ]
      }
    ],
    results: [
      {
        id: "clicking-low-spot",
        title: "Movement over a low spot or hollow area",
        likelyCause: "The floor may be flexing over an uneven or unsupported area.",
        summary: "Low spots, soft underlayment, slab flatness, or loose subfloor support can create a repeatable click.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Mark the exact traffic path where the sound repeats.",
          "Compare the area with nearby boards for hollow sound or flex.",
          "Review subfloor flatness and underlayment approval for the exact product."
        ],
        whenToCallAPro: [
          "The click is spreading.",
          "The floor feels hollow, soft, or bouncy.",
          "Repair would require lifting planks or evaluating the substrate."
        ],
        relatedGuides: [
          "why-is-my-lvp-floor-clicking",
          "is-floor-clicking-normal",
          "why-does-my-floor-feel-hollow",
          "subfloor-flatness-requirements-lvp",
          "flooring-movement-problems",
          "is-this-flooring-movement-normal",
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "clicking-bounce-support",
        title: "Bounce or subfloor support movement",
        likelyCause: "The sound may be connected to underlayment compression, loose panels, or framing/subfloor movement.",
        summary: "A floor that sounds and feels bouncy should be checked differently than a sound-only floating-floor click.",
        urgency: "Possible structural concern",
        whatToCheckFirst: [
          "Compare the bounce to nearby rooms.",
          "Look for squeaks, hollow sound, cracks, gaps, or soft spots.",
          "Identify whether the floor is over concrete, wood framing, basement, or crawlspace."
        ],
        whenToCallAPro: [
          "The floor feels unsafe, soft, sagging, or strongly springy.",
          "Tile is cracking or joints are opening near the bounce.",
          "The issue involves stairs, joists, beams, or a large area."
        ],
        relatedGuides: [
          "why-is-my-floor-bouncing",
          "are-bouncy-floors-dangerous",
          "why-is-my-floor-squeaking",
          "flooring-movement-problems"
        ],
        relatedCalculators: ["flooring-square-footage-calculator"]
      },
      {
        id: "clicking-joint-stress",
        title: "Locking joint or floating-floor stress",
        likelyCause: "A locking joint may be stressed by movement, debris, tight trim, or small substrate irregularities.",
        summary: "This is common with floating LVP and laminate, but the product instructions and field conditions still matter.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check whether gaps, lifting, peaking, or visible seam stress are present.",
          "Look for tight transitions, trim, cabinets, islands, or door jambs.",
          "Compare the issue with clicking vs lifting before forcing the joint."
        ],
        whenToCallAPro: [
          "The sound follows a long traffic path.",
          "Joints are separating or planks are lifting.",
          "The repair may require removing trim or lifting boards."
        ],
        relatedGuides: [
          "clicking-vs-lifting-flooring",
          "why-is-my-lvp-floor-clicking",
          "why-is-my-laminate-floor-separating",
          "is-floor-separation-serious",
          "flooring-symptom-comparison-guide"
        ],
        relatedCalculators: ["transition-estimator", "waste-calculator"]
      },
      {
        id: "clicking-pinned-floor",
        title: "Pinned floating floor or transition pressure",
        likelyCause: "A floating floor may be trapped by trim, cabinets, islands, doorways, or transitions.",
        summary: "Floating floors usually need the movement space required by the manufacturer. Pinning can turn sound into peaking, lifting, or gaps.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check walls, transitions, cabinets, islands, and doorways for tight pressure.",
          "Review expansion and movement-break requirements for the exact product.",
          "Do not fasten or glue a floating floor to stop noise unless the instructions allow it."
        ],
        whenToCallAPro: [
          "Peaking or lifting is starting.",
          "A transition or trim piece appears to be trapping the floor.",
          "Cabinets or heavy fixed objects may be installed over floating flooring."
        ],
        relatedGuides: [
          "can-you-install-cabinets-over-floating-lvp",
          "why-is-my-lvp-floor-peaking",
          "why-is-my-transition-strip-moving",
          "flooring-movement-problems"
        ],
        relatedCalculators: ["transition-estimator"]
      },
      {
        id: "clicking-moisture-movement",
        title: "Moisture or seasonal movement stress",
        likelyCause: "Humidity, temperature, slab moisture, or wet subfloor conditions may be changing the floor system.",
        summary: "Moisture can make a sound problem look like simple movement. Rule out active moisture before repair.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Check for swelling, odor, stains, cupping, or recent leaks.",
          "Review indoor humidity and recent HVAC changes.",
          "If over concrete, review moisture testing requirements before repair."
        ],
        whenToCallAPro: [
          "There is odor, swelling, soft subfloor, or recurring dampness.",
          "The floor is over concrete or in a basement.",
          "A previous floor failed in the same area."
        ],
        relatedGuides: [
          "flooring-moisture-problems",
          "when-to-stop-floor-installation",
          "moisture-vs-acclimation-problems",
          "how-to-test-concrete-moisture",
          "why-is-my-floor-swelling"
        ],
        relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"]
      },
      {
        id: "clicking-glue-down-slab",
        title: "Glue-down or slab bond concern",
        likelyCause: "A glue-down floor over concrete may be affected by bond, moisture, surface prep, or slab flatness.",
        summary: "Concrete-related symptoms should be checked against the flooring and adhesive system requirements.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Look for hollow sound, lifting, adhesive release, dust, sealer, cracks, or dampness.",
          "Check whether moisture testing was required for the product and adhesive.",
          "Review whether the slab was clean, dry, smooth, sound, and compatible."
        ],
        whenToCallAPro: [
          "The floor is releasing or sounding hollow in multiple areas.",
          "Concrete moisture, contaminants, or adhesive failure are suspected.",
          "The repair may involve grinding, patching, testing, or removing flooring."
        ],
        relatedGuides: [
          "why-flooring-fails-over-concrete",
          "concrete-floor-problems",
          "how-to-test-concrete-moisture",
          "can-you-install-lvp-over-concrete"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "clicking-with-separation",
        title: "Clicking paired with separation or lifted joints",
        likelyCause: "The click may be a symptom of joint stress, unsupported flooring, moisture movement, or damaged locking edges.",
        summary: "When sound appears with visible gaps or raised areas, use a movement/separation path instead of a sound-only path.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Map where the gaps or raised areas appear.",
          "Check for peaking, lifting, swelling, or hollow movement.",
          "Review moisture, flatness, expansion space, and locking-system condition."
        ],
        whenToCallAPro: [
          "The gap keeps returning after tapping boards together.",
          "Raised seams create a trip concern.",
          "Moisture or substrate problems may be involved."
        ],
        relatedGuides: [
          "flooring-separation-problems",
          "why-is-my-lvp-floor-separating",
          "why-is-my-laminate-floor-separating",
          "why-are-my-flooring-joints-opening"
        ],
        relatedCalculators: ["waste-calculator", "transition-estimator"]
      },
      {
        id: "clicking-possible-structure",
        title: "Possible structural or framing movement",
        likelyCause: "Strong bounce, sagging, or unsafe movement may involve subfloor panels, framing, joists, beams, or stairs.",
        summary: "Do not diagnose structure from a surface symptom alone. Treat unsafe movement as a professional-inspection issue.",
        urgency: "Possible structural concern",
        whatToCheckFirst: [
          "Check whether the floor feels unsafe, sagging, or soft.",
          "Look for cracking tile, spreading gaps, stair movement, or large-area movement.",
          "Separate finished-floor symptoms from possible framing or subfloor movement."
        ],
        whenToCallAPro: [
          "The floor feels unsafe or sagging.",
          "Movement is strong, spreading, or tied to stairs or framing.",
          "There are cracks, soft areas, or structural elements involved."
        ],
        relatedGuides: [
          "are-bouncy-floors-dangerous",
          "why-is-my-floor-bouncing",
          "why-is-my-floor-squeaking",
          "flooring-movement-problems"
        ],
        relatedCalculators: ["flooring-square-footage-calculator"]
      }
    ]
  },
  {
    id: "floor-separating",
    title: "Floor Separating",
    description: "Trace open joints, seasonal gaps, LVP separation, laminate gaps, and engineered hardwood separation.",
    startingQuestionId: "separating-material",
    questions: [
      {
        id: "separating-material",
        question: "Which flooring type is separating?",
        helperText: "Material matters because LVP, laminate, hardwood, and glue-down flooring move differently.",
        options: [
          { label: "LVP or vinyl plank", nextQuestionId: "separating-pattern" },
          { label: "Laminate", nextQuestionId: "separating-pattern" },
          { label: "Hardwood or engineered hardwood", nextQuestionId: "separating-seasonal" }
        ]
      },
      {
        id: "separating-pattern",
        question: "Are the gaps mostly at plank ends, side joints, doorways, or a long run?",
        helperText: "The gap pattern helps separate locking stress, expansion restrictions, and support problems.",
        options: [
          { label: "End joints or side joints", nextQuestionId: "separating-support" },
          { label: "Doorways, transitions, or long runs", resultId: "separating-expansion-pressure" },
          { label: "Random gaps across the room", nextQuestionId: "separating-moisture" }
        ]
      },
      {
        id: "separating-support",
        question: "Do the gaps come with clicking, bounce, or hollow sound?",
        helperText: "Movement near a gap often points to support, flatness, or locking-system stress.",
        options: [
          { label: "Yes, clicking or hollow sound", resultId: "separating-support-movement" },
          { label: "No, mostly visible gaps", nextQuestionId: "separating-moisture" },
          { label: "The gap returns after being closed", resultId: "separating-locking-damage" }
        ]
      },
      {
        id: "separating-moisture",
        question: "Did this appear with humidity, moisture, temperature, or a concrete slab?",
        helperText: "Moisture and humidity changes can shrink, swell, or stress multiple flooring systems.",
        options: [
          { label: "Yes, moisture or humidity may be involved", resultId: "separating-moisture-humidity" },
          { label: "No obvious moisture clues", resultId: "separating-locking-damage" },
          { label: "It is over concrete", resultId: "separating-concrete-system" }
        ]
      },
      {
        id: "separating-seasonal",
        question: "Do the gaps change with seasons or indoor humidity?",
        helperText: "Wood movement can be seasonal, but widening or moisture-linked separation still needs review.",
        options: [
          { label: "Yes, seasonal or humidity-related", resultId: "separating-seasonal-wood" },
          { label: "No, gaps are widening or new", nextQuestionId: "separating-moisture" },
          { label: "It is engineered hardwood over concrete", resultId: "separating-concrete-system" }
        ]
      }
    ],
    results: [
      {
        id: "separating-support-movement",
        title: "Unsupported joint or subfloor movement",
        likelyCause: "The floor may be flexing at a joint because of low spots, underlayment, or subfloor movement.",
        summary: "Gaps plus clicking or hollow sound are often a movement clue, not just a visual seam issue.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Mark the gap locations and nearby sounds.",
          "Check support, flatness, underlayment, and whether joints are damaged.",
          "Avoid tapping joints closed repeatedly without checking the cause."
        ],
        whenToCallAPro: [
          "Gaps keep returning.",
          "The floor clicks, bounces, or sounds hollow near the gap.",
          "The repair requires lifting flooring to inspect the substrate."
        ],
        relatedGuides: [
          "flooring-separation-problems",
          "why-is-my-lvp-floor-separating",
          "why-is-my-laminate-floor-separating",
          "how-to-fix-laminate-floor-separation",
          "why-does-my-floor-feel-hollow"
        ],
        relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"]
      },
      {
        id: "separating-expansion-pressure",
        title: "Expansion pressure or pinned floating floor",
        likelyCause: "Transitions, cabinets, islands, long runs, or tight trim may be stopping the floor from moving as designed.",
        summary: "Expansion pressure can show as gaps, peaking, lifting, or buckling depending on where the floor is trapped.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check doorways, transition tracks, cabinets, islands, fireplaces, and perimeter gaps.",
          "Review product movement-break and expansion requirements.",
          "Look for peaking or buckling near the same area."
        ],
        whenToCallAPro: [
          "A transition or cabinet appears to pin the floor.",
          "Peaking or buckling is starting.",
          "The layout has long connected runs."
        ],
        relatedGuides: [
          "why-is-my-lvp-floor-peaking",
          "why-is-my-lvp-floor-buckling",
          "can-you-install-cabinets-over-floating-lvp",
          "flooring-movement-problems"
        ],
        relatedCalculators: ["transition-estimator", "waste-calculator"]
      },
      {
        id: "separating-locking-damage",
        title: "Damaged locking system, bond issue, or repeated joint stress",
        likelyCause: "A joint that reopens may have damaged locking edges, adhesive release, debris, or repeated movement stress.",
        summary: "The visible gap is usually the result of movement or bond failure, not proof of product defect by itself.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check if the joint edge is damaged or contaminated.",
          "Review whether the floor is floating or glue-down.",
          "Look for nearby low spots, moisture, pressure points, or debris."
        ],
        whenToCallAPro: [
          "The gap reopens after repair.",
          "Multiple joints are affected.",
          "A glue-down floor or engineered hardwood bond may be involved."
        ],
        relatedGuides: [
          "why-are-my-flooring-joints-opening",
          "laminate-floor-separation-repair-guide",
          "laminate-floor-not-clicking-together",
          "can-i-keep-installing-laminate",
          "why-is-my-engineered-hardwood-separating",
          "laminate-floor-separating-what-to-check-first",
          "flooring-symptom-comparison-guide"
        ],
        relatedCalculators: ["waste-calculator"]
      },
      {
        id: "separating-moisture-humidity",
        title: "Moisture, humidity, or seasonal movement",
        likelyCause: "Room humidity, wet substrate, slab moisture, or seasonal wood movement may be affecting dimensions.",
        summary: "Moisture and acclimation issues can look like separation. Rule out moisture before closing gaps permanently.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Check indoor humidity and recent HVAC changes.",
          "Look for swelling, odor, stains, cupping, or buckling.",
          "Review moisture testing if the floor is over concrete."
        ],
        whenToCallAPro: [
          "Gaps are widening or paired with swelling.",
          "Concrete, basement, crawlspace, or wet subfloor conditions are possible.",
          "Engineered hardwood or hardwood separation appears after installation."
        ],
        relatedGuides: [
          "flooring-moisture-problems",
          "moisture-vs-acclimation-problems",
          "why-is-my-hardwood-floor-gapping",
          "why-is-my-engineered-hardwood-separating"
        ],
        relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"]
      },
      {
        id: "separating-concrete-system",
        title: "Concrete slab, adhesive, or moisture-system concern",
        likelyCause: "Concrete moisture, adhesive compatibility, slab flatness, or installation method may be stressing the floor.",
        summary: "Floors over concrete should be checked against slab moisture, preparation, and manufacturer requirements.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Check whether slab moisture testing was required or performed.",
          "Look for adhesive release, hollow sound, cracks, dust, or contaminants.",
          "Review floating vs glue-down requirements for the product."
        ],
        whenToCallAPro: [
          "The floor failed once already over concrete.",
          "There is odor, dampness, adhesive release, or hollow sound.",
          "Moisture mitigation, grinding, patching, or testing may be needed."
        ],
        relatedGuides: [
          "concrete-floor-problems",
          "why-flooring-fails-over-concrete",
          "how-to-test-concrete-moisture",
          "can-engineered-hardwood-go-over-concrete"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "separating-seasonal-wood",
        title: "Seasonal hardwood movement",
        likelyCause: "Wood flooring may expand and contract with indoor humidity, but the amount and pattern still matter.",
        summary: "Small seasonal gaps can be normal, while widening, uneven, or moisture-linked gaps deserve review.",
        urgency: "Monitor / compare symptoms",
        whatToCheckFirst: [
          "Track indoor humidity and whether gaps close seasonally.",
          "Compare solid hardwood, engineered hardwood, and installation method.",
          "Look for cupping, crowning, swelling, or concrete/slab moisture clues."
        ],
        whenToCallAPro: [
          "Gaps are wide, spreading, or not seasonal.",
          "The floor is over concrete or has moisture symptoms.",
          "Filling or refinishing is being considered."
        ],
        relatedGuides: [
          "why-is-my-hardwood-floor-gapping",
          "hardwood-installation-humidity",
          "how-long-should-hardwood-acclimate",
          "seasonal-flooring-movement"
        ],
        relatedCalculators: ["waste-calculator"]
      }
    ]
  },
  {
    id: "floor-buckling",
    title: "Floor Buckling",
    description: "Sort buckling, peaking, raised seams, pressure, trapped movement, and moisture clues.",
    startingQuestionId: "buckling-shape",
    questions: [
      {
        id: "buckling-shape",
        question: "Is the raised area a seam ridge or a broader lifted area?",
        helperText: "Peaking is usually a raised ridge at a joint. Buckling is often broader upward movement.",
        options: [
          { label: "Raised seam or ridge", resultId: "buckling-peaking-pressure" },
          { label: "Broad lifted or bowed area", nextQuestionId: "buckling-moisture" },
          { label: "Not sure", nextQuestionId: "buckling-material" }
        ]
      },
      {
        id: "buckling-moisture",
        question: "Did this happen after water, humidity, wet cleaning, or slab moisture?",
        helperText: "Moisture is a common reason floors expand and buckle.",
        options: [
          { label: "Yes, moisture may be involved", resultId: "buckling-moisture" },
          { label: "No obvious moisture", nextQuestionId: "buckling-fixed-objects" },
          { label: "It is in a basement or over concrete", resultId: "buckling-concrete" }
        ]
      },
      {
        id: "buckling-fixed-objects",
        question: "Could the floor be trapped by cabinets, islands, walls, or transitions?",
        helperText: "Floating floors often need room to move according to product requirements.",
        options: [
          { label: "Yes, a fixed object may be pinning it", resultId: "buckling-pinned" },
          { label: "No, not obvious", nextQuestionId: "buckling-material" },
          { label: "It follows a long run or doorway", resultId: "buckling-expansion-run" }
        ]
      },
      {
        id: "buckling-material",
        question: "Which floor type is buckling?",
        helperText: "Laminate, LVP, hardwood, tile, and carpet use different install systems.",
        options: [
          { label: "LVP or vinyl plank", resultId: "buckling-lvp" },
          { label: "Laminate", resultId: "buckling-laminate" },
          { label: "Hardwood or engineered hardwood", resultId: "buckling-wood-moisture" }
        ]
      }
    ],
    results: [
      {
        id: "buckling-peaking-pressure",
        title: "Peaking from pressure at a seam",
        likelyCause: "A joint may be rising because the floor is under pressure from expansion, heat, moisture, or pinning.",
        summary: "Peaking should be checked before the seam or locking system is damaged further.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check expansion space at walls and transitions.",
          "Look for nearby fixed cabinets, islands, or trim pressure.",
          "Review buckling vs peaking to confirm the symptom shape."
        ],
        whenToCallAPro: [
          "The ridge is growing.",
          "Moisture or swelling is present.",
          "Relieving trim or transition pressure does not solve it."
        ],
        relatedGuides: [
          "buckling-vs-peaking-flooring",
          "why-is-my-lvp-floor-peaking",
          "why-is-my-lvp-floor-buckling",
          "flooring-movement-problems"
        ],
        relatedCalculators: ["transition-estimator", "waste-calculator"]
      },
      {
        id: "buckling-moisture",
        title: "Moisture-related expansion",
        likelyCause: "Water, humidity, wet substrate, or slab moisture may be expanding the flooring system.",
        summary: "Moisture-related buckling should be investigated before the floor is forced flat or replaced.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Look for swelling, odor, staining, soft spots, or recent leaks.",
          "Check indoor humidity and room conditions.",
          "If over concrete, review moisture testing requirements."
        ],
        whenToCallAPro: [
          "Buckling appeared after water exposure.",
          "The subfloor may be wet or soft.",
          "The floor is over concrete, basement, or crawlspace conditions."
        ],
        relatedGuides: [
          "flooring-moisture-problems",
          "why-is-my-laminate-floor-buckling",
          "why-is-my-floor-swelling",
          "moisture-level-too-high-for-flooring"
        ],
        relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"]
      },
      {
        id: "buckling-concrete",
        title: "Concrete slab moisture or preparation concern",
        likelyCause: "Concrete moisture, flatness, contaminants, or adhesive/underlayment compatibility may be stressing the floor.",
        summary: "Slab-related buckling should be checked against product and adhesive requirements before reinstalling.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Check if slab moisture testing was required.",
          "Look for adhesive release, hollow sound, cracks, or dampness.",
          "Review underlayment and vapor barrier compatibility."
        ],
        whenToCallAPro: [
          "The area is damp, musty, or over a basement slab.",
          "The floor is glued down and releasing.",
          "A prior floor failed over the same slab."
        ],
        relatedGuides: [
          "concrete-floor-problems",
          "why-flooring-fails-over-concrete",
          "how-to-test-concrete-moisture",
          "best-underlayment-for-concrete-floors"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "buckling-pinned",
        title: "Pinned floating floor",
        likelyCause: "A floating floor may be trapped by fixed objects, tight trim, transitions, or doorways.",
        summary: "The floor may need movement space; verify the exact product's requirements before cutting or fastening anything.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check cabinets, islands, baseboards, door jambs, and transitions.",
          "Review maximum run length and expansion requirements.",
          "Look for peaking near the trapped area."
        ],
        whenToCallAPro: [
          "The floor is raised enough to trip.",
          "A fixed cabinet or island may be involved.",
          "Multiple rooms are connected without proper breaks."
        ],
        relatedGuides: [
          "can-you-install-cabinets-over-floating-lvp",
          "why-is-my-lvp-floor-peaking",
          "why-is-my-lvp-floor-buckling",
          "flooring-direction-mistakes"
        ],
        relatedCalculators: ["transition-estimator"]
      },
      {
        id: "buckling-expansion-run",
        title: "Long-run expansion pressure",
        likelyCause: "A long connected run, doorway, transition, or direction change may be trapping movement.",
        summary: "Layout and transitions can affect how floating floors move across connected rooms.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Map the raised area relative to doorways and transitions.",
          "Check whether the floor direction or long run changed the movement path.",
          "Review expansion-break requirements for the product."
        ],
        whenToCallAPro: [
          "The problem crosses multiple rooms.",
          "The layout has long hallways or open concept runs.",
          "Trim changes or transitions may be needed."
        ],
        relatedGuides: [
          "which-direction-should-flooring-run",
          "flooring-direction-mistakes",
          "flooring-transition-guide",
          "flooring-movement-problems"
        ],
        relatedCalculators: ["transition-estimator", "waste-calculator"]
      },
      {
        id: "buckling-lvp",
        title: "LVP buckling path",
        likelyCause: "LVP may buckle from moisture, blocked movement, heat, long runs, or fixed objects.",
        summary: "Check expansion and moisture before replacing planks.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check for peaking, lifting, or seam visibility nearby.",
          "Look for cabinets, islands, direct sunlight, or tight trim.",
          "Review moisture and slab conditions."
        ],
        whenToCallAPro: [
          "Buckling is spreading.",
          "The flooring is pinned or over concrete.",
          "The area is wet, swollen, or raised."
        ],
        relatedGuides: [
          "why-is-my-lvp-floor-buckling",
          "why-is-my-lvp-floor-peaking",
          "why-is-my-lvp-lifting",
          "lvp-installation-checklist"
        ],
        relatedCalculators: ["waste-calculator", "transition-estimator"]
      },
      {
        id: "buckling-laminate",
        title: "Laminate buckling path",
        likelyCause: "Laminate may buckle from moisture, missing expansion, heavy fixed objects, or underlayment/subfloor problems.",
        summary: "Laminate is moisture-sensitive, so swelling and water clues should be checked early.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Look for swelling at seams or edges.",
          "Check expansion space and fixed objects.",
          "Review underlayment and subfloor flatness."
        ],
        whenToCallAPro: [
          "Buckling followed water exposure.",
          "Several rows are lifted.",
          "The floor has soft areas or recurring movement."
        ],
        relatedGuides: [
          "why-is-my-laminate-floor-buckling",
          "why-is-my-laminate-floor-separating",
          "best-underlayment-for-laminate-flooring",
          "how-flat-should-a-subfloor-be-for-laminate"
        ],
        relatedCalculators: ["waste-calculator"]
      },
      {
        id: "buckling-wood-moisture",
        title: "Wood movement or moisture imbalance",
        likelyCause: "Hardwood or engineered hardwood may be reacting to moisture, humidity, slab conditions, or jobsite instability.",
        summary: "Wood movement should be checked against moisture readings and installation records before sanding or replacement.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Check room humidity and recent HVAC changes.",
          "Look for cupping, crowning, or gapping.",
          "Review acclimation and concrete/slab conditions if applicable."
        ],
        whenToCallAPro: [
          "Cupping, crowning, or separation is present.",
          "The wood is installed over concrete.",
          "Refinishing or board replacement is being considered."
        ],
        relatedGuides: [
          "cupping-vs-crowning-hardwood",
          "why-is-my-hardwood-floor-cupping",
          "why-is-my-hardwood-floor-crowning",
          "hardwood-installation-humidity"
        ],
        relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"]
      }
    ]
  },
  {
    id: "floor-lifting",
    title: "Floor Lifting",
    description: "Choose between raised planks, loose transitions, glue-down release, moisture, and pressure problems.",
    startingQuestionId: "lifting-location",
    questions: [
      {
        id: "lifting-location",
        question: "What part of the floor is lifting?",
        helperText: "A plank edge, transition strip, tile, or glue-down area can point to different causes.",
        options: [
          { label: "LVP or plank edge", nextQuestionId: "lifting-install-method" },
          { label: "Transition strip or doorway", resultId: "lifting-transition" },
          { label: "Tile or glue-down area", nextQuestionId: "lifting-moisture" }
        ]
      },
      {
        id: "lifting-install-method",
        question: "Is the flooring floating or glued down?",
        helperText: "Floating floors usually lift from pressure, damage, or movement. Glue-down floors may point to bond or slab issues.",
        options: [
          { label: "Floating floor", nextQuestionId: "lifting-pressure" },
          { label: "Glue-down", resultId: "lifting-adhesive-release" },
          { label: "Not sure", nextQuestionId: "lifting-moisture" }
        ]
      },
      {
        id: "lifting-pressure",
        question: "Is the lifting near a wall, cabinet, island, doorway, or heavy fixed object?",
        helperText: "Raised edges near fixed objects often point to pressure or trapped movement.",
        options: [
          { label: "Yes, near a fixed point", resultId: "lifting-pressure-pinning" },
          { label: "No, in the middle of the room", nextQuestionId: "lifting-moisture" },
          { label: "It follows a seam or joint", resultId: "lifting-locking-stress" }
        ]
      },
      {
        id: "lifting-moisture",
        question: "Are there moisture, concrete, heat, or swelling clues?",
        helperText: "Lifting near exterior doors, slabs, bathrooms, kitchens, or wet areas should be checked for moisture.",
        options: [
          { label: "Yes, moisture or slab may be involved", resultId: "lifting-moisture" },
          { label: "No obvious moisture", resultId: "lifting-locking-stress" },
          { label: "It is over concrete", resultId: "lifting-adhesive-release" }
        ]
      }
    ],
    results: [
      {
        id: "lifting-transition",
        title: "Loose transition or doorway movement",
        likelyCause: "The transition may be loose, the wrong profile, poorly anchored, or affected by floating-floor movement.",
        summary: "Transitions must match floor height, movement needs, track attachment, and product requirements.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check whether the transition track is loose or damaged.",
          "Review height differences and whether the floor is floating.",
          "Look for expansion pressure at the doorway."
        ],
        whenToCallAPro: [
          "The transition creates a trip hazard.",
          "Concrete anchoring or slab drilling is needed.",
          "The flooring is also peaking, buckling, or separating."
        ],
        relatedGuides: [
          "why-is-my-transition-strip-moving",
          "t-mold-vs-reducer-vs-end-cap",
          "flooring-transition-guide",
          "why-is-my-lvp-lifting"
        ],
        relatedCalculators: ["transition-estimator"]
      },
      {
        id: "lifting-pressure-pinning",
        title: "Expansion pressure or pinned floating floor",
        likelyCause: "A floating floor may be trapped by a fixed object, tight trim, or missing movement space.",
        summary: "Do not glue or fasten a floating floor to hold it down unless the manufacturer allows that repair.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check walls, cabinets, islands, transitions, and door jambs.",
          "Review movement-space requirements for the exact product.",
          "Look for peaking or buckling near the lifted edge."
        ],
        whenToCallAPro: [
          "The floor is pinned under cabinets or islands.",
          "The lifted area is spreading.",
          "The repair would require trimming, removing material, or resetting transitions."
        ],
        relatedGuides: [
          "why-is-my-lvp-lifting",
          "can-you-install-cabinets-over-floating-lvp",
          "clicking-vs-lifting-flooring",
          "flooring-movement-problems"
        ],
        relatedCalculators: ["transition-estimator", "waste-calculator"]
      },
      {
        id: "lifting-locking-stress",
        title: "Locking-system stress or damaged edge",
        likelyCause: "A raised seam may be caused by damaged locking edges, debris, low spots, or repeated movement.",
        summary: "Replacing a plank may not solve the issue if the support or movement cause remains.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Check for debris or damaged locking edges.",
          "Look for hollow sound, low spots, or nearby gaps.",
          "Compare clicking, lifting, and separation symptoms."
        ],
        whenToCallAPro: [
          "The joint will not stay locked.",
          "Several edges are lifting.",
          "The floor needs to be opened to inspect support."
        ],
        relatedGuides: [
          "clicking-vs-lifting-flooring",
          "why-is-my-lvp-floor-separating",
          "why-are-my-lvp-seams-showing",
          "subfloor-flatness-requirements-lvp"
        ],
        relatedCalculators: ["waste-calculator"]
      },
      {
        id: "lifting-moisture",
        title: "Moisture or heat-related lifting",
        likelyCause: "Water, vapor, heat, sunlight, or high humidity may be moving the flooring or affecting the substrate.",
        summary: "Moisture clues should be checked before replacing raised pieces.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Look for swelling, odor, stains, soft spots, or recent leaks.",
          "Check whether the area is near exterior doors, kitchens, bathrooms, basements, or slabs.",
          "Review moisture and temperature requirements for the exact product."
        ],
        whenToCallAPro: [
          "The lifted area is damp, swollen, or soft.",
          "The floor is over concrete or a basement.",
          "Adhesive, underlayment, or subfloor layers may be affected."
        ],
        relatedGuides: [
          "flooring-moisture-problems",
          "why-is-my-floor-swelling",
          "can-moisture-come-through-concrete",
          "why-is-my-lvp-lifting"
        ],
        relatedCalculators: ["waste-calculator", "flooring-square-footage-calculator"]
      },
      {
        id: "lifting-adhesive-release",
        title: "Adhesive release or slab preparation problem",
        likelyCause: "Glue-down flooring may be lifting because of moisture, dusty slab, sealer, pH, adhesive compatibility, or surface prep.",
        summary: "Concrete and adhesive systems should be reviewed before re-gluing pieces.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Check for dampness, hollow sound, adhesive transfer, dust, paint, or sealer.",
          "Review slab moisture testing and adhesive requirements.",
          "Look for cracks, contaminants, or weak patching."
        ],
        whenToCallAPro: [
          "A glue-down area is releasing over concrete.",
          "Moisture testing or surface preparation may be needed.",
          "The issue affects more than one isolated piece."
        ],
        relatedGuides: [
          "why-flooring-fails-over-concrete",
          "how-to-test-concrete-moisture",
          "concrete-floor-problems",
          "can-you-install-lvp-over-concrete"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      }
    ]
  },
  {
    id: "moisture-problems",
    title: "Moisture Problems",
    description: "Sort swelling, odor, wet subfloor, slab vapor, humidity, cupping, crowning, and moisture testing paths.",
    startingQuestionId: "moisture-source",
    questions: [
      {
        id: "moisture-source",
        question: "Is there active water, odor, dampness, swelling, or staining?",
        helperText: "Active moisture clues should be treated as higher priority than cosmetic symptoms.",
        options: [
          { label: "Yes, visible or suspected moisture", nextQuestionId: "moisture-location" },
          { label: "Mostly humidity or seasonal movement", resultId: "moisture-humidity" },
          { label: "Not sure, but flooring is moving", resultId: "moisture-vs-acclimation" }
        ]
      },
      {
        id: "moisture-location",
        question: "Where is the moisture concern?",
        helperText: "The source could be from above, below, concrete, crawlspace, plumbing, or room conditions.",
        options: [
          { label: "Concrete slab or basement", nextQuestionId: "moisture-slab" },
          { label: "Wood subfloor, crawlspace, or leak", resultId: "moisture-wet-subfloor" },
          { label: "Hardwood shape change", nextQuestionId: "moisture-hardwood-shape" }
        ]
      },
      {
        id: "moisture-slab",
        question: "Is this before installation, after a flooring failure, or during repair?",
        helperText: "Concrete moisture should be checked before installation and after any failure over a slab.",
        options: [
          { label: "Before installation", resultId: "moisture-test-before-install" },
          { label: "After flooring failed or released", resultId: "moisture-slab-failure" },
          { label: "Recurring dampness through slab", resultId: "moisture-through-slab" }
        ]
      },
      {
        id: "moisture-hardwood-shape",
        question: "Are board edges higher, centers higher, or gaps opening?",
        helperText: "Hardwood shape gives clues, but moisture readings and site conditions still matter.",
        options: [
          { label: "Edges higher than center", resultId: "moisture-hardwood-cupping" },
          { label: "Center higher than edges", resultId: "moisture-hardwood-crowning" },
          { label: "Gaps opening", resultId: "moisture-hardwood-gapping" }
        ]
      }
    ],
    results: [
      {
        id: "moisture-humidity",
        title: "High humidity or seasonal movement",
        likelyCause: "Indoor humidity changes may be moving wood, laminate, or floating floors.",
        summary: "Room conditions can affect flooring even when there is no obvious leak.",
        urgency: "Monitor / compare symptoms",
        whatToCheckFirst: [
          "Measure indoor humidity and compare with normal living conditions.",
          "Look for seasonal patterns, gaps, swelling, cupping, or crowning.",
          "Review manufacturer humidity and acclimation requirements."
        ],
        whenToCallAPro: [
          "Movement is spreading or not seasonal.",
          "There are moisture clues beyond humidity.",
          "Wood flooring is cupping, crowning, or separating."
        ],
        relatedGuides: [
          "can-high-humidity-damage-flooring",
          "ideal-humidity-for-flooring",
          "moisture-vs-acclimation-problems",
          "seasonal-flooring-movement"
        ],
        relatedCalculators: ["waste-calculator"]
      },
      {
        id: "moisture-vs-acclimation",
        title: "Moisture vs acclimation uncertainty",
        likelyCause: "The floor may be reacting to active moisture, unstable jobsite conditions, or material installed too soon.",
        summary: "Acclimation should not be blamed until moisture, HVAC, slab, and jobsite conditions are reviewed.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Review delivery, storage, HVAC, room humidity, and installation timing.",
          "Look for odor, dampness, swelling, adhesive release, or wet substrate.",
          "Check product instructions instead of using a universal acclimation timeline."
        ],
        whenToCallAPro: [
          "The issue appeared soon after installation.",
          "Concrete or hardwood is involved.",
          "Moisture testing records are missing."
        ],
        relatedGuides: [
          "moisture-vs-acclimation-problems",
          "what-happens-if-flooring-is-installed-too-soon",
          "how-long-should-hardwood-acclimate",
          "flooring-moisture-problems"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "moisture-wet-subfloor",
        title: "Wet subfloor, leak, or crawlspace concern",
        likelyCause: "Water may be coming from plumbing, exterior walls, appliances, crawlspace, or trapped moisture.",
        summary: "A wet subfloor should be handled as a source investigation before new flooring or surface repair.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Stop active water first.",
          "Look for soft spots, odor, staining, swelling, or mold-like growth.",
          "Inspect below if there is a crawlspace, basement, or accessible subfloor."
        ],
        whenToCallAPro: [
          "The subfloor feels soft or damaged.",
          "The moisture source is hidden.",
          "Drying, remediation, plumbing, or structural review may be needed."
        ],
        relatedGuides: [
          "why-is-my-subfloor-wet",
          "signs-of-moisture-damage-under-flooring",
          "why-is-my-floor-swelling",
          "flooring-moisture-problems"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "moisture-test-before-install",
        title: "Concrete moisture testing before flooring",
        likelyCause: "The slab may need testing before LVP, laminate, engineered hardwood, carpet, tile, or adhesive systems are chosen.",
        summary: "Moisture limits vary by product and adhesive. Do not invent a universal acceptable number.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Find the flooring and adhesive moisture-test requirements.",
          "Identify whether calcium chloride, in-situ RH, or another method is required.",
          "Review slab age, grade level, vapor retarder, and basement conditions."
        ],
        whenToCallAPro: [
          "The slab is below grade or in a basement.",
          "A glue-down system is planned.",
          "The manufacturer requires formal testing."
        ],
        relatedGuides: [
          "how-to-test-concrete-moisture",
          "moisture-level-too-high-for-flooring",
          "concrete-slab-flooring-guide",
          "best-underlayment-for-concrete-floors"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "moisture-slab-failure",
        title: "Flooring failure over concrete",
        likelyCause: "Moisture, surface prep, adhesive compatibility, slab cracks, or flatness may have contributed to failure.",
        summary: "A replacement floor can fail the same way if the slab condition is not corrected.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Document the failure pattern.",
          "Look for adhesive release, hollow sound, dampness, cracks, dust, or sealer.",
          "Review moisture testing and substrate preparation records."
        ],
        whenToCallAPro: [
          "A prior floor failed over the same slab.",
          "Adhesive or tile bond released.",
          "Moisture mitigation or slab preparation may be required."
        ],
        relatedGuides: [
          "why-flooring-fails-over-concrete",
          "concrete-floor-problems",
          "how-to-test-concrete-moisture",
          "common-basement-flooring-problems"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "moisture-through-slab",
        title: "Moisture coming through concrete",
        likelyCause: "Vapor drive, drainage, cracks, basement humidity, or missing vapor control may be involved.",
        summary: "Concrete can look dry at the surface while moisture conditions still affect the flooring system.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Check drainage, basement humidity, cracks, and damp areas.",
          "Review the required slab moisture test for the exact flooring system.",
          "Avoid installing new flooring until the source is understood."
        ],
        whenToCallAPro: [
          "Moisture returns after drying.",
          "The slab is below grade or near exterior walls.",
          "Flooring has released, swelled, or smelled musty."
        ],
        relatedGuides: [
          "why-is-moisture-coming-through-my-slab",
          "can-moisture-come-through-concrete",
          "how-to-test-concrete-moisture",
          "concrete-floor-problems"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "moisture-hardwood-cupping",
        title: "Hardwood cupping",
        likelyCause: "Board edges higher than centers often point to moisture imbalance.",
        summary: "Do not sand cupped wood until moisture conditions are identified and stabilized.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Check humidity, subfloor moisture, crawlspace, slab, and leak history.",
          "Document whether the condition is local or widespread.",
          "Review NWFA-style moisture and jobsite-condition guidance."
        ],
        whenToCallAPro: [
          "Cupping is widespread or worsening.",
          "A crawlspace or concrete slab is involved.",
          "Sanding or refinishing is being considered."
        ],
        relatedGuides: [
          "cupping-vs-crowning-hardwood",
          "why-is-my-hardwood-floor-cupping",
          "hardwood-installation-humidity",
          "flooring-moisture-problems"
        ],
        relatedCalculators: ["waste-calculator"]
      },
      {
        id: "moisture-hardwood-crowning",
        title: "Hardwood crowning",
        likelyCause: "Board centers higher than edges may point to moisture imbalance or sanding before cupping stabilized.",
        summary: "Crowning should be evaluated before sanding, filling, or replacing boards.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Check whether the floor was previously cupped.",
          "Review recent sanding, refinishing, moisture, or HVAC changes.",
          "Check room and substrate moisture conditions."
        ],
        whenToCallAPro: [
          "Crowning followed recent sanding or water exposure.",
          "Moisture readings are not available.",
          "The remaining wear layer or repair method is uncertain."
        ],
        relatedGuides: [
          "cupping-vs-crowning-hardwood",
          "why-is-my-hardwood-floor-crowning",
          "hardwood-acclimation-mistakes",
          "flooring-moisture-problems"
        ],
        relatedCalculators: ["waste-calculator"]
      },
      {
        id: "moisture-hardwood-gapping",
        title: "Hardwood gapping or seasonal shrinkage",
        likelyCause: "Humidity changes, acclimation, jobsite conditions, or moisture imbalance may be moving the wood.",
        summary: "Some wood movement is seasonal, but widening or irregular gaps should be reviewed.",
        urgency: "Monitor / compare symptoms",
        whatToCheckFirst: [
          "Track humidity and seasonal changes.",
          "Look for cupping, crowning, or concrete/slab moisture.",
          "Review acclimation and installation conditions."
        ],
        whenToCallAPro: [
          "Gaps are wide, growing, or irregular.",
          "Engineered hardwood is separating over concrete.",
          "Repair or filling is being considered."
        ],
        relatedGuides: [
          "why-is-my-hardwood-floor-gapping",
          "why-is-my-engineered-hardwood-separating",
          "how-long-should-hardwood-acclimate",
          "hardwood-installation-humidity"
        ],
        relatedCalculators: ["waste-calculator"]
      }
    ]
  },
  {
    id: "concrete-problems",
    title: "Concrete Problems",
    description: "Choose a path for slab moisture, cracks, hollow sounds, adhesive failure, and flooring over concrete.",
    startingQuestionId: "concrete-stage",
    questions: [
      {
        id: "concrete-stage",
        question: "Are you planning new flooring, diagnosing a failure, or seeing moisture now?",
        helperText: "Concrete conditions should be checked before installation and before replacing a failed floor.",
        options: [
          { label: "Planning new flooring", nextQuestionId: "concrete-floor-type" },
          { label: "Diagnosing a failed floor", resultId: "concrete-failure" },
          { label: "Seeing moisture or dampness", resultId: "concrete-moisture-through" }
        ]
      },
      {
        id: "concrete-floor-type",
        question: "Which flooring are you considering over concrete?",
        helperText: "LVP, engineered hardwood, laminate, carpet, and tile have different concrete requirements.",
        options: [
          { label: "LVP or vinyl plank", resultId: "concrete-lvp" },
          { label: "Engineered hardwood", resultId: "concrete-engineered-hardwood" },
          { label: "Laminate, carpet, or tile", nextQuestionId: "concrete-condition" }
        ]
      },
      {
        id: "concrete-condition",
        question: "What slab condition is most obvious?",
        helperText: "Moisture, cracks, flatness, hollow sound, or contaminants can change the recommended path.",
        options: [
          { label: "Moisture or basement slab", resultId: "concrete-moisture-test" },
          { label: "Cracks or movement", resultId: "concrete-cracks" },
          { label: "Hollow sound, dust, sealer, or adhesive release", resultId: "concrete-surface-prep" }
        ]
      },
      {
        id: "concrete-moisture-detail",
        question: "Has the slab been moisture tested for the exact product system?",
        helperText: "Moisture testing methods and limits vary by flooring and adhesive system.",
        options: [
          { label: "Yes, but results are high or unclear", resultId: "concrete-moisture-test" },
          { label: "No, not tested yet", resultId: "concrete-moisture-test" },
          { label: "A prior floor failed", resultId: "concrete-failure" }
        ]
      }
    ],
    results: [
      {
        id: "concrete-lvp",
        title: "LVP over concrete planning path",
        likelyCause: "The main concerns are slab moisture, flatness, cracks, vapor control, expansion, and underlayment approval.",
        summary: "Installing LVP over concrete may be possible, but the exact product instructions control the requirements.",
        urgency: "Needs inspection",
        whatToCheckFirst: [
          "Review LVP concrete approval and moisture requirements.",
          "Check slab flatness, cracks, contaminants, and underlayment rules.",
          "Confirm whether a vapor layer or separate underlayment is allowed or required."
        ],
        whenToCallAPro: [
          "The slab is below grade, damp, cracked, or uneven.",
          "A prior floor failed over the same slab.",
          "Moisture testing or patching is needed."
        ],
        relatedGuides: [
          "can-you-install-lvp-over-concrete",
          "how-to-test-concrete-moisture",
          "best-underlayment-for-concrete-floors",
          "concrete-slab-flooring-guide"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
      },
      {
        id: "concrete-engineered-hardwood",
        title: "Engineered hardwood over concrete planning path",
        likelyCause: "The main concerns are slab moisture, approved installation method, moisture barrier/adhesive system, flatness, and acclimation.",
        summary: "Engineered hardwood over concrete requires careful verification. Manufacturer instructions and moisture testing matter.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Confirm the product is approved for concrete.",
          "Review floating vs glue-down method and moisture barrier requirements.",
          "Check acclimation, room humidity, slab moisture, and adhesive compatibility."
        ],
        whenToCallAPro: [
          "The slab is below grade or moisture test results are missing.",
          "A glue-down wood system is planned.",
          "The room has unstable HVAC or humidity conditions."
        ],
        relatedGuides: [
          "can-engineered-hardwood-go-over-concrete",
          "moisture-barrier-engineered-hardwood-over-concrete",
          "floating-vs-glue-down-engineered-hardwood-over-concrete",
          "how-long-should-hardwood-acclimate"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "concrete-moisture-test",
        title: "Concrete moisture testing path",
        likelyCause: "Slab vapor, construction moisture, basement conditions, or missing vapor control may affect flooring performance.",
        summary: "Testing method and acceptable results vary by product and adhesive. Do not use invented universal moisture limits.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Read the flooring and adhesive moisture testing requirements.",
          "Identify whether calcium chloride, in-situ RH, or another method is required.",
          "Review grade level, vapor retarder, slab age, and basement conditions."
        ],
        whenToCallAPro: [
          "The manufacturer requires formal test results.",
          "A glue-down system, wood floor, or prior failure is involved.",
          "Mitigation or waterproofing may be needed."
        ],
        relatedGuides: [
          "how-to-test-concrete-moisture",
          "moisture-level-too-high-for-flooring",
          "why-is-moisture-coming-through-my-slab",
          "concrete-floor-problems"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "concrete-cracks",
        title: "Concrete slab cracks under flooring",
        likelyCause: "Cracks may be stable, moving, transferring through tile, or tied to slab movement.",
        summary: "Crack treatment depends on crack type, movement, flooring system, and manufacturer requirements.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Look at crack width, displacement, pattern, and whether it is active.",
          "Check if tile, grout, adhesive, or flooring has cracked along the slab line.",
          "Review the flooring system's crack isolation or substrate requirements."
        ],
        whenToCallAPro: [
          "Cracks are widening, displaced, or spreading.",
          "Tile is cracking repeatedly.",
          "Structural slab movement may be involved."
        ],
        relatedGuides: [
          "concrete-slab-cracks-under-flooring",
          "why-is-my-tile-cracking",
          "why-flooring-fails-over-concrete",
          "concrete-floor-problems"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"]
      },
      {
        id: "concrete-surface-prep",
        title: "Concrete surface prep or bond issue",
        likelyCause: "Dust, paint, sealer, old adhesive, weak patching, pH, flatness, or bond failure may affect flooring.",
        summary: "RFCI/ASTM F710-style principles emphasize a clean, dry, smooth, sound substrate for resilient flooring.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Look for dust, sealer, paint, old adhesive, weak patching, or hollow bond.",
          "Check flatness and whether the floor was properly prepared.",
          "Review adhesive and underlayment compatibility."
        ],
        whenToCallAPro: [
          "Adhesive is releasing.",
          "Surface grinding, patching, or mitigation may be needed.",
          "A prior installation failed."
        ],
        relatedGuides: [
          "why-flooring-fails-over-concrete",
          "best-underlayment-for-concrete-floors",
          "concrete-floor-problems",
          "why-does-my-floor-feel-hollow"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "concrete-failure",
        title: "Flooring failure over concrete",
        likelyCause: "Moisture, slab prep, cracks, contaminants, adhesive compatibility, or wrong underlayment may have contributed.",
        summary: "A failed floor should not be replaced until the slab conditions and system requirements are reviewed.",
        urgency: "Professional review recommended",
        whatToCheckFirst: [
          "Document the failure pattern and affected areas.",
          "Check moisture, cracks, adhesive transfer, hollow sound, surface dust, and flatness.",
          "Review product compatibility and installation records."
        ],
        whenToCallAPro: [
          "The same slab has failed before.",
          "There is moisture, adhesive release, hollow sound, or widespread movement.",
          "Testing, grinding, patching, or mitigation may be needed."
        ],
        relatedGuides: [
          "why-flooring-fails-over-concrete",
          "common-basement-flooring-problems",
          "concrete-floor-problems",
          "how-to-test-concrete-moisture"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      },
      {
        id: "concrete-moisture-through",
        title: "Moisture coming through slab",
        likelyCause: "Vapor drive, basement humidity, drainage, cracks, or missing vapor control may be involved.",
        summary: "Surface dryness alone does not prove a slab is ready for flooring.",
        urgency: "Possible moisture concern",
        whatToCheckFirst: [
          "Check drainage, basement humidity, cracks, and damp areas.",
          "Review required moisture test methods for the exact flooring.",
          "Avoid covering recurring dampness without source control."
        ],
        whenToCallAPro: [
          "Moisture returns after drying.",
          "Musty odor, swelling, or adhesive release is present.",
          "A basement or below-grade slab is involved."
        ],
        relatedGuides: [
          "why-is-moisture-coming-through-my-slab",
          "can-moisture-come-through-concrete",
          "how-to-test-concrete-moisture",
          "flooring-moisture-problems"
        ],
        relatedCalculators: ["flooring-square-footage-calculator", "waste-calculator"]
      }
    ]
  }
];
