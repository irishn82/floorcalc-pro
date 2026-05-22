import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import type { Guide, Tool } from "@/data/types";

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedTools(slugs: string[]) {
  return slugs.map(getToolBySlug).filter((tool): tool is Tool => Boolean(tool));
}

export function getRelatedGuides(slugs: string[]) {
  return slugs.map(getGuideBySlug).filter((guide): guide is Guide => Boolean(guide));
}
