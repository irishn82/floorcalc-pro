import { AdminHeader } from "@/components/admin/AdminHeader";
import { FileListPanel } from "@/components/admin/FileListPanel";
import { WorkflowStepCard } from "@/components/admin/WorkflowStepCard";
import { listWorkflowFiles } from "@/lib/admin/content-files";

export const dynamic = "force-dynamic";

export default async function AdminDraftsPage() {
  const draftFiles = await listWorkflowFiles("drafts");

  return (
    <>
      <AdminHeader
        title="Draft Files"
        description="Local markdown draft briefs generated from keyword topics. Drafts are not live guide pages."
      />
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <FileListPanel
          title="content/drafts"
          description="Review these files manually before running a promotion preview."
          files={draftFiles}
          emptyMessage="No draft files found. Run npm run generate:draft to create local draft briefs."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <WorkflowStepCard step="1" title="Open Draft" status="manual" description="Read the markdown brief and confirm the search intent." />
          <WorkflowStepCard step="2" title="Review Claims" status="manual" description="Check all flooring advice, disclaimers, and internal links." />
          <WorkflowStepCard step="3" title="Promote Preview" status="ready" description="Run npm run promote:draft only after human review." />
        </div>
      </div>
    </>
  );
}
