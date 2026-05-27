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
    dateModified: "2026-05-27",
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
      "moisture-barrier-engineered-hardwood-over-concrete",
      "can-engineered-hardwood-go-over-concrete",
      "can-you-install-lvp-over-concrete",
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
      "can-you-install-lvp-over-concrete",
      "best-underlayment-for-lvp",
      "best-underlayment-for-laminate-flooring",
      "can-engineered-hardwood-go-over-concrete",
      "moisture-level-too-high-for-flooring",
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
  }
];

export const searchConsoleGuideBatch: Guide[] = guideDrafts.map(buildGuide);
