"use client";

import type { ChangeEvent } from "react";

type SelectInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
};

export function SelectInput({ label, value, onChange, options }: SelectInputProps) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value);
  }

  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <select
        className="mt-2 w-full rounded-md border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-100"
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
