type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  headingLevel?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, description, align = "left", headingLevel = "h2" }: SectionHeadingProps) {
  const Heading = headingLevel;
  const headingClassName =
    headingLevel === "h1"
      ? "mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
      : "mt-3 text-2xl font-black tracking-tight text-ink sm:text-3xl";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-accent-600 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-0.5 w-6 rounded-full bg-accent-500" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Heading className={headingClassName}>{title}</Heading>
      {description ? <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">{description}</p> : null}
    </div>
  );
}
