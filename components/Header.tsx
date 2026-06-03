import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";

const navItems: { href: string; label: string; shortLabel?: string }[] = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/guides", label: "Guides" },
  { href: "/guides/troubleshooting", label: "Troubleshooting", shortLabel: "Fixes" }
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

        <nav className="flex min-w-0 items-center gap-0.5 text-xs font-semibold text-slate-600 sm:gap-1 sm:text-sm" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center rounded-lg px-1.5 py-2 transition-colors hover:bg-slate-100 hover:text-ink sm:px-3"
            >
              <span className={item.shortLabel ? "hidden sm:inline" : ""}>{item.label}</span>
              {item.shortLabel ? <span className="sm:hidden">{item.shortLabel}</span> : null}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
