import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand-900 text-white">
      <Container className="grid gap-6 py-7 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="FloorCalc Pro home">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-brand-800 p-1 shadow-brand">
              <BrandMark className="h-full w-full rounded-lg object-contain" />
            </span>
            <span>
              <span className="block text-lg font-black tracking-normal text-white">FloorCalc Pro</span>
              <span className="mt-1 block h-0.5 w-12 rounded-full bg-accent-500" aria-hidden="true" />
            </span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Free flooring calculators and practical planning guides for homeowners, remodelers, and flooring shoppers.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ["Measure", "/tools/flooring-square-footage-calculator"],
              ["Waste", "/tools/waste-calculator"],
              ["Stairs", "/tools/stair-flooring-calculator"],
              ["Seams", "/tools/carpet-seam-planner"]
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="rounded-md border border-accent-100/10 bg-accent-100/5 px-2.5 py-1 text-xs font-bold text-slate-200 transition hover:border-accent-100/30 hover:bg-accent-100/10 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-300">
            <FlooringIcon name="calculator" className="h-4 w-4 text-accent-100" />
            Tools
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link className="hover:text-white" href="/tools/flooring-square-footage-calculator">
                Square footage calculator
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/tools/waste-calculator">
                Waste calculator
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/tools/transition-estimator">
                Transition estimator
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-300">
            <FlooringIcon name="guide" className="h-4 w-4 text-accent-100" />
            Planning
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <Link className="hover:text-white" href="/guides/how-much-flooring-do-i-need">
                Measuring guide
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/guides/lvp-waste-percentage-guide">
                LVP waste guide
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/guides/flooring-transition-guide">
                Transition guide
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-3.5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} FloorCalc Pro. All rights reserved.</p>
        <p>Calculator results are estimates and should be verified before ordering materials.</p>
      </Container>
    </footer>
  );
}
