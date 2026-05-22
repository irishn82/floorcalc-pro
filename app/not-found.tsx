import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-white px-4 py-16 text-ink">
      <section className="w-full max-w-lg rounded-lg border border-line bg-white p-6 text-center shadow-sm">
        <BrandMark className="mx-auto h-11 w-11 rounded-xl object-contain shadow-brand ring-1 ring-brand-900/10" />
        <p className="mt-4 text-sm font-bold uppercase tracking-wide text-accent-700">FloorCalc Pro</p>
        <h1 className="mt-3 text-3xl font-black tracking-normal">Page not found</h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          The page you requested does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-md bg-brand-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-accent-700"
        >
          Back Home
        </Link>
      </section>
    </main>
  );
}
