import { readFile } from "node:fs/promises";
import path from "node:path";
import { listWorkflowFiles } from "@/lib/admin/content-files";

export type QaReportSummary = {
  fileName: string;
  relativePath: string;
  slug: string;
  status: "PASS" | "WARN" | "FAIL" | "UNKNOWN";
  failures: number;
  warnings: number;
  updatedAt: string;
};

function matchNumber(content: string, label: string) {
  const match = content.match(new RegExp(`${label}:\\s*(\\d+)`, "i"));
  return match ? Number(match[1]) : 0;
}

export async function getLatestQaReportSummary(): Promise<QaReportSummary | null> {
  const reports = await listWorkflowFiles("qaReports");

  if (reports.length === 0) {
    return null;
  }

  const latest = [...reports].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0];
  const absolutePath = path.join(process.cwd(), latest.relativePath);
  const content = await readFile(absolutePath, "utf8");
  const slug = content.match(/^# QA Report:\s*(.+)$/m)?.[1]?.trim() ?? latest.name.replace(/\.qa-report\.md$/, "");
  const rawStatus = content.match(/^Overall status:\s*(PASS|WARN|FAIL)$/m)?.[1] as QaReportSummary["status"] | undefined;

  return {
    fileName: latest.name,
    relativePath: latest.relativePath,
    slug,
    status: rawStatus ?? "UNKNOWN",
    failures: matchNumber(content, "Critical failures"),
    warnings: matchNumber(content, "Warnings"),
    updatedAt: latest.updatedAt
  };
}
