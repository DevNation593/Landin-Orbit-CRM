import { cn } from "@/lib/utils";

export function Logo({
  className,
  markOnly = false,
  inverse = false,
}: {
  className?: string;
  markOnly?: boolean;
  inverse?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        aria-hidden="true"
        className="size-8 shrink-0"
        viewBox="0 0 36 36"
        fill="none"
      >
        <circle cx="18" cy="18" r="7" fill="currentColor" className="text-primary" />
        <ellipse
          cx="18"
          cy="18"
          rx="15"
          ry="7.4"
          transform="rotate(-28 18 18)"
          stroke="currentColor"
          strokeWidth="2.5"
          className={inverse ? "text-white" : "text-navy"}
        />
        <circle cx="29" cy="10" r="2.4" fill="currentColor" className="text-accent" />
      </svg>
      {!markOnly && (
        <span
          className={cn(
            "font-display text-[19px] font-bold tracking-[-0.035em]",
            inverse ? "text-white" : "text-navy dark:text-white",
          )}
        >
          Vantex<span className="text-primary"> CRM</span>
        </span>
      )}
    </span>
  );
}
