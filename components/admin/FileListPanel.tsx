import { formatFileSize, type WorkflowFile } from "@/lib/admin/content-files";
import { StatusBadge } from "@/components/admin/StatusBadge";

type FileListPanelProps = {
  title: string;
  description: string;
  files: WorkflowFile[];
  emptyMessage: string;
};

export function FileListPanel({ title, description, files, emptyMessage }: FileListPanelProps) {
  return (
    <section className="rounded-lg border border-line bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-line p-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-ink">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
        </div>
        <StatusBadge>{files.length} files</StatusBadge>
      </div>
      <div className="divide-y divide-line">
        {files.length === 0 ? (
          <p className="p-5 text-sm text-slate-600">{emptyMessage}</p>
        ) : (
          files.map((file) => (
            <div key={file.relativePath} className="grid gap-2 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <div className="min-w-0">
                <p className="truncate font-semibold text-ink">{file.name}</p>
                <p className="mt-1 truncate text-xs text-slate-500">{file.relativePath}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:justify-end">
                <StatusBadge>{file.extension}</StatusBadge>
                <span>{formatFileSize(file.sizeBytes)}</span>
                <span>{new Date(file.updatedAt).toLocaleDateString("en-US")}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
