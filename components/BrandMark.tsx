type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "h-10 w-10" }: BrandMarkProps) {
  return (
    <span
      className={`inline-grid place-items-center overflow-hidden rounded-xl bg-brand-900 text-white shadow-brand ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="h-full w-full" role="img">
        <rect width="48" height="48" rx="12" fill="#172033" />
        <path d="M10 16h28" stroke="#f8c471" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 24h28" stroke="#6cc7b7" strokeWidth="3" strokeLinecap="round" />
        <path d="M10 32h28" stroke="#d7edff" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 12v24M28 12v24" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
      </svg>
    </span>
  );
}
