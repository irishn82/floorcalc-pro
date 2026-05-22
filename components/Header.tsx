import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";

const navItems = [
  { href: "/tools", label: "Tools", icon: "calculator" as const },
  { href: "/guides", label: "Guides", icon: "guide" as const }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 shadow-sm backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3 font-semibold text-ink" aria-label="FloorCalc Pro home">
          <BrandMark className="h-10 w-10" />
          <span className="leading-tight">
            <span className="block text-base font-black sm:text-lg">FloorCalc Pro</span>
            <span className="hidden text-xs font-bold uppercase tracking-wide text-slate-500 sm:block">
              Flooring calculators
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium text-slate-700" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 transition hover:bg-brand-50 hover:text-ink"
            >
              <FlooringIcon name={item.icon} className="hidden h-4 w-4 text-accent-700 sm:block" />
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
