import type { Guide } from "@/data/types";

const troubleshootingDisclaimer =
  "This guide is general troubleshooting information. Flooring movement, noise, seam visibility, transition problems, moisture concerns, adhesive failure, and subfloor issues vary by product and project conditions. Verify the manufacturer's instructions and have a qualified installer evaluate the floor before making repairs that could affect the installation.";

export const troubleshootingGuides: Guide[] = [
  {
    slug: "why-is-my-floor-clicking",
    title: "Why Is My Floor Clicking?",
    description:
      "Troubleshoot clicking floors by checking floating floor movement, subfloor flatness, underlayment, expansion gaps, locking joints, moisture, and debris.",
    metadataTitle: "Why Is My Floor Clicking? Common Flooring Noise Causes",
    metadataDescription:
      "Learn why floors click, pop, or move underfoot and what to check first with floating floors, subfloors, underlayment, expansion gaps, and moisture.",
    dateModified: "2026-05-24",
    readTime: "8 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood"],
    materialTypes: ["lvp", "lvt", "laminate", "engineered-hardwood"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "subfloor-flatness-requirements-lvp",
      "why-is-my-lvp-floor-clicking",
      "why-is-my-lvp-floor-separating",
      "why-is-my-laminate-floor-separating",
      "why-is-my-laminate-floor-buckling",
      "glue-down-vs-floating-floor"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "A clicking floor usually means something is moving. The most common causes are uneven subfloors, floating floor movement, locking system stress, underlayment that is too soft, debris under the planks, tight expansion gaps, or moisture and humidity changes.",
          "The sound matters, but the location matters even more. A repeated click in the same spot often points to a support or movement problem that should be checked before the joint damage gets worse."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Clicking is most common with floating floors because the floor is designed to move as a connected surface. That movement is normal in a broad sense, but repeated movement at one joint or one low spot can stress the flooring system."
        ],
        bullets: [
          "Uneven subfloor with low spots or humps under the finished floor.",
          "Underlayment that is too soft, too thick, doubled up, or not approved for the product.",
          "Damaged locking tabs from forcing planks together or installing over debris.",
          "Expansion gaps that are too tight at walls, doorways, cabinets, or transitions.",
          "Moisture or humidity changes causing movement beyond normal expectations.",
          "Loose trim or transition pieces that sound like the floor itself."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Start by identifying whether the click happens in one fixed location or across a larger area. A fixed spot often points to a local low spot, damaged joint, debris, or a transition problem. A larger area can point to underlayment, room conditions, or installation method.",
          "Check the edges of the room for tight trim, pinned transitions, heavy fixed objects, and missing expansion space. If the floor is new, also review whether the product was acclimated or conditioned as directed."
        ],
        bullets: [
          "Walk the floor slowly and mark where the sound repeats.",
          "Check nearby transitions, doorways, and wall trim.",
          "Look for visible gaps, peaking, loose planks, or joint movement.",
          "Review the underlayment and installation method if that information is available.",
          "If the floor is not installed yet, check flatness with a straightedge before proceeding."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call an installer if the clicking is getting worse, if joints are separating, if the floor is lifting, if moisture is suspected, or if the sound is concentrated in a high-traffic area. Continuing to walk on a moving joint can make a small issue harder to repair.",
          "A pro can often tell the difference between trim noise, floating floor movement, damaged locking joints, and a subfloor problem without guessing."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A homeowner hears a click in the same hallway spot every time they step near a bedroom doorway. The transition is tight and the LVP joint flexes slightly. The likely issue is not the visible plank color or finish. It is movement at a stressed area.",
          "The repair may require removing the transition, checking expansion space, and inspecting the subfloor support near that doorway."
        ]
      }
    ],
    faq: [
      {
        question: "Is floor clicking always a serious problem?",
        answer:
          "No. Some sounds can come from trim or normal floating floor movement, but repeated clicking in the same spot should be checked."
      },
      {
        question: "Can an uneven subfloor make a floating floor click?",
        answer:
          "Yes. Low spots and humps can allow planks to flex, which stresses locking joints and creates noise."
      },
      {
        question: "Can underlayment cause clicking?",
        answer:
          "Yes. Underlayment that is too soft, too thick, doubled, or not approved for the flooring can allow excess movement."
      },
      {
        question: "Should I repair a clicking floor myself?",
        answer:
          "Simple trim noise may be easy to correct, but lifting flooring or changing expansion details should be reviewed carefully or handled by an installer."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-are-my-carpet-seams-visible",
    title: "Why Are My Carpet Seams Visible?",
    description:
      "Learn why carpet seams show, including seam direction, lighting, pile direction, roll width, traffic, carpet construction, pattern match, and installation layout.",
    metadataTitle: "Why Are My Carpet Seams Visible? Seam Direction and Lighting Guide",
    metadataDescription:
      "Understand visible carpet seams, including lighting, pile direction, roll width, pattern match, traffic direction, construction, and seam placement.",
    dateModified: "2026-05-24",
    readTime: "8 min read",
    primaryEcosystem: "carpet-padding",
    materialTypes: ["carpet"],
    topicCluster: "layout",
    relatedTools: ["carpet-seam-planner", "pattern-repeat-calculator", "flooring-square-footage-calculator"],
    relatedGuides: [
      "carpet-seam-direction-guide",
      "why-is-my-carpet-wrinkling-or-buckling",
      "what-is-pattern-match-in-carpet",
      "what-direction-should-carpet-run",
      "how-much-extra-carpet-should-i-order"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "Carpet seams can be visible because of lighting, pile direction, traffic direction, roll width, carpet construction, pattern match, or seam placement. A visible seam does not automatically mean the installation failed, but some seams are more noticeable than they should be.",
          "The best seam planning happens before carpet is cut. Roll width, room shape, windows, doorways, and pattern repeat all affect where seams land."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Carpet is a textile, so light and pile direction matter. Two pieces from the same roll can look different if the pile reflects light differently across the seam."
        ],
        bullets: [
          "Seam placed in a strong light path from windows or patio doors.",
          "Pile direction changes between carpet drops or connected rooms.",
          "Traffic crosses the seam in a way that opens or highlights it.",
          "Patterned carpet is not matched cleanly at the seam.",
          "Low-profile or loop carpet construction makes seams easier to see.",
          "Room is wider than the carpet roll, making a seam unavoidable."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Look at the seam from different angles and at different times of day. If it is visible only from one direction, lighting and pile reflection may be the main issue. If the seam has gaps, raised edges, fraying, or pattern mismatch, installation details may need review.",
          "Compare the seam location to room traffic. A seam running through the most walked path may wear or show more quickly than one placed under furniture or away from the main light angle."
        ],
        bullets: [
          "Check whether the seam is raised, open, frayed, or separating.",
          "Look for pattern alignment across the seam.",
          "Note whether sunlight makes the seam more obvious.",
          "Confirm whether the room required multiple carpet drops because of roll width.",
          "Use the Carpet Seam Planner for rough layout awareness before future projects."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call the installer if the seam is opening, peaking, fraying, misaligned, or placed differently from the agreed layout. Also call if the seam becomes more visible after stretching, cleaning, or normal traffic.",
          "Some seam visibility is realistic with certain carpet styles, but a professional should explain what is normal for the product and what may need correction."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A 14 ft wide bedroom is installed with 12 ft carpet, so a seam is necessary. The seam is placed near a large window and becomes obvious in afternoon light. The seam may be structurally sound, but the location makes it visually prominent.",
          "On a future project, the homeowner can discuss roll width, window light, bed placement, and traffic before the cut plan is finalized."
        ]
      }
    ],
    faq: [
      {
        question: "Should carpet seams be invisible?",
        answer:
          "Not always. A good seam should be neat and secure, but some carpet styles, lighting conditions, and room layouts make seams more visible."
      },
      {
        question: "Does carpet roll width affect seams?",
        answer:
          "Yes. If the room is wider than the roll, multiple drops and seams may be required."
      },
      {
        question: "Can pattern match make seams harder?",
        answer:
          "Yes. Patterned carpet needs extra planning so the design aligns across seams."
      },
      {
        question: "Can a visible seam be fixed?",
        answer:
          "Sometimes. The repair depends on whether the issue is lighting, pile direction, placement, seam construction, or carpet damage."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-is-my-lvp-lifting",
    title: "Why Is My LVP Lifting?",
    description:
      "Troubleshoot LVP lifting by checking subfloor flatness, moisture, glue-down adhesive, floating floor movement, cabinets, expansion gaps, and acclimation.",
    metadataTitle: "Why Is My LVP Lifting? Floating and Glue-Down Causes",
    metadataDescription:
      "Learn why LVP lifts, curls, pops, or releases and what to check first with moisture, subfloors, adhesive, expansion gaps, cabinets, and acclimation.",
    dateModified: "2026-05-24",
    readTime: "9 min read",
    primaryEcosystem: "lvp",
    secondaryEcosystems: ["lvt"],
    materialTypes: ["lvp", "lvt"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "flooring-movement-problems",
      "why-is-my-lvp-floor-separating",
      "can-you-install-cabinets-over-floating-lvp",
      "how-long-should-lvp-acclimate",
      "subfloor-flatness-requirements-lvp",
      "glue-down-vs-floating-floor"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "LVP can lift because of subfloor flatness problems, moisture, adhesive failure in glue-down floors, locking system stress in floating floors, missing expansion space, heavy cabinets or islands trapping the floor, improper acclimation, or product compatibility issues.",
          "The first step is to identify the installation method. A floating LVP floor that lifts usually has different causes than a glue-down LVP floor releasing from the subfloor."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Lifting is a symptom of pressure, release, or movement. The source can be below the floor, inside the locking system, at the room perimeter, or in the jobsite conditions."
        ],
        bullets: [
          "Subfloor low spots or humps stressing the plank joints.",
          "Moisture from concrete, leaks, wet cleaning, or trapped water.",
          "Glue-down adhesive not bonding because of slab conditions, open time, contamination, or moisture.",
          "Floating floor pinned by cabinets, islands, heavy built-ins, tight trim, or transitions.",
          "Expansion gaps that are too small for the room or product.",
          "Flooring installed before product and room conditions were stable."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Look for a pattern. Lifting along a wall may point to missing expansion space. Lifting near a sink, exterior door, or slab crack may point to moisture. Lifting in the middle of a room may point to subfloor flatness, adhesive release, or a locked floating floor under stress.",
          "If the floor is glue-down, check whether the plank is releasing from the adhesive or whether the adhesive is releasing from the subfloor. If the floor is floating, check whether the lifted area is trapped by trim, transitions, cabinets, or heavy fixed objects."
        ],
        bullets: [
          "Identify whether the floor is floating or glue-down.",
          "Check for moisture sources before forcing planks flat.",
          "Inspect transitions, walls, cabinets, islands, and door jambs for tight spots.",
          "Look for subfloor humps or dips near the lifted area.",
          "Review acclimation and room temperature requirements for the product."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call an installer if LVP is lifting across multiple areas, if moisture is suspected, if adhesive is releasing, if cabinets are trapping a floating floor, or if the locking joints are damaged.",
          "Do not simply add weight, glue, or nails to a floating floor. That can make the movement problem worse and may conflict with the product instructions."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A kitchen floating LVP floor lifts near an island after installation. The island was installed through the floating floor, and the floor has little room to move. The lifting is not just a plank defect. It may be pressure from a floor that has been pinned.",
          "The solution may involve reviewing island attachment, expansion space, and whether the product allows that installation detail."
        ]
      }
    ],
    faq: [
      {
        question: "Can I glue down a lifting floating LVP plank?",
        answer:
          "Usually that is not the right repair. Floating floors are designed to move, and spot-gluing can create stress unless the product instructions allow it."
      },
      {
        question: "Can moisture make LVP lift?",
        answer:
          "Yes. Moisture can affect adhesive, underlayment, subfloor conditions, and some flooring assemblies."
      },
      {
        question: "Can cabinets cause LVP to lift?",
        answer:
          "Fixed cabinets or islands can trap a floating floor if the product does not allow that detail."
      },
      {
        question: "Does acclimation affect LVP lifting?",
        answer:
          "It can. Installing material before room and product conditions are stable can contribute to movement."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-is-my-transition-strip-moving",
    title: "Why Is My Transition Strip Moving?",
    description:
      "Troubleshoot loose transition strips by checking transition type, track attachment, height differences, floating floor movement, expansion gaps, traffic, and concrete anchors.",
    metadataTitle: "Why Is My Transition Strip Moving? Loose Trim Troubleshooting",
    metadataDescription:
      "Learn why transition strips move, pop loose, or shift and what to check with T-molds, reducers, end caps, tracks, height changes, and expansion gaps.",
    dateModified: "2026-05-24",
    readTime: "8 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "tile"],
    materialTypes: ["transitions", "lvp", "laminate", "porcelain-tile", "ceramic-tile"],
    topicCluster: "transitions",
    relatedTools: ["transition-estimator", "flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "t-mold-vs-reducer-vs-end-cap",
      "flooring-transition-guide",
      "luxury-vinyl-over-tile",
      "which-direction-should-flooring-run"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "A transition strip can move because the wrong profile was used, the track is loose, the height difference is too large, the floating floor is pushing against it, the expansion gap is wrong, the concrete anchor failed, or doorway traffic is stressing the trim.",
          "The fix depends on the transition type. A T-mold, reducer, end cap, threshold, and stair nose all solve different problems and are not always interchangeable."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Transitions sit at the point where movement, height changes, traffic, and different materials meet. That is why a small trim problem can reveal a larger layout or installation issue."
        ],
        bullets: [
          "Using a T-mold where a reducer or end cap is needed.",
          "Track fasteners missing, loose, or not anchored well in concrete.",
          "Height difference that exceeds what the profile can handle.",
          "Floating floor expansion space missing or blocked.",
          "Trim fastened in a way that pins a floating floor.",
          "High doorway traffic or rolling loads stressing the trim."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Start by identifying the transition profile and the two surfaces it connects. Similar-height floors usually need a different solution than a floor stepping down to tile, carpet, or concrete.",
          "Then check whether the trim is loose from the track, whether the track is loose from the subfloor, or whether the whole floor is pushing against the transition."
        ],
        bullets: [
          "Check if the trim profile matches the height difference.",
          "Inspect the track or fasteners below the trim.",
          "Look for tight flooring edges under the transition.",
          "Check whether the floor is floating and needs movement space.",
          "Review concrete anchors if the transition is installed over a slab."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call an installer if the transition keeps coming loose, if the floor is buckling nearby, if the track is failing in concrete, if the doorway has a large height change, or if the trim is connected to stairs.",
          "Stair noses and high-traffic transitions need secure, product-approved details because loose trim can become a trip hazard."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A reducer between LVP and tile pops loose every few weeks. The tile is higher than expected, and the reducer barely reaches the track. The problem may be profile selection, not just adhesive.",
          "A better fix may be a transition profile designed for the actual height change and properly anchored for the subfloor."
        ]
      }
    ],
    faq: [
      {
        question: "Can I glue a loose transition strip back down?",
        answer:
          "Sometimes, but glue alone may not fix the cause if the track is loose, the profile is wrong, or the floating floor is pushing against it."
      },
      {
        question: "Why does my T-mold keep popping up?",
        answer:
          "Common causes include loose track, wrong profile, tight expansion space, height mismatch, or high traffic."
      },
      {
        question: "Should transitions be nailed through floating floors?",
        answer:
          "Usually no. Fastening through a floating floor can restrict movement unless the product system specifically allows it."
      },
      {
        question: "What transition should I use for different floor heights?",
        answer:
          "A reducer is commonly used for height changes, while a T-mold is usually for similar-height floors. Verify the actual profile requirements."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-does-my-floor-feel-hollow",
    title: "Why Does My Floor Feel Hollow?",
    description:
      "Learn why floors feel hollow, including floating floor sound, low spots, underlayment, hollow tile, glue-down failure, concrete slab issues, and when to worry.",
    metadataTitle: "Why Does My Floor Feel Hollow? Floating, Tile, and Glue-Down Causes",
    metadataDescription:
      "Troubleshoot hollow-feeling floors by checking floating floor movement, low spots, underlayment, hollow tile, glue-down failure, and concrete issues.",
    dateModified: "2026-05-24",
    readTime: "8 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "tile"],
    materialTypes: ["lvp", "lvt", "laminate", "engineered-hardwood", "ceramic-tile", "porcelain-tile"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "flooring-movement-problems",
      "subfloor-flatness-requirements-lvp",
      "glue-down-vs-floating-floor",
      "why-is-my-tile-cracking",
      "how-flat-should-a-floor-be-for-tile",
      "can-you-install-lvp-over-concrete"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "A floor can feel hollow because it is a floating floor, the subfloor has low spots, the underlayment is changing the sound, tile has poor mortar coverage, glue-down flooring has released, or the concrete slab has surface issues.",
          "Some hollow sound is normal with certain floating floors. Hollow sound becomes more concerning when it is localized, getting worse, paired with movement, or connected to loose tile, lifting planks, cracks, or moisture."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Hollow feel is often about support. The finished floor may be spanning a small gap, sitting on cushion, or sounding different because it is not bonded directly to the subfloor."
        ],
        bullets: [
          "Floating floor sound from LVP, laminate, or engineered hardwood.",
          "Low spots below planks causing flex or drum-like sound.",
          "Underlayment that is too soft, too thick, or not approved.",
          "Hollow tile from poor mortar coverage, movement, or bond failure.",
          "Glue-down flooring releasing from adhesive or subfloor.",
          "Concrete slab texture, cracks, moisture, or old adhesive affecting bond."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Compare hollow areas to solid-feeling areas. If the entire floating floor sounds similar, the sound may be normal for that product and underlayment. If one spot sounds different, moves, clicks, or feels soft, investigate further.",
          "For tile, tap-testing can reveal hollow-sounding areas, but hollow sound alone does not always mean immediate failure. Loose tile, cracked grout, movement, or spreading hollow areas are more concerning."
        ],
        bullets: [
          "Mark hollow areas and see if they grow over time.",
          "Check for movement, cracks, gaps, lifting, or soft spots.",
          "Review whether the floor is floating, glue-down, or tile.",
          "Look for moisture sources near hollow or loose areas.",
          "Check subfloor flatness if the floor has not been installed yet."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call an installer if the hollow area is localized and paired with movement, if tile or grout is cracking, if glue-down flooring is releasing, if moisture is suspected, or if the floor feels soft or unsafe.",
          "A pro can separate normal floating-floor acoustics from a bond, subfloor, or moisture problem."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A floating laminate floor sounds slightly hollow across the entire room but feels stable and has no gaps. That may be normal for the product and underlayment.",
          "In another room, porcelain tile has one hollow spot that later develops cracked grout. That is more concerning because tile should be well-supported by the setting material."
        ]
      }
    ],
    faq: [
      {
        question: "Is a hollow sound normal with floating floors?",
        answer:
          "Sometimes. Floating floors can sound different than glued or nailed floors, especially over underlayment."
      },
      {
        question: "Does hollow tile mean the tile will fail?",
        answer:
          "Not always, but hollow tile with movement, cracked grout, or spreading loose areas should be evaluated."
      },
      {
        question: "Can low spots make a floor feel hollow?",
        answer:
          "Yes. Low spots can leave parts of the floor unsupported, causing flex or a hollow sound."
      },
      {
        question: "Can underlayment make a floor sound hollow?",
        answer:
          "Yes. Underlayment affects sound and feel, especially under floating floors. It should still be approved for the flooring product."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-is-my-lvp-floor-separating",
    title: "Why Is My LVP Floor Separating?",
    description:
      "Troubleshoot LVP plank gaps and separation by checking locking system stress, subfloor flatness, moisture, expansion space, cabinets, and long runs.",
    metadataTitle: "Why Is My LVP Floor Separating? Gaps and Locking Joint Causes",
    metadataDescription:
      "Learn why LVP floors separate, including locking system stress, uneven subfloors, expansion gaps, moisture, cabinets, long runs, and poor installation.",
    dateModified: "2026-05-26",
    readTime: "9 min read",
    primaryEcosystem: "lvp",
    secondaryEcosystems: ["lvt"],
    materialTypes: ["lvp", "lvt"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "flooring-movement-problems",
      "why-is-my-lvp-floor-clicking",
      "why-is-my-lvp-lifting",
      "subfloor-flatness-requirements-lvp",
      "can-you-install-cabinets-over-floating-lvp",
      "glue-down-vs-floating-floor"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "LVP floors usually separate when the locking system is stressed, unsupported, damaged, trapped, or moving more than the floor was designed to handle. Uneven subfloors, missing expansion space, moisture, heavy fixed cabinets or islands, long runs, and installation damage are common causes.",
          "The fix depends on whether the planks are simply out of position or whether the locking edges are damaged. If joints are broken, swollen, or repeatedly opening, repair may require lifting the floor and replacing planks."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "LVP separation is often a movement problem. A floating LVP floor needs support below the joints and room to expand and contract. When the floor flexes over low spots or gets pinned by fixed objects, stress can show up as gaps."
        ],
        bullets: [
          "Low spots or humps that let planks flex and stress locking joints.",
          "Expansion gaps that are too tight at walls, doorways, transitions, cabinets, or islands.",
          "Moisture from slabs, leaks, wet cleaning, or trapped water affecting the floor system.",
          "Heavy fixed cabinets or islands installed over a floating floor when the product does not allow it.",
          "Long runs that exceed product requirements for expansion breaks.",
          "Planks forced together, struck too hard, or installed over debris that damaged locking edges."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Mark every gap and look for a pattern. Gaps in one hallway may point to subfloor movement or long-run stress. Gaps near a kitchen island, cabinet run, or transition may point to a pinned floating floor. Gaps near exterior doors, bathrooms, or concrete slabs deserve a moisture check.",
          "Do not repeatedly force the joint closed without inspecting the locking edge. A damaged joint may open again or transfer stress to nearby planks."
        ],
        bullets: [
          "Check whether the LVP is floating or glue-down.",
          "Look for bounce, clicking, hollow movement, or low spots near the gap.",
          "Check expansion space around walls, door jambs, transitions, cabinets, and islands.",
          "Inspect the plank edges for broken locking tabs or swelling.",
          "Review product limits for long runs and required transition breaks."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call an installer if gaps keep returning, the floor is lifting, several joints are opening, moisture is suspected, or the floor is trapped under cabinets or fixed objects. A professional can usually identify whether the problem is subfloor support, expansion, moisture, or damaged locking edges.",
          "If the plank locking system is damaged, repair may require replacing affected planks rather than simply tapping the floor together."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A floating LVP floor starts separating near a kitchen island a few months after installation. The same end gaps reopen after being tapped closed, and the floor feels tight at the island trim.",
          "The likely issue is not just loose planks. The island may be restricting floor movement, causing stress to show up at the joints. The repair should start by checking product instructions, expansion space, and whether damaged planks need replacement."
        ]
      }
    ],
    faq: [
      {
        question: "Can LVP gaps be fixed?",
        answer:
          "Sometimes. If the locking joints are intact and the cause has been corrected, gaps may close. If locking tabs are broken, swollen, or stressed by an uneven subfloor or pinned floor, plank replacement or partial floor removal may be needed."
      },
      {
        question: "Can an uneven subfloor make LVP separate?",
        answer:
          "Yes. Low spots can let the planks flex under foot traffic, which stresses the locking joints and can create gaps, clicking, or lifting."
      },
      {
        question: "Can cabinets cause LVP plank separation?",
        answer:
          "Fixed cabinets or islands can restrict a floating floor if the product does not allow that installation detail. When a floating floor cannot move as designed, gaps or lifting can appear elsewhere."
      },
      {
        question: "Should I glue separating LVP joints?",
        answer:
          "Only if the product instructions allow that repair. Spot-gluing a floating floor can block movement and may create new stress points."
      },
      {
        question: "When does LVP separation require plank replacement?",
        answer:
          "Replacement may be needed when locking edges are broken, plank edges are swollen, the wear surface is chipped, or a joint will not stay closed after subfloor, moisture, and expansion issues are corrected."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-is-my-laminate-floor-buckling",
    title: "Why Is My Laminate Floor Buckling?",
    description:
      "Troubleshoot laminate floor buckling by checking moisture, expansion gaps, fixed objects, acclimation, subfloor flatness, and underlayment.",
    metadataTitle: "Why Is My Laminate Floor Buckling? Moisture and Expansion Causes",
    metadataDescription:
      "Learn why laminate floors buckle or peak and what to check first with moisture, expansion gaps, fixed objects, acclimation, subfloors, and underlayment.",
    dateModified: "2026-05-26",
    readTime: "9 min read",
    primaryEcosystem: "laminate",
    materialTypes: ["laminate"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "why-is-my-laminate-floor-separating",
      "laminate-floor-separating-what-to-check-first",
      "best-underlayment-for-laminate-flooring",
      "can-laminate-flooring-be-waterproof",
      "how-flat-should-a-subfloor-be-for-laminate"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "Laminate flooring usually buckles when it swells from moisture or when a floating floor has no room to expand. Missing expansion gaps, tight trim, heavy fixed objects, poor acclimation, uneven subfloors, and incorrect underlayment can all contribute.",
          "Buckling is more urgent than a small gap because the floor is under pressure. Do not just press it flat. Find what is causing the pressure or swelling first."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Laminate is commonly installed as a floating floor, so it needs movement space at the perimeter and approved underlayment below it. Moisture can also swell the core and create raised edges or peaking."
        ],
        bullets: [
          "Water from leaks, wet mopping, pet accidents, exterior doors, or damp subfloors.",
          "Expansion gaps missing or blocked by tight baseboards, door jambs, transitions, cabinets, or islands.",
          "Heavy fixed objects pinning a floating laminate floor.",
          "Flooring installed before product and room conditions were stable.",
          "Uneven subfloor pushing joints upward or creating pressure points.",
          "Underlayment that is too thick, too soft, doubled up, or not approved."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "First, look for moisture. Check nearby kitchens, bathrooms, exterior doors, appliances, plants, pet areas, concrete, and cleaning habits. If edges look swollen or darkened, moisture may be involved.",
          "Next, check whether the floor has expansion space. Remove a piece of trim only if you can do it safely, or ask an installer to inspect the perimeter and transitions."
        ],
        bullets: [
          "Check for leaks or standing moisture before walking the floor flat.",
          "Look for raised seams, peaking, edge swelling, or soft spots.",
          "Inspect the perimeter for blocked expansion space.",
          "Review underlayment and acclimation requirements.",
          "Check whether the buckle follows a long run or tight doorway."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call an installer quickly if buckling is spreading, moisture is present, boards are swollen, or the floor is lifting across a large area. Waiting can damage more planks or hide a leak that needs repair.",
          "A pro can determine whether the floor can be relieved and reinstalled, whether planks need replacement, or whether the subfloor or moisture source needs correction first."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A laminate floor buckles near a sliding door after a storm. The trim is tight, and the plank edges near the door look slightly swollen.",
          "The likely problem may be both moisture exposure and restricted expansion space. The repair should start with stopping the moisture source, drying the area, and inspecting whether the affected planks and perimeter details can be corrected."
        ]
      }
    ],
    faq: [
      {
        question: "Can laminate buckling go back down?",
        answer:
          "Sometimes minor pressure can relax after the expansion issue is corrected, but moisture-swollen boards often do not return perfectly. Damaged planks may need replacement."
      },
      {
        question: "Is laminate buckling caused by water?",
        answer:
          "Water is a common cause, but not the only one. Tight expansion gaps, pinned floors, wrong underlayment, and subfloor pressure can also cause buckling or peaking."
      },
      {
        question: "Can heavy cabinets make laminate buckle?",
        answer:
          "Fixed cabinets or islands can restrict a floating laminate floor if installed over it against product instructions. That can force pressure to show up as buckling or separation."
      },
      {
        question: "Should I cut expansion gaps after laminate buckles?",
        answer:
          "Only after identifying the cause and confirming the product requirements. Cutting blindly can damage the floor or miss a moisture problem."
      },
      {
        question: "Can underlayment cause laminate buckling?",
        answer:
          "Yes. Underlayment that is too soft, too thick, doubled, or unapproved can add movement and stress. It cannot replace proper subfloor prep or expansion space."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-is-my-hardwood-floor-gapping",
    title: "Why Is My Hardwood Floor Gapping?",
    description:
      "Understand hardwood floor gaps, including seasonal humidity, acclimation, moisture imbalance, solid versus engineered wood, and when gaps are concerning.",
    metadataTitle: "Why Is My Hardwood Floor Gapping? Seasonal and Moisture Causes",
    metadataDescription:
      "Learn why hardwood floors gap, what seasonal gaps mean, and what to monitor with humidity, acclimation, moisture imbalance, solid wood, and engineered hardwood.",
    dateModified: "2026-05-26",
    readTime: "9 min read",
    primaryEcosystem: "hardwood-engineered-hardwood",
    materialTypes: ["hardwood", "engineered-hardwood"],
    topicCluster: "installation-method",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "flooring-movement-problems",
      "how-long-should-hardwood-acclimate",
      "hardwood-acclimation-mistakes",
      "why-is-my-hardwood-floor-cupping",
      "can-engineered-hardwood-go-over-concrete",
      "solid-hardwood-vs-engineered-hardwood"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "Hardwood floors gap when boards shrink or move apart. Small seasonal gaps can be normal in dry months, especially with solid hardwood, but wide, uneven, growing, or year-round gaps may point to moisture imbalance, poor acclimation, installation issues, or unstable indoor humidity.",
          "The most useful first step is to track indoor humidity and whether the gaps close during more humid seasons. That pattern helps separate normal seasonal movement from a problem that needs repair."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Wood expands and contracts with moisture. Gapping usually means the boards have lost moisture, were installed before reaching suitable conditions, or are responding to indoor humidity that is outside the expected range."
        ],
        bullets: [
          "Dry winter indoor air causing seasonal shrinkage.",
          "Hardwood installed before flooring and subfloor moisture were within range.",
          "HVAC or humidity conditions changing after installation.",
          "Moisture imbalance from crawlspaces, basements, slabs, or leaks.",
          "Solid hardwood moving more noticeably than some engineered products.",
          "Fastening, milling, or installation issues that leave irregular gaps."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Measure indoor relative humidity and note the season. If gaps appear in winter and close in spring or summer, the movement may be seasonal. If gaps stay open year-round, grow quickly, or appear with cupping, crowning, squeaks, or loose boards, investigate further.",
          "Look at whether the gaps are even across the room or concentrated in one area. Local gaps near exterior doors, vents, fireplaces, leaks, or concrete may point to room-specific conditions."
        ],
        bullets: [
          "Track humidity for several weeks instead of guessing.",
          "Note whether gaps are seasonal, stable, growing, or localized.",
          "Look for cupping, crowning, loose boards, or moisture stains.",
          "Review acclimation and moisture readings if available.",
          "Compare solid hardwood and engineered hardwood expectations for the exact product."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call a hardwood professional if gaps are large, uneven, increasing, paired with cupping or crowning, or not changing seasonally. Also call if the floor is over concrete, near a crawlspace, or installed recently without documented moisture readings.",
          "Filling gaps too soon can backfire. If boards expand later, filler can crack, squeeze out, or create pressure."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A solid oak floor develops thin gaps in January after the heat has been running for weeks. The homeowner measures low indoor humidity, and the gaps narrow again in late spring.",
          "That pattern is different from a floor with wide permanent gaps after installation. Monitoring humidity, product expectations, and seasonal movement helps decide whether the issue is normal movement or a repair concern."
        ]
      }
    ],
    faq: [
      {
        question: "Are gaps in hardwood floors normal?",
        answer:
          "Small seasonal gaps can be normal, especially in dry months. Large, uneven, permanent, or growing gaps should be evaluated."
      },
      {
        question: "Will hardwood floor gaps close on their own?",
        answer:
          "Seasonal gaps may narrow when indoor humidity rises. Gaps caused by installation, moisture imbalance, damaged boards, or unstable conditions may not close without correction."
      },
      {
        question: "Should I fill hardwood floor gaps?",
        answer:
          "Do not rush to fill seasonal gaps. If the boards expand later, filler can crack or create pressure. Have persistent or wide gaps evaluated before repair."
      },
      {
        question: "Does engineered hardwood gap less than solid hardwood?",
        answer:
          "Engineered hardwood is often more dimensionally stable, but it can still gap if indoor conditions, moisture, acclimation, or installation details are wrong."
      },
      {
        question: "Can poor acclimation cause hardwood gaps?",
        answer:
          "Yes. If hardwood is installed before the flooring, subfloor, and home are within required conditions, movement after installation can show up as gaps, cupping, or other problems."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-is-my-carpet-wrinkling-or-buckling",
    title: "Why Is My Carpet Wrinkling or Buckling?",
    description:
      "Troubleshoot carpet wrinkles and buckling by checking stretch, padding, humidity, furniture movement, age, delamination, and when restretching may help.",
    metadataTitle: "Why Is My Carpet Wrinkling or Buckling? Causes and Restretching",
    metadataDescription:
      "Learn why carpet wrinkles, ripples, or buckles and what to check with poor stretch, padding, humidity, furniture movement, carpet age, and delamination.",
    dateModified: "2026-05-26",
    readTime: "8 min read",
    primaryEcosystem: "carpet-padding",
    materialTypes: ["carpet", "carpet-padding"],
    topicCluster: "installation-method",
    relatedTools: ["carpet-seam-planner", "pattern-repeat-calculator", "flooring-square-footage-calculator"],
    relatedGuides: [
      "carpet-padding-thickness-guide",
      "carpet-seam-direction-guide",
      "why-are-my-carpet-seams-visible",
      "what-direction-should-carpet-run",
      "how-much-extra-carpet-should-i-order"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "Carpet wrinkles or buckles when the carpet is loose, stretched poorly, moving over the wrong pad, affected by humidity, shifted by heavy furniture, aging, or separating internally. In many cases, professional restretching can help, but not every wrinkle is only a stretch issue.",
          "If wrinkles are new, spreading, near seams, or paired with a soft or crunchy feel, the installer should evaluate the carpet, pad, tack strip, seams, and backing."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Carpet needs to be stretched and held properly. Padding, backing condition, room humidity, furniture movement, and age all affect whether carpet stays flat."
        ],
        bullets: [
          "Carpet was not power-stretched properly during installation.",
          "Padding is too thick, too soft, worn out, or not suited to the carpet.",
          "Humidity changes temporarily relax or move the carpet.",
          "Heavy furniture was dragged and shifted the carpet.",
          "Older carpet has lost backing strength or dimensional stability.",
          "Delamination where the carpet backing separates internally."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Look at where the wrinkles start. Wrinkles across the center of a room often point to looseness or stretch. Wrinkles near a seam may point to seam stress. Wrinkles near furniture paths may point to movement from dragging or rolling loads.",
          "Also check how the carpet feels. A loose ripple is different from backing delamination, where the carpet can feel soft, bubbly, crunchy, or separated."
        ],
        bullets: [
          "Check whether wrinkles run across the room, near seams, or near furniture paths.",
          "Look for seam opening, fraying, or visible backing problems.",
          "Review whether the carpet was power-stretched during installation.",
          "Check whether the pad thickness and density match the carpet requirements.",
          "Avoid cutting or trimming carpet before a professional review."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call a carpet installer if wrinkles create a trip hazard, if the carpet is newer, if wrinkles are spreading, if seams are affected, or if the carpet feels separated from the backing. Restretching may solve loose carpet, but damaged backing or bad pad may need a different fix.",
          "A professional can determine whether the carpet can be restretched, whether tack strips or seams need work, or whether replacement is more realistic."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A bedroom carpet develops ripples six months after installation. The wrinkles run across the center of the room, and the carpet otherwise feels intact.",
          "That may be a restretching candidate. A different room with old carpet, soft bubbles, and backing separation may not respond well to restretching because the carpet itself may be failing."
        ]
      }
    ],
    faq: [
      {
        question: "Can wrinkled carpet be restretched?",
        answer:
          "Often yes, especially when the carpet is loose but still structurally sound. Restretching is less effective when the carpet backing is damaged, the pad is wrong, or the carpet is very old."
      },
      {
        question: "Is carpet wrinkling a trip hazard?",
        answer:
          "It can be. Ripples in walking paths should be addressed because they can catch feet, furniture, or vacuum cleaners."
      },
      {
        question: "Can humidity make carpet buckle?",
        answer:
          "Humidity can contribute to temporary movement or relaxation in some carpets, but recurring or severe buckling should still be inspected."
      },
      {
        question: "Can bad padding cause carpet wrinkles?",
        answer:
          "Yes. Padding that is too soft, too thick, worn out, or not approved for the carpet can let the carpet move and wear poorly."
      },
      {
        question: "Should carpet seams be checked when carpet wrinkles?",
        answer:
          "Yes. Wrinkles near seams can stress the seam, make it more visible, or indicate that the layout and stretch need professional review."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-is-my-tile-cracking",
    title: "Why Is My Tile Cracking?",
    description:
      "Troubleshoot cracked tile by checking subfloor movement, deflection, underlayment, hollow spots, mortar coverage, expansion movement, and slab cracks.",
    metadataTitle: "Why Is My Tile Cracking? Subfloor, Mortar, and Movement Causes",
    metadataDescription:
      "Learn why tile floors crack and what to check first with subfloor movement, deflection, underlayment, hollow spots, mortar coverage, expansion, and slab cracks.",
    dateModified: "2026-05-26",
    readTime: "9 min read",
    primaryEcosystem: "tile",
    materialTypes: ["ceramic-tile", "porcelain-tile", "stone-tile"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "how-flat-should-a-floor-be-for-tile",
      "can-you-install-tile-over-tile",
      "tile-layout-planning-guide",
      "porcelain-vs-ceramic-tile",
      "flooring-transition-guide"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "Tile cracks when the tile assembly cannot handle movement, stress, or poor support. Common causes include subfloor movement, joist deflection, missing or incorrect underlayment, hollow spots, poor mortar coverage, expansion movement, impacts, or cracks transferring from a concrete slab.",
          "One cracked tile may be an isolated impact. Repeating cracks, cracks following a straight line, loose tiles, cracked grout, or hollow sounds usually point to a substrate or installation issue that should be evaluated before replacing tile."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Tile is hard but not flexible. The layers below it need to be flat, stable, supported, and prepared for the tile size and setting material. If the structure moves, the tile often shows the stress."
        ],
        bullets: [
          "Wood subfloor or framing movement causing deflection under the tile.",
          "Missing, wrong, or poorly installed backer board, membrane, or underlayment.",
          "Insufficient mortar coverage leaving hollow or unsupported areas.",
          "Concrete slab cracks transferring through the tile without an appropriate isolation strategy.",
          "Expansion movement at walls, doorways, sunny areas, or large rooms.",
          "Large-format tile installed over a floor that was not flat or stable enough."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Look at the crack pattern. A single cracked tile in the middle of a kitchen may be an impact. A line of cracked tiles can point to slab movement, underlayment seams, framing movement, or expansion stress.",
          "Tap nearby tiles and listen for hollow areas. Also check grout cracks, loose tile movement, doorways, transitions, and whether the floor flexes under normal walking."
        ],
        bullets: [
          "Map whether cracks are isolated, repeating, or following a straight line.",
          "Check for hollow sounds, loose tiles, or cracked grout nearby.",
          "Review subfloor structure and underlayment if the floor is over wood framing.",
          "Look for slab cracks or moisture if the tile is over concrete.",
          "Check whether movement joints or perimeter gaps were planned where required."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call a tile professional if cracks repeat, if tiles sound hollow, if grout is cracking, if the floor flexes, if a slab crack is involved, or if the tile is in a wet area. Replacing only the visible tile may fail again if the cause is still active.",
          "A professional can review substrate preparation, mortar coverage, underlayment, movement joints, and whether a crack isolation product or structural repair is needed."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A porcelain kitchen floor develops three cracked tiles in a straight line. The grout is cracked along the same path, and tapping the tiles nearby reveals hollow spots.",
          "That pattern suggests the issue may be below the tile, such as substrate movement, poor coverage, or an underlayment seam. Replacing only the cracked tiles without checking the assembly may lead to repeat cracking."
        ]
      }
    ],
    faq: [
      {
        question: "Can one cracked tile be replaced?",
        answer:
          "Yes, if the cause is isolated and matching tile is available. If the crack is caused by movement, poor support, or slab cracking, replacement alone may not last."
      },
      {
        question: "Do hollow tiles always crack?",
        answer:
          "Not always, but hollow-sounding tile can indicate poor support or bond. Hollow tile with movement, cracked grout, or spreading cracks should be inspected."
      },
      {
        question: "Can a cracked concrete slab crack tile?",
        answer:
          "Yes. Movement or cracks in concrete can transfer through tile if the assembly is not designed to manage that condition."
      },
      {
        question: "Does tile need an underlayment over wood subfloor?",
        answer:
          "Tile over wood framing usually needs an appropriate tile underlayment or membrane system, but the exact requirement depends on the structure, tile, and installation method."
      },
      {
        question: "Can large-format tile crack more easily?",
        answer:
          "Large-format tile is not automatically weaker, but it often needs a flatter, better-supported substrate and careful mortar coverage. Poor prep can make problems more noticeable."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  }
];
