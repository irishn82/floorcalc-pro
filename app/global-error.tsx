"use client";

import Link from "next/link";

type GlobalErrorProps = {
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <main className="grid min-h-screen place-items-center bg-slate-100 px-4 py-12 text-slate-950">
          <section className="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">FloorCalc Pro</p>
            <h1 className="mt-3 text-3xl font-black tracking-normal">Something went wrong</h1>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              The page could not be loaded. No sensitive error details are shown here.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={reset}
                className="rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
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
