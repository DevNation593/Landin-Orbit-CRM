import {
  ArrowDownRight,
  Bot,
  ChartNoAxesCombined,
  Files,
  Layers3,
  MessageSquareText,
  Network,
  Route,
  Shapes,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/landing/section-heading";

const audiences = [
  "Inmobiliarias",
  "Servicios",
  "Automotriz",
  "Educación",
  "Seguros",
  "Salud",
  "Legal",
] as const;

const problems = [
  {
    title: "Información dispersa",
    description: "Clientes entre hojas de cálculo, mensajes, correos y documentos.",
    icon: Files,
    marker: "01",
  },
  {
    title: "Procesos manuales",
    description: "Seguimientos que dependen de recordatorios y tareas repetidas a mano.",
    icon: MessageSquareText,
    marker: "02",
  },
  {
    title: "Herramientas rígidas",
    description: "Sistemas que fuerzan a tu operación a encajar en un molde ajeno.",
    icon: Shapes,
    marker: "03",
  },
  {
    title: "Falta de visibilidad",
    description: "Dificultad para entender qué ocurre y qué necesita atención ahora.",
    icon: ChartNoAxesCombined,
    marker: "04",
  },
] as const;

const valuePoints = [
  ["Información centralizada", "Una fuente compartida para cada relación.", Layers3],
  ["Procesos configurables", "Flujos que reflejan cómo opera tu empresa.", Route],
  ["Automatización", "Reglas que mantienen el trabajo en movimiento.", Bot],
  ["Datos conectados", "Contexto visible para decidir y colaborar.", Network],
] as const;

export function AudienceStrip() {
  return (
    <section aria-label="Industrias atendidas" className="border-y border-border bg-surface/65">
      <Container className="py-7 sm:py-8">
        <p className="mb-5 text-center text-[11px] font-bold tracking-[.16em] text-muted uppercase">
          Diseñado para equipos de cualquier industria
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-10 lg:justify-between">
          {audiences.map((audience, index) => (
            <span key={audience} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <span className={`size-1.5 rounded-full ${index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-accent" : "bg-warning"}`} />
              {audience}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section id="soluciones" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="El problema"
            title={<>Tu negocio no debería adaptarse a las limitaciones de un CRM.</>}
            description="Cuando la información y los procesos viven separados, tu equipo dedica más tiempo a buscar contexto que a avanzar."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((problem) => (
              <article key={problem.title} className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-6">
                <span className="absolute right-4 top-3 font-display text-3xl font-semibold text-surface-strong transition-colors group-hover:text-primary-soft">
                  {problem.marker}
                </span>
                <span className="mb-8 flex size-10 items-center justify-center rounded-xl bg-surface-soft text-muted-foreground transition-colors group-hover:bg-primary-soft group-hover:text-primary">
                  <problem.icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{problem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{problem.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ValueSection() {
  return (
    <section id="nosotros" className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full border border-primary/30" />
          <div className="pointer-events-none absolute -right-20 -top-20 size-[320px] rounded-full border border-accent/20" />
          <div className="relative grid gap-12 lg:grid-cols-[.84fr_1.16fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-bold tracking-[.18em] text-accent uppercase">La propuesta Vantex CRM</p>
              <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl lg:text-6xl">
                Todo tu negocio.<br />Un solo CRM.<br />
                <span className="text-[#9b9bff]">A tu manera.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
                Vantex CRM convierte datos, relaciones y acciones en un sistema operativo común para todo tu equipo.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {valuePoints.map(([title, description, Icon], index) => (
                <article key={title} className="group rounded-2xl border border-white/10 bg-white/[.055] p-5 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[.08] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`flex size-10 items-center justify-center rounded-xl ${index % 2 ? "bg-accent/15 text-accent" : "bg-primary/25 text-[#a8a8ff]"}`}>
                      <Icon className="size-5" />
                    </span>
                    <ArrowDownRight className="size-4 text-white/25 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white/60" />
                  </div>
                  <h3 className="mt-7 font-display text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/52">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
