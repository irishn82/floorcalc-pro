import type { ReactNode } from "react";

type ResultBoxProps = {
  title: string;
  value: string;
  detail?: string;
  children?: ReactNode;
};

export function ResultBox({ title, value, detail, children }: ResultBoxProps) {
  return (
    <section className="rounded-lg border border-accent-100 bg-accent-50 p-5" aria-live="polite">
      <p className="text-sm font-bold uppercase tracking-wide text-accent-700">{title}</p>
      <div className="mt-2 text-3xl font-black text-ink">{value}</div>
      {detail ? <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
    </section>
  );
}
