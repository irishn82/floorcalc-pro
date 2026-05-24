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
      "why-is-my-laminate-floor-separating",
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
      "subfloor-flatness-requirements-lvp",
      "glue-down-vs-floating-floor",
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
  }
];
