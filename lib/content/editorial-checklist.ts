export type EditorialChecklistItem = {
  id: string;
  label: string;
  description: string;
  required: boolean;
};

export const editorialChecklist: EditorialChecklistItem[] = [
  {
    id: "calculator-internal-link",
    label: "Calculator or internal link included",
    description: "The guide points readers to a relevant calculator or existing guide for the next planning step.",
    required: true
  },
  {
    id: "practical-flooring-advice",
    label: "Practical flooring advice included",
    description: "The article includes useful jobsite, measurement, installation, or material-planning guidance.",
    required: true
  },
  {
    id: "disclaimer-included",
    label: "Disclaimer included",
    description: "The article reminds readers to verify quantities, compatibility, and requirements before ordering.",
    required: true
  },
  {
    id: "unsupported-claims",
    label: "No unsupported claims",
    description: "Claims are cautious, verifiable, and do not overpromise performance, safety, savings, or outcomes.",
    required: true
  },
  {
    id: "fake-product-claims",
    label: "No fake product or manufacturer claims",
    description: "The article does not invent product specs, warranties, manufacturer rules, ratings, or endorsements.",
    required: true
  },
  {
    id: "faq-included",
    label: "FAQ included",
    description: "The guide includes FAQ questions and reviewed answers that match the search intent.",
    required: true
  },
  {
    id: "title-meta-reviewed",
    label: "Title and meta description reviewed",
    description: "The title, meta title, and meta description are human-reviewed and match the actual article.",
    required: true
  },
  {
    id: "mobile-readability",
    label: "Mobile readability reviewed",
    description: "Paragraphs, lists, headings, and tables are readable on mobile screens.",
    required: true
  },
  {
    id: "live-route-checked",
    label: "Live route checked after promotion",
    description: "After manually adding the guide to live data, the route renders correctly and internal links work.",
    required: true
  }
];

export function renderEditorialChecklistMarkdown() {
  return editorialChecklist
    .map((item) => `- [ ] ${item.label} - ${item.description}${item.required ? " Required." : ""}`)
    .join("\n");
}
