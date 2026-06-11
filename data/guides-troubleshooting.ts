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
    dateModified: "2026-06-11",
    readTime: "10 min read",
    primaryEcosystem: "planning-measuring-transitions",
    secondaryEcosystems: ["lvp", "laminate", "hardwood-engineered-hardwood"],
    materialTypes: ["lvp", "lvt", "laminate", "engineered-hardwood"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "why-is-my-lvp-floor-clicking",
      "why-wont-my-laminate-floor-click-together",
      "subfloor-flatness-requirements-lvp",
      "why-is-my-lvp-floor-separating",
      "why-is-my-laminate-floor-separating",
      "why-is-my-laminate-floor-buckling",
      "why-is-my-floor-squeaking",
      "glue-down-vs-floating-floor"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "A clicking floor usually means something is moving. The most common causes are uneven subfloors, floating floor movement, locking system stress, underlayment that is too soft, debris under the planks, tight expansion gaps, or moisture and humidity changes.",
          "The sound matters, but the location matters even more. A repeated click in the same spot often points to a support or movement problem that should be checked before the joint damage gets worse.",
          "One clarification before diagnosing: this guide covers floors that click when you walk on them. If you are mid-installation and the planks will not click together, that is a different problem with different fixes — see the guide on laminate that won't lock together in the related links."
        ]
      },
      {
        id: "clicking-vs-other-noises",
        title: "Clicking, squeaking, popping: the noise narrows the cause",
        paragraphs: [
          "Different floor noises implicate different layers of the floor, so it pays to listen before you diagnose.",
          "Clicking — a crisp plastic-on-plastic or tap sound under each step — is the signature of floating floors. It typically comes from plank locking joints flexing against each other, or a plank edge tapping against a low spot, trim, or transition. Glue-down and nail-down floors rarely click; their noises are different.",
          "Squeaking — a rubbing, creaking sound — usually lives deeper in the assembly: wood subfloor panels rubbing on loose fasteners, joists, or each other. Nail-down hardwood squeaks; floating LVP usually does not.",
          "Popping or cracking from tile usually signals a bond or movement problem in the mortar layer, which is a different diagnosis entirely. Matching the sound to the right layer saves you from pulling up a floor to fix a squeaky subfloor screw."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes",
        paragraphs: [
          "Clicking is most common with floating floors because the floor is designed to move as a connected surface. That movement is normal in a broad sense, but repeated movement at one joint or one low spot stresses the locking system — and locking profiles that flex thousands of times eventually wear or fail.",
          "Subfloor flatness is the most frequent root cause. Floating floor manufacturers commonly require the subfloor to be flat within roughly 3/16 inch over 10 feet (the exact tolerance is in each product's instructions). Over a dip, planks bridge the void and flex down into it with each step; over a hump, the floor see-saws. Both make joints move, and moving joints make noise.",
          "The remaining causes cluster around the floor's freedom to move: expansion gaps pinched by trim, transitions, or heavy fixed objects; underlayment that allows too much vertical travel; debris trapped under planks during installation; and humidity swings pushing the floor beyond the movement the installation allowed for."
        ],
        bullets: [
          "Uneven subfloor — low spots or humps beyond the product's flatness tolerance (commonly ~3/16 in over 10 ft).",
          "Underlayment that is too soft, too thick, doubled up, or not approved for the product.",
          "Damaged locking tabs from forcing planks together or installing over debris.",
          "Expansion gaps that are too tight at walls, doorways, cabinets, or transitions.",
          "Heavy fixed objects — kitchen islands, built-ins — pinning a floating floor that needs to move.",
          "Moisture or humidity changes causing movement beyond normal expectations.",
          "Loose trim or transition pieces that sound like the floor itself."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Start by mapping the sound. Walk the floor slowly and mark every spot where the click repeats — painter's tape works well. The map is the diagnosis: a single fixed spot points to a local problem (low spot, damaged joint, debris, transition); clicks spread across a whole room point to a system problem (underlayment, flatness in general, expansion, or product).",
          "Next, check the floor's edges. Remove or inspect a section of baseboard or quarter-round near the noise and look at the gap between the flooring and the wall. If the flooring is touching the wall, trim, or door frame — or if a transition strip is screwed down tight through the floating floor — the floor has lost its expansion space, and joints under compression click and eventually peak or buckle.",
          "Then test the specific spot. Press down on the clicking area with your full weight, slowly: visible plank deflection means a void or soft support underneath; a click with no visible movement is more likely joint-on-joint noise. If the floor is new, also review whether the product was acclimated as directed and what underlayment went under it.",
          "If you can find a leftover plank, check the locking profile style — knowing whether yours is an angle-angle or fold-down system helps an installer (or you) understand which joints are vulnerable and how planks can be removed for inspection without damage."
        ],
        bullets: [
          "Walk the floor slowly and mark every spot where the sound repeats.",
          "Check expansion gaps behind trim near the noise — flooring touching the wall is a finding, not a detail.",
          "Look for pinned transitions, tight door frames, and heavy fixed furniture or islands.",
          "Press-test clicking spots for visible deflection (void below) versus pure joint noise.",
          "Look for companion symptoms: gaps, peaking, lifting edges, or seams becoming visible.",
          "If the floor is not installed yet, check flatness with a 10-ft straightedge before proceeding."
        ]
      },
      {
        id: "by-material",
        title: "What clicking means by flooring type",
        paragraphs: [
          "The same sound carries different weight depending on the floor. On floating LVP, clicking concentrated in one area usually means subfloor flatness or a damaged lock — the dedicated LVP clicking guide walks through that diagnosis in detail. On floating laminate, clicking plus visible gaps is the classic signature of joints under stress, and it tends to progress: click first, gap later, broken lock last.",
          "On engineered hardwood that is floated, the same floating-floor logic applies. On glued or nailed wood floors, a click-like noise is more often a loose board, a fastener, or trim — and on nail-down floors specifically, squeaks from the subfloor or fasteners are far more common than true clicking.",
          "If a brand-new floor clicks from day one, suspect installation conditions: flatness that was never checked, doubled underlayment, or debris under planks. If clicking appeared after a season change, suspect expansion and humidity. If it appeared after new trim, a new island, or other work — something probably pinned the floor."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call an installer",
        paragraphs: [
          "Call an installer if the clicking is getting worse, if joints are separating or peaking, if the floor is lifting, if moisture is suspected, or if the sound is concentrated in a high-traffic area. A clicking joint is a joint in motion, and locking profiles have a finite number of flex cycles in them — continuing to walk on a moving joint converts a flatness fix into a plank-replacement job.",
          "A pro can usually distinguish trim noise, normal floating floor movement, damaged locks, and subfloor problems quickly — especially if you hand them the tape-map of where the floor clicks and the history of when it started."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A homeowner hears a click in the same hallway spot every time they step near a bedroom doorway. The transition strip is screwed down tight and the LVP joint beside it flexes slightly under weight. The floor cannot move at the doorway, so every step works the nearest joints.",
          "The repair is not a new plank — it is restoring movement: removing the transition, confirming expansion space at the doorway, checking the subfloor for a local dip, and reinstalling a transition that does not pin the floor. The plank only needs replacing if its lock is already damaged."
        ]
      }
    ],
    faq: [
      {
        question: "Is floor clicking always a serious problem?",
        answer:
          "No. Some sounds come from trim or normal floating floor movement. But repeated clicking in the same spot is a joint in motion, and it should be checked before the locking profile wears out."
      },
      {
        question: "Can an uneven subfloor make a floating floor click?",
        answer:
          "Yes — it is the most common root cause. Floating floors commonly require flatness within about 3/16 inch over 10 feet; over dips and humps, planks flex with each step and the joints make noise."
      },
      {
        question: "Can underlayment cause clicking?",
        answer:
          "Yes. Underlayment that is too soft, too thick, doubled, or not approved for the flooring allows extra vertical movement at every step, which works the locking joints."
      },
      {
        question: "Why is my floor clicking only in winter?",
        answer:
          "Seasonal humidity changes make floating floors expand and contract. A floor with marginal expansion space can move freely in one season and bind in another — clicking that follows the seasons usually points to expansion or humidity, not damage."
      },
      {
        question: "What's the difference between clicking and squeaking?",
        answer:
          "Clicking is a crisp tap, typical of floating floor locking joints. Squeaking is a rubbing creak, usually from the wood subfloor or fasteners underneath. They have different causes and different fixes."
      },
      {
        question: "Should I repair a clicking floor myself?",
        answer:
          "Trim noise and a pinned transition are reasonable DIY checks. Lifting flooring, changing expansion details, or replacing planks with damaged locks is usually better reviewed or handled by an installer."
      }
    ],
    disclaimer: troubleshootingDisclaimer
  },
  {
    slug: "why-are-my-carpet-seams-visible",
    title: "Why Are My Carpet Seams Visible?",
    description:
      "Learn why carpet seams show, including seam direction, lighting, pile direction, roll width, traffic, carpet construction, pattern match, and installation layout.",
    metadataTitle: "Why Are My Carpet Seams Visible? Direction and Lighting",
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
    metadataTitle: "Why Is My LVP Lifting? Curling and Popping Vinyl Planks",
    metadataDescription:
      "LVP lifting at the edges usually means moisture, a missed expansion gap, or subfloor movement. Learn what to check first before pulling up any planks.",
    dateModified: "2026-06-10",
    readTime: "9 min read",
    primaryEcosystem: "lvp",
    secondaryEcosystems: ["lvt"],
    materialTypes: ["lvp", "lvt"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "clicking-vs-lifting-flooring",
      "flooring-problem-comparison-guide",
      "flooring-movement-problems",
      "flooring-separation-problems",
      "flooring-moisture-problems",
      "why-is-my-lvp-floor-separating",
      "why-is-my-lvp-floor-peaking",
      "why-is-my-lvp-floor-buckling",
      "why-is-my-lvp-floor-clicking",
      "why-is-my-laminate-floor-separating",
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
        id: "what-this-usually-means",
        title: "What LVP lifting usually means",
        paragraphs: [
          "Lifting means the flooring is no longer staying seated where it should. On floating LVP, that usually points to pressure, damaged locking joints, subfloor movement, or the floor being pinned. On glue-down LVP, it often points to bond, slab prep, adhesive, moisture, or contamination.",
          "The visible lifted plank is only the starting clue. If the same area also clicks, peaks, separates, or feels hollow, treat it as a movement-system problem rather than a single loose plank."
        ],
        bullets: [
          "Lifting near a wall or cabinet: check expansion and fixed objects.",
          "Lifting near a slab crack or exterior door: check moisture and substrate prep.",
          "Lifting in the middle of a room: check flatness, locking joints, adhesive, or underlayment.",
          "Lifting with visible seams: compare with the LVP separation and movement hubs."
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
        id: "when-to-worry",
        title: "When to worry about LVP lifting",
        paragraphs: [
          "Worry more when lifting is spreading, showing up in multiple rooms, paired with swelling or musty odor, or appearing soon after installation. Those patterns can point to moisture, pressure, adhesive release, or product-system problems.",
          "If the floor is over concrete, review slab moisture and surface prep before repair. If it is a floating floor under cabinets or an island, confirm whether the product allows that detail before adding weight or adhesive."
        ],
        bullets: [
          "Use the moisture hub if lifting follows water exposure, slab concerns, or odor.",
          "Use the movement hub if lifting appears with clicking, peaking, or buckling.",
          "Use the transition estimator if lifting is concentrated near doorways or trim breaks."
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
      },
      {
        question: "Why is my floating LVP lifting near cabinets?",
        answer:
          "A floating floor may lift when cabinets, islands, tight trim, or fixed objects trap it and restrict movement. Check the product instructions before fastening or gluing the area."
      },
      {
        question: "Why is glue-down LVP lifting from concrete?",
        answer:
          "Glue-down LVP can lift when slab moisture, surface contamination, adhesive compatibility, open time, pH, or slab preparation does not meet the adhesive and flooring requirements."
      },
      {
        question: "Can LVP lifting be a moisture problem?",
        answer:
          "Yes. Moisture can affect adhesive, subfloor conditions, underlayment, and the room environment. Rule out moisture before making a cosmetic repair."
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
    metadataTitle: "Why Does My Floor Feel Hollow? Tile and Floating Causes",
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
    metadataTitle: "Why Is My LVP Floor Separating? Gaps Between Planks Explained",
    metadataDescription:
      "LVP planks separating usually means the locking system is under stress. Check subfloor flatness, expansion gaps, and moisture before replacing boards.",
    dateModified: "2026-06-10",
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
    metadataTitle: "Why Is My Laminate Floor Buckling? Moisture and Expansion",
    metadataDescription:
      "Learn why laminate floors buckle or peak and what to check first with moisture, expansion gaps, fixed objects, acclimation, subfloors, and underlayment.",
    dateModified: "2026-05-26",
    readTime: "9 min read",
    primaryEcosystem: "laminate",
    materialTypes: ["laminate"],
    topicCluster: "subfloor-prep",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    relatedGuides: [
      "buckling-vs-peaking-flooring",
      "flooring-problem-comparison-guide",
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
    title: "Why Is My Hardwood Floor Separating?",
    description:
      "Why hardwood floors separate and gap between boards: seasonal humidity, acclimation, moisture imbalance, solid vs engineered wood, and when gaps need repair.",
    metadataTitle: "Why Is My Hardwood Floor Separating? Gaps Between Boards",
    metadataDescription:
      "Hardwood boards separating usually means the wood is shrinking. Learn which gaps are normal seasonal movement, which signal a moisture problem, and what to check first.",
    dateModified: "2026-06-11",
    readTime: "11 min read",
    primaryEcosystem: "hardwood-engineered-hardwood",
    materialTypes: ["hardwood", "engineered-hardwood"],
    topicCluster: "installation-method",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator"],
    relatedGuides: [
      "why-is-my-engineered-hardwood-separating",
      "flooring-movement-problems",
      "how-long-should-hardwood-acclimate",
      "hardwood-acclimation-mistakes",
      "why-is-my-hardwood-floor-cupping",
      "why-are-my-flooring-joints-opening",
      "can-engineered-hardwood-go-over-concrete",
      "solid-hardwood-vs-engineered-hardwood"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "Hardwood floors separate when boards shrink or move apart — homeowners usually call it separating; flooring professionals call the same thing gapping. Small, even gaps that appear in dry winter months and close again in humid months are normal seasonal movement, especially with solid hardwood. Wide, uneven, growing, or year-round gaps point to moisture imbalance, poor acclimation, or installation issues.",
          "The most useful first step is to track indoor humidity and watch whether the gaps change with the seasons. That pattern — more than the gaps themselves — tells you whether you are looking at normal wood behavior or a problem that needs repair."
        ]
      },
      {
        id: "why-wood-separates",
        title: "Why wood boards separate",
        paragraphs: [
          "Wood is hygroscopic: every board constantly exchanges moisture with the air and changes size as it does. When indoor air dries out — typically in winter when heating systems run — boards release moisture and shrink across their width. Each board pulls away from its neighbors a hair, and across a whole floor those hairs add up to visible lines between boards.",
          "The National Wood Flooring Association's guidance frames the expectations: most wood flooring is manufactured to perform in roughly 30 to 50 percent relative humidity and normal room temperatures. Homes that swing well below that range in winter will see seasonal separation in solid wood floors — it is the material working as designed, not a defect.",
          "Board width amplifies the effect. A 5-inch plank shrinks more in absolute terms than a 2-1/4-inch strip at the same humidity change, so wide-plank floors show seasonal gaps more prominently. Species and cut matter too: flatsawn boards move more across their width than quartersawn boards of the same species."
        ]
      },
      {
        id: "normal-vs-problem",
        title: "Normal seasonal gaps vs. problem separation",
        paragraphs: [
          "The distinguishing features are pattern, timing, and consistency. Normal seasonal separation is distributed fairly evenly across the floor, appears in the dry season, and closes most of the way when humidity returns. Problem separation breaks at least one of those rules."
        ],
        bullets: [
          "Normal: thin, fairly even gaps across many boards in winter that narrow by late spring.",
          "Normal: slightly larger seasonal gaps on wide-plank solid wood in homes without humidification.",
          "Problem: gaps that stay open year-round or keep growing season over season.",
          "Problem: gaps concentrated in one area — near a slab, exterior door, crawlspace, or plumbing wall.",
          "Problem: separation paired with cupping, crowning, squeaks, finish cracks, or loose boards.",
          "Problem: wide gaps that appeared within the first year after installation, which usually trace to acclimation or moisture conditions at install time."
        ]
      },
      {
        id: "common-causes",
        title: "Common causes beyond the seasons",
        paragraphs: [
          "When separation is not simple seasonal shrinkage, the cause is usually one of these:"
        ],
        bullets: [
          "Installation before the flooring and subfloor reached compatible moisture levels — NWFA guidance calls for solid strip flooring to be within about 4 percentage points of the subfloor's moisture content, and wide plank within about 2 points. A floor installed wetter than its environment shrinks into permanent gaps as it dries.",
          "Indoor humidity left unmanaged after installation — a floor installed at 45% RH that lives at 20% RH every winter will gap hard.",
          "Moisture imbalance from below: crawlspaces without ground cover, damp basements, or slabs that were never tested (ASTM F1869 calcium chloride or ASTM F2170 RH probe testing) push boards through wet-dry cycles.",
          "Subfloor movement or deflection working fasteners loose, letting boards creep apart mechanically.",
          "Milling or fastening issues that leave irregular, random gaps from day one rather than developing over time."
        ]
      },
      {
        id: "what-to-check-first",
        title: "What to check first",
        paragraphs: [
          "Start with a $20 hygrometer and a notebook. Measure indoor relative humidity in the affected rooms for several weeks and note the season. If gaps appeared in winter and humidity reads below 30%, you are likely watching seasonal movement. If gaps persist through humid months, grow, or cluster in one area, keep investigating.",
          "Map the gaps. Even distribution across the floor suggests a whole-home condition (humidity). Concentration near exterior doors, fireplaces, HVAC vents, kitchens, baths, or over a slab or crawlspace suggests a local moisture source — and local sources are findable and fixable.",
          "If the floor is recent, pull the paperwork: were moisture readings of the wood and subfloor documented at installation? Was the flooring acclimated to the NWFA-style targets, or just stored in the garage for a week? Those records often settle the question of cause immediately."
        ],
        bullets: [
          "Track humidity for several weeks instead of guessing.",
          "Note whether gaps are seasonal, stable, growing, or localized.",
          "Look for companion symptoms: cupping, crowning, loose boards, moisture stains.",
          "Check crawlspaces for missing ground cover and slabs for moisture history.",
          "Review acclimation and moisture documentation from installation if available."
        ]
      },
      {
        id: "repair",
        title: "Repair: why patience beats filler",
        paragraphs: [
          "The instinct is to fill the gaps. Resist it until you know which kind of separation you have. Filler applied to seasonal gaps gets crushed when the boards expand again in summer — it cracks, squeezes out, or worse, acts as a wedge that pushes boards sideways and stresses fasteners.",
          "For confirmed seasonal movement, the standard remedy is environmental, not mechanical: keep indoor humidity inside the 30–50% band year-round with humidification in winter. Many floors tighten up dramatically once the home stops cycling between 20% and 60% RH.",
          "Permanent gaps from a drying-out or bad-acclimation event can be candidates for filler, slivers, or board replacement — but only after the floor has stabilized through at least one full season and the moisture source, if any, is corrected. A hardwood professional with a moisture meter can confirm boards and subfloor have equalized before any repair."
        ]
      },
      {
        id: "when-to-call-an-installer",
        title: "When to call a professional",
        paragraphs: [
          "Call a hardwood professional if gaps are wide, uneven, increasing, paired with cupping or crowning, or unchanged across seasons. Also call if the floor is over concrete, above a crawlspace, or was installed recently without documented moisture readings — those cases usually need meter readings to diagnose properly.",
          "Bring the seasonal history you tracked. A floor that gaps every January and recovers every June is a different conversation than a floor that opened up in one corner last month, and your notes shortcut the diagnosis."
        ]
      },
      {
        id: "example-scenario",
        title: "Example scenario",
        paragraphs: [
          "A solid oak floor develops thin, even gaps across the living room in January after weeks of heating. The homeowner's hygrometer reads 24% RH. By late May the gaps have mostly closed. That is textbook seasonal separation — the fix is winter humidification, not filler.",
          "Contrast that with a floor showing wide gaps along one wall, year-round, with slight cupping nearby. That pattern says local moisture — and it warrants a professional with a moisture meter, not a tube of filler."
        ]
      }
    ],
    faq: [
      {
        question: "Why is my hardwood floor separating?",
        answer:
          "Boards separate when wood shrinks — usually from dry indoor air in winter, but persistent or growing gaps point to moisture imbalance, poor acclimation at installation, or a local moisture source like a slab or crawlspace."
      },
      {
        question: "Are gaps in hardwood floors normal?",
        answer:
          "Small, even seasonal gaps are normal, especially in solid wood during dry months when humidity falls below the 30–50% range most products are built for. Large, uneven, permanent, or growing gaps should be evaluated."
      },
      {
        question: "Will hardwood floor gaps close on their own?",
        answer:
          "Seasonal gaps typically narrow when indoor humidity rises in spring and summer. Gaps caused by installation problems, moisture imbalance, or permanent drying usually do not close without correction."
      },
      {
        question: "How do I fix separating hardwood floors?",
        answer:
          "First identify the cause. Seasonal separation is managed with humidity control, not filler. Permanent gaps can be filled or repaired, but only after the floor has stabilized through a full season and any moisture source is fixed — filling too soon creates pressure damage when boards expand."
      },
      {
        question: "Does engineered hardwood separate less than solid hardwood?",
        answer:
          "Generally yes — cross-ply construction makes engineered boards more dimensionally stable. But engineered floors can still gap when conditions, acclimation, or installation details are wrong."
      },
      {
        question: "Can poor acclimation cause hardwood gaps?",
        answer:
          "Yes. NWFA guidance calls for flooring and subfloor moisture content to be within roughly 2–4 percentage points of each other at installation, depending on board width. Wood installed wetter than its environment shrinks into permanent gaps as it dries."
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
