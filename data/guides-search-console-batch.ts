import type {
  FAQItem,
  Guide,
  GuideEcosystemSlug,
  GuideSection,
  GuideSlug,
  MaterialType,
  ToolSlug,
  TopicCluster
} from "@/data/types";

type GuideDraft = {
  slug: GuideSlug;
  title: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  readTime: string;
  primaryEcosystem: GuideEcosystemSlug;
  secondaryEcosystems?: GuideEcosystemSlug[];
  materialTypes: MaterialType[];
  topicCluster: TopicCluster;
  relatedTools: ToolSlug[];
  relatedGuides: GuideSlug[];
  quickAnswer: string[];
  keySections: GuideSection[];
  example: string[];
  commonMistakes: string[];
  faq: FAQItem[];
  disclaimer: string;
};

const installConditionDisclaimer =
  "This guide is general troubleshooting and planning information. Flooring moisture limits, flatness tolerances, underlayment approval, adhesive requirements, acclimation rules, repair methods, and installation details vary by product and project conditions. Verify the manufacturer's written instructions and have a qualified installer evaluate field conditions before making repairs or ordering materials.";

function buildGuide(input: GuideDraft): Guide {
  return {
    slug: input.slug,
    title: input.title,
    description: input.description,
    metadataTitle: input.metadataTitle,
    metadataDescription: input.metadataDescription,
    dateModified: "2026-05-29",
    readTime: input.readTime,
    primaryEcosystem: input.primaryEcosystem,
    secondaryEcosystems: input.secondaryEcosystems,
    materialTypes: input.materialTypes,
    topicCluster: input.topicCluster,
    relatedTools: input.relatedTools,
    relatedGuides: input.relatedGuides,
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: input.quickAnswer
      },
      ...input.keySections,
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: input.example
      },
      {
        id: "common-mistakes",
        title: "Common mistakes",
        paragraphs: [
          "The biggest mistake is treating the visible symptom as the whole problem. Noise, gaps, peaking, crowning, and moisture concerns usually start with movement, moisture, substrate support, or product-specific installation requirements."
        ],
        bullets: input.commonMistakes
      }
    ],
    faq: input.faq,
    disclaimer: input.disclaimer
  };
}

