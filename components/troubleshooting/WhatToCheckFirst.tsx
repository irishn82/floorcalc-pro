import { FlooringIcon } from "@/components/FlooringIcon";

type WhatToCheckFirstProps = {
  items: string[];
};

export function WhatToCheckFirst({ items }: WhatToCheckFirstProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <h3 className="inline-flex items-center gap-2 text-base font-black text-ink">
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
          <FlooringIcon name="calculator" className="h-4 w-4" />
        </span>
        What to check first
      </h3>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-line bg-field px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
