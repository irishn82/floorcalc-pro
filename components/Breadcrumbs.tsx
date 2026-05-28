import Link from "next/link";

type BreadcrumbItem = {
  href?: string;
  label: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-xs font-semibold text-slate-500 sm:text-sm">
      <ol className="flex min-w-0 flex-wrap items-center gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="inline-flex min-w-0 items-center">
            {index > 0 ? (
              <span aria-hidden="true" className="mx-1 shrink-0 text-slate-300">
                {" \u203a "}
              </span>
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="rounded-sm transition hover:text-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-100"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="inline-block max-w-[18rem] truncate align-bottom text-slate-700 sm:max-w-none">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
