import type { Metadata } from "next";

export const siteConfig = {
  name: "FloorCalc Pro",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.floorcalcpro.net",
  description:
    "Free flooring calculators and troubleshooting guides for LVP, laminate, hardwood, tile, and carpet. Estimate materials, diagnose problems, and plan installations."
};

type SeoMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createSeoMetadata({ title, description, path, type = "website" }: SeoMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
