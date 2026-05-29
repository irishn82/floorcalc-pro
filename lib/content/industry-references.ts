import type { IndustryReference } from "@/components/IndustryReferences";
import type { Guide, Tool } from "@/data/types";

const references = {
  nwfaTechnicalGuidelines: {
    title: "NWFA Technical Guidelines",
    organization: "National Wood Flooring Association",
    href: "https://nwfa.org/technical-guidelines/",
    description:
      "Industry guidance for wood flooring installation, moisture, acclimation, concrete conditions, and jobsite evaluation."
  },
  criInstallationStandards: {
    title: "CRI 104/105 Installation Standards",
    organization: "The Carpet and Rug Institute",
    href: "https://carpet-rug.org/resources/installation-standards/",
    description:
      "Residential and commercial carpet installation standards covering carpet layout, seams, stretching, cushion, and installer practices."
  },
  tcnaHandbook: {
    title: "TCNA Handbook for Ceramic, Glass, and Stone Tile Installation",
    organization: "Tile Council of North America",
    href: "https://tcnatile.com/publication-type/tcna-handbook/",
    description:
      "Tile installation methods and references for substrate preparation, wet areas, movement accommodation, grout joints, and workmanship."
  },
  rfciTechnicalInformation: {
    title: "Resilient Flooring Technical Information",
    organization: "Resilient Floor Covering Institute",
    href: "https://rfci.com/technical-information/",
    description:
      "Technical resources for resilient flooring, including installation topics and the importance of following manufacturer instructions."
  },
  astmF710: {
    title: "ASTM F710 Concrete Floor Preparation for Resilient Flooring",
    organization: "ASTM International",
    href: "https://store.astm.org/f0710-22.html",
    description:
      "Standard practice for evaluating and preparing concrete floors to receive resilient flooring, including moisture, pH, cleanliness, smoothness, and bond-related concerns."
  },
  nalfaFaqs: {
    title: "Laminate Flooring FAQs",
    organization: "North American Laminate Flooring Association",
    href: "https://nalfa.com/laminate-flooring-faqs/",
    description:
      "Consumer-focused laminate flooring guidance for subfloors, underlayment, moisture-sensitive rooms, and manufacturer requirements."
  }
} satisfies Record<string, IndustryReference>;

function uniqueReferences(items: IndustryReference[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    if (seen.has(item.href)) {
      return false;
    }

    seen.add(item.href);
    return true;
  });
}

export function getGuideIndustryReferences(guide: Guide) {
  const refs: IndustryReference[] = [];
  const materials = guide.materialTypes ?? [];
  const textKey = `${guide.slug} ${guide.title} ${guide.description}`.toLowerCase();
  const needsConcretePrepReference =
    textKey.includes("concrete") ||
    textKey.includes("slab") ||
    textKey.includes("subfloor") ||
    textKey.includes("moisture") ||
    textKey.includes("flat");
  const hasResilientMaterial = materials.some((material) => ["lvp", "lvt", "sheet-vinyl"].includes(material));

  if (materials.includes("hardwood") || materials.includes("engineered-hardwood")) {
    refs.push(references.nwfaTechnicalGuidelines);
  }

  if (needsConcretePrepReference && hasResilientMaterial) {
    refs.push(references.astmF710);
  }

  if (materials.includes("carpet") || materials.includes("carpet-padding")) {
    refs.push(references.criInstallationStandards);
  }

  if (materials.some((material) => ["ceramic-tile", "porcelain-tile", "stone-tile"].includes(material))) {
    refs.push(references.tcnaHandbook);
  }

  if (hasResilientMaterial) {
    refs.push(references.rfciTechnicalInformation);
  }

  if (materials.includes("laminate")) {
    refs.push(references.nalfaFaqs);
  }

  if (needsConcretePrepReference) {
    if (materials.includes("laminate")) {
      refs.push(references.nalfaFaqs);
    }
  }

  return uniqueReferences(refs).slice(0, 4);
}

export function getToolIndustryReferences(tool: Tool) {
  switch (tool.slug) {
    case "carpet-seam-planner":
    case "pattern-repeat-calculator":
      return [references.criInstallationStandards];
    case "transition-estimator":
      return [references.rfciTechnicalInformation, references.tcnaHandbook];
    case "stair-flooring-calculator":
      return [references.nwfaTechnicalGuidelines, references.criInstallationStandards];
    case "waste-calculator":
      return [references.rfciTechnicalInformation, references.tcnaHandbook];
    case "flooring-square-footage-calculator":
      return [];
  }
}
