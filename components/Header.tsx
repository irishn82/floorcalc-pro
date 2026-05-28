import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { guideEcosystems } from "@/data/ecosystems";

const navItems = [
  { href: "/", label: "Home", icon: "layers" as const, className: "hidden lg:inline-flex" },
  { href: "/tools", label: "Tools", icon: "calculator" as const }
];

const troubleshootingNavItem = {
  href: "/guides/troubleshooting",
  label: "Troubleshooting",
  shortLabel: "Fixes",
  icon: "shield" as const
};

const guideMenuItems = [
  { href: "/guides", label: "All Guides" },
  ...guideEcosystems
    .filter((ecosystem) =>
      ["lvp", "laminate", "hardwood-engineered-hardwood", "tile", "carpet-padding", "planning-measuring-transitions"].includes(
        ecosystem.slug
      )
    )
    .map((ecosystem) => ({
      href: `/guides/ecosystems/${ecosystem.slug}`,
      label: ecosystem.title
    }))
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-4">

        {/* Brand */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="FloorCalc Pro home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-brand-50 p-1">
            <BrandMark className="h-full w-full rounded-lg object-contain" />
          </span>
          <span className="text-[1.05rem] font-black tracking-tight text-ink">FloorCalc Pro</span>
        </Link>

        {/* Nav */}
        <nav className="flex min-w-0 items-center gap-1 text-sm font-semibold text-slate-600" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${item.className ?? "inline-flex"} items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-ink`}
            >
              {item.label}
            </Link>
          ))}

          {/* Guides dropdown */}
          <div className="group relative">
            <Link
              href="/guides"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-ink"
            >
              Guides
              <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
            <div className="pointer-events-none invisible absolute left-0 top-full z-50 mt-1 hidden w-64 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 md:block">
              {guideMenuItems.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-accent-700">
                  {item.label}
                </Link>
              ))}
              <div className="mt-1 border-t border-slate-100 pt-1">
                <Link href="/guides/troubleshooting" className="block rounded-lg px-3 py-2 text-sm font-semibold text-accent-600 hover:bg-accent-50">
                  Troubleshooting Guides →
                </Link>
              </div>
            </div>
          </div>

          <Link
            href={troubleshootingNavItem.href}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-ink"
          >
            <span className="hidden sm:inline">{troubleshootingNavItem.label}</span>
            <span className="sm:hidden">{troubleshootingNavItem.shortLabel}</span>
          </Link>

          {/* CTA */}
          <Link
            href="/tools"
            className="ml-2 inline-flex items-center gap-1.5 rounded-xl bg-accent-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-700"
          >
            <FlooringIcon name="calculator" className="h-4 w-4" />
            <span className="hidden sm:inline">Calculators</span>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
