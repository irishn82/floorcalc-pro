import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-lg font-bold text-ink">
            FloorCalc Pro
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Free flooring calculators and practical planning guides for homeowners, remodelers, and flooring shoppers.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">Tools</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link className="hover:text-ink" href="/tools/flooring-square-footage-calculator">
                Square footage calculator
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink" href="/tools/waste-calculator">
                Waste calculator
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink" href="/tools/transition-estimator">
                Transition estimator
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">Planning</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link className="hover:text-ink" href="/guides/how-much-flooring-do-i-need">
                Measuring guide
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink" href="/guides/lvp-waste-percentage-guide">
                LVP waste guide
              </Link>
            </li>
            <li>
              <Link className="hover:text-ink" href="/guides/flooring-transition-guide">
                Transition guide
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-line py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} FloorCalc Pro. All rights reserved.</p>
        <p>Calculator results are estimates and should be verified before ordering materials.</p>
      </Container>
    </footer>
  );
}
