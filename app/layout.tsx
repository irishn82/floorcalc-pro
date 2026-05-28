import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});
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
  icons: {
    icon: "/fcplogo-icon.png",
    apple: "/fcplogo-icon.png"
  },
  verification: {
    google: "doSIMaEQHgyTV--cri6BFRUDWRhDkLH1RfzuH7aYcQ0"
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <JsonLd data={websiteJsonLd()} />
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
