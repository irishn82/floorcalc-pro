import type { ReactNode } from "react";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FlooringIcon } from "@/components/FlooringIcon";

type CalculatorLayoutProps = {
  title: string;
  intro: string;
  flooringSystem: string;
  children: ReactNode;
  formula: string;
  notes: string[];
};

export function CalculatorLayout({ title, intro, flooringSystem, children, formula, notes }: CalculatorLayoutProps) {
  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
      <section className="min-w-0 rounded-lg border border-line bg-white p-5 shadow-sm sm:p-6" aria-label={`${title} inputs`}>
        <div className="space-y-3">
          <span className="inline-block max-w-full break-words whitespace-normal rounded-md border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-bold uppercase leading-5 tracking-wide text-accent-700">
            Best for: {flooringSystem}
          </span>
          <p className="text-base leading-7 text-slate-600">{intro}</p>
        </div>
        <div className="mt-7">{children}</div>
      </section>
      <aside className="min-w-0 space-y-5">
        <section className="rounded-lg border border-line bg-white p-5 shadow-sm">
          <h2 className="inline-flex items-center gap-2 text-lg font-bold text-ink">
            <FlooringIcon name="ruler" className="h-5 w-5 text-accent-700" />
            Formula
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{formula}</p>
        </section>
        <section className="rounded-lg border border-line bg-white p-5 shadow-sm">
          <h2 className="inline-flex items-center gap-2 text-lg font-bold text-ink">
            <FlooringIcon name="layers" className="h-5 w-5 text-moss-700" />
            Practical Flooring Notes
          </h2>
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
