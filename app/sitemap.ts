import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import { siteConfig } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/tools", "/guides"].map((path) => ({
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

  return [...staticRoutes, ...toolRoutes, ...guideRoutes];
}
