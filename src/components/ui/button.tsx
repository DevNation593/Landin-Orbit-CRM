import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform,border-color] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-y-px",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-[0_8px_24px_rgba(92,92,226,.22)] hover:bg-primary-strong hover:shadow-[0_10px_30px_rgba(92,92,226,.3)]",
        secondary:
          "border border-border-strong bg-surface text-foreground shadow-card hover:border-primary/40 hover:bg-primary-soft",
        ghost: "text-foreground hover:bg-surface-soft",
        dark: "bg-white text-navy shadow-lg hover:bg-white/90",
        outlineDark:
          "border border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-6 text-[15px]",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
