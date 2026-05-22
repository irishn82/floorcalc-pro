import type { ContentBrief, ContentCategory, KeywordTopic, SearchIntent } from "./content-types";
import { suggestInternalLinks, suggestRelatedTools } from "./internal-linking";

const h2ByCategory: Record<ContentCategory, string[]> = {
  measurement: [
    "Start With Room Measurements",
    "How To Add Waste",
    "How To Convert Square Feet To Materials",
    "Common Measuring Mistakes"
  ],
  waste: [
    "Typical Waste Percentages",
    "When To Add More Material",
    "How Layout Affects Waste",
    "What To Confirm Before Ordering"
  ],
  carpet: [
    "How Carpet Layout Works",
    "Roll Width, Direction, And Seams",
    "Pattern Matching Considerations",
    "When To Ask For An Installer Layout"
  ],
  transitions: [
    "Common Transition Types",
    "How To Choose The Right Profile",
    "What To Measure Before Ordering",
    "Manufacturer And Warranty Requirements"
  ],
  vinyl: [
    "When Vinyl Plank Can Work",
    "Subfloor And Flatness Checks",
    "Height, Trim, And Transition Issues",
    "Product Rules To Verify"
  ],
  pets: [
    "What Pet-Friendly Flooring Really Means",
    "Scratch, Water, And Traction Considerations",
    "Material Options To Compare",
    "Maintenance And Warranty Notes"
  ],
  "radiant-heat": [
    "Confirm Product Compatibility",
    "Temperature Limits And System Controls",
    "Material-Specific Considerations",
    "Subfloor, Moisture, And Acclimation"
  ],
  underlayment: [
    "What Underlayment Does",
    "Moisture And Vapor Barrier Basics",
    "Attached Pad Vs Separate Underlayment",
    "Manufacturer Requirements"
  ],
  basement: [
    "Basement Conditions To Check First",
    "Flooring Materials To Compare",
    "Moisture, Flatness, And Comfort",
    "Transitions And Finish Details"
  ],
  bathroom: [
    "Waterproof Claims Vs Real Installation",
    "Bathroom Flooring Materials",
    "Subfloor And Toilet Flange Checks",
    "Cleaning And Maintenance Notes"
  ],
  kitchen: [
    "Kitchen Durability Factors",
    "Water, Dents, And Cleaning",
    "Material Options To Compare",
    "Appliances, Cabinets, And Transitions"
  ],
  comparison: [
    "Quick Comparison",
    "Durability And Maintenance",
    "Cost And Installation Differences",
    "Which Option Fits Which Room"
  ],
  rental: [
    "Rental Flooring Priorities",
    "Durability And Repairability",
    "Cost Over Tenant Turnover",
    "Neutral Design And Replacement Planning"
  ],
  subfloor: [
    "Why Flatness Matters",
    "How To Check The Subfloor",
    "Common Prep Options",
    "Warranty And Installer Requirements"
  ],
  stairs: [
    "What To Measure On Stairs",
    "Treads, Risers, Landings, And Nosing",
    "Waste And Pattern Direction",
    "Installer And Product Requirements"
  ]
};

const intentFaqLead: Record<SearchIntent, string> = {
  informational: "What should homeowners know about",
  calculator: "How should homeowners calculate",
  comparison: "How should homeowners compare options for",
  commercial: "What should homeowners compare before choosing",
  "installation-planning": "What should homeowners verify before planning"
};

function titleCase(value: string) {
  const smallWords = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "in", "of", "on", "or", "to", "vs"]);
  const acronyms = new Set(["lvp"]);

  return value
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (acronyms.has(word)) {
        return word.toUpperCase();
      }

      if (index > 0 && smallWords.has(word)) {
        return word;
      }

      return `${word[0]?.toUpperCase() ?? ""}${word.slice(1)}`;
    })
    .join(" ");
}

function toMetaTitle(topic: KeywordTopic) {
  const base = titleCase(topic.primaryKeyword);
  return base.length > 48 ? `${base.slice(0, 47).trim()} Guide` : `${base} Guide`;
}

function toMetaDescription(topic: KeywordTopic) {
  const text = `Learn about ${titleCase(topic.primaryKeyword)}, including planning steps, common mistakes, related calculators, and what to verify before ordering flooring materials.`;
  return text.length > 155 ? `${text.slice(0, 152).trim()}...` : text;
}

function buildFaqQuestions(topic: KeywordTopic) {
  return [
    `${intentFaqLead[topic.searchIntent]} ${topic.primaryKeyword}?`,
    `How does ${topic.primaryKeyword} affect flooring material planning?`,
    `What mistakes should homeowners avoid with ${topic.primaryKeyword}?`,
    `When should an installer review ${topic.primaryKeyword}?`
  ];
}

function buildDisclaimer(topic: KeywordTopic) {
  if (topic.category === "radiant-heat") {
    return "Radiant heat compatibility is product-specific. Verify temperature limits, installation method, adhesive, underlayment, and heating system requirements before ordering or installing.";
  }

  if (topic.category === "stairs" || topic.category === "transitions") {
    return "Stair and transition details can affect safety, fit, and warranty coverage. Confirm product profiles and installation requirements with the manufacturer and installer.";
  }

  return "This draft is for planning and editorial review only. Flooring quantities, compatibility, and installation requirements should be verified with the manufacturer, retailer, or installer before publication or purchase decisions.";
}

export function buildContentBrief(topic: KeywordTopic): ContentBrief {
  const suggestedH2s = h2ByCategory[topic.category];
  const relatedCalculatorLinks = suggestRelatedTools(topic);
  const internalLinkSuggestions = suggestInternalLinks(topic);

  return {
    title: titleCase(topic.primaryKeyword),
    slug: topic.slug,
    metaTitle: toMetaTitle(topic),
    metaDescription: toMetaDescription(topic),
    targetKeyword: topic.primaryKeyword,
    searchIntent: topic.searchIntent,
    category: topic.category,
    suggestedH2s,
    faqQuestions: buildFaqQuestions(topic),
    relatedCalculatorLinks,
    internalLinkSuggestions,
    disclaimerText: buildDisclaimer(topic),
    notes: topic.notes
  };
}
