"use client";

import type { ChangeEvent } from "react";

type GuideTypeOption = {
  slug: string;
  title: string;
  shortTitle: string;
};

type GuideTypeSelectProps = {
  options: GuideTypeOption[];
};

export function GuideTypeSelect({ options }: GuideTypeSelectProps) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const slug = event.currentTarget.value;

    if (!slug) {
      return;
    }

    const target = document.getElementById(slug);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${slug}`);
    event.currentTarget.value = "";
  }

  return (
    <div className="rounded-lg border border-line bg-field p-4 shadow-sm">
      <label htmlFor="guide-type-select" className="text-sm font-black uppercase tracking-wide text-ink">
        Browse by flooring type
      </label>
      <div className="relative mt-3">
        <select
          id="guide-type-select"
          defaultValue=""
          onChange={handleChange}
          className="w-full appearance-none rounded-lg border border-line bg-white px-4 py-3 pr-10 text-sm font-bold text-slate-800 outline-none transition focus:border-accent-500 focus:ring-4 focus:ring-accent-100"
        >
          <option value="" disabled>
            Select a flooring type
          </option>
          {options.map((option) => (
            <option key={option.slug} value={option.slug}>
              {option.title}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-2 rotate-45 border-b-2 border-r-2 border-accent-700"
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Jump straight to LVP, laminate, hardwood, carpet, tile, or planning guides without digging through the whole page.
      </p>
    </div>
  );
}
