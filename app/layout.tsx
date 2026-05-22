import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/seo/metadata";
import { websiteJsonLd } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Free Flooring Calculators and Guides`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  verification: {
    google: "_sO36QmSBNF8qvOAcf8EUW2l5szTVJEmdgKi50-B_tQ"
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | Free Flooring Calculators and Guides`,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Free Flooring Calculators and Guides`,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <JsonLd data={websiteJsonLd()} />
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
