import { AdminHeader } from "@/components/admin/AdminHeader";
import { FileListPanel } from "@/components/admin/FileListPanel";
import { WorkflowStepCard } from "@/components/admin/WorkflowStepCard";
import { listWorkflowFiles } from "@/lib/admin/content-files";

export const dynamic = "force-dynamic";

export default async function AdminPromotedPage() {
  const promotedFiles = await listWorkflowFiles("promoted");

  return (
    <>
      <AdminHeader
        title="Promoted Previews"
        description="Promotion-ready snippets and preview reports. These files are still not published."
      />
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <FileListPanel
          title="content/promoted"
          description="Generated promotion previews and TypeScript snippets for manual review."
          files={promotedFiles}
          emptyMessage="No promoted files found. Run npm run promote:draft -- --slug your-topic-slug after reviewing a draft."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <WorkflowStepCard step="1" title="Inspect Preview" status="manual" description="Read validation warnings and the editorial checklist." />
          <WorkflowStepCard step="2" title="Replace Placeholders" status="manual" description="Write reviewed article sections and FAQ answers." />
          <WorkflowStepCard step="3" title="Manual Live Edit" status="manual" description="Paste approved content into live guide data only after review." />
        </div>
      </div>
    </>
  );
}
