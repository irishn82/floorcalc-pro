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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-900 shadow-sm">
      <Container className="flex min-h-[4.25rem] items-center justify-between gap-2 sm:min-h-[4.5rem] sm:gap-4">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 font-semibold sm:gap-3" aria-label="FloorCalc Pro home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-brand-800 p-1 shadow-brand sm:h-11 sm:w-11">
            <BrandMark className="h-full w-full rounded-lg object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-base font-black tracking-normal text-white sm:text-xl">FloorCalc Pro</span>
            <span className="mt-1 block h-0.5 w-12 rounded-full bg-accent-500 transition-all group-hover:w-16 sm:w-14 sm:group-hover:w-20" aria-hidden="true" />
          </span>
        </Link>
        <nav className="flex min-w-0 items-center gap-0.5 text-xs font-semibold text-slate-200 sm:gap-1 sm:text-sm" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${item.className ?? "inline-flex"} items-center gap-2 rounded-md border border-transparent px-2 py-2 transition hover:border-white/10 hover:bg-white/10 hover:text-white sm:px-3`}
            >
              <FlooringIcon name={item.icon} className="hidden h-4 w-4 text-accent-100 sm:block" />
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-md border border-transparent px-2 py-2 transition hover:border-white/10 hover:bg-white/10 hover:text-white sm:px-3"
            >
              <FlooringIcon name="guide" className="hidden h-4 w-4 text-accent-100 sm:block" />
              Guides
            </Link>
            <div className="pointer-events-none invisible absolute right-0 top-full z-50 mt-2 hidden w-80 rounded-lg border border-line bg-white p-2 text-sm text-slate-700 opacity-0 shadow-soft transition group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 md:grid">
              {guideMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 font-bold transition hover:bg-field hover:text-accent-700"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/guides/troubleshooting"
                className="rounded-md border-t border-line px-3 py-2 font-bold text-accent-700 transition hover:bg-field"
              >
                Troubleshooting Guides
              </Link>
            </div>
          </div>
          <Link
            href={troubleshootingNavItem.href}
            className="inline-flex items-center gap-2 rounded-md border border-transparent px-2 py-2 transition hover:border-white/10 hover:bg-white/10 hover:text-white sm:px-3"
          >
            <FlooringIcon name={troubleshootingNavItem.icon} className="hidden h-4 w-4 text-accent-100 sm:block" />
            <span className="hidden sm:inline">{troubleshootingNavItem.label}</span>
            <span className="sm:hidden">{troubleshootingNavItem.shortLabel}</span>
          </Link>
        </nav>
      </Container>
    </header>
  );
}
