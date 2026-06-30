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

type RiskGuideDraft = {
  slug: GuideSlug;
  title: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  readTime: string;
  primaryEcosystem: GuideEcosystemSlug;
  secondaryEcosystems?: GuideEcosystemSlug[];
  materialTypes: MaterialType[];
  topicCluster?: TopicCluster;
  relatedTools?: ToolSlug[];
  relatedGuides: GuideSlug[];
  quickAnswer: string[];
  normalRows: string[][];
  checkFirst: string[];
  riskRows: string[][];
  commonCauses: string[];
  whatNotToIgnore: string[];
  nextPath: string[];
  whenToCallAPro: string[];
  example: string[];
  faq: FAQItem[];
};

const riskDisclaimer =
  "This guide is general flooring risk-assessment information, not a field diagnosis. Flooring products, locking systems, adhesives, underlayments, subfloors, moisture limits, acclimation requirements, flatness tolerances, and repair methods vary by manufacturer and jobsite. Verify the written product instructions and use a qualified flooring professional when moisture, structural movement, spreading damage, trip hazards, or uncertain installation conditions are involved.";

function buildRiskGuide(input: RiskGuideDraft): Guide {
  return {
    slug: input.slug,
    title: input.title,
    description: input.description,
    metadataTitle: input.metadataTitle,
    metadataDescription: input.metadataDescription,
    dateModified: "2026-06-30",
    readTime: input.readTime,
    primaryEcosystem: input.primaryEcosystem,
    secondaryEcosystems: input.secondaryEcosystems ?? ["planning-measuring-transitions"],
    materialTypes: input.materialTypes,
    topicCluster: input.topicCluster ?? "repairs",
    relatedTools: input.relatedTools ?? ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: input.relatedGuides,
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: input.quickAnswer
      },
      {
        id: "normal-vs-not-normal",
        title: "Normal vs not normal",
        paragraphs: [
          "The fastest way to sort risk is to compare the symptom, where it happens, whether it is spreading, and whether moisture or movement clues are present.",
          "This page is about deciding how cautious to be. It does not replace the detailed repair guides or the manufacturer's installation instructions."
        ],
        comparisonTable: {
          columns: ["Situation", "Usually monitor", "Not normal / investigate"],
          rows: input.normalRows
        }
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Start with visible facts before choosing a repair. Photos, measurements, and a simple map of the affected area help you see whether the issue is isolated or spreading."
        ],
        bullets: input.checkFirst
      },
      {
        id: "risk-level-table",
        title: "Risk level table",
        paragraphs: [
          "Use this table as a planning screen. If the symptom is moving toward the right side of the table, pause repairs and verify field conditions before continuing."
        ],
        comparisonTable: {
          columns: ["Risk level", "What it usually means", "What to do next"],
          rows: input.riskRows
        }
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Most flooring problems trace back to movement, moisture, substrate support, installation method, or product compatibility. The visible symptom is only the starting point."
        ],
        bullets: input.commonCauses
      },
      {
        id: "what-not-to-ignore",
        title: "What not to ignore",
        paragraphs: [
          "Some warning signs are easy to dismiss because the floor may still look mostly finished. These are the ones worth slowing down for."
        ],
        bullets: input.whatNotToIgnore
      },
      {
        id: "related-decision-paths",
        title: "Related decision paths",
        paragraphs: [
          "For guided help, use the Problem Finder at /diagnose or the flooring decision trees at /decision-trees. Then use the related guides below to move from symptom to likely cause to the next check."
        ],
        bullets: input.nextPath
      },
      {
        id: "when-to-call-a-professional",
        title: "When to call a professional",
        paragraphs: [
          "Call a flooring professional, installer, or qualified building professional when field conditions are uncertain or when the symptom could involve moisture, slab conditions, subfloor movement, or safety."
        ],
        bullets: input.whenToCallAPro
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: input.example
      }
    ],
    faq: input.faq,
    disclaimer: riskDisclaimer
  };
}

