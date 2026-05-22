"use client";

import type { ChangeEvent } from "react";

type NumberInputProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
  suffix?: string;
};

export function NumberInput({ label, value, onChange, min = 0, step = 0.1, suffix }: NumberInputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(Number(event.target.value));
  }

  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <div className="mt-2 flex overflow-hidden rounded-md border border-line bg-white focus-within:border-accent-500 focus-within:ring-2 focus-within:ring-accent-100">
        <input
          className="min-w-0 flex-1 border-0 px-3 py-2.5 text-ink outline-none"
          type="number"
          min={min}
          step={step}
          value={Number.isNaN(value) ? "" : value}
          onChange={handleChange}
        />
        {suffix ? (
          <span className="grid min-w-14 place-items-center border-l border-line bg-field px-3 text-sm font-semibold text-slate-500">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}
