import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand-900 text-white">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-lg font-black" aria-label="FloorCalc Pro home">
            <BrandMark className="h-10 w-10 ring-1 ring-white/15" />
            <span>FloorCalc Pro</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Free flooring calculators and practical planning guides for homeowners, remodelers, and flooring shoppers.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Measure", "Waste", "Stairs", "Seams"].map((label) => (
              <span key={label} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-200">
                {label}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-300">
            <FlooringIcon name="calculator" className="h-4 w-4 text-copper-100" />
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
            <FlooringIcon name="guide" className="h-4 w-4 text-moss-100" />
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
      <Container className="flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} FloorCalc Pro. All rights reserved.</p>
        <p>Calculator results are estimates and should be verified before ordering materials.</p>
      </Container>
    </footer>
  );
}
