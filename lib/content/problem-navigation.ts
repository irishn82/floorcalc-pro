import { problemBrowseSections, relatedProblemGuideSlugs } from "@/data/problem-navigation";
import { troubleshootingGuideSlugs } from "@/data/navigation";
import type { GuideSlug } from "@/data/types";
import { getGuideBySlug, getRelatedGuides, getRelatedTools } from "@/lib/content/paths";

const generalProblemHubSlugs: GuideSlug[] = [
  "flooring-problem-comparison-guide",
  "flooring-movement-problems",
  "flooring-separation-problems",
  "flooring-moisture-problems",
  "concrete-floor-problems"
];

function uniqueGuideSlugs(slugs: GuideSlug[], currentSlug: GuideSlug) {
  const seen = new Set<GuideSlug>();

  return slugs.filter((candidateSlug) => {
    if (candidateSlug === currentSlug || seen.has(candidateSlug)) {
      return false;
    }

    seen.add(candidateSlug);
    return true;
  });
}

export function getRelatedProblemGuidesForGuide(slug: GuideSlug, limit = 6) {
  const explicitSlugs = relatedProblemGuideSlugs[slug] ?? [];
  const matchingSectionSlugs = problemBrowseSections
    .filter((section) => section.guideSlugs.includes(slug))
    .flatMap((section) => section.guideSlugs);
  const guide = getGuideBySlug(slug);
  const isProblemGuide =
    explicitSlugs.length > 0 || matchingSectionSlugs.length > 0 || troubleshootingGuideSlugs.includes(slug);

  if (!isProblemGuide) {
    return [];
  }

  const candidateSlugs = uniqueGuideSlugs(
    [...explicitSlugs, ...matchingSectionSlugs, ...(guide?.relatedGuides ?? []), ...generalProblemHubSlugs],
    slug
  );

  return getRelatedGuides(candidateSlugs).slice(0, limit);
}

export function getRelatedProblemLinksForGuide(slug: GuideSlug) {
  return getRelatedProblemGuidesForGuide(slug).map((guide) => ({
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
