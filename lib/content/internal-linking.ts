import { guides } from "../../data/guides";
import { tools } from "../../data/tools";
import type { ContentCategory, InternalLinkSuggestion, KeywordTopic } from "./content-types";

const categoryGuideMap: Record<ContentCategory, string[]> = {
  measurement: ["how-much-flooring-do-i-need"],
  waste: ["lvp-waste-percentage-guide", "how-much-flooring-do-i-need"],
  carpet: ["carpet-seam-direction-guide"],
  transitions: ["flooring-transition-guide"],
  vinyl: ["luxury-vinyl-over-tile", "lvp-waste-percentage-guide"],
  pets: ["best-flooring-for-dogs"],
  "radiant-heat": ["flooring-over-radiant-heat"],
  underlayment: ["luxury-vinyl-over-tile"],
  basement: ["luxury-vinyl-over-tile", "flooring-transition-guide"],
  bathroom: ["luxury-vinyl-over-tile"],
  kitchen: ["best-flooring-for-dogs", "flooring-transition-guide"],
  comparison: ["best-flooring-for-dogs", "how-much-flooring-do-i-need"],
  rental: ["best-flooring-for-dogs", "lvp-waste-percentage-guide"],
  subfloor: ["luxury-vinyl-over-tile"],
  stairs: ["flooring-transition-guide", "how-much-flooring-do-i-need"]
};

const fallbackToolByCategory: Record<ContentCategory, string[]> = {
  measurement: ["flooring-square-footage-calculator"],
  waste: ["waste-calculator"],
  carpet: ["carpet-seam-planner", "pattern-repeat-calculator"],
  transitions: ["transition-estimator"],
  vinyl: ["flooring-square-footage-calculator", "waste-calculator"],
  pets: ["flooring-square-footage-calculator", "waste-calculator"],
  "radiant-heat": ["flooring-square-footage-calculator"],
  underlayment: ["flooring-square-footage-calculator"],
  basement: ["flooring-square-footage-calculator", "transition-estimator"],
  bathroom: ["flooring-square-footage-calculator", "waste-calculator"],
  kitchen: ["flooring-square-footage-calculator", "transition-estimator"],
  comparison: ["flooring-square-footage-calculator", "waste-calculator"],
  rental: ["flooring-square-footage-calculator", "waste-calculator"],
  subfloor: ["flooring-square-footage-calculator"],
  stairs: ["stair-flooring-calculator", "transition-estimator"]
};

function unique<T>(items: T[]) {
  return [...new Set(items)];
}

export function suggestRelatedTools(topic: KeywordTopic): InternalLinkSuggestion[] {
  const slugs = unique([...topic.relatedTools, ...fallbackToolByCategory[topic.category]]);

  return slugs
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool))
    .map((tool) => ({
      type: "tool" as const,
      label: tool.title,
      href: `/tools/${tool.slug}`,
      reason: `Useful calculator for readers researching ${topic.primaryKeyword}.`
    }));
}

export function suggestRelatedGuides(topic: KeywordTopic): InternalLinkSuggestion[] {
  const guideSlugs = categoryGuideMap[topic.category] ?? [];

  return guideSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide))
    .filter((guide) => guide.slug !== topic.slug)
    .map((guide) => ({
      type: "guide" as const,
      label: guide.title,
      href: `/guides/${guide.slug}`,
      reason: `Related guide in the ${topic.category} planning cluster.`
    }));
}

export function suggestInternalLinks(topic: KeywordTopic): InternalLinkSuggestion[] {
  return [...suggestRelatedTools(topic), ...suggestRelatedGuides(topic)];
}
