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

type LaminateAuthorityDraft = {
  slug: GuideSlug;
  title: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
  readTime: string;
  secondaryEcosystems?: GuideEcosystemSlug[];
  topicCluster?: TopicCluster;
  relatedTools?: ToolSlug[];
  relatedGuides: GuideSlug[];
  quickAnswer: string[];
  keySections: GuideSection[];
  example: string[];
  faq: FAQItem[];
};

const laminateRepairDisclaimer =
  "This guide is general laminate flooring troubleshooting information. Locking systems, expansion gaps, underlayment approval, repair methods, moisture limits, acclimation requirements, and replacement rules vary by product. Verify the manufacturer's written installation instructions and have a qualified installer inspect recurring gaps, moisture concerns, or damaged boards before making repairs.";

function buildLaminateAuthorityGuide(input: LaminateAuthorityDraft): Guide {
  return {
    slug: input.slug,
    title: input.title,
    description: input.description,
    metadataTitle: input.metadataTitle,
    metadataDescription: input.metadataDescription,
    dateModified: "2026-06-14",
    readTime: input.readTime,
    primaryEcosystem: "laminate",
    secondaryEcosystems: input.secondaryEcosystems ?? ["planning-measuring-transitions"],
    materialTypes: ["laminate"] as MaterialType[],
    topicCluster: input.topicCluster ?? "repairs",
    relatedTools: input.relatedTools ?? ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
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
      }
    ],
    faq: input.faq,
    disclaimer: laminateRepairDisclaimer
  };
}

