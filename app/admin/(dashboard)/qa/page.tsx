import { AdminCard } from "@/components/admin/AdminCard";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { FileListPanel } from "@/components/admin/FileListPanel";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { listWorkflowFiles } from "@/lib/admin/content-files";
import { getLatestQaReportSummary } from "@/lib/admin/qa-reports";

export const dynamic = "force-dynamic";

export default async function AdminQaPage() {
  const [qaFiles, latestReport] = await Promise.all([listWorkflowFiles("qaReports"), getLatestQaReportSummary()]);
  const latestTone =
    latestReport?.status === "PASS"
      ? "success"
      : latestReport?.status === "FAIL"
        ? "danger"
        : latestReport?.status === "WARN"
          ? "warning"
          : "neutral";

  return (
    <>
      <AdminHeader
        title="Editorial QA"
        description="Read-only view for local promoted-guide QA reports. Reports are manual review artifacts and do not publish content."
      />
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <AdminCard title="QA Status" description="Run QA from the terminal before manually adding promoted content to live guide data.">
          <div className="flex flex-wrap gap-3">
            <StatusBadge tone={qaFiles.length > 0 ? "success" : "neutral"}>
              {qaFiles.length > 0 ? "Reports found" : "No reports yet"}
            </StatusBadge>
            <StatusBadge tone="warning">Read-only</StatusBadge>
            <StatusBadge>No publish actions</StatusBadge>
          </div>
          {latestReport ? (
            <div className="mt-5 rounded-lg border border-line bg-field p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-bold text-ink">Latest Report</h2>
                  <p className="mt-1 text-sm text-slate-600">{latestReport.fileName}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {latestReport.failures} critical failure(s), {latestReport.warnings} warning(s). Updated{" "}
                    {new Date(latestReport.updatedAt).toLocaleString("en-US")}.
                  </p>
                </div>
                <StatusBadge tone={latestTone}>{latestReport.status}</StatusBadge>
              </div>
            </div>
          ) : (
            <p className="mt-5 rounded-lg border border-line bg-field p-4 text-sm text-slate-600">
              No QA summary is available yet. Run <code className="font-semibold">npm run qa:promoted</code> to create
              local report files.
            </p>
          )}
        </AdminCard>
        <FileListPanel
          title="content/qa-reports"
          description="Local markdown QA reports for promoted guide snippets."
          files={qaFiles}
          emptyMessage="No QA report files found. Run npm run qa:promoted to scan promoted guide snippets."
        />
        <AdminCard title="QA Meaning" description="The scanner is a local gate before manual publishing.">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-line bg-white p-4">
              <StatusBadge tone="success">PASS</StatusBadge>
              <p className="mt-3 text-sm leading-6 text-slate-600">No critical issues or warnings were found.</p>
            </div>
            <div className="rounded-lg border border-line bg-white p-4">
              <StatusBadge tone="warning">WARN</StatusBadge>
              <p className="mt-3 text-sm leading-6 text-slate-600">Review the warning before manually publishing.</p>
            </div>
            <div className="rounded-lg border border-line bg-white p-4">
              <StatusBadge tone="danger">FAIL</StatusBadge>
              <p className="mt-3 text-sm leading-6 text-slate-600">Resolve critical issues before adding content to live guide data.</p>
            </div>
          </div>
        </AdminCard>
      </div>
    </>
  );
}
