import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase",
          inverse ? "text-accent" : "text-primary",
        )}
      >
        <span className={cn("h-px w-6", inverse ? "bg-accent" : "bg-primary")} />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "text-balance font-display text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.06]",
          inverse ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-7 sm:text-lg",
            inverse ? "text-white/62" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