export const laminateSeparationAuthorityGuides: Guide[] = [
  buildLaminateAuthorityGuide({
    slug: "how-to-fix-laminate-floor-separation",
    title: "How to Fix Laminate Floor Separation",
    description:
      "A practical repair guide for laminate floor gaps, including what to check before closing joints, when planks may need replacement, and when moisture should be investigated.",
    metadataTitle: "How to Fix Laminate Floor Separation Without Guessing",
    metadataDescription:
      "Learn how to fix laminate floor separation by checking expansion space, subfloor support, damaged locks, moisture, and when boards need replacement.",
    readTime: "10 min read",
    relatedGuides: [
      "why-is-my-laminate-floor-separating",
      "laminate-floor-separation-repair-guide",
      "laminate-floor-not-clicking-together",
      "why-is-my-laminate-floor-not-laying-flat",
      "laminate-floor-separating-what-to-check-first",
      "flooring-separation-problems",
      "flooring-movement-problems",
      "flooring-moisture-problems",
      "why-is-my-laminate-floor-buckling",
      "how-flat-should-a-subfloor-be-for-laminate",
      "best-underlayment-for-laminate-flooring",
      "laminate-installation-checklist"
    ],
    quickAnswer: [
      "To fix laminate floor separation, first identify why the joint opened. A one-time gap with intact locking edges may close with careful reassembly, but a gap that keeps returning usually points to movement, subfloor flex, blocked expansion, moisture, or damaged locking tabs.",
      "Do not start by filling or gluing the gap unless the manufacturer allows that repair. Laminate is usually a floating system, and locking joints need to move as designed. The most reliable repair path is cause first, visible gap second."
    ],
    keySections: [
      {
        id: "can-homeowners-fix-this",
        title: "Can homeowners fix this?",
        paragraphs: [
          "Some laminate separation is reasonable for a careful homeowner to inspect. You can map the gaps, remove loose trim for a visual check, look for tight transitions, clean debris from a joint, and confirm whether a plank edge is visibly damaged.",
          "Actual repair depends on access and risk. Closing a loose end joint near an open edge may be simple. Repairing a gap in the middle of a room can require lifting rows back to the damaged area, which is where planks, trim, and locking profiles are easy to break."
        ],
        bullets: [
          "DIY-friendly checks: map the gap, inspect trim pressure, look for moisture, check for bounce, and review the product instructions.",
          "Higher-risk repairs: lifting rows, cutting relief at fixed objects, replacing boards, or correcting subfloor flatness.",
          "Stop if the joint edge looks swollen, crushed, chipped, or will not hold after careful reassembly."
        ]
      },
      {
        id: "repair-sequence",
        title: "A safe repair sequence",
        paragraphs: [
          "Start with the least destructive checks. Mark the gap, photograph the area, and note whether it is an end joint, long-side joint, doorway, hallway, or room-wide pattern. Then check nearby expansion space and transitions before touching the joint.",
          "If the joint is reachable from a wall, the cleaner repair is often to remove trim and work rows back to the problem area. That lets you inspect locking edges instead of forcing the planks sideways. A suction cup, pull bar, or tapping block may help with some systems, but the product instructions control what tools and movements are allowed."
        ],
        bullets: [
          "Map the separation pattern and note whether the same gap returns.",
          "Check walls, transitions, door jambs, cabinets, islands, and heavy fixed objects for blocked movement.",
          "Look for flex, hollow sound, or bounce near the gap.",
          "Inspect for moisture, swelling, or water history before closing the joint.",
          "Only close the joint after the cause has been corrected or ruled out."
        ]
      },
      {
        id: "comparison-table",
        title: "Separation comparisons before repair",
        paragraphs: [
          "The visible gap does not tell the whole story. Compare the symptom with nearby conditions before choosing a repair."
        ],
        comparisonTable: {
          columns: ["Symptom", "What it may mean", "What to check before repair"],
          rows: [
            ["Separation vs expansion gap", "Expansion space is intentional at walls and fixed objects; separation is an open joint in the field.", "Check whether the opening is at the perimeter or between planks."],
            ["Separation vs buckling", "Separation is an opening joint; buckling is upward pressure or raised flooring.", "Inspect moisture, blocked expansion, and fixed objects before tapping joints closed."],
            ["Separation vs installation error", "A joint that was never fully locked may open soon after installation.", "Check first-row straightness, locking technique, debris, and plank damage."],
            ["Separation vs moisture damage", "Swollen or soft edges often mean the board may not close cleanly.", "Look for leaks, wet cleaning, high humidity, damp subfloor, or slab concerns."]
          ]
        }
      },
      {
        id: "when-boards-need-replacement",
        title: "When boards need replacement",
        paragraphs: [
          "Laminate boards may need replacement when the locking profile is crushed, chipped, swollen, or worn from repeated movement. A joint can sometimes be closed visually even though the lock no longer has the shape needed to hold.",
          "Replacement is also more likely when the surface is chipped, the core has expanded from moisture, or the board has bowed enough that it cannot sit flat after the substrate and expansion issues are corrected."
        ],
        bullets: [
          "Crushed, white, flaky, or chipped locking edges.",
          "Swollen edges from moisture exposure.",
          "A joint that reopens after the cause has been corrected.",
          "Planks that rock, peak, or will not sit flush after reassembly.",
          "Damaged boards in a high-traffic path where the lock will keep flexing."
        ]
      },
      {
        id: "when-moisture-should-be-investigated",
        title: "When moisture should be investigated",
        paragraphs: [
          "Investigate moisture before repair when gaps appear near exterior doors, kitchens, bathrooms, laundry areas, basements, or concrete slabs. Moisture can swell laminate edges, weaken the core, and turn a simple gap into a replacement issue.",
          "Also check moisture when separation appears with buckling, edge swelling, odor, staining, soft subfloor, or a recent leak. Manufacturer limits vary, so do not rely on a universal moisture number."
        ],
        bullets: [
          "Look for swollen seams, darker edges, odor, staining, or soft spots.",
          "Review cleaning methods if wet mopping or steam cleaning was used.",
          "Check room humidity and HVAC stability.",
          "For concrete or basement conditions, review moisture testing and vapor-control requirements."
        ]
      },
      {
        id: "when-professional-inspection-is-recommended",
        title: "When professional inspection is recommended",
        paragraphs: [
          "Call an installer when separation keeps returning, affects multiple rows, appears with moisture clues, or may require lifting a large section of floor. A professional can usually tell whether the repair is a lock issue, a movement issue, or a substrate issue.",
          "Professional review is also smart when a transition, cabinet, island, or long connected run may be pinning a floating floor. Cutting relief in the wrong place can create a new problem."
        ]
      }
    ],
    example: [
      "A homeowner sees a 1/8-inch end gap in a laminate hallway and taps it closed. Two weeks later the same gap returns, and a nearby joint clicks underfoot.",
      "That pattern suggests the joint may be flexing over a low spot or damaged lock. The better repair path is to map the gap, check support and expansion, inspect the locking edge, and replace the board if the lock is damaged instead of repeatedly tapping the gap closed."
    ],
    faq: [
      {
        question: "Can I just tap laminate gaps closed?",
        answer:
          "Sometimes, but only after checking why the gap opened. If the floor is flexing, pinned, wet, or the lock is damaged, the gap may return or the board may break."
      },
      {
        question: "Should laminate floor separation be glued?",
        answer:
          "Only if the manufacturer allows that specific repair. Many laminate floors are floating systems, and gluing the wrong joint can restrict movement or make future board replacement harder."
      },
      {
        question: "How do I close a gap in laminate flooring?",
        answer:
          "The safest method is usually to work from an accessible edge, inspect the locking joint, correct the cause, and reassemble the row. Surface gap-closing tools may help minor gaps, but they should not be used to force damaged or swollen joints."
      },
      {
        question: "Will laminate gaps come back?",
        answer:
          "They can. Recurring gaps often mean movement, low spots, blocked expansion, damaged locking edges, or moisture. A repair that does not address the cause is usually temporary."
      },
      {
        question: "When should I replace boards instead of closing the gap?",
        answer:
          "Replace boards when the locking profile is damaged, the edge is swollen, the plank will not sit flat, or the same joint will not stay closed after the underlying issue is corrected."
      }
    ]
  }),
  buildLaminateAuthorityGuide({
    slug: "laminate-floor-not-clicking-together",
    title: "Laminate Floor Not Clicking Together",
    description:
      "Learn why laminate planks will not click or snap together, what to check before forcing the joint, and when a damaged locking edge means replacement.",
    metadataTitle: "Laminate Floor Not Clicking Together? What to Check First",
    metadataDescription:
      "Laminate floor not clicking together? Check debris, locking technique, first-row alignment, subfloor flatness, underlayment, moisture, and damaged edges.",
    readTime: "9 min read",
    topicCluster: "installation-method",
    relatedGuides: [
      "why-wont-my-laminate-floor-click-together",
      "why-is-my-laminate-floor-not-laying-flat",
      "how-to-fix-laminate-floor-separation",
      "why-is-my-laminate-floor-separating",
      "laminate-floor-separation-repair-guide",
      "how-flat-should-a-subfloor-be-for-laminate",
      "best-underlayment-for-laminate-flooring",
      "laminate-installation-checklist",
      "flooring-movement-problems"
    ],
    quickAnswer: [
      "Laminate that will not click together usually has debris in the groove, the wrong locking motion, a damaged tongue or groove, a first row that is out of alignment, an unflat subfloor, or underlayment that lets the plank move while you are trying to lock it.",
      "Stop forcing the joint. A stubborn joint is often still fixable, but a crushed locking edge usually is not. Clean, inspect, verify the locking method for that product, and check the floor underneath before continuing."
    ],
    keySections: [
      {
        id: "can-homeowners-fix-this",
        title: "Can homeowners fix this?",
        paragraphs: [
          "Yes, many click-together problems can be checked by a homeowner during installation. Cleaning the groove, correcting the angle, straightening the first row, and replacing a damaged plank are normal troubleshooting steps.",
          "The line is subfloor correction. If the joint will not close because the floor is out of flat, underlayment is wrong, or moisture has affected the planks, continuing the installation can build the problem into the whole room."
        ],
        bullets: [
          "Clean both sides of the locking profile before retrying.",
          "Confirm whether the product uses angle-angle, fold-down, or another locking method.",
          "Check that the first row is straight instead of following a wavy wall.",
          "Set aside planks with crushed or swollen locking edges."
        ]
      },
      {
        id: "clicking-technique",
        title: "Technique, alignment, and debris",
        paragraphs: [
          "Laminate locking systems are precise. A small chip of core material, sawdust in the groove, or a plank held a few degrees out of position can stop the joint from seating.",
          "Read the product instructions before assuming the plank is defective. Some systems angle in; others fold down; some require a tapping block; and some end joints are easy to damage if they are forced in the wrong direction."
        ],
        comparisonTable: {
          columns: ["Problem", "Likely clue", "What to check"],
          rows: [
            ["Debris in groove", "Joint almost closes but leaves a fine line", "Vacuum the groove and inspect for chips or dust."],
            ["Wrong locking angle", "Long side or short end refuses repeatedly", "Follow the exact angle/fold-down motion in the instructions."],
            ["Crooked first row", "Every new row gets harder to seat", "Snap a straight line and reset the first row if needed."],
            ["Subfloor not flat", "Joint closes in one area but not another", "Use a straightedge and verify the product tolerance."],
            ["Damaged lock", "Edge looks crushed, white, flaky, or chipped", "Replace that plank or use it only as a cut piece if allowed."]
          ]
        }
      },
      {
        id: "when-boards-need-replacement",
        title: "When boards need replacement",
        paragraphs: [
          "A plank usually needs replacement when the tongue or groove has been crushed, cracked, swollen, or chipped. Once the locking shape is damaged, the board may click once but fail to hold under traffic.",
          "Do not keep forcing the same plank into the field of the floor. If only one edge is damaged, it may be usable as a cut piece at a wall, but it should not be trusted as a full locking joint."
        ],
        bullets: [
          "Visible crushed or flaking locking edge.",
          "Swelling along the tongue or groove.",
          "A short-end lock that clicks but pops back open.",
          "A plank that rocks or sits proud even on a flat surface.",
          "A joint that was struck directly with a hammer."
        ]
      },
      {
        id: "when-moisture-should-be-investigated",
        title: "When moisture should be investigated",
        paragraphs: [
          "Investigate moisture when planks look bowed, cupped, swollen, or soft before installation. Storage in a damp garage, delivery before the home is conditioned, leaks, or a damp substrate can change how laminate planks fit.",
          "Do not invent a safe moisture number. Compare the room, subfloor, and product to the manufacturer's instructions and stop the installation if the material or substrate appears moisture-affected."
        ]
      },
      {
        id: "when-professional-inspection-is-recommended",
        title: "When professional inspection is recommended",
        paragraphs: [
          "Call a flooring professional if multiple boxes will not lock, the floor is visibly out of flat, the planks are moisture-affected, or you are unsure whether the locking system has been damaged.",
          "Professional review is also recommended when the project is over concrete, in a basement, or in a room with known moisture history."
        ]
      }
    ],
    example: [
      "A bedroom install starts smoothly, but the third row will not click together on the long side. The homeowner cleans the groove and swaps planks, but the problem happens in the same area of the room.",
      "That pattern points away from one bad plank and toward the floor underneath. A straightedge shows a hump near the problem area, so the right fix is to stop and correct the substrate instead of forcing the locking joint."
    ],
    faq: [
      {
        question: "Why won't my laminate floor snap together?",
        answer:
          "The most common reasons are debris in the groove, wrong locking technique, a crooked first row, an uneven subfloor, wrong underlayment, or damaged locking edges."
      },
      {
        question: "Can I hammer laminate planks together?",
        answer:
          "Do not strike laminate edges directly. Use only the tools and tapping method allowed by the manufacturer. Direct hammer blows can crush the locking profile."
      },
      {
        question: "Why does the long side click but the short end will not?",
        answer:
          "The short-end mechanism may use a different motion than the long side, or debris may be blocking the end groove. Check the installation instructions and inspect the end joint for damage."
      },
      {
        question: "Can unflat subfloors stop laminate from clicking?",
        answer:
          "Yes. If planks meet at a slight angle over a hump or dip, the locking profiles may not align. Underlayment does not correct a subfloor that is outside the product tolerance."
      },
      {
        question: "Should I keep installing if one area will not click?",
        answer:
          "No. Stop and find the cause. Continuing can spread misalignment and make later rows harder to lock."
      }
    ]
  }),
  buildLaminateAuthorityGuide({
    slug: "why-is-my-laminate-floor-not-laying-flat",
    title: "Why Is My Laminate Floor Not Laying Flat?",
    description:
      "Troubleshoot laminate that rocks, lifts, peaks, bows, or will not sit flush by checking locking engagement, subfloor flatness, moisture, and underlayment.",
    metadataTitle: "Why Is My Laminate Floor Not Laying Flat?",
    metadataDescription:
      "Laminate not laying flat can come from partial locking, subfloor flatness, wrong underlayment, moisture, bowed boards, or blocked expansion.",
    readTime: "9 min read",
    topicCluster: "subfloor-prep",
    relatedGuides: [
      "laminate-floor-not-clicking-together",
      "why-is-my-laminate-floor-separating",
      "how-to-fix-laminate-floor-separation",
      "laminate-floor-separation-repair-guide",
      "why-is-my-laminate-floor-buckling",
      "how-flat-should-a-subfloor-be-for-laminate",
      "best-underlayment-for-laminate-flooring",
      "flooring-movement-problems",
      "flooring-moisture-problems",
      "laminate-installation-checklist"
    ],
    quickAnswer: [
      "Laminate that is not laying flat may be partially locked, sitting over debris, bridging a low spot, riding over a high spot, using the wrong underlayment, swelling from moisture, or being trapped without the expansion space required by the product.",
      "If the floor was just installed, stop and inspect before adding more rows. If the floor used to be flat and changed later, look harder at moisture, blocked expansion, or movement in the substrate."
    ],
    keySections: [
      {
        id: "can-homeowners-fix-this",
        title: "Can homeowners fix this?",
        paragraphs: [
          "Homeowners can do a first-pass inspection: look for a half-engaged joint, debris under a plank, missing expansion space, tight trim, or a visible hump in the floor.",
          "Correcting the cause may be more involved. A local partially locked joint may be reassembled. A floor that is not flat because of substrate movement, moisture, or wide-area buckling usually needs professional review."
        ]
      },
      {
        id: "not-flat-comparisons",
        title: "Not flat, buckling, or installation error?",
        paragraphs: [
          "Use the shape and timing of the problem to narrow the cause."
        ],
        comparisonTable: {
          columns: ["Symptom", "Likely direction", "What to check"],
          rows: [
            ["One edge sits proud", "Partial lock or debris", "Inspect the tongue, groove, and end joint."],
            ["Floor rocks underfoot", "Low spot, high spot, or soft underlayment", "Check flatness and approved underlayment."],
            ["Raised ridge through several planks", "Buckling or expansion pressure", "Check walls, transitions, fixed objects, moisture, and heat."],
            ["Boards look bowed before installation", "Storage, moisture, or product condition", "Stop and compare with manufacturer handling instructions."],
            ["Floor changed after weeks or months", "Movement, humidity, moisture, or pinning", "Map the area and investigate jobsite conditions."]
          ]
        }
      },
      {
        id: "what-to-check-before-continuing",
        title: "What to check before continuing installation",
        paragraphs: [
          "If the laminate is still being installed, do not assume the next rows will pull the floor flat. A problem in the first few rows can telegraph through the room.",
          "Check the first row, product locking method, subfloor flatness, underlayment, and expansion space before installing more material."
        ],
        bullets: [
          "Confirm the first row is straight.",
          "Make sure every joint is fully seated.",
          "Vacuum debris from the locking edges.",
          "Check for humps or dips with a straightedge.",
          "Verify that the underlayment is approved and not doubled.",
          "Set aside planks that are bowed, swollen, or damaged."
        ]
      },
      {
        id: "when-boards-need-replacement",
        title: "When boards need replacement",
        paragraphs: [
          "Boards may need replacement when they remain bowed on their own, have crushed locking edges, show swollen seams, or will not sit flush after the subfloor and locking issue have been corrected.",
          "A board that does not lay flat because of a damaged lock can create a future separation point. Reusing that board in the middle of the floor is usually a poor tradeoff."
        ]
      },
      {
        id: "when-moisture-should-be-investigated",
        title: "When moisture should be investigated",
        paragraphs: [
          "Moisture should be investigated when laminate that was flat begins to lift, swell, ridge, cup, or feel soft. Water exposure, high humidity, damp slabs, or wet subfloors can distort the product and prevent joints from lying flush.",
          "Check moisture history before trimming, fastening, or forcing the floor flat. Those actions can hide the symptom while the cause keeps damaging the floor."
        ]
      },
      {
        id: "when-professional-inspection-is-recommended",
        title: "When professional inspection is recommended",
        paragraphs: [
          "Call a professional if the floor is lifting across multiple rows, the surface is buckling, moisture is suspected, the substrate is uneven, or the repair requires lifting a large installed area.",
          "Professional inspection is also recommended when a flatness correction, self-leveling material, moisture testing, or board replacement plan is needed."
        ]
      }
    ],
    example: [
      "A homeowner installs laminate in a living room and notices the third row will not sit flat near a doorway. The joints look closed, but the planks rock underfoot.",
      "The problem is not solved by tapping harder. A straightedge shows a high spot near the doorway. Correcting the substrate and reinstalling the affected rows is safer than forcing the locking system over a hump."
    ],
    faq: [
      {
        question: "Why is my laminate floor not laying flat after installation?",
        answer:
          "Common reasons include partial locking, debris, subfloor flatness problems, wrong underlayment, blocked expansion, moisture, or damaged planks."
      },
      {
        question: "Will laminate settle down over time?",
        answer:
          "Do not rely on that. Some minor underlayment compression may change feel, but a raised, rocking, or partially locked laminate floor should be inspected before more damage occurs."
      },
      {
        question: "Can underlayment make laminate not lay flat?",
        answer:
          "Yes. Underlayment that is too soft, too thick, doubled, or not approved can let planks move and make locking joints unstable."
      },
      {
        question: "Does moisture make laminate lift?",
        answer:
          "Moisture can swell laminate edges and contribute to lifting, buckling, or a floor that no longer lies flat. Product limits vary, so check the manufacturer's instructions."
      },
      {
        question: "Should I cut expansion gaps if laminate is not flat?",
        answer:
          "Only after identifying the cause. Missing expansion space can cause pressure, but cutting without checking moisture, fixed objects, and subfloor issues may not solve the problem."
      }
    ]
  }),
  buildLaminateAuthorityGuide({
    slug: "laminate-floor-separation-repair-guide",
    title: "Laminate Floor Separation Repair Guide",
    description:
      "A step-by-step laminate floor separation repair guide covering recurring gaps, long-side separation, damaged locks, moisture checks, and board replacement decisions.",
    metadataTitle: "Laminate Floor Separation Repair Guide: Gaps, Locks, Moisture",
    metadataDescription:
      "Repair laminate floor separation by identifying recurring gaps, long-side separation, damaged locking joints, moisture clues, and when planks need replacement.",
    readTime: "11 min read",
    relatedGuides: [
      "why-is-my-laminate-floor-separating",
      "how-to-fix-laminate-floor-separation",
      "laminate-floor-not-clicking-together",
      "why-is-my-laminate-floor-not-laying-flat",
      "laminate-floor-separating-what-to-check-first",
      "why-is-my-laminate-floor-buckling",
      "flooring-separation-problems",
      "flooring-movement-problems",
      "flooring-moisture-problems",
      "how-flat-should-a-subfloor-be-for-laminate",
      "best-underlayment-for-laminate-flooring",
      "laminate-installation-checklist"
    ],
    quickAnswer: [
      "A good laminate floor separation repair starts with diagnosis: is the gap caused by an open locking joint, a damaged board, subfloor movement, blocked expansion, moisture, or installation alignment? The repair method changes depending on that answer.",
      "The safest rule is simple: do not permanently fill, glue, or force a laminate gap until you know why it opened. Recurring gaps are usually a movement or support problem, not just a surface blemish."
    ],
    keySections: [
      {
        id: "repair-decision-table",
        title: "Repair decision table",
        paragraphs: [
          "Use this table to choose the next step before touching the floor."
        ],
        comparisonTable: {
          columns: ["What you see", "Likely category", "Repair direction"],
          rows: [
            ["One clean end gap, no swelling", "Open joint or installation alignment", "Inspect lock, close carefully, and monitor."],
            ["Long-side separation", "Row alignment, low spot, or damaged lock", "Check flatness and locking edge before forcing together."],
            ["Gap returns after closing", "Movement, support, or damaged locking profile", "Find the cause and consider board replacement."],
            ["Gap with raised floor", "Buckling, pressure, or moisture", "Investigate expansion and moisture before repair."],
            ["Gap with swollen edges", "Moisture damage", "Do not force closed; inspect moisture and likely replace damaged boards."],
            ["Gap near doorway or transition", "Pinned floating floor or tight trim", "Check expansion space and transition fastening."]
          ]
        }
      },
      {
        id: "can-homeowners-fix-this",
        title: "Can homeowners fix this?",
        paragraphs: [
          "Homeowners can often handle the observation stage: document the pattern, check for tight trim, inspect for moisture, and review whether the same joint reopens.",
          "The actual repair may or may not be DIY. Surface gap-closing tools can help minor gaps, but lifting rows, replacing planks, correcting low spots, or adjusting transitions can quickly become a finish-carpentry and flooring-layout job."
        ],
        bullets: [
          "A clean, isolated gap near an accessible wall is the best DIY candidate.",
          "A middle-of-room gap usually requires working rows apart from an edge.",
          "A recurring gap usually needs cause correction before cosmetic repair.",
          "Moisture, swelling, buckling, or widespread movement should be professionally reviewed."
        ]
      },
      {
        id: "long-side-separation",
        title: "Long-side separation needs extra caution",
        paragraphs: [
          "Laminate separating on the long side often points to row alignment, subfloor flatness, partial locking, or damaged locking profiles. A long-side joint carries a lot of the floor's movement, so repeated flex can wear it out.",
          "If the long side has a small open line but no height difference, inspect for debris or partial engagement. If the long side is open with rocking, clicking, or hollow sound, check support and flatness before trying to pull the row tight."
        ]
      },
      {
        id: "when-boards-need-replacement",
        title: "When boards need replacement",
        paragraphs: [
          "Board replacement is the better repair when the locking profile is damaged or the board has moisture swelling. A filler or surface tap-back cannot recreate the original tongue-and-groove shape.",
          "Replacement is also more likely when a previous repair involved direct hammering, aggressive prying, or repeated opening and closing of the same joint."
        ],
        bullets: [
          "Broken or crushed tongue/groove.",
          "Swollen core or raised edge.",
          "Surface chip at the joint.",
          "Joint that will not hold after proper reassembly.",
          "Repeated separation in a high-traffic path."
        ]
      },
      {
        id: "when-moisture-should-be-investigated",
        title: "When moisture should be investigated",
        paragraphs: [
          "Moisture should be investigated before repair when the separation appears near plumbing, exterior doors, basements, concrete slabs, laundry rooms, or areas cleaned with excess water.",
          "Laminate repairs can fail quickly if a wet subfloor, leak, or humidity problem remains. Product requirements vary, so compare the room and substrate to the specific installation instructions before reinstalling boards."
        ]
      },
      {
        id: "when-professional-inspection-is-recommended",
        title: "When professional inspection is recommended",
        paragraphs: [
          "Professional inspection is recommended when the separation is spreading, linked to buckling or moisture, located in the middle of a large room, or tied to subfloor flatness.",
          "A professional can decide whether the repair is a minor reassembly, board replacement, expansion correction, or substrate repair. That decision matters more than the tool used to close the visible gap."
        ]
      }
    ],
    example: [
      "A long-side joint opens in a kitchen walkway. The homeowner sees no water, but the gap returns after being closed and the area feels slightly hollow.",
      "The repair guide points to support and locking stress. The right next step is checking flatness and edge condition, not filling the joint. If the lock is worn, the board may need replacement after the support issue is corrected."
    ],
    faq: [
      {
        question: "What is the best way to repair laminate separation?",
        answer:
          "The best repair depends on cause. Clean isolated gaps may close after reassembly, but recurring gaps need the movement, moisture, expansion, or damaged-lock issue corrected first."
      },
      {
        question: "How do I fix laminate separating on the long side?",
        answer:
          "Check row alignment, debris, partial locking, flatness, and damaged edges. Long-side separation with movement usually needs the floor opened from an edge so the joint can be inspected."
      },
      {
        question: "Can laminate floor gaps be filled?",
        answer:
          "Filler may hide a cosmetic line, but it does not fix movement, moisture, or damaged locking joints. It can also interfere with floating movement if used incorrectly."
      },
      {
        question: "What if laminate will not snap back together?",
        answer:
          "Stop forcing it and inspect the locking profile. If the tongue or groove is crushed, swollen, or chipped, the board may need replacement."
      },
      {
        question: "Is laminate separation a moisture problem?",
        answer:
          "It can be, but not always. Separation can also come from subfloor movement, installation alignment, damaged locks, or blocked expansion. Swollen edges, odor, buckling, or wet areas make moisture more likely."
      }
    ]
  })
];
