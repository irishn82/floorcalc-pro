import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";
import { MobileNavigation } from "@/components/MobileNavigation";

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/guides", label: "Guides" },
  { href: "/guides/troubleshooting", label: "Troubleshooting" },
  { href: "/guides/browse-problems", label: "Browse Problems" }
];

const mobileNavItems: { href: string; label: string }[] = [
  ...navItems,
  { href: "/diagnose", label: "Diagnose" },
  { href: "/decision-trees", label: "Guided Help" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <Container className="flex min-h-16 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="FloorCalc Pro home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-brand-50 p-1">
            <BrandMark className="h-full w-full rounded-lg object-contain" />
          </span>
          <span className="hidden text-[1.05rem] font-black tracking-tight text-ink sm:inline">FloorCalc Pro</span>
        </Link>

        <nav
          className="hidden min-w-0 items-center gap-0.5 overflow-x-auto whitespace-nowrap text-xs font-semibold text-slate-600 sm:gap-1 sm:text-sm md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex shrink-0 items-center rounded-lg px-1.5 py-2 transition-colors hover:bg-slate-100 hover:text-ink sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileNavigation items={mobileNavItems} />
      </Container>
    </header>
  );
}