const guideDrafts: GuideDraft[] = [
  {
    slug: "why-is-my-floor-squeaking",
    title: "Why Is My Floor Squeaking?",
    description:
      "Troubleshoot squeaking floors by checking subfloor movement, loose fasteners, floating floor movement, underlayment, seasonal wood movement, and substrate type.",
    metadataTitle: "Why Is My Floor Squeaking? Subfloor and Flooring Causes",
    metadataDescription:
      "Learn why floors squeak, what to check first, and how subfloor movement, fasteners, floating floors, underlayment, and humidity affect noise.",
    readTime: "8 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood"],
    materialTypes: ["lvp", "laminate", "hardwood", "engineered-hardwood"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "why-is-my-floor-clicking",
      "why-is-my-floor-bouncing",
      "why-does-my-floor-feel-hollow",
      "subfloor-flatness-requirements-lvp",
      "how-flat-should-a-subfloor-be-for-laminate",
      "why-is-my-hardwood-floor-gapping",
      "why-is-my-laminate-floor-separating"
    ],
    quickAnswer: [
      "A squeaking floor usually means two parts of the floor system are moving against each other. Common causes include subfloor movement, loose fasteners, joist movement, underlayment problems, floating floor movement, seasonal wood movement, or a finished floor that is flexing over an unsupported spot.",
      "Start by finding whether the squeak is below the finished flooring, inside a floating floor system, near a transition, or tied to seasonal humidity. The repair can be very different depending on the floor type and subfloor."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Squeaks often happen when the finished floor, underlayment, subfloor, fasteners, or framing move slightly under load. On wood subfloors, a loose fastener or panel can rub against a joist. On floating floors, the sound may come from plank movement, a low spot, or tight expansion areas.",
          "Concrete slabs do not squeak like wood framing, but floors installed over concrete can still make noise if the floating system moves, underlayment is wrong, adhesive releases, or debris is trapped below the flooring."
        ],
        bullets: [
          "Subfloor panels moving against joists or fasteners.",
          "Loose fasteners, gaps between subfloor and framing, or flexing panels.",
          "Floating LVP or laminate moving over low spots or soft underlayment.",
          "Seasonal hardwood movement as indoor humidity changes.",
          "Transitions, trim, or stair parts rubbing and sounding like the floor."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Walk the area slowly and mark the exact spots where the squeak repeats. A sound in one small spot often points to subfloor movement or a local support problem. A broader noisy area may point to underlayment, expansion restriction, or seasonal movement.",
          "Then identify the subfloor type. A squeak over a wood subfloor can be a fastening or framing issue. A squeak over concrete is more likely related to the floor covering system, underlayment, debris, adhesive, or movement at trim."
        ],
        bullets: [
          "Mark whether the sound repeats in one spot or follows a traffic path.",
          "Check nearby transitions, baseboards, cabinets, stairs, and doorways.",
          "Look for hollow movement, gaps, peaking, or separation.",
          "Review whether the floor is floating, glue-down, nail-down, or staple-down.",
          "Check for seasonal humidity changes if the floor is hardwood."
        ]
      },
      {
        id: "subfloor-type",
        title: "Concrete versus wood subfloor clues",
        paragraphs: [
          "Wood subfloors can squeak when panels move, fasteners miss framing, joists flex, or old adhesive bonds release. Repair may involve access from below, fastening the subfloor, or lifting the finished flooring depending on the assembly.",
          "Concrete does not have joists or subfloor panels, so the noise usually comes from the flooring system above it. Floating floors over concrete may click, squeak, or sound hollow when the slab is not flat enough or the underlayment allows too much movement."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional if the squeak is getting worse, if the floor also separates or lifts, if the area feels soft or unsafe, if stairs are involved, or if repair would require lifting finished flooring.",
          "A pro can help separate structural subfloor movement from normal seasonal wood movement, trim noise, floating floor movement, or a localized installation issue."
        ]
      }
    ],
    example: [
      "A homeowner hears a squeak in the same hallway spot after laminate flooring was installed. The floor also feels slightly hollow there, and the sound is not near a wall or transition.",
      "That points toward movement over a low spot or unsupported area rather than a surface scratch or finish issue. Closing nearby gaps without checking support may not solve the noise."
    ],
    commonMistakes: [
      "Assuming every squeak is a finished flooring defect.",
      "Adding nails or screws through a floating floor.",
      "Ignoring a soft or hollow spot that repeats under foot traffic.",
      "Treating concrete and wood subfloor noise the same way.",
      "Trying to silence the noise before checking moisture, movement, and support."
    ],
    faq: [
      {
        question: "Is a squeaking floor always structural?",
        answer:
          "No. Some squeaks come from trim, transitions, floating floor movement, or seasonal wood movement. A soft, spreading, or worsening squeak deserves closer inspection."
      },
      {
        question: "Can LVP or laminate squeak?",
        answer:
          "Yes. Floating floors can squeak, click, or sound hollow if the subfloor is uneven, the underlayment is wrong, expansion is restricted, or debris is trapped below the planks."
      },
      {
        question: "Can hardwood squeak because of humidity?",
        answer:
          "Seasonal humidity changes can contribute to wood movement and noise, but repeated squeaks in one spot may also involve subfloor movement or fastening."
      },
      {
        question: "Should I screw down a squeaking floating floor?",
        answer:
          "No. Floating floors are designed to move. Fastening through them can create new problems unless the product instructions and installer specifically allow a repair method."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "moisture-level-too-high-for-flooring",
    title: "What Moisture Level Is Too High for Flooring?",
    description:
      "Understand why flooring moisture limits vary by product, subfloor, concrete slab, wood subfloor, acclimation, and installation method.",
    metadataTitle: "What Moisture Level Is Too High for Flooring?",
    metadataDescription:
      "Learn why moisture testing matters for flooring, including concrete slabs, wood subfloors, acclimation, moisture barriers, and product-specific limits.",
    readTime: "9 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood", "tile"],
    materialTypes: ["lvp", "laminate", "hardwood", "engineered-hardwood", "ceramic-tile", "porcelain-tile"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "how-to-test-concrete-moisture",
      "why-flooring-fails-over-concrete",
      "moisture-barrier-engineered-hardwood-over-concrete",
      "can-engineered-hardwood-go-over-concrete",
      "can-you-install-lvp-over-concrete",
      "common-basement-flooring-problems",
      "how-long-should-hardwood-acclimate",
      "why-is-my-hardwood-floor-cupping",
      "why-is-my-hardwood-floor-crowning"
    ],
    quickAnswer: [
      "A moisture level is too high when it exceeds the written limit for the flooring product, adhesive, underlayment, or substrate system being installed. There is no universal number that applies to every floor.",
      "Concrete slabs, wood subfloors, engineered hardwood, laminate, LVP, tile assemblies, adhesives, and moisture barriers all have different testing methods and limits. The safe answer is to test correctly and compare the results to the exact product requirements."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common moisture sources",
        paragraphs: [
          "Moisture can come from a concrete slab, crawlspace, plumbing leak, exterior door, wet cleaning, construction moisture, high indoor humidity, or a room that has not been conditioned long enough.",
          "Concrete can look dry while still releasing moisture. Wood subfloors can also be too wet, especially after construction, leaks, crawlspace humidity, or HVAC changes."
        ],
        bullets: [
          "New or below-grade concrete slabs with unknown moisture history.",
          "Wood subfloors over damp crawlspaces or basements.",
          "Wet construction work, paint, drywall, or recent flooding.",
          "Indoor humidity outside normal living conditions.",
          "Leaks at appliances, exterior doors, tubs, showers, or plumbing."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Start with the flooring instructions. Look for the required test method, allowed result range, room conditioning requirements, and whether the product needs a moisture barrier, vapor retarder, primer, adhesive, or mitigation system.",
          "Then check the site. Identify whether the substrate is concrete or wood, whether the room is below grade, whether HVAC is stable, and whether any moisture source is still active."
        ],
        bullets: [
          "Confirm the exact flooring, adhesive, and underlayment requirements.",
          "Use the test method required by the product or installer.",
          "Check room temperature and relative humidity before installation.",
          "Look for active leaks or damp areas before covering the floor.",
          "Do not use a moisture barrier to hide an active water problem."
        ]
      },
      {
        id: "risks",
        title: "What can happen when moisture is too high",
        paragraphs: [
          "Excess moisture can cause hardwood cupping or crowning, laminate swelling, adhesive release, LVP movement, mold concerns in trapped assemblies, or tile bond problems depending on the floor system.",
          "The damage may not appear immediately. A floor can look fine at installation and fail later as moisture moves through the assembly."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional when installing over concrete, below grade, after a leak, over a crawlspace, with hardwood, with glue-down products, or when the instructions require documented moisture testing.",
          "A professional can choose the right test method, interpret the result, and recommend whether to wait, dry the area, mitigate the slab, change underlayment, or choose a different flooring system."
        ]
      }
    ],
    example: [
      "A homeowner wants engineered hardwood over an older basement slab. The slab looks dry, but the flooring instructions require moisture testing and a specific underlayment system.",
      "Instead of guessing, the homeowner has the slab tested, verifies the allowed installation method, and confirms whether a moisture mitigation system is needed before ordering material."
    ],
    commonMistakes: [
      "Using one moisture number for every flooring type.",
      "Assuming concrete is dry because the surface looks dry.",
      "Skipping wood subfloor moisture checks before hardwood.",
      "Installing while HVAC or indoor humidity is not stable.",
      "Using a vapor barrier without understanding the product system."
    ],
    faq: [
      {
        question: "What moisture level is too high for hardwood flooring?",
        answer:
          "The limit depends on the hardwood product, subfloor, species, installation method, and manufacturer instructions. Installers usually compare readings against the product requirements rather than using one universal number."
      },
      {
        question: "Can LVP be installed over a damp concrete slab?",
        answer:
          "Only if the slab meets the LVP and underlayment requirements. Some systems allow specific vapor barriers, while others require testing or mitigation before installation."
      },
      {
        question: "Does waterproof flooring still need moisture testing?",
        answer:
          "Often yes. A waterproof wear surface does not mean the whole floor assembly can ignore slab moisture, adhesive limits, underlayment rules, or trapped moisture concerns."
      },
      {
        question: "Can moisture cause floor movement later?",
        answer:
          "Yes. Moisture changes can contribute to cupping, crowning, swelling, peaking, adhesive release, gaps, and hollow or loose areas depending on the flooring system."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "why-is-my-lvp-floor-peaking",
    title: "Why Is My LVP Floor Peaking?",
    description:
      "Troubleshoot LVP peaking by checking expansion pressure, missing gaps, long runs, heavy fixed objects, temperature changes, moisture, and floating floor movement.",
    metadataTitle: "Why Is My LVP Floor Peaking? Expansion and Movement Causes",
    metadataDescription:
      "Learn why LVP floors peak, tent, or ridge at joints and what to check first with expansion gaps, cabinets, long runs, moisture, and temperature changes.",
    readTime: "8 min read",
    primaryEcosystem: "lvp",
    secondaryEcosystems: ["lvt"],
    materialTypes: ["lvp", "lvt"],
    topicCluster: "installation-method",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "why-is-my-lvp-floor-buckling",
      "why-are-my-lvp-seams-showing",
      "why-is-my-lvp-floor-separating",
      "why-is-my-lvp-lifting",
      "can-you-install-cabinets-over-floating-lvp",
      "subfloor-flatness-requirements-lvp",
      "glue-down-vs-floating-floor",
      "can-you-install-lvp-over-concrete",
      "moisture-level-too-high-for-flooring"
    ],
    quickAnswer: [
      "LVP peaking usually means the floor is under pressure or moving more than the installation can handle. Common causes include missing expansion gaps, long runs without required breaks, heavy fixed objects pinning a floating floor, temperature swings, moisture, subfloor high spots, or tight transitions.",
      "Do not force the peak flat until you know why it happened. If the floor is trapped, wet, or damaged, pressure can show up again somewhere else."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Peaking is different from a random loose plank. It often appears as a ridge, tent, or raised joint where pressure has nowhere to go.",
          "Floating LVP needs room to move. If the perimeter, doorway, transition, cabinet, or long run blocks that movement, the floor can push upward at a joint."
        ],
        bullets: [
          "Missing or too-small expansion gaps at walls, doorways, and transitions.",
          "Cabinets, islands, or built-ins pinning a floating floor.",
          "Long connected runs that need expansion breaks under product rules.",
          "Temperature swings or direct sun heating one area of the floor.",
          "Moisture or slab conditions changing the floor assembly.",
          "Subfloor humps creating a pressure point under the planks."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Check the perimeter before blaming the plank. Look at baseboards, door jambs, transition strips, cabinets, islands, and heavy fixed objects. Peaking often starts when the floor cannot expand or contract as designed.",
          "Next, check whether the problem is near sun exposure, exterior doors, concrete moisture, a long hallway, or a transition. These clues help separate expansion pressure from moisture or subfloor issues."
        ],
        bullets: [
          "Identify whether the LVP is floating or glue-down.",
          "Inspect expansion space around the entire affected area.",
          "Look for tight transitions or trim pressing on the floor.",
          "Check for moisture, heat, or direct sunlight patterns.",
          "Look for subfloor humps, debris, or broken locking joints."
        ]
      },
      {
        id: "pressure-versus-moisture",
        title: "Expansion pressure versus moisture",
        paragraphs: [
          "Expansion pressure commonly shows up near walls, doorways, long runs, or fixed objects. Moisture-related peaking may appear near slabs, exterior doors, kitchens, laundry rooms, or areas with swollen edges.",
          "Both can happen at the same time. For example, a tight doorway transition plus moisture from an exterior door can stress the same area."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call an installer if the peak is spreading, if planks are separating or lifting, if moisture is suspected, if cabinets or islands are involved, or if the product may require expansion breaks.",
          "A professional can decide whether the repair is expansion relief, plank replacement, transition correction, subfloor repair, or moisture mitigation."
        ]
      }
    ],
    example: [
      "A floating LVP floor peaks near a kitchen doorway after summer heat and humidity increase. The transition strip is tight, and the floor has a long run from the living room into the hall.",
      "The likely issue is pressure from restricted movement, possibly made worse by temperature and humidity. The repair should start with checking expansion space and the product's long-run requirements."
    ],
    commonMistakes: [
      "Forcing the peak flat without relieving pressure.",
      "Adding nails or glue to a floating floor.",
      "Ignoring cabinets, islands, and tight transitions.",
      "Assuming peaking is always a defective plank.",
      "Skipping moisture checks near concrete or exterior doors."
    ],
    faq: [
      {
        question: "Can LVP peaking flatten out on its own?",
        answer:
          "Minor pressure may relax after conditions stabilize, but peaking caused by trapped expansion, moisture, or damaged joints usually needs the cause corrected."
      },
      {
        question: "Can cabinets cause LVP peaking?",
        answer:
          "Yes. Fixed cabinets or islands can pin a floating LVP floor if the product does not allow that installation detail."
      },
      {
        question: "Is LVP peaking the same as buckling?",
        answer:
          "They are related symptoms. Peaking often describes raised joints or ridges, while buckling may describe broader lifting or distortion. Both can come from pressure, moisture, or movement."
      },
      {
        question: "Should I cut the edges to fix LVP peaking?",
        answer:
          "Only after confirming the cause and the product requirements. Cutting blindly can damage the floor or miss a moisture or subfloor problem."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "why-is-my-hardwood-floor-crowning",
    title: "Why Is My Hardwood Floor Crowning?",
    description:
      "Understand hardwood floor crowning, including moisture imbalance, cupping versus crowning, sanding timing, humidity, concrete slabs, and what to check first.",
    metadataTitle: "Why Is My Hardwood Floor Crowning? Moisture and Repair Causes",
    metadataDescription:
      "Learn why hardwood floors crown, how crowning differs from cupping, and what to check first with moisture, humidity, sanding timing, and slabs.",
    readTime: "9 min read",
    primaryEcosystem: "hardwood-engineered-hardwood",
    materialTypes: ["hardwood", "engineered-hardwood"],
    topicCluster: "installation-method",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "hardwood-installation-humidity",
      "why-is-my-engineered-hardwood-separating",
      "why-is-my-hardwood-floor-cupping",
      "why-is-my-hardwood-floor-gapping",
      "how-long-should-hardwood-acclimate",
      "hardwood-acclimation-mistakes",
      "can-engineered-hardwood-go-over-concrete",
      "moisture-level-too-high-for-flooring",
      "moisture-barrier-engineered-hardwood-over-concrete"
    ],
    quickAnswer: [
      "Hardwood crowning happens when the center of a board is higher than the edges. It is usually tied to moisture imbalance, the drying pattern after cupping, sanding a cupped floor too early, high surface moisture, or jobsite conditions that changed after installation.",
      "Crowning should not be sanded or filled until the moisture source and board moisture have been evaluated. Repairing too early can make the floor worse."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Crowning is a moisture and timing clue. If the top of the board gains moisture or the bottom dries after previous cupping, the board shape can reverse so the center sits higher.",
          "Another common path is sanding a cupped floor before it has dried and stabilized. Once the boards later dry, the sanded edges can end up lower than the center."
        ],
        bullets: [
          "Moisture imbalance between the top and bottom of the board.",
          "Previous cupping that was sanded before the floor stabilized.",
          "High indoor humidity or wet cleaning affecting the surface.",
          "Concrete slab or crawlspace moisture changing over time.",
          "Recent leaks, HVAC changes, or seasonal moisture swings."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "First, identify whether the boards are crowning or cupping. Crowning means the center is high. Cupping means the edges are high. The difference matters because it points to different moisture patterns and repair timing.",
          "Then look for moisture sources and recent changes: leaks, cleaning, humidifiers, crawlspace conditions, slab moisture, radiant heat, HVAC shutdowns, or a recent sanding repair."
        ],
        bullets: [
          "Check whether the center or edges of the board are high.",
          "Measure indoor humidity and look for recent changes.",
          "Look for leaks, wet cleaning, slab concerns, or crawlspace moisture.",
          "Review whether the floor was recently sanded after cupping.",
          "Avoid sanding until moisture readings and stability are confirmed."
        ]
      },
      {
        id: "cupping-vs-crowning",
        title: "Cupping versus crowning",
        paragraphs: [
          "Cupping usually shows raised board edges and often points to moisture from below or higher moisture on the underside. Crowning shows a raised center and may point to top-side moisture, drying after cupping, or a repair done before the floor stabilized.",
          "The visual shape is only a clue. Moisture readings, site conditions, and product construction are needed before deciding how to repair the floor."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a hardwood professional if crowning is widespread, appeared after a leak, follows a concrete slab or crawlspace issue, happened after sanding, or is paired with gaps, cupping, stains, or loose boards.",
          "A professional can take moisture readings and decide whether the floor needs drying time, HVAC correction, subfloor work, slab review, board replacement, or refinishing."
        ]
      }
    ],
    example: [
      "A hardwood floor cups after a plumbing leak. The floor is sanded while the boards are still holding moisture. Months later, the boards dry and the centers look higher than the edges.",
      "That is a classic timing problem. The visible crown may be the result of repairing the floor before moisture conditions were stable."
    ],
    commonMistakes: [
      "Sanding before the moisture source is corrected.",
      "Confusing cupping and crowning.",
      "Assuming crowning is only a finish issue.",
      "Ignoring concrete, crawlspace, or HVAC conditions.",
      "Trying to fill or sand a moving floor before it stabilizes."
    ],
    faq: [
      {
        question: "Can hardwood crowning go away?",
        answer:
          "Sometimes minor shape changes improve after moisture conditions stabilize, but permanent crowning, sanding-related crowning, or moisture damage may need professional repair."
      },
      {
        question: "What is the difference between cupping and crowning?",
        answer:
          "Cupping means board edges are higher than the center. Crowning means the center is higher than the edges."
      },
      {
        question: "Can sanding too early cause crowning?",
        answer:
          "Yes. If a cupped floor is sanded before it dries and stabilizes, the shape can reverse later and appear crowned."
      },
      {
        question: "Can engineered hardwood crown?",
        answer:
          "Yes. Engineered hardwood is often more stable than solid wood, but moisture imbalance, slab conditions, or repair timing can still cause shape changes."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "best-underlayment-for-concrete-floors",
    title: "Best Underlayment for Concrete Floors",
    description:
      "Compare underlayment planning for LVP, laminate, and engineered hardwood over concrete, including moisture barriers, sound control, attached pad, and compatibility.",
    metadataTitle: "Best Underlayment for Concrete Floors: LVP, Laminate, Hardwood",
    metadataDescription:
      "Choose underlayment for concrete floors with practical guidance for LVP, laminate, engineered hardwood, moisture barriers, sound control, and product compatibility.",
    readTime: "9 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "lvt", "laminate", "hardwood-engineered-hardwood"],
    materialTypes: ["lvp", "lvt", "laminate", "engineered-hardwood"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "how-to-test-concrete-moisture",
      "why-flooring-fails-over-concrete",
      "can-you-install-lvp-over-concrete",
      "best-underlayment-for-lvp",
      "best-underlayment-for-laminate-flooring",
      "can-engineered-hardwood-go-over-concrete",
      "moisture-level-too-high-for-flooring",
      "common-basement-flooring-problems",
      "moisture-barrier-engineered-hardwood-over-concrete",
      "glue-down-vs-floating-floor"
    ],
    quickAnswer: [
      "The best underlayment for concrete is the one approved for the exact flooring product and the slab conditions. For LVP, laminate, and engineered hardwood, concrete underlayment decisions usually revolve around moisture control, sound requirements, compression strength, attached pad rules, and installation method.",
      "Do not choose underlayment by thickness alone. A soft or unapproved layer can create movement, clicking, separation, peaking, adhesive problems, or transition-height issues."
    ],
    keySections: [
      {
        id: "common-decisions",
        title: "Common concrete underlayment decisions",
        paragraphs: [
          "Concrete floors need a system decision, not just a roll of padding. The flooring instructions may require a vapor barrier, allow a specific underlayment, prohibit extra cushion, or require adhesive directly to the slab.",
          "Attached-pad products need extra care. Adding another pad under attached-pad LVP or laminate can make the floor feel soft and stress locking joints unless the manufacturer clearly allows it."
        ],
        bullets: [
          "Check whether the product has attached pad.",
          "Verify vapor barrier or moisture mitigation requirements.",
          "Confirm sound-control requirements for condos or upstairs slabs.",
          "Check compression strength and approval for floating floors.",
          "Plan transition heights before adding layers."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Start with slab conditions: moisture, cleanliness, flatness, cracks, old adhesive, paint, sealers, and height at adjoining rooms. Underlayment cannot fix a slab that is too wet, contaminated, unstable, or outside flatness tolerance.",
          "Then review the flooring category. LVP, laminate, and engineered hardwood can have different underlayment and vapor rules even when they are installed over the same slab."
        ],
        bullets: [
          "Confirm the floor is floating, glue-down, nail-down, or another approved method.",
          "Check moisture testing and vapor barrier rules.",
          "Use a straightedge to check slab flatness.",
          "Remove loose material, high ridges, and incompatible residues.",
          "Compare total finished height at doors, cabinets, and transitions."
        ]
      },
      {
        id: "by-flooring-type",
        title: "Underlayment by flooring type",
        paragraphs: [
          "LVP often uses attached pad or a thin approved underlayment. Laminate often needs an approved pad and may require a vapor barrier over concrete. Engineered hardwood may float over an approved underlayment, glue down with a compatible adhesive system, or require a different moisture-control approach.",
          "Tile is different. Tile assemblies usually use tile-specific membranes, backer boards, or uncoupling systems rather than soft flooring underlayment."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional when the slab is below grade, moisture history is unknown, the product is glue-down, the building has acoustic requirements, or the slab has cracks, coatings, old adhesive, or uneven patching.",
          "Professional review helps prevent choosing an underlayment that solves one concern while creating another, such as sound control at the cost of too much movement."
        ]
      }
    ],
    example: [
      "A homeowner wants floating laminate over a basement concrete slab. The laminate instructions require a vapor barrier and an approved underlayment, but the slab also has a shallow low spot near an exterior wall.",
      "The correct planning sequence is to handle slab flatness and moisture first, then choose the approved pad. A thicker cushion is not a substitute for slab prep."
    ],
    commonMistakes: [
      "Choosing the thickest underlayment instead of the approved one.",
      "Adding extra pad under attached-pad flooring without approval.",
      "Using underlayment to hide slab flatness problems.",
      "Skipping concrete moisture requirements.",
      "Forgetting that underlayment changes transition heights and door clearance."
    ],
    faq: [
      {
        question: "Do concrete floors always need underlayment?",
        answer:
          "No. Some products install directly over properly prepared concrete, while others require an approved underlayment, vapor barrier, adhesive system, or membrane."
      },
      {
        question: "Is thicker underlayment better over concrete?",
        answer:
          "Not automatically. Too much cushion can allow movement and stress floating floor joints. Product approval matters more than thickness."
      },
      {
        question: "Do I need a vapor barrier on concrete?",
        answer:
          "It depends on the flooring product and slab conditions. Many floating floors over concrete require or allow a vapor barrier, but the instructions should control the decision."
      },
      {
        question: "Can the same underlayment be used for LVP and laminate?",
        answer:
          "Only if it is approved for both exact products. LVP and laminate can have different pad thickness, density, vapor, and compression requirements."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "how-to-test-concrete-moisture",
    title: "How to Test Concrete Moisture Before Flooring",
    description:
      "Learn why concrete moisture testing matters before LVP, laminate, engineered hardwood, carpet, or tile, and how common test methods fit into flooring planning.",
    metadataTitle: "How to Test Concrete Moisture Before Flooring",
    metadataDescription:
      "Understand calcium chloride tests, in-situ RH tests, moisture meters, product limits, adhesives, and when to involve a flooring professional.",
    readTime: "9 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood", "tile"],
    materialTypes: ["lvp", "lvt", "laminate", "engineered-hardwood", "ceramic-tile", "porcelain-tile"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "moisture-level-too-high-for-flooring",
      "can-engineered-hardwood-go-over-concrete",
      "can-you-install-lvp-over-concrete",
      "moisture-barrier-engineered-hardwood-over-concrete",
      "best-underlayment-for-concrete-floors",
      "why-flooring-fails-over-concrete"
    ],
    quickAnswer: [
      "Concrete moisture should be tested before moisture-sensitive flooring is installed, especially over basements, newer slabs, older slabs with unknown history, or glue-down flooring. The right test depends on the flooring product, adhesive system, and manufacturer requirements.",
      "Calcium chloride tests, in-situ relative humidity tests, and moisture meters are not interchangeable. Moisture meters can help screen a slab, but many flooring and adhesive systems require a documented test method with limits written into the product instructions."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Why concrete moisture testing matters",
        paragraphs: [
          "Concrete can look dry at the surface while still releasing moisture vapor. That moisture can affect adhesive bond, underlayment performance, wood movement, resilient flooring stability, and indoor humidity around the finished floor.",
          "Testing is not about guessing whether the slab feels damp. It is about comparing field conditions with the limits required by the flooring, adhesive, primer, underlayment, or moisture mitigation system."
        ],
        bullets: [
          "New slabs can retain construction moisture longer than expected.",
          "Basement slabs and below-grade spaces can have ongoing vapor pressure.",
          "Old adhesives, sealers, paint, and contaminants can affect bond and test interpretation.",
          "Different flooring systems may require different moisture limits and test methods."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Start by finding the exact flooring and adhesive instructions. They should identify the required moisture test method, acceptable limits, documentation needs, and whether a vapor barrier or mitigation system is allowed.",
          "Then inspect the slab. Moisture testing should be paired with checks for flatness, cracks, sealers, paint, dusty surface material, pH, old adhesive residue, and active water sources."
        ],
        bullets: [
          "Confirm whether the floor is floating, glue-down, or tile-set.",
          "Check whether calcium chloride, in-situ RH, or another method is required.",
          "Use a moisture meter only as a screening tool unless the product allows it.",
          "Look for damp walls, musty odors, efflorescence, slab cracks, or prior water events.",
          "Plan mitigation before ordering flooring if readings exceed product limits."
        ]
      },
      {
        id: "test-methods",
        title: "Common concrete moisture test methods",
        paragraphs: [
          "Calcium chloride testing measures moisture vapor emission from the slab surface over a test period. In-situ relative humidity testing measures humidity inside drilled holes in the concrete. These methods can produce different information, so the product instructions should control which one is required.",
          "Pinless or probe-style moisture meters are useful for finding suspect areas and comparing readings across a slab, but they usually do not replace formal tests when the manufacturer or adhesive system requires documentation."
        ],
        bullets: [
          "Calcium chloride: commonly associated with surface emission testing.",
          "In-situ RH: commonly used to evaluate internal slab humidity.",
          "Moisture meters: useful screening tools, but not always acceptance tests.",
          "Adhesive systems: may have their own limits, primers, and mitigation requirements."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Bring in a flooring professional when the slab is below grade, readings are above product limits, the project is glue-down, the slab has unknown coatings, or a moisture mitigation system may be needed.",
          "Professional testing is also useful when a failed floor is being diagnosed. Moisture readings, adhesive conditions, and slab preparation records can help separate moisture problems from flatness, contamination, or installation issues."
        ]
      }
    ],
    example: [
      "A homeowner wants engineered hardwood over a basement slab. The slab looks dry, but the adhesive instructions require documented in-situ RH testing and a compatible moisture-control system if readings are too high.",
      "Instead of relying on a handheld meter alone, the homeowner has the slab tested, reviews the adhesive requirements, and chooses the installation method after the slab conditions are known."
    ],
    commonMistakes: [
      "Assuming concrete is dry because the surface looks dry.",
      "Using a moisture meter as the only test when the product requires formal testing.",
      "Ignoring adhesive moisture limits.",
      "Testing before the space is enclosed and conditioned.",
      "Skipping slab flatness, pH, contamination, and crack checks."
    ],
    faq: [
      {
        question: "Can I use a moisture meter to approve concrete for flooring?",
        answer:
          "Usually not by itself. A meter can help screen for suspicious areas, but many flooring and adhesive systems require a specific documented test such as calcium chloride or in-situ RH."
      },
      {
        question: "Which concrete moisture test is best?",
        answer:
          "The best test is the one required by the flooring, adhesive, or mitigation system. Calcium chloride and in-situ RH measure different conditions, so the product instructions should guide the choice."
      },
      {
        question: "Do floating floors need concrete moisture testing?",
        answer:
          "They may. Floating floors can still require vapor barriers, moisture limits, or slab testing, especially in basements, newer slabs, or rooms with moisture history."
      },
      {
        question: "What happens if concrete moisture is too high?",
        answer:
          "Options vary by product. The project may need drying time, a compatible mitigation system, a different adhesive, a vapor barrier, or a different flooring choice."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "why-flooring-fails-over-concrete",
    title: "Why Flooring Fails Over Concrete",
    description:
      "A practical look at why flooring fails over concrete slabs, including moisture, flatness, adhesive release, contaminants, cracks, hollow spots, and wrong underlayment choices.",
    metadataTitle: "Why Flooring Fails Over Concrete: Moisture, Slab Prep, and Movement",
    metadataDescription:
      "Learn why floors fail over concrete and what moisture, slab flatness, adhesive, cracks, contaminants, and underlayment issues to check first.",
    readTime: "9 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood", "tile", "carpet-padding"],
    materialTypes: ["lvp", "lvt", "laminate", "engineered-hardwood", "ceramic-tile", "porcelain-tile", "carpet"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "how-to-test-concrete-moisture",
      "can-engineered-hardwood-go-over-concrete",
      "can-you-install-lvp-over-concrete",
      "best-underlayment-for-concrete-floors",
      "common-basement-flooring-problems",
      "why-does-my-floor-feel-hollow"
    ],
    quickAnswer: [
      "Flooring over concrete usually fails because the slab conditions were not matched to the flooring system. Moisture, poor flatness, weak patching, contaminants, incompatible adhesive, wrong underlayment, cracks, and movement can all cause problems after installation.",
      "The finished flooring is often blamed first, but the root cause may be below it. Start with the slab: clean, dry enough for the product, smooth, flat, sound, and compatible with the installation method."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Concrete is a substrate, not a finished flooring guarantee. It can hold moisture, contain sealers, be out of flatness tolerance, have cracks, or carry old adhesive that affects the next floor.",
          "A floating floor, glue-down floor, carpet installation, tile assembly, and engineered hardwood system can each fail for different reasons over the same slab."
        ],
        bullets: [
          "Moisture vapor exceeding flooring or adhesive limits.",
          "Low spots or humps that stress floating floor joints.",
          "Dusty concrete, paint, sealers, oil, or old adhesive interfering with bond.",
          "Cracks, movement, or hollow patching under tile or glue-down floors.",
          "Wrong underlayment or added cushion that allows too much movement."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Before choosing repair materials or new flooring, identify whether the issue is moisture, movement, bond, flatness, contamination, or product compatibility.",
          "If the failed floor is still in place, note where the symptoms appear. Problems near exterior walls, basement areas, patched cracks, doors, or drains can point to different slab conditions."
        ],
        bullets: [
          "Check moisture testing records or perform the required tests.",
          "Use a straightedge to look for humps and low spots.",
          "Inspect for old adhesive, paint, sealers, dusting concrete, or residue.",
          "Tap tile or glue-down areas for hollow sounds.",
          "Review whether the installation method was approved for concrete."
        ]
      },
      {
        id: "by-flooring-system",
        title: "How failures show up by flooring system",
        paragraphs: [
          "Floating LVP and laminate may click, separate, peak, or feel hollow if the slab is uneven, the underlayment is too soft, or expansion is blocked. Glue-down resilient flooring or engineered hardwood may release if moisture, adhesive compatibility, pH, or contamination is ignored.",
          "Tile can crack or sound hollow if the substrate moves, mortar coverage is poor, movement accommodation is missing, or cracks transfer through the assembly. Carpet over concrete can develop odor, cushion issues, or wrinkles if moisture and pad requirements are not considered."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional when a concrete-related failure involves moisture, widespread adhesive release, tile cracking, basement conditions, unknown slab coatings, or repeated failures after repairs.",
          "A good evaluation looks at the slab and the flooring system together. Replacing the surface material without correcting the slab condition may repeat the same failure."
        ]
      }
    ],
    example: [
      "A floating LVP floor over a slab begins clicking and separating in a traffic path. The planks look fine, but a straightedge shows a low spot under several end joints.",
      "The likely repair starts with slab support and flatness, not simply tapping the planks together. If moisture is also suspected, testing should happen before reinstalling."
    ],
    commonMistakes: [
      "Blaming the flooring before checking the slab.",
      "Adding thicker underlayment to hide uneven concrete.",
      "Skipping adhesive compatibility and moisture limits.",
      "Installing over paint, sealers, dusty concrete, or old adhesive ridges.",
      "Ignoring cracks or movement because the slab feels hard."
    ],
    faq: [
      {
        question: "What is the most common reason flooring fails over concrete?",
        answer:
          "Moisture and slab preparation are common causes, but flatness, contamination, cracks, wrong underlayment, and product incompatibility can be just as important."
      },
      {
        question: "Can underlayment fix bad concrete?",
        answer:
          "No. Approved underlayment may help with vapor, sound, or minor surface texture, but it should not be used to hide moisture, cracks, humps, low spots, or loose patching."
      },
      {
        question: "Why does glue-down flooring release from concrete?",
        answer:
          "Possible causes include high moisture, incompatible adhesive, poor slab prep, pH concerns, old residue, surface contamination, or installing before the adhesive system requirements were met."
      },
      {
        question: "Should I replace failed flooring before testing the slab?",
        answer:
          "Usually the slab should be evaluated first. Otherwise the replacement floor may fail for the same reason."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "common-basement-flooring-problems",
    title: "Common Basement Flooring Problems",
    description:
      "Troubleshoot basement flooring problems such as slab moisture, humidity, hollow sounds, floating floor movement, carpet concerns, tile cracks, and underlayment choices.",
    metadataTitle: "Common Basement Flooring Problems and What to Check First",
    metadataDescription:
      "Learn common basement flooring issues, including slab moisture, humidity, floating floor movement, carpet over concrete, hollow sounds, and tile cracking.",
    readTime: "9 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "carpet-padding", "tile", "hardwood-engineered-hardwood"],
    materialTypes: ["lvp", "laminate", "carpet", "carpet-padding", "ceramic-tile", "porcelain-tile", "engineered-hardwood"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "how-to-test-concrete-moisture",
      "can-carpet-be-installed-over-concrete",
      "can-you-install-lvp-over-concrete",
      "why-does-my-floor-feel-hollow",
      "why-flooring-fails-over-concrete",
      "best-underlayment-for-concrete-floors"
    ],
    quickAnswer: [
      "Basement flooring problems usually start with slab moisture, humidity swings, uneven concrete, movement, or choosing a flooring system that is not suited to below-grade conditions.",
      "Before comparing colors or prices, check the basement environment: moisture, slab flatness, drainage history, HVAC, exterior walls, cracks, and whether the product is approved for below-grade use."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common basement flooring problems",
        paragraphs: [
          "Basements can be harder on flooring than upstairs rooms because concrete is in contact with ground conditions, humidity may be higher, and temperature changes can be more noticeable.",
          "The best basement flooring choice depends on the specific slab and product requirements. There is no universal flooring material that ignores moisture, flatness, or installation rules."
        ],
        bullets: [
          "Slab moisture or vapor affecting adhesives, underlayment, carpet cushion, or wood products.",
          "Humidity swings causing movement, gaps, buckling, or odor concerns.",
          "Low spots and humps creating hollow sounds or floating floor joint stress.",
          "Tile cracking from slab movement, hollow spots, or inadequate movement accommodation.",
          "Wrong underlayment or vapor layer for the selected floor."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Start by looking for water history: damp walls, prior floods, sump pump issues, musty odor, white powder on concrete, or stains near exterior walls.",
          "Then inspect slab flatness and surface condition. Basements often have patched cracks, paint, old adhesive, or floor drains that change the slab pitch."
        ],
        bullets: [
          "Confirm below-grade approval in the flooring instructions.",
          "Check required concrete moisture testing.",
          "Inspect exterior doors, drains, sump pumps, and foundation walls.",
          "Measure flatness before selecting floating LVP or laminate.",
          "Plan transition height at stairs, landings, and adjoining rooms."
        ]
      },
      {
        id: "flooring-options",
        title: "How common flooring types react in basements",
        paragraphs: [
          "LVP and laminate are popular basement choices, but they still depend on flatness, moisture rules, and underlayment compatibility. Carpet can be comfortable, but cushion selection and moisture control matter over concrete.",
          "Tile can perform well when the slab is suitable and movement is handled correctly. Engineered hardwood may be possible in some basement or slab conditions, but product approval, moisture testing, and installation method are critical."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional when the basement has water history, active moisture, slab cracks, uneven concrete, unknown coatings, or repeated flooring failures.",
          "A basement flooring estimate should include jobsite conditions, not just square footage. The floor may need testing, prep, mitigation, or a different flooring system before installation."
        ]
      }
    ],
    example: [
      "A basement family room gets floating laminate, but within a few months the floor feels hollow and begins separating near an exterior wall.",
      "The likely investigation should include slab moisture, a straightedge flatness check, expansion space, underlayment approval, and whether the product was approved for below-grade use."
    ],
    commonMistakes: [
      "Choosing basement flooring without checking moisture history.",
      "Assuming waterproof surface claims mean the whole basement assembly is moisture-proof.",
      "Ignoring slab flatness because the room is finished.",
      "Using carpet cushion or underlayment that is not approved over concrete.",
      "Forgetting stair and doorway transition heights."
    ],
    faq: [
      {
        question: "What flooring is best for a basement?",
        answer:
          "It depends on the slab, moisture, budget, comfort goals, and product approval. LVP, tile, carpet, and some engineered products may work when the conditions match the instructions."
      },
      {
        question: "Do basements need concrete moisture testing?",
        answer:
          "Often yes, especially before glue-down floors, wood products, moisture-sensitive flooring, or any basement with unknown water history."
      },
      {
        question: "Why does my basement floor sound hollow?",
        answer:
          "Possible causes include floating floor sound, low spots in the slab, underlayment compression, loose tile, or adhesive release. Check whether the hollow sound is widespread or localized."
      },
      {
        question: "Can carpet be installed over basement concrete?",
        answer:
          "Sometimes, but moisture, cushion selection, tack strip fastening, room conditions, and product requirements need to be reviewed first."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "why-is-my-floor-bouncing",
    title: "Why Is My Floor Bouncing?",
    description:
      "Troubleshoot floor bounce caused by joist movement, loose subfloor panels, floating floor feel, soft underlayment, uneven substrate, or structural concerns.",
    metadataTitle: "Why Is My Floor Bouncing? Subfloor, Joist, and Floating Floor Causes",
    metadataDescription:
      "Learn why floors bounce, what to check first, and when bouncing points to subfloor movement, underlayment compression, floating floor movement, or structural concerns.",
    readTime: "8 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["laminate", "lvp", "hardwood-engineered-hardwood"],
    materialTypes: ["lvp", "laminate", "hardwood", "engineered-hardwood"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "why-is-my-floor-squeaking",
      "why-does-my-floor-feel-hollow",
      "subfloor-flatness-requirements-lvp",
      "how-flat-should-a-subfloor-be-for-laminate",
      "why-is-my-floor-clicking",
      "why-are-my-flooring-joints-opening"
    ],
    quickAnswer: [
      "A bouncing floor usually means something in the floor system is flexing under load. It may be the joists, subfloor panels, underlayment, a floating floor assembly, or an uneven substrate.",
      "Some floating floors have a little movement underfoot, but a soft, springy, worsening, or localized bounce should be checked before it leads to squeaks, gaps, damaged locking joints, or safety concerns."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Bounce can happen below the finished floor or inside the finished floor system. Wood framing may flex, subfloor panels may move, underlayment may compress, or a floating floor may bridge a low spot.",
          "Concrete slabs do not bounce like joists, but a floating floor over concrete can still feel soft if the slab is uneven or the underlayment is too compressible."
        ],
        bullets: [
          "Joist span or framing movement under the subfloor.",
          "Loose or damaged subfloor panels.",
          "Low spots under floating LVP or laminate.",
          "Underlayment that is too thick, soft, doubled, or not approved.",
          "Finished flooring moving because it is unsupported or pinned."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Locate whether the bounce is in one small area, a traffic path, or the whole room. A localized bounce often points to a low spot, loose panel, or unsupported area. A wider bounce may involve framing or subfloor stiffness.",
          "Check for related symptoms such as squeaking, clicking, hollow sounds, gaps, peaking, or cracked tile. Those clues help separate normal floating floor feel from a support problem."
        ],
        bullets: [
          "Mark the exact area that moves.",
          "Check whether the subfloor is wood framing or concrete.",
          "Look for squeaks, gaps, cracked grout, lifted planks, or loose transitions.",
          "Review underlayment approval if the floor is floating.",
          "Avoid adding fasteners through finished floating flooring."
        ]
      },
      {
        id: "normal-vs-concerning",
        title: "Normal movement vs concerning bounce",
        paragraphs: [
          "A slight hollow or cushioned feel can be normal for some floating floors, especially compared with glued or nailed floors. But bounce that feels springy, causes noise, opens joints, or changes over time deserves investigation.",
          "Tile, hardwood, and glue-down floors are less forgiving of subfloor movement. Movement can lead to cracks, squeaks, adhesive release, or board movement."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional if the floor feels unsafe, the bounce is getting worse, tile is cracking, gaps are opening, or the problem may involve joists, beams, stairs, or structural framing.",
          "A flooring installer can evaluate finished-floor symptoms, but structural concerns may require a qualified contractor or structural professional."
        ]
      }
    ],
    example: [
      "A hallway laminate floor bounces in one spot and later starts separating at the end joints. The issue may be a low spot or soft underlayment allowing the locking joints to flex.",
      "Closing the gaps without addressing the support problem may only hide the symptom temporarily."
    ],
    commonMistakes: [
      "Assuming bounce is always normal for floating floors.",
      "Adding thicker underlayment to make the floor feel softer.",
      "Ignoring bounce until joints separate or tile cracks.",
      "Fastening floating floors through the surface.",
      "Treating a structural concern as a cosmetic flooring issue."
    ],
    faq: [
      {
        question: "Is it normal for a floating floor to bounce?",
        answer:
          "A small amount of movement may be normal, but springy, localized, worsening, noisy, or joint-opening movement should be checked."
      },
      {
        question: "Can underlayment make a floor bounce?",
        answer:
          "Yes. Underlayment that is too soft, too thick, doubled, or not approved can allow excess movement under floating floors."
      },
      {
        question: "Does floor bounce mean structural damage?",
        answer:
          "Not always. It can be underlayment, subfloor, or floating floor movement, but strong or worsening bounce may require structural evaluation."
      },
      {
        question: "Can bouncing cause laminate or LVP separation?",
        answer:
          "Yes. Repeated flexing can stress locking joints and contribute to gaps, clicking, or damaged edges."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "why-are-my-flooring-joints-opening",
    title: "Why Are My Flooring Joints Opening?",
    description:
      "Learn why flooring joints open in LVP, laminate, hardwood, and engineered floors, including humidity movement, expansion gaps, locking damage, poor acclimation, and fixed objects.",
    metadataTitle: "Why Are My Flooring Joints Opening? Gaps, Movement, and Moisture",
    metadataDescription:
      "Troubleshoot opening flooring joints caused by seasonal movement, humidity, damaged locking systems, expansion gaps, long runs, and pinned floating floors.",
    readTime: "8 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood"],
    materialTypes: ["lvp", "lvt", "laminate", "hardwood", "engineered-hardwood"],
    topicCluster: "installation-method",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "why-is-my-laminate-floor-separating",
      "why-is-my-lvp-floor-separating",
      "why-is-my-hardwood-floor-gapping",
      "how-long-should-hardwood-acclimate",
      "why-is-my-floor-bouncing",
      "flooring-direction-mistakes"
    ],
    quickAnswer: [
      "Flooring joints usually open because the floor is moving, unsupported, damaged, or reacting to moisture and humidity changes. LVP and laminate joints can open when locking systems are stressed. Hardwood and engineered hardwood can gap from seasonal movement or moisture imbalance.",
      "Start by identifying the flooring type, where the gaps are appearing, whether the floor is floating or glued/nailed, and whether humidity, subfloor movement, or fixed objects are involved."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Opening joints are a symptom of movement. The cause may be seasonal humidity, poor acclimation, unsupported floating floor joints, damaged locking edges, long runs, tight expansion areas, or heavy objects pinning the floor.",
          "The same visual symptom can mean different things by flooring type, so avoid forcing joints closed until the cause is understood."
        ],
        bullets: [
          "Seasonal humidity changes shrinking hardwood or engineered wood.",
          "Floating LVP or laminate joints flexing over low spots.",
          "Damaged locking systems from installation or repeated movement.",
          "Expansion space blocked by trim, transitions, cabinets, or islands.",
          "Long runs without required breaks or transitions."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Map the gaps. End gaps through a hallway, side gaps near a doorway, and random gaps across a room point to different causes.",
          "Then check the room conditions. Humidity, moisture, expansion space, underlayment, and subfloor support all affect whether joints stay closed."
        ],
        bullets: [
          "Identify whether the floor is LVP, laminate, hardwood, or engineered hardwood.",
          "Check indoor humidity and recent seasonal changes.",
          "Inspect expansion space at walls, trim, transitions, and fixed objects.",
          "Look for bounce, hollow movement, clicking, peaking, or lifting near the gap.",
          "Review whether the installation method and underlayment were approved."
        ]
      },
      {
        id: "by-flooring-type",
        title: "What joint opening can mean by flooring type",
        paragraphs: [
          "Laminate and floating LVP separation often points to support, locking joint, expansion, or moisture concerns. Tapping planks together may not last if the floor keeps flexing or remains pinned.",
          "Hardwood and engineered hardwood gaps may be seasonal, but wide, uneven, growing, or localized gaps should be checked for moisture imbalance, acclimation, or installation concerns."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional if gaps are spreading, joints keep reopening, boards are lifting, moisture is suspected, or the repair would require lifting a floating floor or replacing damaged planks.",
          "For hardwood, get help before filling large gaps. Filler can fail if the boards continue moving seasonally."
        ]
      }
    ],
    example: [
      "A homeowner notices end joints opening in an LVP hallway after cabinets were installed over part of the floating floor. The gaps may be related to a pinned floor and long-run expansion pressure, not just loose planks.",
      "The next step is checking expansion space, fixed objects, and subfloor support before trying to close the joints."
    ],
    commonMistakes: [
      "Forcing joints closed without checking why they opened.",
      "Filling hardwood gaps before understanding seasonal movement.",
      "Ignoring fixed cabinets, islands, or transition tracks on floating floors.",
      "Missing low spots that flex under locking joints.",
      "Assuming all gaps are installation defects."
    ],
    faq: [
      {
        question: "Can flooring gaps be normal?",
        answer:
          "Small seasonal hardwood gaps can be normal, but gaps that grow, stay open, lift, click, or appear soon after installation should be checked."
      },
      {
        question: "Why do LVP joints open?",
        answer:
          "Common causes include locking stress, uneven subfloor support, damaged locking tabs, blocked expansion, moisture, or a pinned floating floor."
      },
      {
        question: "Why do laminate joints open?",
        answer:
          "Laminate joints can open from subfloor flex, wrong underlayment, humidity, moisture, damaged locking edges, or expansion problems."
      },
      {
        question: "Should I caulk or fill opening flooring joints?",
        answer:
          "Usually not until the cause is known. Filler may hide the symptom while movement, moisture, or damaged joints continue."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "hardwood-installation-humidity",
    title: "What Humidity Should Hardwood Flooring Be Installed At?",
    description:
      "Understand why jobsite humidity matters for hardwood flooring, how stable HVAC conditions affect acclimation, and why manufacturer ranges vary.",
    metadataTitle: "What Humidity Should Hardwood Flooring Be Installed At?",
    metadataDescription:
      "Learn how jobsite humidity, HVAC stability, acclimation, solid vs engineered hardwood, concrete slabs, and seasonal movement affect hardwood installation.",
    readTime: "8 min read",
    primaryEcosystem: "hardwood-engineered-hardwood",
    secondaryEcosystems: ["planning-measuring-transitions"],
    materialTypes: ["hardwood", "engineered-hardwood"],
    topicCluster: "installation-method",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "how-long-should-hardwood-acclimate",
      "hardwood-acclimation-mistakes",
      "why-is-my-hardwood-floor-cupping",
      "why-is-my-hardwood-floor-gapping",
      "why-is-my-hardwood-floor-crowning",
      "can-engineered-hardwood-go-over-concrete"
    ],
    quickAnswer: [
      "Hardwood should be installed only after the home is at stable, normal living conditions and the flooring, subfloor, temperature, and humidity meet the product requirements. There is no single humidity number that applies to every hardwood floor.",
      "Manufacturer instructions, wood species, plank width, solid versus engineered construction, subfloor type, and regional climate all affect the acceptable installation range."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Why humidity matters",
        paragraphs: [
          "Wood flooring gains and loses moisture as indoor conditions change. If hardwood is installed when the home is unusually humid, dry, hot, cold, or still under construction, it may move later when the house returns to normal living conditions.",
          "Acclimation is really about matching the flooring to the jobsite conditions required for that product. Waiting a certain number of days does not help if the HVAC is off or the home is still drying out."
        ],
        bullets: [
          "High humidity can contribute to swelling, cupping, or tight boards.",
          "Low humidity can contribute to seasonal gaps.",
          "Construction moisture can create temporary conditions that are not normal living conditions.",
          "Concrete slabs and crawlspaces can affect the moisture balance below the wood."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Before installation, confirm the HVAC is operating, wet work is complete, and the home is within the flooring manufacturer's required temperature and humidity range.",
          "Then check flooring and subfloor moisture readings. The installer should compare the readings to the product requirements rather than relying only on the calendar."
        ],
        bullets: [
          "Verify the required humidity and temperature range in the product instructions.",
          "Confirm normal HVAC operation before acclimation and installation.",
          "Check wood subfloor or concrete slab moisture requirements.",
          "Avoid storing hardwood in garages, porches, or unconditioned rooms unless allowed.",
          "Document readings if the manufacturer or installer requires it."
        ]
      },
      {
        id: "solid-vs-engineered",
        title: "Solid vs engineered hardwood humidity concerns",
        paragraphs: [
          "Solid hardwood is generally more sensitive to moisture movement than engineered hardwood, especially in wider planks. Engineered hardwood can be more dimensionally stable, but it still has limits and can gap, cup, crown, or delaminate when conditions are wrong.",
          "The correct humidity range should come from the exact product instructions. Product construction, wear layer, core, width, installation method, and jobsite conditions all matter."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional if the home has unstable HVAC, recent construction moisture, crawlspace moisture, concrete slab concerns, radiant heat, wide planks, or a history of hardwood movement.",
          "A professional can take moisture readings and decide whether the issue is acclimation, conditioning, subfloor moisture, or an unsuitable environment."
        ]
      }
    ],
    example: [
      "Hardwood is delivered to a house where drywall finishing just ended and HVAC has not been running consistently. The boards sit in the living room for a week, but the home is still humid from construction.",
      "That week of storage may not count as proper acclimation because the material is adjusting to temporary jobsite moisture, not stable living conditions."
    ],
    commonMistakes: [
      "Treating acclimation as only a number of days.",
      "Installing before HVAC is stable.",
      "Ignoring subfloor moisture readings.",
      "Assuming engineered hardwood has no humidity limits.",
      "Storing hardwood in unconditioned spaces before installation."
    ],
    faq: [
      {
        question: "What indoor humidity is best for hardwood flooring?",
        answer:
          "The acceptable range depends on the exact flooring product and manufacturer instructions. The key is stable normal living conditions within the required range."
      },
      {
        question: "Can hardwood acclimate if the HVAC is off?",
        answer:
          "Usually that is risky. Hardwood should acclimate to the conditions it will live in, so HVAC stability is often part of proper jobsite preparation."
      },
      {
        question: "Does engineered hardwood need humidity control?",
        answer:
          "Yes. Engineered hardwood may be more stable than solid wood, but it still reacts to moisture and has product-specific limits."
      },
      {
        question: "Can humidity cause hardwood gaps?",
        answer:
          "Yes. Low humidity can contribute to seasonal gaps, while changing moisture conditions can also contribute to cupping, crowning, or movement."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "why-is-my-engineered-hardwood-separating",
    title: "Why Is My Engineered Hardwood Separating?",
    description:
      "Troubleshoot engineered hardwood separation caused by humidity changes, concrete slab moisture, poor acclimation, locking issues, glue-down bond failure, or subfloor flatness.",
    metadataTitle: "Why Is My Engineered Hardwood Separating? Causes and Checks",
    metadataDescription:
      "Learn why engineered hardwood separates and what to check first, including humidity, acclimation, concrete moisture, locking systems, glue-down bond, and flatness.",
    readTime: "8 min read",
    primaryEcosystem: "hardwood-engineered-hardwood",
    secondaryEcosystems: ["planning-measuring-transitions"],
    materialTypes: ["engineered-hardwood", "hardwood"],
    topicCluster: "installation-method",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "can-engineered-hardwood-go-over-concrete",
      "how-long-should-hardwood-acclimate",
      "moisture-barrier-engineered-hardwood-over-concrete",
      "floating-vs-glue-down-engineered-hardwood-over-concrete",
      "hardwood-installation-humidity",
      "why-is-my-hardwood-floor-gapping"
    ],
    quickAnswer: [
      "Engineered hardwood can separate when the floor moves more than the installation system can handle. Common causes include humidity changes, poor acclimation, concrete slab moisture, subfloor flatness problems, damaged locking systems, or glue-down bond failure.",
      "The right diagnosis depends on whether the floor is floating, glue-down, nail-down, or installed over concrete. Do not assume engineered hardwood is immune to moisture or movement."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Engineered hardwood is built to be more stable than solid hardwood, but it still responds to moisture, installation method, subfloor support, and indoor conditions.",
          "Separation may show up as end gaps, side gaps, loose boards, hollow areas, or joints that reopen after being closed."
        ],
        bullets: [
          "Humidity swings or unstable HVAC conditions.",
          "Poor acclimation or jobsite conditioning.",
          "Concrete slab moisture or missing compatible moisture control.",
          "Floating floor locking system stress over low spots.",
          "Glue-down adhesive release, contamination, or wrong adhesive system."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Identify the installation method first. Floating engineered hardwood separation is often tied to locking stress, expansion, or flatness. Glue-down separation may point toward adhesive bond, slab prep, moisture, or surface contamination.",
          "Then check indoor humidity, subfloor moisture, slab testing records, and whether the product was acclimated and installed according to the instructions."
        ],
        bullets: [
          "Map where gaps appear and whether they are widening.",
          "Check humidity and recent HVAC changes.",
          "Look for cupping, crowning, hollow sounds, or loose boards.",
          "Review concrete moisture testing if installed over slab.",
          "Check whether the floor is pinned by cabinets, trim, or transitions."
        ]
      },
      {
        id: "floating-vs-glue-down",
        title: "Floating vs glue-down separation",
        paragraphs: [
          "A floating engineered hardwood floor needs expansion space and flat support. If it bridges low spots or is pinned by heavy fixed objects, joints can stress and open.",
          "A glue-down engineered hardwood floor depends on slab preparation, moisture conditions, adhesive compatibility, and correct trowel and open-time practices. Separation or hollow areas may involve bond failure rather than plank locking."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional if separation is spreading, boards sound hollow, moisture is suspected, the floor is over concrete, or the repair would require lifting or replacing boards.",
          "Moisture readings and installation records can be important before deciding whether to close gaps, replace boards, or address slab conditions."
        ]
      }
    ],
    example: [
      "A glue-down engineered hardwood floor over concrete starts showing gaps and hollow sounds near an exterior wall. The issue may involve slab moisture, adhesive bond, surface contamination, or humidity movement.",
      "The first step is not filler. It is checking the installation method, moisture records, bond condition, and indoor humidity."
    ],
    commonMistakes: [
      "Assuming engineered hardwood cannot move.",
      "Filling gaps before checking humidity and moisture.",
      "Ignoring concrete slab testing.",
      "Treating glue-down bond failure like a floating floor gap.",
      "Overlooking low spots under floating engineered hardwood."
    ],
    faq: [
      {
        question: "Is engineered hardwood separation normal?",
        answer:
          "Small seasonal movement can happen, but widening, uneven, recurring, or soon-after-installation gaps should be evaluated."
      },
      {
        question: "Can concrete moisture make engineered hardwood separate?",
        answer:
          "Yes. Slab moisture can contribute to movement, adhesive issues, cupping, or bond failure depending on the installation method and moisture-control system."
      },
      {
        question: "Can I fill engineered hardwood gaps?",
        answer:
          "Only after the cause is understood. Filler may fail if the boards continue moving from humidity, moisture, or installation stress."
      },
      {
        question: "Does floating engineered hardwood need expansion gaps?",
        answer:
          "Yes, if the product is a floating system, it needs the expansion space and transitions required by the manufacturer."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "why-is-my-lvp-floor-buckling",
    title: "Why Is My LVP Floor Buckling?",
    description:
      "Troubleshoot LVP buckling caused by expansion pressure, missing expansion gaps, fixed cabinets, moisture or temperature movement, long runs, and subfloor issues.",
    metadataTitle: "Why Is My LVP Floor Buckling? Expansion, Moisture, and Fixed Objects",
    metadataDescription:
      "Learn why LVP buckles, what to check first, and how expansion gaps, cabinets, moisture, temperature, long runs, and subfloor movement affect vinyl plank.",
    readTime: "8 min read",
    primaryEcosystem: "lvp",
    secondaryEcosystems: ["lvt", "planning-measuring-transitions"],
    materialTypes: ["lvp", "lvt"],
    topicCluster: "installation-method",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "why-is-my-lvp-floor-peaking",
      "why-is-my-lvp-floor-separating",
      "why-is-my-lvp-lifting",
      "can-you-install-cabinets-over-floating-lvp",
      "subfloor-flatness-requirements-lvp",
      "can-you-install-lvp-over-concrete"
    ],
    quickAnswer: [
      "LVP buckling usually means the floor is under pressure or moving more than it should. Common causes include missing expansion gaps, tight transitions, heavy fixed cabinets or islands over a floating floor, moisture, temperature changes, long runs, or subfloor problems.",
      "Do not force a buckled floating floor flat until you check what is trapping it. If the pressure remains, the floor can peak again or damage the locking joints."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Floating LVP needs room to move. When it is trapped at walls, transitions, door jambs, cabinets, islands, or long connected runs, pressure can build and show up as buckling or peaking.",
          "Glue-down LVP can also buckle or release, but the cause may be adhesive bond, slab prep, moisture, or product compatibility rather than floating floor expansion."
        ],
        bullets: [
          "Missing or blocked perimeter expansion space.",
          "Transition tracks or trim pinning the floor.",
          "Cabinets, islands, or built-ins installed over floating LVP.",
          "Moisture, heat, direct sunlight, or temperature swings.",
          "Long runs without required movement breaks."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Confirm whether the LVP is floating or glue-down. A floating floor buckling near a wall or doorway often points to expansion pressure. A glue-down floor that releases may point to adhesive or slab conditions.",
          "Check the perimeter, transitions, cabinets, islands, and doorways before cutting, weighting, or forcing planks back down."
        ],
        bullets: [
          "Look for tight trim, baseboards, or door jambs.",
          "Check transition tracks and stair noses.",
          "Identify heavy fixed objects installed on top of floating LVP.",
          "Look for moisture near doors, slabs, appliances, or plumbing.",
          "Review maximum run and expansion break requirements."
        ]
      },
      {
        id: "buckling-vs-peaking",
        title: "Buckling vs peaking",
        paragraphs: [
          "People often use buckling and peaking interchangeably. Peaking usually describes a raised ridge at a joint from pressure. Buckling can describe a broader area lifting, tenting, or losing contact with the substrate.",
          "Either way, the cause is usually movement, pressure, moisture, heat, or support. The repair should focus on the condition that created the stress."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional if the buckling is spreading, moisture is suspected, cabinets or islands may be pinning the floor, or planks have damaged locking edges.",
          "A professional can determine whether the floor can be relieved and reassembled or whether damaged planks need replacement."
        ]
      }
    ],
    example: [
      "A floating LVP floor buckles near a kitchen island six months after installation. The island may be pinning the floor and blocking normal movement.",
      "Before replacing planks, the installer should check product instructions, expansion space, and whether fixed objects are restricting the floating floor."
    ],
    commonMistakes: [
      "Forcing buckled planks flat without relieving pressure.",
      "Installing cabinets or islands over floating LVP without checking instructions.",
      "Ignoring direct sun, exterior doors, or moisture sources.",
      "Assuming all buckling is a product defect.",
      "Skipping transitions in long connected runs when required."
    ],
    faq: [
      {
        question: "Can LVP buckle from heat?",
        answer:
          "Heat and direct sunlight can contribute to movement in some products. Check the product instructions for temperature, sun exposure, and window-covering guidance."
      },
      {
        question: "Can cabinets make LVP buckle?",
        answer:
          "They can if the floor is a floating system and the cabinets pin it. Many floating floors restrict fixed objects installed on top, so product instructions matter."
      },
      {
        question: "Is LVP buckling the same as peaking?",
        answer:
          "They are related symptoms. Peaking often means raised joints from pressure, while buckling may describe broader lifting or distortion."
      },
      {
        question: "Can buckled LVP be repaired?",
        answer:
          "Sometimes, but the pressure, moisture, or support issue must be corrected first. Damaged locking joints may require plank replacement."
      }
    ],
    disclaimer: installConditionDisclaimer
  },
  {
    slug: "why-are-my-lvp-seams-showing",
    title: "Why Are My LVP Seams Showing?",
    description:
      "Troubleshoot visible LVP seams caused by locking system damage, uneven subfloors, expansion movement, lighting, debris, plank end joints, or product tolerance.",
    metadataTitle: "Why Are My LVP Seams Showing? Visible Vinyl Plank Joint Causes",
    metadataDescription:
      "Learn why LVP seams or joints show, what is normal, and what to check first for locking damage, subfloor movement, expansion, debris, and lighting.",
    readTime: "8 min read",
    primaryEcosystem: "lvp",
    secondaryEcosystems: ["lvt"],
    materialTypes: ["lvp", "lvt"],
    topicCluster: "installation-method",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "why-is-my-lvp-floor-separating",
      "why-is-my-lvp-floor-clicking",
      "subfloor-flatness-requirements-lvp",
      "why-does-my-floor-feel-hollow",
      "why-is-my-lvp-floor-buckling",
      "why-is-my-lvp-floor-peaking"
    ],
    quickAnswer: [
      "LVP seams may show because of normal bevels or lighting, but they can also point to joint movement, uneven subfloor support, damaged locking tabs, debris in the joint, expansion pressure, or product tolerance issues.",
      "The key question is whether the seam is only visible or whether it is opening, lifting, clicking, collecting dirt, or moving underfoot."
    ],
    keySections: [
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Many LVP products have bevels or edge details that make joints visible by design. Lighting across the floor can also highlight plank edges, especially near windows or long sight lines.",
          "Visible seams become a concern when they are uneven, widening, dirty, lifted, sharp, or paired with noise or movement."
        ],
        bullets: [
          "Normal bevels or plank edge detail.",
          "Low-angle light emphasizing joints.",
          "Debris or damaged locking edges during installation.",
          "Subfloor low spots causing joint movement.",
          "Expansion pressure opening or lifting joints."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Look closely at whether the joint is open or simply visible. A visible bevel is different from a gap where dirt collects or a joint that moves when walked on.",
          "Then check whether the seam visibility follows a traffic path, window light, a low spot, or a long run. The pattern often points to the cause."
        ],
        bullets: [
          "Check for actual gaps, height differences, or lifted edges.",
          "Walk the area and listen for clicking or movement.",
          "Look for debris, damaged corners, or chipped locking edges.",
          "Check subfloor support if the same seam moves under load.",
          "Review expansion space if multiple seams are opening."
        ]
      },
      {
        id: "normal-vs-concerning",
        title: "Normal vs concerning LVP seams",
        paragraphs: [
          "A consistent bevel line across the floor is usually part of the product appearance. A random wide seam, raised edge, dark dirt line, or seam that clicks can be a sign of movement or damage.",
          "Lighting can make seams look more obvious without indicating failure. View the floor from multiple angles before deciding whether the joint is actually changing."
        ]
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a professional if seams are widening, lifting, separating, clicking, or collecting dirt. Also get help if the issue follows low spots, moisture areas, or long runs through connected rooms.",
          "Repair may require lifting planks to inspect locking edges, debris, underlayment, or subfloor support."
        ]
      }
    ],
    example: [
      "A homeowner notices LVP seams near a patio door look darker in afternoon light. The joints are not open and do not move, so the issue may be lighting and bevel visibility.",
      "In another room, seams in a traffic path click and collect dirt. That pattern points more toward movement, damaged locking edges, or subfloor support."
    ],
    commonMistakes: [
      "Assuming every visible seam is a failure.",
      "Ignoring seams that are widening, lifting, or moving.",
      "Cleaning dirt lines without checking for actual gaps.",
      "Missing subfloor low spots under repeated seam movement.",
      "Forcing planks together when locking edges are damaged."
    ],
    faq: [
      {
        question: "Are visible LVP seams normal?",
        answer:
          "Sometimes. Beveled edges and lighting can make seams visible. Movement, gaps, lifting, clicking, or dirt collection are more concerning."
      },
      {
        question: "Why do LVP seams show more in sunlight?",
        answer:
          "Low-angle light can cast shadows along bevels or slight height differences, making joints more visible."
      },
      {
        question: "Can uneven subfloor make LVP seams show?",
        answer:
          "Yes. Unsupported joints can move under traffic, which can make seams open, click, or become more noticeable."
      },
      {
        question: "Can visible LVP seams be fixed?",
        answer:
          "It depends on the cause. Lighting and bevels are appearance factors, while open or damaged joints may require plank removal, subfloor correction, or replacement."
      }
    ],
    disclaimer: installConditionDisclaimer
  }
];

export const searchConsoleGuideBatch: Guide[] = guideDrafts.map(buildGuide);
