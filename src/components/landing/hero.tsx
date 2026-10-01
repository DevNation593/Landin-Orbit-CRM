import { ArrowRight, CheckCircle2, Play } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { crmLinks } from "@/config/site";
import { DashboardPreview } from "@/components/landing/dashboard-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40 lg:min-h-[860px] lg:pb-28 lg:pt-44">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20" />
      <div className="noise pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-[8%] top-20 -z-10 size-[420px] rounded-full bg-primary/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[16%] -z-10 size-[500px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="brand-ring pointer-events-none absolute -left-52 top-16 -z-10 h-[500px] w-[820px] opacity-50" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-10 xl:gap-16">
          <div className="max-w-[630px] lg:pb-8">
            <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft/70 px-3 py-1.5 text-[11px] font-bold tracking-[.15em] text-primary uppercase shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              CRM multiindustria
            </div>

            <h1 className="reveal reveal-delay-1 text-balance font-display text-[2.8rem] leading-[1.02] font-semibold tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Un CRM que se adapta a <span className="gradient-text">tu negocio.</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-pretty text-lg leading-8 text-muted sm:text-xl">
              Gestiona clientes, procesos y oportunidades desde una plataforma configurable para cualquier industria.
            </p>

            <div className="reveal reveal-delay-2 mt-8 flex flex-col gap-3 min-[430px]:flex-row">
              <Button asChild size="lg" className="group">
                <a href={crmLinks.register} data-track="hero_register_clicked">
                  Comenzar gratis
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/producto" data-track="hero_product_clicked">
                  <Play className="fill-current" />
                  Ver cómo funciona
                </a>
              </Button>
            </div>

            <div className="reveal reveal-delay-2 mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm">
              {["Acceso desde el navegador", "Configuración adaptable", "Sin instalaciones"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2 lg:-mr-16 xl:-mr-24">
            <DashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}
