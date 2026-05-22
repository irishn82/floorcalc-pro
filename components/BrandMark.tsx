import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  variant?: "mark" | "wordmark";
};

export function BrandMark({ className, priority = false, variant = "mark" }: BrandMarkProps) {
  const isWordmark = variant === "wordmark";

  return (
    <Image
      src={isWordmark ? "/fcplogo-wordmark.png" : "/fcplogo-icon.png"}
      alt=""
      aria-hidden="true"
      width={isWordmark ? 970 : 512}
      height={isWordmark ? 330 : 512}
      priority={priority}
      className={
        className ??
        (isWordmark
          ? "h-14 w-auto max-w-full rounded-md object-contain"
          : "h-10 w-10 rounded-xl object-contain shadow-brand")
      }
    />
  );
}
