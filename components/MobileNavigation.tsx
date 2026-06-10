"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";

type MobileNavigationItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  items: MobileNavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <div ref={menuRef} className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-ink shadow-sm transition hover:border-accent-200 hover:bg-accent-50 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span className="sr-only">{isMenuOpen ? "Close navigation menu" : "Open navigation menu"}</span>
        <span className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
          <span className={`h-0.5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </span>
      </button>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white shadow-lg"
          aria-label="Mobile navigation"
        >
          <Container className="py-3">
            <div className="grid gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-accent-50 hover:text-accent-800 focus:outline-none focus:ring-2 focus:ring-accent-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {item.href === "/guides/browse-problems" || item.href === "/diagnose" || item.href === "/decision-trees" ? (
                    <span className="rounded-full border border-accent-100 bg-accent-50 px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-wide text-accent-700">
                      Start here
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </Container>
        </nav>
      ) : null}
    </div>
  );
}
