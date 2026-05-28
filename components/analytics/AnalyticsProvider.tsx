import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import Script from "next/script";

type AnalyticsProviderName = "none" | "vercel" | "plausible" | "google-analytics";

function getAnalyticsProvider(): AnalyticsProviderName {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;

  if (provider === "none" || provider === "vercel" || provider === "plausible" || provider === "google-analytics") {
    return provider;
  }

  return "vercel";
}

export function AnalyticsProvider() {
  const provider = getAnalyticsProvider();

  if (provider === "none") {
    return null;
  }

  if (provider === "vercel") {
    return <VercelAnalytics />;
  }

  if (provider === "plausible") {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

    if (!domain) {
      return null;
    }

    return (
      <Script
        defer
        data-domain={domain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  if (provider === "google-analytics") {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (!measurementId) {
      return null;
    }

    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', { anonymize_ip: true });
          `}
        </Script>
      </>
    );
  }

  return null;
}
