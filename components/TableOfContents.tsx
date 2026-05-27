type TocItem = {
  id: string;
  title: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="min-w-0 rounded-lg border border-line bg-white p-4 shadow-sm sm:p-5" aria-label="Table of contents">
      <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">Table of Contents</h2>
      <ol className="mt-4 space-y-2 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item.id} className="min-w-0">
            <a className="block [overflow-wrap:anywhere] hover:text-accent-700" href={`#${item.id}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
