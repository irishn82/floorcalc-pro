import { readdir, stat } from "node:fs/promises";
import path from "node:path";

export type WorkflowFile = {
  name: string;
  relativePath: string;
  sizeBytes: number;
  updatedAt: string;
  extension: string;
};

const contentRoot = path.join(process.cwd(), "content");

const safeFolders = {
  drafts: "drafts",
  promoted: "promoted",
  qaReports: "qa-reports"
} as const;

type SafeFolder = keyof typeof safeFolders;

export async function listWorkflowFiles(folder: SafeFolder): Promise<WorkflowFile[]> {
  const folderName = safeFolders[folder];
  const targetDir = path.join(contentRoot, folderName);

  try {
    const entries = await readdir(targetDir, { withFileTypes: true });
    const files = await Promise.all(
      entries
        .filter((entry) => entry.isFile() && !entry.name.startsWith("."))
        .map(async (entry) => {
          const absolutePath = path.join(targetDir, entry.name);
          const fileStat = await stat(absolutePath);

          return {
            name: entry.name,
            relativePath: path.join("content", folderName, entry.name).replaceAll("\\", "/"),
            sizeBytes: fileStat.size,
            updatedAt: fileStat.mtime.toISOString(),
            extension: path.extname(entry.name).replace(".", "") || "file"
          };
        })
    );

    return files.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export function formatFileSize(sizeBytes: number) {
  if (sizeBytes < 1024) {
    return `${sizeBytes} B`;
  }

  return `${Math.round(sizeBytes / 102.4) / 10} KB`;
}
