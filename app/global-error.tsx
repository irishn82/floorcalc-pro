"use client";

import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

type GlobalErrorProps = {
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <main className="grid min-h-screen place-items-center bg-field px-4 py-12 text-ink">
          <section className="w-full max-w-lg rounded-lg border border-line bg-white p-6 text-center shadow-sm">
            <BrandMark className="mx-auto h-11 w-11 rounded-xl object-contain shadow-brand ring-1 ring-brand-900/10" />
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-accent-700">FloorCalc Pro</p>
            <h1 className="mt-3 text-3xl font-black tracking-normal">Something went wrong</h1>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              The page could not be loaded. No sensitive error details are shown here.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={reset}
                className="rounded-md bg-brand-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-accent-700"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="rounded-md border border-line bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-field"
              >
                Back Home
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
