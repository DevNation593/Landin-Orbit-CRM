import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-7 lg:px-10", className)}>
      {children}
    </div>
  );
}
