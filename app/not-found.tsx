import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-white px-4 py-16 text-slate-950">
      <section className="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">FloorCalc Pro</p>
        <h1 className="mt-3 text-3xl font-black tracking-normal">Page not found</h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          The page you requested does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          Back Home
        </Link>
      </section>
    </main>
  );
}
