import type { MetadataRoute } from "next";
import { guideEcosystems } from "@/data/ecosystems";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import { siteConfig } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tools",
    "/guides",
    "/diagnose",
    "/decision-trees",
    "/guides/troubleshooting",
    "/guides/browse-problems"
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-05-22")
  }));

  const toolRoutes = tools.map((tool) => ({
    url: `${siteConfig.url}/tools/${tool.slug}`,
    lastModified: new Date("2026-05-22")
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: new Date(guide.dateModified)
  }));

  const ecosystemRoutes = guideEcosystems
    .filter((ecosystem) =>
      guides.some(
        (guide) =>
          guide.primaryEcosystem === ecosystem.slug || Boolean(guide.secondaryEcosystems?.includes(ecosystem.slug))
      )
    )
    .map((ecosystem) => ({
      url: `${siteConfig.url}/guides/ecosystems/${ecosystem.slug}`,
      lastModified: new Date("2026-05-23")
    }));

  return [...staticRoutes, ...toolRoutes, ...guideRoutes, ...ecosystemRoutes];
}
