import type { FAQItem } from "@/data/types";

type FAQSectionProps = {
  items: FAQItem[];
};

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="border-t border-line bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-ink">Frequently Asked Questions</h2>
        <div className="mt-6 divide-y divide-line rounded-lg border border-line bg-white">
          {items.map((item) => (
            <details key={item.question} className="group p-5">
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
