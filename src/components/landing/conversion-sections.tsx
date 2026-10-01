import { ArrowRight, Check, MessageCircleQuestion, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/landing/section-heading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/config/faq";
import { pricingPlans } from "@/config/pricing";
import { crmLinks } from "@/config/site";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="precios" className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Planes"
          title="Una estructura para cada etapa"
          description="Los precios definitivos se publicarán cuando la oferta comercial esté cerrada. La arquitectura ya permite actualizarlos desde un único archivo."
          align="center"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-[1.75rem] border border-border bg-background p-6 shadow-card sm:p-7",
                plan.featured && "border-primary bg-navy text-white shadow-preview lg:-translate-y-3",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[9px] font-bold tracking-[.12em] text-white uppercase">
                  Más flexible
                </span>
              )}
              <div>
                <p className={cn("text-xs font-bold tracking-[.15em] uppercase", plan.featured ? "text-accent" : "text-primary")}>{plan.name}</p>
                <p className={cn("mt-4 min-h-12 text-sm leading-6", plan.featured ? "text-white/55" : "text-muted")}>{plan.audience}</p>
                <div className={cn("mt-6 border-y py-5", plan.featured ? "border-white/10" : "border-border") }>
                  <p className={cn("text-2xl font-semibold tracking-tight", plan.featured ? "text-white" : "text-foreground")}>{plan.priceLabel}</p>
                  <p className={cn("mt-1 text-[10px]", plan.featured ? "text-white/35" : "text-muted")}>Información comercial próximamente</p>
                </div>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={cn("flex items-start gap-2.5 text-sm", plan.featured ? "text-white/70" : "text-muted-foreground") }>
                    <span className={cn("mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full", plan.featured ? "bg-accent/15 text-accent" : "bg-accent-soft text-accent") }><Check className="size-2.5" /></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.featured ? "dark" : "secondary"} size="lg" className="mt-8 w-full">
                <a href={crmLinks.register} data-track={`pricing_${plan.name.toLowerCase()}_register_clicked`}>
                  Comenzar <ArrowRight />
                </a>
              </Button>
            </article>
          ))}
        </div>
        <p className="mt-7 text-center text-xs leading-5 text-muted">
          Los nombres, alcances y precios de los planes son configurables y pueden cambiar antes del lanzamiento comercial.
        </p>
      </Container>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:gap-20">
          <div>
            <span className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <MessageCircleQuestion className="size-6" />
            </span>
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Lo esencial, sin letra pequeña"
              description="Respuestas claras para entender si Vantex CRM encaja con la forma en que trabaja tu empresa."
            />
            <p className="mt-6 text-sm text-muted">
              ¿Tienes una necesidad específica? <a href="/contacto" className="font-bold text-primary hover:text-primary-strong">Hablemos de tu caso.</a>
            </p>
          </div>

          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-surface px-5 shadow-card sm:px-7">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.25rem] bg-navy px-6 py-14 text-center text-white shadow-preview sm:px-10 sm:py-20 lg:px-20">
          <div className="noise pointer-events-none absolute inset-0" />
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-10" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[470px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-primary/25" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-accent/15" />
          <div className="relative mx-auto max-w-4xl">
            <span className="mx-auto flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[.07] text-accent"><Sparkles className="size-5" /></span>
            <h2 className="mt-7 text-balance font-display text-3xl font-semibold tracking-[-.05em] sm:text-5xl lg:text-[3.6rem] lg:leading-[1.08]">
              Tu negocio ya tiene una forma de trabajar. Ahora tu CRM también puede adaptarse a ella.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-white/55 sm:text-lg">
              Reúne clientes, procesos y equipo en una plataforma que evoluciona al ritmo de tu operación.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 min-[430px]:flex-row">
              <Button asChild variant="dark" size="lg" className="group">
                <a href={crmLinks.register} data-track="final_cta_register_clicked">
                  Comenzar gratis <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button asChild variant="outlineDark" size="lg">
                <a href={crmLinks.login} data-track="final_cta_login_clicked">Iniciar sesión</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
