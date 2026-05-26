import { FlooringIcon } from "@/components/FlooringIcon";

type WhenToCallAProProps = {
  items: string[];
};

export function WhenToCallAPro({ items }: WhenToCallAProProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 shadow-sm">
      <h3 className="inline-flex items-center gap-2 text-base font-black text-ink">
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-amber-200 bg-white text-amber-700">
          <FlooringIcon name="shield" className="h-4 w-4" />
        </span>
        When to call a professional
      </h3>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-amber-200 bg-white px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
