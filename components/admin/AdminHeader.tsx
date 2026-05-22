import Link from "next/link";
import { StatusBadge } from "@/components/admin/StatusBadge";

type AdminHeaderProps = {
  title: string;
  description: string;
};

export function AdminHeader({ title, description }: AdminHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">Internal Editorial</p>
          <h1 className="mt-2 text-2xl font-black tracking-normal text-slate-950 sm:text-3xl">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge tone="success">Admin session active</StatusBadge>
          <Link
            href="/admin/logout"
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
          >
            Log out
          </Link>
        </div>
      </div>
    </header>
  );
}
