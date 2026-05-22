import Link from "next/link";
import { Container } from "@/components/Container";

const navItems = [
  { href: "/tools", label: "Tools" },
  { href: "/guides", label: "Guides" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3 font-semibold text-ink" aria-label="FloorCalc Pro home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-sm font-black text-white">
            FC
          </span>
          <span className="text-base sm:text-lg">FloorCalc Pro</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium text-slate-700" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
