import { StatusBadge } from "@/components/admin/StatusBadge";

type WorkflowStepCardProps = {
  step: string;
  title: string;
  description: string;
  status: "ready" | "manual" | "future";
};

const statusCopy = {
  ready: { label: "Ready", tone: "success" as const },
  manual: { label: "Manual", tone: "warning" as const },
  future: { label: "Future", tone: "neutral" as const }
};

export function WorkflowStepCard({ step, title, description, status }: WorkflowStepCardProps) {
  const badge = statusCopy[status];

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-slate-100 text-sm font-black text-slate-700">
          {step}
        </span>
        <StatusBadge tone={badge.tone}>{badge.label}</StatusBadge>
      </div>
      <h3 className="mt-4 font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
