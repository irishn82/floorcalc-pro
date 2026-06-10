import type { Tool } from "@/data/types";

export const tools: Tool[] = [
  {
    slug: "flooring-square-footage-calculator",
    title: "Flooring Square Footage Calculator",
    shortTitle: "Square Footage",
    description:
      "Add multiple rooms, calculate each room's area, and estimate base square footage for hard surface flooring or carpet planning.",
    flooringSystem: "General flooring planning: hard surface and carpet base square footage",
    metadataTitle: "Free Flooring Square Footage Calculator — Multi-Room Estimates",
    metadataDescription:
      "Measure multiple rooms, add closets and hallways, and get total square footage in seconds. Free calculator for LVP, hardwood, laminate, tile, and carpet.",
    calculatorType: "square-footage",
    formula: "Length x width = square feet for each room. Add each room together for the total project square footage.",
    notes: [
      "Measure the longest usable length and width of each room in feet.",
      "Break L-shaped rooms, closets, hallways, and alcoves into separate rectangles for a cleaner estimate.",
      "After calculating square footage, use the waste calculator to account for cuts, layout, defects, and attic stock.",
      "Optional carton conversion is for hard surface products sold by carton or box; verify coverage on the product label."
    ],
    faq: [
      {
        question: "Should I include closets in my flooring square footage?",
        answer:
          "Yes. Include closets, small hallways, pantry areas, and any connected spaces receiving the same flooring."
      },
      {
        question: "Do I round room measurements up or down?",
        answer:
          "For planning material, round up to the nearest practical measurement. A small measurement error can create a shortage."
      },
      {
        question: "Is square footage the same as boxes of flooring?",
        answer:
          "No. Square footage is the area needed. Box count depends on the product coverage per carton and the waste percentage."
      }
    ],
    relatedTools: ["waste-calculator", "pattern-repeat-calculator", "transition-estimator"]
  },
  {
    slug: "waste-calculator",
    title: "Flooring Waste Calculator",
    shortTitle: "Waste",
    description:
      "Estimate extra hard surface flooring material for cuts, layout choices, damage, and future repairs.",
    flooringSystem: "Hard surface material planning: LVP, laminate, hardwood, tile, and similar products",
    metadataTitle: "Flooring Waste Calculator — How Much Extra to Order",
    metadataDescription:
      "Calculate how much extra flooring to buy. Choose 5%, 10%, 15%, or 20% waste and get a total order quantity with optional carton count.",
    calculatorType: "waste",
    formula: "Base square footage x waste percentage = extra square footage. Base square footage + extra = total material needed.",
    notes: [
      "Many simple floating floors use 5% to 10% waste, but angled layouts, small rooms, and patterned products can need more.",
      "Installer instructions or manufacturer ordering guidance may require a minimum extra material allowance.",
      "Keep leftover material for future repairs when possible, especially with dye lots and discontinued products.",
      "Carton coverage varies by product, so verify the square footage per carton before ordering."
    ],
    faq: [
      {
        question: "Is 10% waste enough for flooring?",
        answer:
          "Ten percent is a common planning number for straightforward rooms, but complex layouts, stairs, patterns, and diagonal installs may need 15% or more."
      },
      {
        question: "Should I buy extra flooring for repairs?",
        answer:
          "Usually yes. Extra material can help with future repairs when a product color, texture, or dye lot is no longer available."
      },
      {
        question: "Does waste include damaged subfloor or underlayment?",
        answer:
          "No. This calculator estimates finish flooring material only. Underlayment, trim, adhesives, and subfloor repairs should be estimated separately."
      }
    ],
    relatedTools: ["flooring-square-footage-calculator", "pattern-repeat-calculator", "stair-flooring-calculator"]
  },
  {
    slug: "stair-flooring-calculator",
    title: "Stair Flooring Calculator",
    shortTitle: "Stairs",
    description:
      "Estimate square footage for stair treads and risers using stair count, tread depth, riser height, and stair width.",
    flooringSystem: "Stairs: carpet, runners, hard surface treads, risers, and stair material planning",
    metadataTitle: "Stair Flooring Calculator — Treads, Risers, and Square Footage",
    metadataDescription:
      "Estimate stair flooring material by entering stair count, tread depth, riser height, and stair width. Covers carpet, hard surface treads, and risers.",
    calculatorType: "stairs",
    formula:
      "Number of stairs x (tread depth + riser height) x stair width = square inches. Divide by 144 for square feet.",
    notes: [
      "This estimate covers tread and riser face area only.",
      "Landings, stair noses, returns, stringers, pattern direction, and product-specific stair parts can change the order.",
      "Many stair systems require matching stair noses or caps rather than standard planks on every surface.",
      "Final stair material should be verified with the installer because stair construction and finish method affect the order."
    ],
    faq: [
      {
        question: "Does this include stair landings?",
        answer:
          "No. Measure landings separately as small rooms and add them to the project square footage."
      },
      {
        question: "Can I use regular flooring planks on stairs?",
        answer:
          "Some products allow it with approved stair noses or caps. Always check the manufacturer's stair installation requirements."
      },
      {
        question: "Why are stair estimates different from room estimates?",
        answer:
          "Stairs include separate tread and riser surfaces, extra cuts, and often special trim pieces, so square footage alone is not the full order."
      }
    ],
    relatedTools: ["waste-calculator", "transition-estimator", "flooring-square-footage-calculator"]
  },
  {
    slug: "carpet-seam-planner",
    title: "Carpet Seam Planner",
    shortTitle: "Carpet Seams",
    description:
      "Estimate carpet drops, seam likelihood, and approximate carpet roll area based on room size and carpet roll width.",
    flooringSystem: "Carpet only: broadloom carpet roll layout and seam planning",
    metadataTitle: "Carpet Seam Planner — Estimate Seams for 12 ft or 15 ft Rolls",
    metadataDescription:
      "Enter room dimensions and roll width to estimate carpet drops, seam count, and likely seam placement. Free tool for broadloom carpet planning.",
    calculatorType: "carpet-seam",
    formula:
      "Room width divided by carpet roll width = number of drops, rounded up. Drops minus one estimates seam count.",
    notes: [
      "The calculator assumes carpet drops run along the room length.",
      "Final carpet seam placement depends on roll width, layout, pattern, lighting, traffic direction, pile direction, doorways, and installer judgment.",
      "Patterned carpet, berber, stairs, and connected rooms often require a more detailed seam diagram.",
      "The SVG layout visualizer is for planning only and does not replace an installer seam layout."
    ],
    faq: [
      {
        question: "Can carpet seams be avoided?",
        answer:
          "Sometimes. A room narrower than the roll width may not need a seam, but connected areas and layout direction can still affect the plan."
      },
      {
        question: "Is a 15 ft roll always better than a 12 ft roll?",
        answer:
          "Not always. A wider roll can reduce seams in some rooms, but availability, waste, product cost, and layout direction matter."
      },
      {
        question: "Where should carpet seams go?",
        answer:
          "Seams are usually planned away from focal points and heavy light exposure where practical, but the installer should make the final layout call."
      }
    ],
    relatedTools: ["flooring-square-footage-calculator", "waste-calculator", "pattern-repeat-calculator"]
  },
  {
    slug: "pattern-repeat-calculator",
    title: "Pattern Repeat Calculator",
    shortTitle: "Pattern Repeat",
    description:
      "Estimate extra material for patterned flooring or carpet when repeat size can increase layout waste.",
    flooringSystem: "Patterned carpet and patterned hard surface products",
    metadataTitle: "Pattern Repeat Calculator — Patterned Flooring Waste",
    metadataDescription:
      "Estimate extra material for patterned carpet or hard surface products. Enter repeat size to get an adjusted waste percentage and total order quantity.",
    calculatorType: "pattern-repeat",
    formula:
      "Base waste percentage plus a repeat-size adjustment estimates total waste. Room square footage x adjusted waste = extra material.",
    notes: [
      "Pattern repeats can require extra material so visual alignment continues across seams and room transitions.",
      "Large repeats, diagonal layouts, and products with directional visuals may need more material than this estimate.",
      "Always confirm pattern matching requirements with the product documentation and installer.",
      "For hard surface products, carton conversion can help estimate box count after pattern waste is included."
    ],
    faq: [
      {
        question: "What is pattern repeat in flooring?",
        answer:
          "Pattern repeat is the distance before a visual pattern starts over. It matters when seams, cuts, or adjacent pieces need to line up."
      },
      {
        question: "Does every patterned floor need extra material?",
        answer:
          "Most patterned products should be planned with extra material, especially carpet, sheet vinyl, tile patterns, and directional planks."
      },
      {
        question: "Can this replace a professional pattern layout?",
        answer:
          "No. It is a planning estimate. Patterned products should be reviewed by the installer before ordering."
      }
    ],
    relatedTools: ["waste-calculator", "carpet-seam-planner", "flooring-square-footage-calculator"]
  },
  {
    slug: "transition-estimator",
    title: "Transition Estimator",
    shortTitle: "Transitions",
    description:
      "Estimate total linear feet of transitions for doorways, openings, reducers, end caps, and related trim.",
    flooringSystem: "Hard surface transitions: T-molds, reducers, end caps, thresholds, and stair noses",
    metadataTitle: "Flooring Transition Estimator — T-Molds and Reducers",
    metadataDescription:
      "Estimate linear feet of flooring transitions for doorways and openings. Works for T-molds, reducers, end caps, and thresholds.",
    calculatorType: "transition",
    formula:
      "Number of openings x average opening width = estimated linear feet of transition material.",
    notes: [
      "Different height changes may require different profiles, including T-molds, reducers, end caps, stair noses, or threshold pieces.",
      "Some floating floors require expansion gaps and approved transition placement as part of the product installation requirements.",
      "Measure each opening separately when widths vary significantly."
    ],
    faq: [
      {
        question: "Do I need transitions between rooms?",
        answer:
          "It depends on the flooring type, subfloor, layout size, doorway width, height changes, and manufacturer requirements."
      },
      {
        question: "What transition do I need for different flooring heights?",
        answer:
          "A reducer is often used for height changes, but the correct profile depends on the materials and the product system."
      },
      {
        question: "Are stair noses counted as transitions?",
        answer:
          "They are related trim pieces, but stair noses are usually estimated separately from flat doorway transitions."
      }
    ],
    relatedTools: ["flooring-square-footage-calculator", "stair-flooring-calculator", "waste-calculator"]
  }
];
