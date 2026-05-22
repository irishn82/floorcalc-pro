import type { ReactNode } from "react";
import { DisclaimerBox } from "@/components/DisclaimerBox";

type CalculatorLayoutProps = {
  title: string;
  intro: string;
  children: ReactNode;
  formula: string;
  notes: string[];
};

export function CalculatorLayout({ title, intro, children, formula, notes }: CalculatorLayoutProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
      <section className="rounded-lg border border-line bg-white p-5 shadow-sm sm:p-6" aria-label={`${title} inputs`}>
        <p className="text-base leading-7 text-slate-600">{intro}</p>
        <div className="mt-6">{children}</div>
      </section>
      <aside className="space-y-5">
        <section className="rounded-lg border border-line bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-ink">Formula</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{formula}</p>
        </section>
        <section className="rounded-lg border border-line bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-ink">Practical Flooring Notes</h2>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
        <DisclaimerBox>
          Results are planning estimates only. Verify measurements, product coverage, waste, and installation requirements
          with the manufacturer, retailer, or installer before ordering.
        </DisclaimerBox>
      </aside>
    </div>
  );
}
