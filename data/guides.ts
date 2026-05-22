import type { Guide } from "@/data/types";

export const guides: Guide[] = [
  {
    slug: "how-much-flooring-do-i-need",
    title: "How Much Flooring Do I Need?",
    description:
      "A practical homeowner guide to measuring rooms, adding the right waste factor, and planning a flooring order with fewer surprises.",
    metadataTitle: "How Much Flooring Do I Need? Square Footage and Waste Guide",
    metadataDescription:
      "Learn how to measure flooring square footage, choose waste for LVP, laminate, hardwood, carpet, tile, and estimate materials.",
    dateModified: "2026-05-22",
    readTime: "9 min read",
    relatedTools: [
      "flooring-square-footage-calculator",
      "waste-calculator",
      "stair-flooring-calculator",
      "transition-estimator"
    ],
    sections: [
      {
        id: "quick-answer",
        title: "Quick answer",
        paragraphs: [
          "To estimate how much flooring you need, measure each room's length and width, multiply length by width to get square footage, add all room totals together, then add a waste allowance based on the flooring type and layout.",
          "For many simple plank flooring projects, 5% to 10% waste is a reasonable planning range. Tile, patterned products, stairs, diagonal layouts, and rooms with lots of angles or small cuts often need more."
        ],
        bullets: [
          "Basic formula: length x width = square feet.",
          "Project formula: total measured square feet + waste = estimated material needed.",
          "Ordering formula: estimated material needed divided by product coverage, rounded up to the next full carton, roll, box, or piece."
        ]
      },
      {
        id: "measure-rooms",
        title: "Measure every room and area separately",
        paragraphs: [
          "Start with a room-by-room list. Measure the length and width of every room that will receive flooring, including closets, pantry spaces, hallway turns, alcoves, and small connected areas. It is easier to review a room-by-room estimate than one large number with no backup.",
          "For a rectangular room, multiply length by width. A 12 ft by 15 ft bedroom is 180 square feet. If the room is not a clean rectangle, divide it into smaller rectangles, calculate each part, and add them together.",
          "Use the Flooring Square Footage Calculator when you want to enter multiple rooms and keep the room totals visible. That helps catch missing spaces before you move on to waste and carton counts."
        ],
        bullets: [
          "Measure in feet, or convert inches to decimals before multiplying.",
          "Round up small fractions instead of rounding down.",
          "Measure closets and door recesses instead of assuming they are too small to matter.",
          "Write down room names, dimensions, and square footage so an installer can check the estimate later."
        ]
      },
      {
        id: "irregular-spaces",
        title: "Account for irregular rooms, closets, and hallways",
        paragraphs: [
          "Irregular layouts are where flooring estimates often get too low. Hallways, closets, angled walls, bay windows, islands, fireplaces, stair openings, and connected rooms all create cuts. Cut pieces are not always reusable in another spot, especially with planks, directional products, tile patterns, or carpet roll layouts.",
          "When a room has angled walls, sketch a rough floor plan and break the room into rectangles plus triangles if needed. If you are unsure, measure the largest rectangle that contains the room and treat the extra as a cushion until an installer verifies the layout."
        ],
        bullets: [
          "Long narrow hallways usually create more cuts than one open square room.",
          "Small closets can add meaningful material when there are several of them.",
          "Open floor plans may need fewer transitions but still need careful layout planning.",
          "Diagonal or herringbone layouts should not be estimated like a basic straight-lay floor."
        ]
      },
      {
        id: "waste-factors",
        title: "Choose a waste factor by flooring type",
        paragraphs: [
          "Waste is extra material for cuts, damaged pieces, layout choices, pattern alignment, and future repairs. The right percentage depends on both the product and the shape of the project. The Waste Calculator can help compare 5%, 10%, 15%, and 20% scenarios after you know the base square footage.",
          "Do not treat waste as optional. Ordering exactly the measured square footage can leave you short if the installer needs to discard a damaged piece, keep plank joints staggered, align a pattern, avoid tiny end cuts, or replace a board later."
        ],
        bullets: [
          "LVP and vinyl plank: 5% to 10% for simple straight layouts; 10% to 15% or more for diagonal layouts, stairs, many small rooms, or products with directional visuals.",
          "Laminate: 5% to 10% for straightforward rooms; 10% to 15% for angled layouts, many doorways, or rooms where cutoffs are hard to reuse.",
          "Hardwood and engineered wood: 7% to 10% is a common planning range; consider 10% to 15% for site-finished projects, natural variation, board selection, diagonal layouts, or complex rooms.",
          "Carpet: square footage alone is not enough because roll width, seam placement, pile direction, and pattern match affect material. A room may need more carpet than its measured area suggests.",
          "Tile: 10% is a common starting point for straight layouts; 15% or more may be needed for diagonal layouts, large-format tile cuts, patterns, borders, or fragile materials.",
          "Patterned products: pattern repeat, direction, and matching can increase waste beyond normal percentages. Get the repeat information before ordering."
        ]
      },
      {
        id: "stairs",
        title: "Measure stairs separately",
        paragraphs: [
          "Stairs should be estimated separately from flat rooms because they include treads, risers, nosing, landings, returns, and trim details. The same square footage can produce different material needs depending on how each stair is finished.",
          "For a basic planning estimate, multiply tread depth by stair width, multiply riser height by stair width, add those two areas together, and multiply by the number of stairs. Then add material for landings and any required stair nose pieces. The Stair Flooring Calculator can help with the first-pass square footage."
        ],
        bullets: [
          "Count stairs, landings, and any pie-shaped or curved steps separately.",
          "Confirm whether risers will be flooring, painted material, skirt boards, or another finish.",
          "Check whether the flooring system has approved stair noses or stair treads.",
          "Expect stairs to require installer review before ordering final material."
        ]
      },
      {
        id: "transitions-trim",
        title: "Do not forget transitions and trim",
        paragraphs: [
          "Flooring material is only one part of the order. Doorways, room breaks, sliding doors, stairs, fireplaces, and height changes may need transitions or trim. These pieces can affect both cost and installation planning.",
          "Use the Transition Estimator to total doorway and opening widths, then confirm the correct profile for each location. T-molds, reducers, end caps, thresholds, and stair noses serve different purposes and are not always interchangeable."
        ],
        bullets: [
          "T-molds are commonly used between surfaces of similar height.",
          "Reducers help handle height changes between floors.",
          "End caps finish exposed edges or terminations.",
          "Stair noses are specific stair-edge pieces and should match the approved installation method."
        ]
      },
      {
        id: "cartons-rolls-boxes",
        title: "Convert the estimate into cartons, rolls, boxes, or pieces",
        paragraphs: [
          "After you add waste, convert the estimate into the way the product is sold. Plank flooring is often sold by carton, tile by box, hardwood by bundle, carpet by roll or cut length, and trim by individual piece. Always round up to a full selling unit.",
          "For example, if your project needs 742 square feet after waste and the carton covers 23.8 square feet, divide 742 by 23.8. The result is 31.18 cartons, so you would plan for 32 cartons before final installer review.",
          "Keep the coverage number tied to the exact product you are buying. Similar-looking products can have different carton coverage, plank sizes, roll widths, or trim lengths."
        ]
      },
      {
        id: "before-ordering",
        title: "Review the estimate before ordering",
        paragraphs: [
          "Before placing an order, compare your room list against the actual project scope. Make sure you included closets, landings, transitions, stair pieces, underlayment if required, adhesive if applicable, and any attic stock you want to keep for future repairs.",
          "If an installer will do the work, ask them to verify the measurements, layout direction, waste percentage, transitions, and product requirements before material is purchased. A small measuring error can become expensive if the product sells out or a dye lot, color run, or locking profile changes."
        ],
        bullets: [
          "Confirm product coverage per carton, box, roll, bundle, or trim piece.",
          "Check layout direction before finalizing waste.",
          "Verify transitions and stair parts against the installation instructions.",
          "Keep extra material from the same order when future repairs are likely."
        ]
      },
      {
        id: "common-mistakes",
        title: "Common flooring estimate mistakes",
        paragraphs: [
          "Most bad flooring estimates come from missing small areas, using too little waste, or converting the final number incorrectly. The estimate should be detailed enough that someone else can review it room by room.",
          "Another common mistake is using one waste percentage for every project. A simple square bedroom and a connected main floor with closets, hallways, stairs, and angled cuts should not be treated the same."
        ],
        bullets: [
          "Forgetting closets, pantries, and hallway turns.",
          "Adding waste after rounding cartons instead of before.",
          "Ignoring stair noses, reducers, T-molds, and end caps.",
          "Estimating carpet only by room square footage without considering roll width and seams.",
          "Using a basic plank waste factor for patterned tile, patterned carpet, herringbone, or diagonal layouts."
        ]
      },
      {
        id: "example",
        title: "Example flooring estimate",
        paragraphs: [
          "Imagine a project with a 180 sq ft bedroom, a 42 sq ft closet, a 95 sq ft hallway, and a 210 sq ft living room. The measured total is 527 square feet.",
          "For a straightforward LVP installation with a few doorways and closet cuts, you might compare 10% and 15% waste. At 10%, the estimated material is 579.7 square feet. At 15%, the estimated material is 606.05 square feet.",
          "If the product covers 23.8 square feet per carton, the 10% scenario rounds up to 25 cartons, while the 15% scenario rounds up to 26 cartons. That one-carton difference may be worth discussing with the installer, especially if the layout has extra cuts or you want attic stock."
        ]
      },
      {
        id: "when-to-get-help",
        title: "When to get installer help",
        paragraphs: [
          "A calculator is useful for planning, budgeting, and checking rough material quantities. It should not replace a field measurement for complex installations, expensive materials, stairs, patterned products, moisture-sensitive floors, or layouts where seam placement matters.",
          "Get installer help when the floor plan has many connected rooms, when the product has a pattern repeat, when carpet seams are likely, when stairs are included, or when transitions and subfloor conditions could affect the order."
        ]
      }
    ],
    faq: [
      {
        question: "How do I calculate flooring square footage?",
        answer:
          "Measure each room's length and width in feet, multiply length by width, then add the room totals together. For irregular rooms, break the space into smaller rectangles and add those areas."
      },
      {
        question: "How much extra flooring should I order for waste?",
        answer:
          "Many simple projects use 5% to 10% waste, but tile, hardwood, stairs, patterns, diagonal layouts, and rooms with many cuts may need 10% to 15% or more."
      },
      {
        question: "Should I add waste before or after calculating cartons?",
        answer:
          "Add waste to the measured square footage first. Then divide by the product's carton, box, roll, or bundle coverage and round up to the next full selling unit."
      },
      {
        question: "Does carpet waste work the same way as plank flooring?",
        answer:
          "No. Carpet material depends on roll width, drop layout, seam placement, pile direction, and pattern match. The measured room area is only a starting point."
      },
      {
        question: "How much waste should I use for tile?",
        answer:
          "Ten percent is a common planning starting point for a simple straight tile layout. Diagonal layouts, borders, large-format cuts, patterns, or fragile materials can need 15% or more."
      },
      {
        question: "Do stairs count in square footage?",
        answer:
          "Yes, but stairs should be measured separately because treads, risers, landings, stair noses, and returns can change the final material amount."
      },
      {
        question: "Should I keep extra flooring after installation?",
        answer:
          "Keeping attic stock is often useful for future repairs because color, texture, size, locking profiles, and availability can change over time."
      },
      {
        question: "Can I use a calculator instead of an installer measurement?",
        answer:
          "A calculator is helpful for planning and budgeting, but final ordering should be verified against site conditions, product instructions, installer measurements, and project requirements."
      }
    ],
    disclaimer:
      "This guide and the related calculators provide planning estimates only. Always verify measurements, waste percentage, material quantities, transitions, stair parts, subfloor conditions, and installation requirements with your installer, retailer, and the product manufacturer's written instructions before ordering."
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
