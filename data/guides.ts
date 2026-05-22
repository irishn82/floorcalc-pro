import type { Guide } from "@/data/types";

export const guides: Guide[] = [
  {
    slug: "how-much-flooring-do-i-need",
    title: "How Much Flooring Do I Need?",
    description:
      "A practical guide to measuring rooms, adding waste, and planning a flooring order with fewer surprises.",
    metadataTitle: "How Much Flooring Do I Need? Room Measuring Guide",
    metadataDescription:
      "Learn how to measure rooms for flooring, calculate square footage, add waste, and plan a more accurate flooring order.",
    dateModified: "2026-05-22",
    readTime: "5 min read",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    sections: [
      {
        id: "measure-each-space",
        title: "Measure each space separately",
        paragraphs: [
          "Start by measuring the length and width of every room that will receive flooring. For simple rectangular rooms, multiply length by width to get square footage.",
          "For irregular rooms, divide the area into smaller rectangles. Measure closets, pantry spaces, hallway turns, and alcoves as their own small areas so they do not disappear from the estimate."
        ],
        bullets: [
          "Use feet for room dimensions when calculating square footage.",
          "Round up small measurements rather than rounding down.",
          "Write down each room name so the estimate can be checked later."
        ]
      },
      {
        id: "add-waste",
        title: "Add a waste allowance",
        paragraphs: [
          "The measured square footage is only the starting point. Flooring orders usually need extra material for cuts, damaged boards, layout decisions, and attic stock for future repairs.",
          "A common starting point is 5% to 10% waste for simple layouts. Stairs, diagonal installs, patterned products, and chopped-up rooms can require more."
        ]
      },
      {
        id: "convert-to-cartons",
        title: "Convert square footage into cartons",
        paragraphs: [
          "Flooring is usually sold by carton, roll, piece, or bundle. Once you know the total square footage with waste, divide it by the coverage listed on the product carton and round up to a whole carton.",
          "Keep the product coverage number tied to the exact SKU you are ordering. Similar products can have different carton coverage."
        ]
      },
      {
        id: "check-the-system",
        title: "Check trim, transitions, and installation requirements",
        paragraphs: [
          "Material planning should include more than the floor surface. Doorways may need transitions, stairs may need approved stair noses, and floating floors may require expansion gaps.",
          "Read the product installation instructions before buying. Manufacturer requirements can affect waste, trim, underlayment, adhesives, and acceptable subfloors."
        ]
      }
    ],
    faq: [
      {
        question: "How do I calculate flooring square footage?",
        answer:
          "Multiply each room's length by width, add the room totals together, then add a waste percentage before converting to cartons."
      },
      {
        question: "Should I include waste before or after carton count?",
        answer:
          "Add waste to the measured square footage first, then divide by the carton coverage and round up to a whole carton."
      },
      {
        question: "Can I order the exact measured square footage?",
        answer:
          "Ordering exact measured square footage is risky because cuts, defects, and layout choices usually require extra material."
      }
    ],
    disclaimer:
      "This guide is for planning purposes only. Confirm measurements, waste, trim, and product requirements with your installer or manufacturer before ordering."
  },
  {
    slug: "lvp-waste-percentage-guide",
    title: "LVP Waste Percentage Guide",
    description:
      "How to choose a practical waste percentage for luxury vinyl plank projects based on layout, cuts, and installation pattern.",
    metadataTitle: "LVP Waste Percentage Guide",
    metadataDescription:
      "Learn when to use 5%, 10%, 15%, or 20% waste for luxury vinyl plank flooring projects.",
    dateModified: "2026-05-22",
    readTime: "4 min read",
    relatedTools: ["waste-calculator", "flooring-square-footage-calculator", "pattern-repeat-calculator"],
    sections: [
      {
        id: "common-ranges",
        title: "Common LVP waste ranges",
        paragraphs: [
          "Luxury vinyl plank projects often start with 5% to 10% waste for straightforward rooms. That range covers normal cuts and a modest amount of damaged or unusable material.",
          "More complex spaces can need 15% or more, especially when rooms are small, angled, connected through many doorways, or installed on a diagonal."
        ],
        bullets: [
          "5% can work for very simple rectangular rooms with efficient layout.",
          "10% is a common planning number for many residential LVP projects.",
          "15% to 20% may be appropriate for diagonal layouts, stairs, patterns, or many small rooms."
        ]
      },
      {
        id: "layout-factors",
        title: "Layout factors that increase waste",
        paragraphs: [
          "Waste increases when plank cuts cannot be reused efficiently. Narrow hallways, closets, closets off hallways, angled walls, and multiple small rooms all create more cut pieces.",
          "Some installers also avoid using very short cutoffs in visible rows. That can improve appearance but increase material usage."
        ]
      },
      {
        id: "pattern-direction",
        title: "Pattern and direction matter",
        paragraphs: [
          "Many LVP products have directional visuals, embossed texture, or repeated plank patterns. A careful installer may sort planks and vary board placement to avoid obvious repeats.",
          "Herringbone, chevron, diagonal, and picture-frame layouts should not be estimated like a simple straight-lay plank floor."
        ]
      },
      {
        id: "attic-stock",
        title: "Plan for attic stock",
        paragraphs: [
          "Keeping extra material is useful for future repairs. Floors get scratched, appliances leak, and individual planks may need replacement years later.",
          "Because colors and locking profiles can change, leftover material from the same order may be more valuable than buying a similar product later."
        ]
      }
    ],
    faq: [
      {
        question: "Is 10% waste enough for LVP?",
        answer:
          "Ten percent is often a reasonable starting point for straightforward LVP layouts, but it may be too low for diagonal installs, stairs, patterns, or many small rooms."
      },
      {
        question: "Does LVP need more waste than laminate?",
        answer:
          "The waste can be similar, but the actual amount depends more on room layout, plank size, cut reuse, and installation pattern than the product category alone."
      },
      {
        question: "Should attic stock be included in waste?",
        answer:
          "It can be. Some homeowners add waste for installation and then keep any remaining full planks for future repairs."
      }
    ],
    disclaimer:
      "Use this as a planning guide, not a product requirement. Always follow the LVP manufacturer's instructions and installer recommendations."
  },
  {
    slug: "carpet-seam-direction-guide",
    title: "Carpet Seam Direction Guide",
    description:
      "Understand how carpet roll width, room shape, pile direction, and lighting affect seam planning.",
    metadataTitle: "Carpet Seam Direction Guide",
    metadataDescription:
      "Learn how carpet seam direction is planned and why final seam placement depends on roll width, pattern, light, and installer judgment.",
    dateModified: "2026-05-22",
    readTime: "5 min read",
    relatedTools: ["carpet-seam-planner", "flooring-square-footage-calculator", "waste-calculator"],
    sections: [
      {
        id: "roll-width",
        title: "Start with carpet roll width",
        paragraphs: [
          "Most broadloom carpet is sold in common roll widths such as 12 feet or 15 feet. If a room is wider than the roll, more than one drop may be required and a seam becomes likely.",
          "A wider roll can reduce seams in some rooms, but it can also create more waste depending on the connected layout."
        ]
      },
      {
        id: "pile-direction",
        title: "Keep pile direction consistent",
        paragraphs: [
          "Carpet has a pile direction, and pieces generally need to run the same way so color and texture look consistent. Turning a drop to save material can create a visible shade difference.",
          "This is one reason a seam plan is not just a square footage calculation."
        ]
      },
      {
        id: "lighting-and-traffic",
        title: "Consider lighting and traffic paths",
        paragraphs: [
          "Seams can be more noticeable under strong natural light or across the main sightline of a room. Installers often try to avoid placing seams in the most visible or heavily used areas when the layout allows.",
          "Doorways, halls, stairs, and connected rooms can limit those options."
        ]
      },
      {
        id: "patterned-carpet",
        title: "Patterned carpet needs extra planning",
        paragraphs: [
          "Patterned carpet often requires pattern matching at seams. That can increase material needs and make a simple roll-width estimate too optimistic.",
          "Ask the carpet retailer or installer for a seam diagram when a pattern, stripe, berber, or large connected area is involved."
        ]
      }
    ],
    faq: [
      {
        question: "Should carpet seams run with the length of the room?",
        answer:
          "Often they do, but the final direction depends on roll width, room shape, pile direction, pattern, and connected areas."
      },
      {
        question: "Are carpet seams always visible?",
        answer:
          "A well-planned and well-installed seam can be subtle, but no seam can be guaranteed invisible in every light and carpet style."
      },
      {
        question: "Can a 15 ft carpet roll eliminate seams?",
        answer:
          "It can in some rooms, but connected spaces, pattern matching, and layout direction can still create seams or extra waste."
      }
    ],
    disclaimer:
      "Carpet seam planning should be finalized by a qualified installer who can inspect the room layout and product."
  },
  {
    slug: "flooring-transition-guide",
    title: "Flooring Transition Guide",
    description:
      "A clear overview of common flooring transitions, when they are used, and what to measure before ordering.",
    metadataTitle: "Flooring Transition Guide: T-Molds, Reducers, End Caps",
    metadataDescription:
      "Learn the difference between T-molds, reducers, end caps, thresholds, and stair noses for flooring projects.",
    dateModified: "2026-05-22",
    readTime: "5 min read",
    relatedTools: ["transition-estimator", "flooring-square-footage-calculator", "stair-flooring-calculator"],
    sections: [
      {
        id: "why-transitions-matter",
        title: "Why transitions matter",
        paragraphs: [
          "Transitions cover gaps, finish edges, handle height changes, and help separate flooring areas where required. They also affect how finished and durable a project feels.",
          "For floating floors, transitions can be part of the installation system because the floor needs space to expand and contract."
        ]
      },
      {
        id: "common-types",
        title: "Common transition types",
        paragraphs: [
          "A T-mold is commonly used between floors of similar height. A reducer is used when one floor is higher than the other. An end cap can finish an edge at carpet, a sliding door, or another termination point.",
          "Stair noses are separate stair trim pieces and should be checked carefully against the flooring product."
        ],
        bullets: [
          "T-mold: similar-height floors.",
          "Reducer: height change between surfaces.",
          "End cap: finished edge or termination.",
          "Stair nose: stair edge or landing edge."
        ]
      },
      {
        id: "what-to-measure",
        title: "What to measure",
        paragraphs: [
          "Count each doorway, opening, stair edge, and termination point. Measure the width of each opening in feet or inches, then convert to the purchasing unit used by the trim supplier.",
          "When openings vary, measure each one separately instead of relying on an average."
        ]
      },
      {
        id: "warranty-requirements",
        title: "Check warranty requirements",
        paragraphs: [
          "Some products require transitions at certain room lengths, doorway widths, or changes in direction. Skipping required transitions can create movement issues or warranty problems.",
          "Read the installation guide before committing to a continuous floor layout."
        ]
      }
    ],
    faq: [
      {
        question: "What is a flooring transition strip?",
        answer:
          "It is a trim piece used to bridge, cover, reduce, or finish the edge between flooring surfaces or openings."
      },
      {
        question: "Do floating floors need transitions?",
        answer:
          "Many floating floors need transitions in certain locations or room sizes. Requirements vary by manufacturer and product."
      },
      {
        question: "How do I estimate transition length?",
        answer:
          "Measure each opening width and add the widths together. Round up based on the length of available transition pieces."
      }
    ],
    disclaimer:
      "Transition profiles and placement should follow the product installation guide and site conditions."
  },
  {
    slug: "best-flooring-for-dogs",
    title: "Best Flooring for Dogs",
    description:
      "Practical flooring considerations for homes with dogs, including traction, scratch resistance, water resistance, comfort, and maintenance.",
    metadataTitle: "Best Flooring for Dogs: Practical Homeowner Guide",
    metadataDescription:
      "Compare flooring options for homes with dogs, including LVP, tile, laminate, carpet, and engineered wood considerations.",
    dateModified: "2026-05-22",
    readTime: "6 min read",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    sections: [
      {
        id: "what-matters",
        title: "What matters most for dogs",
        paragraphs: [
          "Dog-friendly flooring is not just about scratch resistance. Traction, water resistance, comfort, cleanability, and noise all matter in day-to-day use.",
          "Large dogs, older dogs, puppies, and active households can have very different flooring priorities."
        ],
        bullets: [
          "Traction helps dogs move confidently.",
          "Water resistance helps with spills, bowls, accidents, and wet paws.",
          "Surface texture can hide minor scratches better than glossy finishes.",
          "Comfort matters in rooms where dogs spend a lot of time."
        ]
      },
      {
        id: "lvp-and-laminate",
        title: "LVP and laminate",
        paragraphs: [
          "Luxury vinyl plank is a popular dog-friendly choice because many products are water resistant, easy to clean, and available with textured finishes.",
          "Laminate can be durable against surface wear, but water resistance varies widely. Check the product rating, edge sealing requirements, and cleaning instructions."
        ]
      },
      {
        id: "tile-and-wood",
        title: "Tile, engineered wood, and hardwood",
        paragraphs: [
          "Tile is hard, water resistant, and easy to clean, but it can be slick and uncomfortable for some dogs. Rugs and runners may help with traction.",
          "Engineered wood and hardwood can be beautiful but are more vulnerable to scratches, dents, and moisture. Matte, textured, or wire-brushed finishes can help hide wear."
        ]
      },
      {
        id: "carpet",
        title: "Carpet considerations",
        paragraphs: [
          "Carpet adds comfort and traction but can hold odor, stains, and pet hair. If carpet is the right fit, look for products with pet-focused stain warranties and compatible pads.",
          "Carpet tiles can be worth considering in utility spaces because individual tiles may be replaced."
        ]
      }
    ],
    faq: [
      {
        question: "Is LVP good for dogs?",
        answer:
          "Many LVP products work well for dogs because they are easy to clean and often water resistant, but traction and scratch performance vary by product."
      },
      {
        question: "What floor is best for older dogs?",
        answer:
          "Older dogs often need better traction and comfort. Textured surfaces, rugs, runners, and softer areas can matter as much as the flooring material."
      },
      {
        question: "Will dogs scratch hardwood floors?",
        answer:
          "Dogs can scratch hardwood, especially with long nails or active play. Finish type, wood hardness, color, and surface texture affect how visible scratches become."
      }
    ],
    disclaimer:
      "Flooring performance depends on the exact product, installation, maintenance, and household conditions. Review product warranties for pet-related exclusions."
  },
  {
    slug: "luxury-vinyl-over-tile",
    title: "Can You Install Luxury Vinyl Over Tile?",
    description:
      "What to check before installing luxury vinyl plank or tile over existing ceramic or porcelain tile.",
    metadataTitle: "Can You Install Luxury Vinyl Over Tile?",
    metadataDescription:
      "Learn when luxury vinyl can go over tile, what subfloor conditions matter, and why grout lines, height, and manufacturer rules are important.",
    dateModified: "2026-05-22",
    readTime: "5 min read",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    sections: [
      {
        id: "possible-but-not-automatic",
        title: "It may be possible, but it is not automatic",
        paragraphs: [
          "Luxury vinyl can sometimes be installed over existing tile if the tile is clean, flat, stable, and compatible with the flooring manufacturer's instructions.",
          "Loose tile, cracked areas, hollow spots, moisture issues, or excessive height changes can make tile a poor base for new flooring."
        ]
      },
      {
        id: "flatness-and-grout",
        title: "Flatness and grout lines",
        paragraphs: [
          "Grout lines can telegraph through some vinyl products, especially thinner glue-down materials. Floating planks may tolerate more variation, but they still have flatness limits.",
          "Large or deep grout joints may need patching or skim coating before installation."
        ]
      },
      {
        id: "height-and-transitions",
        title: "Height and transitions",
        paragraphs: [
          "Installing over tile raises the finished floor height. That can affect doors, appliances, baseboards, cabinets, toilet flanges, stair edges, and transitions to nearby rooms.",
          "Plan transitions before installation so doorways and height changes are handled cleanly."
        ]
      },
      {
        id: "manufacturer-rules",
        title: "Manufacturer rules come first",
        paragraphs: [
          "Some products allow installation over tile only when specific conditions are met. Others may require underlayment, patching, or removal of the existing surface.",
          "Read the exact installation guide for the product you plan to buy. A general article cannot override warranty requirements."
        ]
      }
    ],
    faq: [
      {
        question: "Do grout lines need to be filled before installing vinyl over tile?",
        answer:
          "Often yes, especially for deep grout joints or thinner vinyl products. Follow the vinyl manufacturer's flatness and substrate requirements."
      },
      {
        question: "Can floating LVP go over ceramic tile?",
        answer:
          "Some floating LVP products can go over stable ceramic tile if the surface meets flatness, moisture, and substrate requirements."
      },
      {
        question: "Will vinyl over tile make the floor too high?",
        answer:
          "It can. Check doors, appliances, cabinets, stair edges, and transitions before choosing to install over tile."
      }
    ],
    disclaimer:
      "Confirm substrate approval, flatness tolerance, and installation method with the flooring manufacturer and installer."
  },
  {
    slug: "flooring-over-radiant-heat",
    title: "Flooring Over Radiant Heat",
    description:
      "A practical overview of flooring materials, temperature limits, and installation checks for radiant heat systems.",
    metadataTitle: "Flooring Over Radiant Heat: What to Check First",
    metadataDescription:
      "Learn what to check before installing flooring over radiant heat, including product approval, temperature limits, subfloor conditions, and acclimation.",
    dateModified: "2026-05-22",
    readTime: "5 min read",
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"],
    sections: [
      {
        id: "product-approval",
        title: "Start with product approval",
        paragraphs: [
          "Not every flooring product is approved for radiant heat. Approval can vary by material, construction, installation method, adhesive, underlayment, and maximum surface temperature.",
          "Before buying, look for written installation instructions that specifically address radiant heat."
        ]
      },
      {
        id: "temperature-limits",
        title: "Respect temperature limits",
        paragraphs: [
          "Many flooring products have maximum surface temperature limits. Exceeding them can damage the floor, affect adhesives, or void warranties.",
          "Radiant systems should usually be brought up to temperature gradually according to both the heating system and flooring instructions."
        ]
      },
      {
        id: "material-considerations",
        title: "Material considerations",
        paragraphs: [
          "Tile is often compatible with radiant heat because it transfers heat well. Engineered wood, laminate, LVP, and carpet can be compatible only when the product system allows it.",
          "Carpet and pad can reduce heat transfer, so total insulating value may matter."
        ]
      },
      {
        id: "subfloor-and-moisture",
        title: "Subfloor and moisture checks",
        paragraphs: [
          "Radiant heat does not remove the need for proper subfloor preparation. Flatness, moisture, curing time, and system testing still matter.",
          "For concrete slabs, moisture testing and full cure time can be especially important before installation."
        ]
      }
    ],
    faq: [
      {
        question: "Can LVP be installed over radiant heat?",
        answer:
          "Some LVP products can be installed over radiant heat, but only within the manufacturer's approved temperature limits and installation method."
      },
      {
        question: "Is tile good over radiant heat?",
        answer:
          "Tile is commonly used over radiant heat because it transfers heat well, but the installation materials and system design still need to be compatible."
      },
      {
        question: "Can carpet go over radiant heat?",
        answer:
          "Some carpet systems can, but carpet and pad can reduce heat transfer. Check the heating system and flooring requirements."
      }
    ],
    disclaimer:
      "Radiant heat compatibility is product-specific. Follow the written flooring, adhesive, underlayment, and heating system instructions."
  }
];
