import type { FAQItem } from "@/data/types";
import { siteConfig } from "@/lib/seo/metadata";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type HowToStep = {
  name: string;
  text: string;
};

export function howToJsonLd(input: {
  name: string;
  description: string;
  path: string;
  steps: HowToStep[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: `${siteConfig.url}${input.path}`,
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  };
}

export function breadcrumbListJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {})
    }))
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description
  };
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function toolJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: input.name,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    url: `${siteConfig.url}${input.path}`,
    description: input.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  dateModified: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished ?? input.dateModified,
    dateModified: input.dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${input.path}`
    }
  };
}
