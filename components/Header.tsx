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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-900 shadow-sm">
      <Container className="flex min-h-[4.25rem] items-center justify-between gap-2 sm:min-h-[4.5rem] sm:gap-4">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 font-semibold sm:gap-3" aria-label="FloorCalc Pro home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-brand-800 p-1 shadow-brand sm:h-11 sm:w-11">
            <BrandMark priority className="h-full w-full rounded-lg object-contain" />
          </span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap text-base font-black tracking-normal text-white sm:text-xl">FloorCalc Pro</span>
            <span className="mt-1 block h-0.5 w-12 rounded-full bg-accent-500 transition-all group-hover:w-16 sm:w-14 sm:group-hover:w-20" aria-hidden="true" />
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-semibold text-slate-200" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-md border border-transparent px-2 py-2 transition hover:border-white/10 hover:bg-white/10 hover:text-white sm:px-3"
            >
              <FlooringIcon name={item.icon} className="hidden h-4 w-4 text-accent-100 sm:block" />
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
