import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { Container } from "@/components/layout/container";

export function PageHero({
  eyebrow,
  title,
  description,
  currentPage,
  points,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  currentPage: string;
  points: readonly [string, string, string];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pb-18 pt-32 sm:pb-24 sm:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20" />
      <div className="noise pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute right-[-8%] top-10 -z-10 size-[440px] rounded-full bg-primary/10 blur-[120px]" />
      <Container>
        <nav aria-label="Migas de pan" className="mb-8 flex items-center gap-2 text-xs font-semibold text-muted">
          <Link href="/" className="transition-colors hover:text-primary">Inicio</Link>
          <ChevronRight className="size-3" />
          <span aria-current="page" className="text-foreground">{currentPage}</span>
        </nav>
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold tracking-[.18em] text-primary uppercase">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.04] tracking-[-.05em] sm:text-6xl lg:text-[4.3rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">{description}</p>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="brand-ring absolute left-1/2 top-1/2 h-64 w-[460px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 opacity-60" />
            <div className="relative space-y-3 rounded-[1.75rem] border border-border bg-surface/90 p-4 shadow-float backdrop-blur sm:p-5">
              <div className="flex items-center justify-between border-b border-border px-1 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex size-9 items-center justify-center rounded-full bg-primary">
                    <span className="size-2.5 rounded-full bg-white" />
                    <span className="absolute h-4 w-10 rotate-[-28deg] rounded-full border border-white/70" />
                  </span>
                  <div><p className="text-xs font-bold">Vantex CRM</p><p className="text-[9px] text-muted">Configurado a tu manera</p></div>
                </div>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[9px] font-bold text-accent">Flexible</span>
              </div>
              {points.map((point, index) => (
                <div key={point} className="flex items-center gap-3 rounded-xl border border-border bg-background p-3.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-xs font-bold text-primary">0{index + 1}</span>
                  <span className="text-sm font-semibold">{point}</span>
                  <ArrowRight className="ml-auto size-3.5 text-muted" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
