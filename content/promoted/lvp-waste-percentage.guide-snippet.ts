import type { Guide } from "../../data/types";

type PromotionGuideSnippet = Omit<Guide, "slug"> & {
  slug: string;
};

// Promotion preview generated from content/drafts/lvp-waste-percentage.md.
// Manual review is still required before adding this to data/guides.ts.
// When publishing, add the final slug to GuideSlug in data/types.ts if it is a new live route.
// Editorial category: waste

export const lvpWastePercentageGuide: PromotionGuideSnippet = {
  slug: "lvp-waste-percentage",
  title: "LVP Waste Percentage",
  description: "Learn about LVP Waste Percentage, including planning steps, common mistakes, related calculators, and what to verify before ordering flooring materials.",
  metadataTitle: "LVP Waste Percentage Guide",
  metadataDescription: "Learn about LVP Waste Percentage, including planning steps, common mistakes, related calculators, and what to verify before ordering flooring materials.",
  dateModified: "2026-05-22",
  readTime: "Review before publishing",
  primaryEcosystem: "lvp",
  secondaryEcosystems: ["planning-measuring-transitions"],
  materialTypes: ["lvp"],
  topicCluster: "waste",
  relatedTools: [
  "waste-calculator",
  "flooring-square-footage-calculator"
],
  sections: [
  {
    "id": "typical-waste-percentages",
    "title": "Typical Waste Percentages",
    "paragraphs": [
      "A 10% waste allowance is a common planning number for many straight-lay luxury vinyl plank projects, but it is not a universal rule. Simple rectangular rooms may need less extra material, while small rooms, closets, angled cuts, and connected hallways can use more than expected.",
      "For early budgeting, start with measured square footage and then compare 5%, 10%, and 15% waste scenarios. Before ordering, confirm the final allowance with the installer and the specific product instructions."
    ]
  },
  {
    "id": "when-to-add-more-material",
    "title": "When To Add More Material",
    "paragraphs": [
      "Add more material when the layout has diagonal runs, many doorways, closets, stair landings, or areas where cut pieces cannot be reused cleanly. Extra material may also be useful when the product has a strong visual pattern or when the installer needs to avoid repeating similar planks too close together.",
      "Homeowners should also consider attic stock for future repairs. Matching a discontinued color, wear layer, or locking profile later can be difficult, so leftover full planks from the original order can be valuable."
    ]
  },
  {
    "id": "how-layout-affects-waste",
    "title": "How Layout Affects Waste",
    "paragraphs": [
      "Waste is affected by where rows start and end, how plank lengths stagger, and whether cutoffs can be used in the next row. Long open rooms often allow more efficient reuse than chopped-up floor plans with short walls and several transitions.",
      "Direction changes, picture-frame borders, herringbone layouts, and stairs should be estimated separately from a basic straight-lay room. Those details can create more cuts and often need installer-specific planning."
    ]
  },
  {
    "id": "what-to-confirm-before-ordering",
    "title": "What To Confirm Before Ordering",
    "paragraphs": [
      "Before buying, confirm the measured square footage, carton coverage, waste allowance, transition locations, stair parts, and any underlayment or adhesive requirements. Product coverage per box can vary, so the final carton count should be based on the exact SKU being ordered.",
      "Manufacturer instructions and installer judgment should control the final order quantity. This is especially important for warranty-sensitive requirements such as expansion gaps, flatness tolerances, approved trims, and installation method."
    ]
  }
],
  faq: [
  {
    "question": "What should homeowners verify before planning lvp waste percentage?",
    "answer": "Verify the measured square footage, installation layout, carton coverage, product instructions, and whether the installer recommends extra attic stock for future repairs."
  },
  {
    "question": "How does lvp waste percentage affect flooring material planning?",
    "answer": "The waste percentage increases the material order above the measured floor area so there is enough flooring for cuts, damaged pieces, layout choices, and reasonable leftover material."
  },
  {
    "question": "What mistakes should homeowners avoid with lvp waste percentage?",
    "answer": "Avoid ordering only the measured square footage, ignoring closets and hallways, forgetting stair or landing areas, and assuming every LVP product has the same box coverage."
  },
  {
    "question": "When should an installer review lvp waste percentage?",
    "answer": "An installer should review the waste allowance before ordering when the layout has angled walls, stairs, many small rooms, direction changes, patterns, or warranty-sensitive installation details."
  }
],
  disclaimer: "This draft is for planning and editorial review only. Flooring quantities, compatibility, and installation requirements should be verified with the manufacturer, retailer, or installer before publication or purchase decisions."
};
