import { AdminCard } from "@/components/admin/AdminCard";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { WorkflowStepCard } from "@/components/admin/WorkflowStepCard";
import { keywordTopics } from "@/data/keywords";
import { listWorkflowFiles } from "@/lib/admin/content-files";

export const dynamic = "force-dynamic";

export default async function AdminOverviewPage() {
  const [draftFiles, promotedFiles, qaFiles] = await Promise.all([
    listWorkflowFiles("drafts"),
    listWorkflowFiles("promoted"),
    listWorkflowFiles("qaReports")
  ]);

  return (
    <>
      <AdminHeader
        title="Editorial Workflow Dashboard"
        description="Track the local SEO content pipeline from keyword topics to draft briefs, promotion previews, and future QA reports."
      />
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="grid gap-4 md:grid-cols-4">
          <AdminCard title="Keyword Topics">
            <div className="text-3xl font-black">{keywordTopics.length}</div>
            <p className="mt-2 text-sm text-slate-600">Structured SEO ideas ready for briefs.</p>
          </AdminCard>
          <AdminCard title="Drafts">
            <div className="text-3xl font-black">{draftFiles.length}</div>
            <p className="mt-2 text-sm text-slate-600">Local markdown drafts, not published.</p>
          </AdminCard>
          <AdminCard title="Promoted Files">
            <div className="text-3xl font-black">{promotedFiles.length}</div>
            <p className="mt-2 text-sm text-slate-600">Manual promotion previews and snippets.</p>
          </AdminCard>
          <AdminCard title="QA Reports">
            <div className="text-3xl font-black">{qaFiles.length}</div>
            <p className="mt-2 text-sm text-slate-600">Future editorial QA output.</p>
          </AdminCard>
        </div>

        <AdminCard
          title="Phase Status"
          description="Current production-safe editorial capabilities. None of these steps auto-publish content."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold">Phase 1</h3>
                <StatusBadge tone="success">Live foundation</StatusBadge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Public calculators, starter guides, SEO metadata, sitemap.</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold">Phase 2</h3>
                <StatusBadge tone="success">Draft workflow</StatusBadge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Keyword data and local markdown draft generation.</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold">Phase 3</h3>
                <StatusBadge tone="success">Manual promotion</StatusBadge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Validation, checklist, and promotion-ready snippets.</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold">Admin UI</h3>
                <StatusBadge tone="warning">Internal only</StatusBadge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">Read-only dashboard. Auth required before deployment exposure.</p>
            </div>
          </div>
        </AdminCard>

        <AdminCard title="Manual Workflow" description="The dashboard shows state only. Publishing remains a human-controlled code change.">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <WorkflowStepCard
              step="1"
              title="Select Keyword"
              status="ready"
              description="Review structured topics and choose an SEO guide opportunity."
            />
            <WorkflowStepCard
              step="2"
              title="Generate Draft"
              status="ready"
              description="Run the local draft generator and review the markdown brief."
            />
            <WorkflowStepCard
              step="3"
              title="Promote Preview"
              status="manual"
              description="Create a promotion snippet, then replace placeholders with reviewed original copy."
            />
            <WorkflowStepCard
              step="4"
              title="Publish Manually"
              status="manual"
              description="Manually add approved guide data, run checks, and verify the live route."
            />
          </div>
        </AdminCard>
      </div>
    </>
  );
}
