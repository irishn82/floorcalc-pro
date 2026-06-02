import { problemBrowseSections, relatedProblemGuideSlugs } from "@/data/problem-navigation";
import type { GuideSlug } from "@/data/types";
import { getRelatedGuides, getRelatedTools } from "@/lib/content/paths";

export function getRelatedProblemLinksForGuide(slug: GuideSlug) {
  return getRelatedGuides(relatedProblemGuideSlugs[slug] ?? []).map((guide) => ({
    href: `/guides/${guide.slug}`,
    label: guide.title,
    description: guide.description
  }));
}

export function getResolvedProblemBrowseSections() {
  return problemBrowseSections.map((section) => ({
    ...section,
    guides: getRelatedGuides(section.guideSlugs),
    tools: getRelatedTools(section.toolSlugs)
  }));
}
