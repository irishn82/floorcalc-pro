import type { FAQItem } from "@/data/types";
import { FlooringIcon } from "@/components/FlooringIcon";

type FAQSectionProps = {
  items: FAQItem[];
};

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="border-t border-line bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="inline-flex items-center gap-3 text-xl font-black text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
            <FlooringIcon name="guide" className="h-4 w-4" />
          </span>
          Frequently Asked Questions
        </h2>
        <div className="mt-4 divide-y divide-line rounded-lg border border-line bg-white shadow-sm">
          {items.map((item) => (
            <details key={item.question} className="group p-4 transition open:bg-field/60">
              <summary className="cursor-pointer list-none text-base font-bold text-ink">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {item.question}
                  <span aria-hidden="true" className="text-accent-600 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
