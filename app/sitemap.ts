import type { MetadataRoute } from "next";
import { guideEcosystems } from "@/data/ecosystems";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import { siteConfig } from "@/lib/seo/metadata";

const SITE_LAUNCH_DATE = new Date("2026-05-22");
const TOOLS_UPDATED_DATE = new Date("2026-06-10");
const ECOSYSTEMS_UPDATED_DATE = new Date("2026-06-10");
const TRUST_PAGES_DATE = new Date("2026-06-10");

function latestGuideDate(): Date {
  return guides.reduce((latest, guide) => {
    const d = new Date(guide.dateModified);
    return d > latest ? d : latest;
  }, SITE_LAUNCH_DATE);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified: latestGuideDate(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteConfig.url}/tools`, lastModified: TOOLS_UPDATED_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/guides`, lastModified: latestGuideDate(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/diagnose`, lastModified: SITE_LAUNCH_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/decision-trees`, lastModified: SITE_LAUNCH_DATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/guides/troubleshooting`, lastModified: latestGuideDate(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/guides/browse-problems`, lastModified: latestGuideDate(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, lastModified: TRUST_PAGES_DATE, changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteConfig.url}/contact`, lastModified: TRUST_PAGES_DATE, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/privacy-policy`, lastModified: TRUST_PAGES_DATE, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/terms`, lastModified: TRUST_PAGES_DATE, changeFrequency: "yearly", priority: 0.2 }
  ];

  const toolRoutes: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${siteConfig.url}/tools/${tool.slug}`,
    lastModified: TOOLS_UPDATED_DATE,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: new Date(guide.dateModified),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const ecosystemRoutes: MetadataRoute.Sitemap = guideEcosystems
    .filter((ecosystem) =>
      guides.some(
        (guide) =>
          guide.primaryEcosystem === ecosystem.slug || Boolean(guide.secondaryEcosystems?.includes(ecosystem.slug))
      )
    )
    .map((ecosystem) => ({
      url: `${siteConfig.url}/guides/ecosystems/${ecosystem.slug}`,
      lastModified: ECOSYSTEMS_UPDATED_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }));

  return [...staticRoutes, ...toolRoutes, ...guideRoutes, ...ecosystemRoutes];
}