export const riskAssessmentGuides: Guide[] = [
  buildRiskGuide({
    slug: "is-floor-clicking-normal",
    title: "Is Floor Clicking Normal?",
    description:
      "Learn when floor clicking is likely minor and when it may point to subfloor support, locking-joint stress, moisture, or installation problems.",
    metadataTitle: "Is Floor Clicking Normal? When to Monitor vs Investigate",
    metadataDescription:
      "Find out when floor clicking may be normal, when it needs correction, and what to check before repairing LVP, laminate, hardwood, or tile.",
    readTime: "8 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood", "tile"],
    materialTypes: ["lvp", "laminate", "engineered-hardwood", "hardwood", "ceramic-tile"],
    relatedGuides: [
      "why-is-my-floor-clicking",
      "why-is-my-lvp-floor-clicking",
      "clicking-vs-lifting-flooring",
      "why-does-my-floor-feel-hollow",
      "why-is-my-floor-squeaking",
      "flooring-movement-problems",
      "is-this-flooring-movement-normal",
      "when-to-stop-floor-installation"
    ],
    quickAnswer: [
      "A small amount of floor noise can be normal in some homes, especially with seasonal wood movement or a floating floor settling into use. Repeated clicking in the same traffic path is different. That usually means something is moving under foot.",
      "If the floor only clicks in one small area and nothing is lifting, separating, swelling, or spreading, monitor it and document the location. If clicking grows, follows a joint, appears with gaps, or happens over a slab or low spot, stop guessing and check support, movement, moisture, and product instructions."
    ],
    normalRows: [
      ["One light click in an older wood-framed home", "Monitor if it does not spread and the floor feels solid.", "Investigate if it becomes frequent, sharp, or tied to a soft spot."],
      ["Floating LVP or laminate makes noise only in one traffic spot", "Monitor briefly while checking for debris or trim contact.", "Check flatness, underlayment, expansion space, and locking-joint stress."],
      ["Clicking appears with visible gaps or lifted edges", "Not a monitor-only issue.", "Treat it as movement or joint stress until proven otherwise."],
      ["Clicking over concrete or after moisture changes", "Do not assume it is normal.", "Review slab moisture, adhesive/underlayment compatibility, and floor movement."]
    ],
    checkFirst: [
      "Mark the exact boards, tiles, or traffic path where the click repeats.",
      "Look for gaps, peaking, lifting, hollow sound, loose transitions, or rubbing trim near the noise.",
      "Check whether the floor is floating, glue-down, nail-down, or tile, because the likely causes differ.",
      "Review product instructions for flatness, underlayment, expansion space, adhesive, and moisture requirements.",
      "Use the Floor Clicking decision tree if you are not sure which detailed guide fits."
    ],
    riskRows: [
      ["Usually monitor", "One occasional sound with no movement, damage, or spreading.", "Take photos, mark the area, and recheck after normal use."],
      ["Needs correction", "Repeated click in one area, loose trim contact, unsupported spot, or minor joint stress.", "Check flatness, underlayment, trim, transitions, and locking edges before forcing a repair."],
      ["Stop and investigate", "Clicking with lifting, peaking, separation, swelling, dampness, or adhesive release.", "Pause repairs and identify moisture, expansion pressure, or support problems first."],
      ["Professional inspection recommended", "Soft floor, strong bounce, cracked tile, recurring slab moisture, or widespread movement.", "Have a qualified installer or building professional inspect the assembly."]
    ],
    commonCauses: [
      "Low spots or unsupported areas below a floating floor.",
      "Damaged, dirty, or stressed locking joints.",
      "Underlayment that is too soft or not approved for the product.",
      "Expansion space blocked by trim, transitions, cabinets, islands, or tight door jambs.",
      "Moisture or humidity movement affecting the floor or subfloor.",
      "Subfloor panels, fasteners, joists, or tile bond movement below the finished surface."
    ],
    whatNotToIgnore: [
      "A click that gets louder or spreads across the room.",
      "Clicking paired with gaps that keep reopening.",
      "Raised edges, peaking, buckling, or trip hazards.",
      "Musty odor, swelling, dampness, or concrete slab concerns.",
      "Tile cracking or a hollow area that is growing."
    ],
    nextPath: [
      "Use /diagnose if you are choosing between clicking, hollow sound, squeaking, lifting, or separation.",
      "Use /decision-trees for a guided Floor Clicking path.",
      "Read Why Is My Floor Clicking? for broad causes, then Why Is My LVP Floor Clicking? for vinyl plank-specific checks.",
      "Use Flooring Movement Problems when the clicking is part of a bigger movement pattern."
    ],
    whenToCallAPro: [
      "Clicking is paired with floor movement, soft spots, cracking, or dampness.",
      "The floor was recently installed and may involve flatness, underlayment, adhesive, or expansion requirements.",
      "The sound is over concrete and moisture or bond failure is possible.",
      "You would need to remove multiple rows, trim, tile, or glued flooring to inspect the cause."
    ],
    example: [
      "A homeowner notices a click in one LVP plank near a hallway. Nothing is wet, lifted, or separated. The first step is to mark the board, check nearby trim and transition pressure, and see whether the click repeats in the same spot.",
      "If the plank later starts separating or peaking, the issue moves from monitor to investigate because the click is now connected to movement."
    ],
    faq: [
      {
        question: "Is clicking normal in floating floors?",
        answer:
          "Some sound can happen, but repeated clicking in the same spot often points to movement, low spots, underlayment, locking-joint stress, or blocked expansion. Check the product requirements before treating it as normal."
      },
      {
        question: "Can a floor click because of moisture?",
        answer:
          "Yes, moisture or humidity changes can move flooring or subfloor materials and create stress at joints. Moisture should be investigated if clicking appears with swelling, gaps, cupping, odor, slab concerns, or adhesive release."
      },
      {
        question: "Should I tap a clicking plank back together?",
        answer:
          "Only after checking why it moved. Forcing a joint can damage locking edges if the real issue is flatness, pressure, debris, moisture, or a damaged board."
      }
    ]
  }),
  buildRiskGuide({
    slug: "is-floor-separation-serious",
    title: "Is Floor Separation Serious?",
    description:
      "Learn when flooring gaps are cosmetic or seasonal and when separation may point to installation, moisture, subfloor, or locking-system problems.",
    metadataTitle: "Is Floor Separation Serious? Flooring Gap Risk Guide",
    metadataDescription:
      "Use this risk guide to decide when floor separation is minor, when it needs repair, and when moisture or professional inspection is needed.",
    readTime: "9 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood"],
    materialTypes: ["lvp", "laminate", "engineered-hardwood", "hardwood"],
    relatedGuides: [
      "flooring-separation-problems",
      "why-are-my-flooring-joints-opening",
      "why-is-my-laminate-floor-separating",
      "how-to-fix-laminate-floor-separation",
      "laminate-floor-separation-repair-guide",
      "why-is-my-lvp-floor-separating",
      "why-is-my-engineered-hardwood-separating",
      "flooring-moisture-problems",
      "is-this-flooring-movement-normal",
      "when-to-stop-floor-installation"
    ],
    quickAnswer: [
      "Floor separation is serious when gaps keep reopening, spread across the room, appear with swelling or buckling, or point to moisture, damaged locking joints, adhesive failure, or subfloor movement.",
      "Small seasonal gaps in some wood floors may be cosmetic. Laminate, LVP, and engineered floors that separate repeatedly usually need the cause checked before repair. Closing the gap without fixing pressure, moisture, or support can make the problem return."
    ],
    normalRows: [
      ["Small seasonal wood gaps", "May be monitored if they close when indoor conditions stabilize.", "Investigate if gaps grow, stay open, or appear with cupping/crowning."],
      ["One isolated floating-floor joint opens", "May be a local joint or installation issue.", "Check locking edges, flatness, expansion space, and moisture before closing."],
      ["Gaps keep reopening after repair", "Not a cosmetic issue.", "Look for movement, support, humidity, or damaged locking tabs."],
      ["Separation with swelling, odor, or slab concerns", "Do not monitor only.", "Treat as possible moisture or substrate problem."]
    ],
    checkFirst: [
      "Identify the flooring type and whether the gap is at an end joint, long side, doorway, hallway, or room edge.",
      "Measure and photograph the gap so you can tell whether it is changing.",
      "Check indoor humidity, moisture history, slab conditions, and wet areas nearby.",
      "Inspect for clicking, hollow sound, bounce, peaking, buckling, lifting, or damaged locking edges.",
      "Review repair limits in the manufacturer's instructions before filling, gluing, tapping, or replacing boards."
    ],
    riskRows: [
      ["Usually monitor", "Small wood gaps that follow seasonal humidity and do not keep growing.", "Track indoor humidity and recheck after conditions stabilize."],
      ["Needs correction", "A local floating-floor joint opens because of debris, damaged edge, trim pressure, or a small support issue.", "Correct the cause and repair according to the product instructions."],
      ["Stop and investigate", "Recurring gaps, spreading separation, swelling, buckling, peaking, or moisture signs.", "Pause cosmetic repairs and check moisture, expansion, flatness, and locking/bond condition."],
      ["Professional inspection recommended", "Widespread separation, slab moisture, soft subfloor, adhesive release, structural movement, or repeated failure.", "Have the floor and substrate inspected before replacing material."]
    ],
    commonCauses: [
      "Seasonal humidity or moisture movement.",
      "Damaged locking joints or plank edges.",
      "Subfloor low spots, bounce, hollow areas, or poor support.",
      "Floating floor pinned by cabinets, islands, door jambs, trim, or transitions.",
      "Adhesive bond failure in glue-down floors.",
      "Poor acclimation, unstable jobsite conditions, or installation before conditions were ready."
    ],
    whatNotToIgnore: [
      "Gaps that return after being closed.",
      "Long-side separation in laminate or LVP.",
      "Separation with swelling, musty odor, dampness, or concrete slab concerns.",
      "Gaps near heavy fixed objects, long runs, or tight transitions.",
      "Any separation that creates a trip edge or sharp joint."
    ],
    nextPath: [
      "Use /diagnose when you are unsure whether the main issue is separating, buckling, peaking, lifting, or moisture.",
      "Use /decision-trees for the Floor Separating path.",
      "Use Flooring Separation Problems for the hub view, then move to the material-specific repair guide.",
      "Use How to Fix Laminate Floor Separation only after the cause has been checked."
    ],
    whenToCallAPro: [
      "The gap is recurring, spreading, or connected to moisture.",
      "Boards appear swollen, chipped, crushed, or unable to lock.",
      "The floor is over concrete and slab moisture or bond failure is possible.",
      "Repair would require lifting a large area, cutting fixed trim, or replacing damaged boards."
    ],
    example: [
      "A laminate floor opens along the long side in a hallway. The gap closes when tapped but reopens a week later. That is not just a cosmetic gap; it suggests pressure, support, locking damage, or humidity movement.",
      "The better path is to inspect expansion space, doorways, underlayment, flatness, and moisture before deciding whether boards can be reused."
    ],
    faq: [
      {
        question: "Are small floor gaps always serious?",
        answer:
          "No. Some small gaps can be seasonal or cosmetic, especially with wood. Gaps become more concerning when they spread, return after repair, appear with moisture, or involve floating-floor locking systems."
      },
      {
        question: "Can I just fill flooring gaps?",
        answer:
          "Filling can hide the symptom without fixing the cause. Floating floors in particular need movement space, and filler or glue may not be allowed by the manufacturer."
      },
      {
        question: "When should separation stop an installation?",
        answer:
          "Stop when boards will not lock without force, long-side joints separate, the floor does not lay flat, moisture is suspected, or the problem repeats across multiple rows."
      }
    ]
  }),
  buildRiskGuide({
    slug: "is-this-flooring-movement-normal",
    title: "Is This Flooring Movement Normal?",
    description:
      "A homeowner-friendly risk guide for clicking, shifting, expanding, bouncing, squeaking, lifting, peaking, buckling, and separating floors.",
    metadataTitle: "Is Flooring Movement Normal? Clicking, Lifting, Buckling, Gaps",
    metadataDescription:
      "Compare flooring movement symptoms and learn when to monitor, correct, stop work, or request professional inspection.",
    readTime: "10 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood", "tile"],
    materialTypes: ["lvp", "laminate", "engineered-hardwood", "hardwood", "ceramic-tile", "porcelain-tile"],
    relatedGuides: [
      "flooring-movement-problems",
      "what-flooring-movement-is-normal",
      "why-is-my-floor-moving",
      "why-do-floors-expand-and-contract",
      "seasonal-flooring-movement",
      "is-floor-clicking-normal",
      "is-floor-separation-serious",
      "why-is-my-floor-bouncing",
      "why-is-my-floor-squeaking",
      "when-to-stop-floor-installation"
    ],
    quickAnswer: [
      "Some flooring movement is normal because homes, wood products, floating floors, and indoor humidity change. Movement becomes a problem when it is spreading, raised, recurring, moisture-related, or tied to soft spots, cracking, separation, or trip hazards.",
      "Use this page as a severity screen. If the symptom is only minor sound or seasonal movement, monitoring may be enough. If movement spreads across the room or shows up as lifting, buckling, peaking, widening gaps, or slab/moisture concerns, investigate before repairing."
    ],
    normalRows: [
      ["Seasonal expansion and contraction", "Expected in many wood and floating-floor systems within product limits.", "Investigate if movement is severe, permanent, or paired with moisture symptoms."],
      ["Light squeak or click in one area", "May be monitored if stable and not paired with damage.", "Investigate if it spreads, follows joints, or feels soft."],
      ["Floor shifting, lifting, peaking, or buckling", "Not normal movement.", "Check expansion pressure, fixed objects, moisture, underlayment, and substrate support."],
      ["Bouncy, sagging, or soft movement", "Do not treat as a surface-only flooring issue.", "Consider subfloor/framing review, especially if new or worsening."]
    ],
    checkFirst: [
      "Name the main symptom: clicking, separating, lifting, peaking, buckling, bouncing, squeaking, hollow sound, swelling, or gapping.",
      "Check whether the movement is local, spreading, seasonal, or tied to doors, transitions, cabinets, slabs, or wet areas.",
      "Identify the flooring system: floating LVP/laminate, glue-down, nail-down hardwood, engineered hardwood, carpet, or tile.",
      "Look for moisture clues, expansion pinch points, flatness/support issues, and damaged locking or bond areas.",
      "Use the Flooring Movement Problems hub when more than one symptom is present."
    ],
    riskRows: [
      ["Usually monitor", "Stable seasonal movement, light sound, or one minor area with no damage.", "Document it, monitor indoor conditions, and recheck."],
      ["Needs correction", "Local clicking, small unsupported area, loose transition, tight trim, or installation-detail issue.", "Correct the local cause before it spreads."],
      ["Stop and investigate", "Lifting, buckling, peaking, recurring gaps, swelling, dampness, or expanding affected area.", "Find moisture, expansion pressure, support, or product compatibility issues first."],
      ["Professional inspection recommended", "Soft/sagging floor, structural bounce, wide cracks, slab moisture, adhesive failure, or unsafe movement.", "Request inspection before continuing installation or repair."]
    ],
    commonCauses: [
      "Normal seasonal humidity movement within the expected range for the product.",
      "Blocked expansion space in floating floors.",
      "Subfloor flatness or support issues.",
      "Moisture from slabs, leaks, humidity, wet subfloors, or crawlspaces.",
      "Damaged locking systems, adhesive bond failure, or poor surface prep.",
      "Subfloor panel, joist, concrete crack, or tile assembly movement."
    ],
    whatNotToIgnore: [
      "Movement that spreads across the room.",
      "Raised ridges, lifting planks, trip edges, or buckled areas.",
      "Movement with musty odor, dampness, swelling, cupping, or staining.",
      "Bouncy or soft areas that feel unsafe.",
      "A new installation where boards will not lock, lay flat, or stay closed."
    ],
    nextPath: [
      "Use /diagnose to choose the closest symptom first.",
      "Use /decision-trees when clicking, separation, buckling, lifting, moisture, or concrete conditions are involved.",
      "Use Flooring Movement Problems for the hub view.",
      "Use When to Stop Floor Installation if the problem appears during installation."
    ],
    whenToCallAPro: [
      "The floor feels soft, sagging, unsafe, or structurally suspicious.",
      "Moisture, slab conditions, or hidden water may be involved.",
      "Movement is spreading or has already caused damage.",
      "The installation is new and the product is not locking, bonding, or laying flat as required."
    ],
    example: [
      "An LVP floor has one light click near a doorway. That may be a local support or trim issue. A week later, two rows start peaking and the transition feels tight. The issue has moved from monitor to investigate because expansion pressure may be building.",
      "The right next step is to check movement space, transition attachment, flatness, and moisture instead of pushing the boards down."
    ],
    faq: [
      {
        question: "How much flooring movement is normal?",
        answer:
          "It depends on the product and installation method. Small seasonal changes may be expected, but raised areas, recurring gaps, moisture signs, or spreading movement should be checked."
      },
      {
        question: "Is a floating floor supposed to move?",
        answer:
          "Floating floors are designed to expand and contract as a system, but they should not buckle, peak, separate repeatedly, or feel unsupported. Manufacturer movement and expansion requirements control the installation."
      },
      {
        question: "Can movement mean a structural problem?",
        answer:
          "Sometimes. Flooring movement is often installation or moisture related, but soft, sagging, strongly bouncy, or spreading movement can justify professional inspection."
      }
    ]
  }),
  buildRiskGuide({
    slug: "can-i-keep-installing-laminate",
    title: "Can I Keep Installing Laminate If It Is Not Clicking Together?",
    description:
      "A stop-or-continue guide for laminate that will not lock, will not lay flat, separates on the long side, or moves after installation.",
    metadataTitle: "Can I Keep Installing Laminate If It Is Not Clicking Together?",
    metadataDescription:
      "Learn when to continue laminate installation, when to correct the row, and when to stop for flatness, locking, moisture, or product issues.",
    readTime: "9 min read",
    primaryEcosystem: "laminate",
    secondaryEcosystems: ["planning-measuring-transitions"],
    materialTypes: ["laminate"],
    topicCluster: "installation-method",
    relatedGuides: [
      "laminate-floor-not-clicking-together",
      "why-wont-my-laminate-floor-click-together",
      "why-is-my-laminate-floor-not-laying-flat",
      "why-is-my-laminate-floor-separating",
      "laminate-floor-separating-what-to-check-first",
      "how-to-fix-laminate-floor-separation",
      "laminate-installation-checklist",
      "how-flat-should-a-subfloor-be-for-laminate",
      "is-floor-separation-serious",
      "when-to-stop-floor-installation"
    ],
    quickAnswer: [
      "Do not keep installing laminate if boards will not lock without force, long-side joints are separating, the row will not lay flat, or the problem repeats across several boards. Continuing can multiply the repair area.",
      "If one board is misaligned, has debris in the joint, or needs to be re-angled according to the product instructions, you may be able to correct that row and continue. If the issue points to damaged locks, uneven subfloor, wrong underlayment, moisture, or product mismatch, stop and investigate."
    ],
    normalRows: [
      ["One board is hard to angle into place", "Pause, reset the angle, clean the joint, and follow the instructions.", "Do not force it flat or hammer directly on the locking edge."],
      ["Long side will not close cleanly", "Not a continue-and-hope condition.", "Check row alignment, debris, damaged locks, flatness, and plank orientation."],
      ["Rows separate after a few installed lines", "Not normal.", "Stop and inspect expansion, subfloor support, and locking engagement."],
      ["Boards will not lay flat", "Not normal unless the instructions describe temporary installation behavior.", "Check flatness, underlayment, damaged boards, and acclimation/jobsite conditions."]
    ],
    checkFirst: [
      "Confirm the plank direction, tongue/groove orientation, and required locking angle from the product instructions.",
      "Inspect the locking edges for chips, crushed tabs, swelling, debris, or manufacturing damage.",
      "Check whether the previous row is straight and fully engaged before adding another row.",
      "Verify the underlayment is approved and lying flat.",
      "Stop if the same problem repeats after two or three boards."
    ],
    riskRows: [
      ["Usually monitor", "One plank needed realignment, then locked cleanly and lies flat.", "Continue slowly and keep checking the row line."],
      ["Needs correction", "One row is slightly out of line, debris is in the joint, or a damaged plank needs replacement.", "Correct the row before installing more flooring."],
      ["Stop and investigate", "Boards will not lock without force, long sides open, rows rock, or planks will not lay flat.", "Check subfloor flatness, underlayment, moisture, product orientation, and damaged locks."],
      ["Professional inspection recommended", "Moisture, swelling, severe unevenness, recurring separation, or uncertain product compatibility is present.", "Have the field conditions reviewed before continuing the installation."]
    ],
    commonCauses: [
      "Incorrect angle or assembly method for the specific laminate locking system.",
      "Damaged, dirty, swollen, or crushed locking edges.",
      "Rows not straight or previous joints not fully engaged.",
      "Subfloor not flat enough for the product.",
      "Underlayment that is bunched, soft, doubled, or not approved.",
      "Moisture, acclimation, or jobsite conditions outside product requirements."
    ],
    whatNotToIgnore: [
      "A board that only closes when forced.",
      "Long-side joints opening as you work down the row.",
      "A plank that rocks, tents, or springs back up.",
      "Visible swelling or chipped locking edges.",
      "Multiple failed rows in the same direction."
    ],
    nextPath: [
      "Use /diagnose if the symptom may be separating, buckling, or not laying flat.",
      "Use /decision-trees for Floor Separating or Floor Buckling if the row is already moving.",
      "Read Laminate Floor Not Clicking Together before using repair-force methods.",
      "Use the Laminate Installation Checklist before restarting the installation."
    ],
    whenToCallAPro: [
      "Several rows fail to lock even after careful reassembly.",
      "The subfloor may need patching, leveling, or repair.",
      "Moisture or swelling is visible.",
      "The product instructions are unclear or the locking system may be damaged."
    ],
    example: [
      "A homeowner installs three rows of laminate and notices the long side keeps opening near the middle of the room. Instead of continuing, they remove the last row and find the previous row was slightly bowed and one locking edge was chipped.",
      "Stopping early keeps the repair small. Continuing could have turned one damaged plank into a full-room rework."
    ],
    faq: [
      {
        question: "Can I force laminate boards to click together?",
        answer:
          "No. Laminate locking systems can be damaged by forcing. Use the manufacturer's assembly method and stop if boards will not lock cleanly."
      },
      {
        question: "Why is my laminate separating on the long side during installation?",
        answer:
          "Common causes include row misalignment, debris, damaged locking edges, uneven subfloor, wrong underlayment, or incorrect angle. Check the cause before adding more rows."
      },
      {
        question: "Should I continue if the laminate is not laying flat?",
        answer:
          "Usually no. A floor that will not lay flat can point to locking, subfloor, underlayment, acclimation, or moisture issues. Continuing can make the repair larger."
      }
    ]
  }),
  buildRiskGuide({
    slug: "when-to-stop-floor-installation",
    title: "When to Stop a Flooring Installation",
    description:
      "A practical stop-work guide for flooring installation warning signs, including moisture, flatness, locking problems, slab issues, movement, and product compatibility.",
    metadataTitle: "When to Stop a Flooring Installation: Warning Signs",
    metadataDescription:
      "Know when to pause flooring installation for moisture, subfloor, concrete, locking, adhesive, transition, or movement concerns.",
    readTime: "10 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood", "tile", "carpet-padding"],
    materialTypes: ["lvp", "laminate", "engineered-hardwood", "hardwood", "ceramic-tile", "porcelain-tile", "carpet"],
    topicCluster: "installation-method",
    relatedGuides: [
      "what-happens-if-flooring-is-installed-too-soon",
      "is-this-flooring-movement-normal",
      "can-i-keep-installing-laminate",
      "how-to-test-concrete-moisture",
      "moisture-level-too-high-for-flooring",
      "why-flooring-fails-over-concrete",
      "flooring-moisture-problems",
      "concrete-floor-problems",
      "flooring-movement-problems",
      "lvp-installation-checklist",
      "laminate-installation-checklist",
      "engineered-hardwood-installation-checklist",
      "tile-installation-checklist",
      "carpet-installation-checklist"
    ],
    quickAnswer: [
      "Stop a flooring installation when the floor will not lock, bond, lay flat, or stay aligned; when moisture or slab conditions are uncertain; when subfloor flatness or support is questionable; or when the product instructions cannot be met.",
      "Pausing early is usually cheaper than installing over a known warning sign. A stop-work decision is not a failure. It is a way to avoid covering up moisture, movement, flatness, or compatibility problems that can cause a repeat failure."
    ],
    normalRows: [
      ["Minor layout adjustment before the next row", "Pause, correct, and continue if the issue is understood.", "Do not continue if the same issue repeats."],
      ["Boards will not lock, tile will not sit flat, carpet will not stretch, or adhesive will not bond", "Not normal.", "Stop and identify product, substrate, or method problems."],
      ["Moisture readings, slab conditions, or jobsite conditions are unknown", "Do not assume approval.", "Verify required testing and manufacturer limits before covering the substrate."],
      ["Subfloor feels soft, bouncy, hollow, cracked, dirty, or uneven", "Not a cosmetic detail.", "Correct the substrate or request inspection before installation continues."]
    ],
    checkFirst: [
      "Read the product instructions for substrate, moisture, acclimation, underlayment, adhesive, expansion, transition, and installation-method requirements.",
      "Confirm the subfloor or slab is clean, dry, sound, flat, and compatible with the flooring system.",
      "Check for active water, dampness, musty odor, slab moisture, high humidity, or wet subfloor areas.",
      "Verify layout direction, transition locations, expansion space, and fixed objects before locking in more material.",
      "Document the issue with photos and measurements before removing or covering anything."
    ],
    riskRows: [
      ["Usually monitor", "A small layout adjustment, single damaged plank, or easy-to-correct row issue.", "Correct it immediately and continue only if the issue does not repeat."],
      ["Needs correction", "Minor low spot, trim pressure, transition issue, underlayment wrinkle, or row alignment problem.", "Fix the condition before installing more material."],
      ["Stop and investigate", "Moisture uncertainty, repeated locking failure, adhesive concern, cracked/soft substrate, or spreading movement.", "Pause installation and verify field conditions against product requirements."],
      ["Professional inspection recommended", "Structural movement, persistent dampness, wide slab cracks, severe bounce, failed previous floor, or unclear manufacturer compliance.", "Get qualified review before ordering more material or continuing."]
    ],
    commonCauses: [
      "Trying to install before moisture, HVAC, or jobsite conditions are ready.",
      "Covering a subfloor or slab that is not flat, clean, dry, smooth, or sound enough for the product.",
      "Using the wrong underlayment, adhesive, vapor barrier, or transition method.",
      "Forcing locking systems instead of correcting row alignment or damaged edges.",
      "Ignoring expansion breaks, long runs, fixed objects, cabinets, islands, or trim pressure.",
      "Installing over cracks, contaminants, old adhesive, soft panels, or loose tile without proper preparation."
    ],
    whatNotToIgnore: [
      "Moisture or musty odor before installation.",
      "Boards that need force to lock or repeatedly separate.",
      "Tile cracks, hollow spots, loose tile, or slab cracks transferring through the floor.",
      "Flooring that will not lay flat.",
      "A product requirement you cannot verify."
    ],
    nextPath: [
      "Use /diagnose when you need to name the visible symptom first.",
      "Use /decision-trees for guided clicking, separating, buckling, lifting, moisture, or concrete checks.",
      "Use the installation checklist for the flooring type before restarting.",
      "Use moisture and concrete hubs before covering a slab or basement floor."
    ],
    whenToCallAPro: [
      "You suspect moisture, mold-like growth, slab vapor, wet subfloor, or recurring dampness.",
      "The substrate may need flattening, patching, structural repair, or crack evaluation.",
      "The floor has already failed once in the same area.",
      "You cannot confirm the product's written requirements for the installation method."
    ],
    example: [
      "A homeowner begins laminate installation over a basement slab. The first rows assemble, but the underlayment feels damp near an exterior wall and the planks are not laying flat. The correct move is to stop, check slab moisture and flatness, and verify underlayment approval before continuing.",
      "Continuing may hide the warning sign until the floor separates, swells, or fails."
    ],
    faq: [
      {
        question: "Is stopping a flooring installation overreacting?",
        answer:
          "Not when moisture, flatness, locking, adhesive, structural, or product-compatibility concerns are present. Pausing early usually limits the repair area."
      },
      {
        question: "Can I keep installing and fix problems later?",
        answer:
          "That can make the repair larger. If the same symptom repeats or the product requirements are not met, stop and correct the condition before covering more floor."
      },
      {
        question: "What is the biggest stop-work warning sign?",
        answer:
          "Moisture is one of the biggest because it can affect many flooring systems and may not be solved by replacing surface material. Product-specific testing and limits matter."
      }
    ]
  })
];
