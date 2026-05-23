import { guides } from "@/data/guides";
import { getGuideEcosystemBySlug, guideEcosystems } from "@/data/ecosystems";
import { tools } from "@/data/tools";
import type { Guide, GuideEcosystemSlug, Tool } from "@/data/types";

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

export function getGuidesByEcosystem(ecosystemSlug: GuideEcosystemSlug) {
  return guides.filter(
    (guide) =>
      guide.primaryEcosystem === ecosystemSlug || Boolean(guide.secondaryEcosystems?.includes(ecosystemSlug))
  );
}

export function getEcosystemRelatedGuides(guide: Guide, limit = 4) {
  return getGuidesByEcosystem(guide.primaryEcosystem)
    .filter((relatedGuide) => relatedGuide.slug !== guide.slug)
    .slice(0, limit);
}

export function getGuideEcosystemLinks(guide: Guide) {
  const ecosystemSlugs = [guide.primaryEcosystem, ...(guide.secondaryEcosystems ?? [])];
  return ecosystemSlugs
    .map((ecosystemSlug) => getGuideEcosystemBySlug(ecosystemSlug))
    .filter((ecosystem): ecosystem is (typeof guideEcosystems)[number] => Boolean(ecosystem));
}
