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
      ? "mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl"
      : "mt-3 text-2xl font-black tracking-normal text-ink";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-wide text-accent-600">{eyebrow}</p> : null}
      <Heading className={headingClassName}>{title}</Heading>
      {description ? <p className="mt-3 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}
