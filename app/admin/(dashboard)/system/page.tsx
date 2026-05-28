import Link from "next/link";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { siteConfig } from "@/lib/seo/metadata";
import packageJson from "../../../../package.json";

const deploymentChecks = [
  "Environment variables are configured in the deployment provider.",
  "Admin login redirects and logout flow are tested in a private browser window.",
  "Public pages load without admin authentication.",
  "Sitemap and robots files use the production domain.",
  "Search Console and Bing Webmaster Tools are ready for sitemap submission.",
  "Analytics mode is intentional; Vercel Analytics is the default unless disabled.",
  "QA reports are reviewed before any manual guide promotion."
];

export default function AdminSystemPage() {
  const analyticsProvider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || "vercel";

  return (
    <>
      <AdminHeader
        title="System Observability"
        description="Read-only deployment and monitoring visibility for the internal editorial dashboard."
      />
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <AdminCard title="App">
            <p className="text-2xl font-black">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-slate-600">Version {packageJson.version}</p>
          </AdminCard>
          <AdminCard title="Environment">
            <StatusBadge tone={process.env.NODE_ENV === "production" ? "success" : "neutral"}>
              {process.env.NODE_ENV || "unknown"}
            </StatusBadge>
          </AdminCard>
          <AdminCard title="Site URL">
            <p className="break-all text-sm font-semibold text-slate-800">{siteConfig.url}</p>
          </AdminCard>
          <AdminCard title="Analytics">
            <StatusBadge tone={analyticsProvider === "none" ? "neutral" : "success"}>{analyticsProvider}</StatusBadge>
          </AdminCard>
        </div>

        <AdminCard title="Runtime Snapshot" description="This page does not display secrets or private environment values.">
          <dl className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-line bg-field p-4">
              <dt className="text-sm font-bold text-slate-700">Current timestamp</dt>
              <dd className="mt-2 text-sm text-slate-600">{new Date().toISOString()}</dd>
            </div>
            <div className="rounded-lg border border-line bg-field p-4">
              <dt className="text-sm font-bold text-slate-700">Health endpoint</dt>
              <dd className="mt-2">
                <Link className="text-sm font-bold text-accent-700 hover:text-accent-600" href="/api/health">
                  /api/health
                </Link>
              </dd>
            </div>
          </dl>
        </AdminCard>

        <AdminCard title="Deployment Checks" description="Use this as a quick post-deploy review list.">
          <ul className="space-y-3 text-sm leading-6 text-slate-600">
            {deploymentChecks.map((item) => (
              <li key={item} className="rounded-lg border border-line bg-white p-3">
                {item}
              </li>
            ))}
          </ul>
        </AdminCard>
      </div>
    </>
  );
}
