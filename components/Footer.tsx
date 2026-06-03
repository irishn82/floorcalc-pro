import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="FloorCalc Pro home">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 p-1">
              <BrandMark className="h-full w-full rounded-lg object-contain" />
            </span>
            <span className="text-lg font-black tracking-tight text-white">FloorCalc Pro</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Free flooring calculators and practical planning guides for homeowners, remodelers, and flooring shoppers.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              ["Square footage", "/tools/flooring-square-footage-calculator"],
              ["Waste", "/tools/waste-calculator"],
              ["Stairs", "/tools/stair-flooring-calculator"],
              ["Seams", "/tools/carpet-seam-planner"]
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-400 transition-colors hover:border-white/25 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-500">
            <FlooringIcon name="calculator" className="h-3.5 w-3.5 text-accent-500" />
            Calculators
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/tools/flooring-square-footage-calculator">Square footage</Link></li>
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/tools/waste-calculator">Waste calculator</Link></li>
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/tools/stair-flooring-calculator">Stair calculator</Link></li>
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/tools/transition-estimator">Transition estimator</Link></li>
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/tools">All calculators -&gt;</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-500">
            <FlooringIcon name="guide" className="h-3.5 w-3.5 text-accent-500" />
            Guides
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/guides/how-much-flooring-do-i-need">How much flooring do I need?</Link></li>
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/guides/lvp-waste-percentage-guide">LVP waste guide</Link></li>
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/guides/flooring-transition-guide">Transition guide</Link></li>
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/guides/browse-problems">Browse by symptom</Link></li>
            <li><Link className="text-slate-400 transition-colors hover:text-white" href="/guides/troubleshooting">Troubleshooting -&gt;</Link></li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-white/[0.07] py-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} FloorCalc Pro. All rights reserved.</p>
        <p>Estimates are for planning only - verify quantities before ordering.</p>
      </Container>
    </footer>
  );
}
