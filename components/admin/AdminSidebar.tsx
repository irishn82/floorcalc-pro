import Link from "next/link";

const adminNav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/keywords", label: "Keywords" },
  { href: "/admin/drafts", label: "Drafts" },
  { href: "/admin/promoted", label: "Promoted" },
  { href: "/admin/qa", label: "QA" },
  { href: "/admin/system", label: "System" }
];

export function AdminSidebar() {
  return (
    <aside className="border-b border-slate-200 bg-slate-950 text-white lg:min-h-screen lg:w-64 lg:border-b-0 lg:border-r lg:border-slate-800">
      <div className="px-4 py-5 sm:px-6 lg:px-5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-sm font-black text-slate-950">
            FC
          </span>
          <div>
            <div className="font-bold">FloorCalc Pro</div>
            <div className="text-xs text-slate-300">Editorial Admin</div>
          </div>
        </div>
        <nav className="mt-6 flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible" aria-label="Admin navigation">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
