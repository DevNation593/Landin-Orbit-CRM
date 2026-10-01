import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  CarFront,
  CheckCircle2,
  CircleUserRound,
  GraduationCap,
  House,
  Layers3,
  ListChecks,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/landing/section-heading";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    title: "Centraliza el contexto",
    description: "Contactos, empresas, actividades, tareas y documentos conectados.",
    icon: Layers3,
  },
  {
    title: "Modela tus procesos",
    description: "Campos, entidades y pipelines que representan tu operación real.",
    icon: Route,
  },
  {
    title: "Automatiza el seguimiento",
    description: "Reglas y acciones para avanzar el trabajo con mayor consistencia.",
    icon: Bot,
  },
] as const;

export function HomeOverviewSection() {
  return (
    <section id="resumen" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.74fr_1.26fr] lg:items-end lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Una sola plataforma"
              title="Menos herramientas aisladas. Más claridad para avanzar."
              description="Vantex CRM reúne la información y los procesos esenciales sin obligar a tu empresa a trabajar dentro de un modelo rígido."
            />
            <Button asChild variant="secondary" className="mt-7 group">
              <Link href="/soluciones">
                Conoce la solución <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article key={capability.title} className="card-hover rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-6">
                <span className={`flex size-10 items-center justify-center rounded-xl ${index === 1 ? "bg-accent-soft text-accent" : "bg-primary-soft text-primary"}`}>
                  <capability.icon className="size-5" />
                </span>
                <h2 className="mt-7 font-display text-lg font-semibold tracking-tight">{capability.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const industriesPreview = [
  ["Inmobiliarias", "Propiedades y visitas", House],
  ["Automotriz", "Vehículos y servicios", CarFront],
  ["Seguros", "Pólizas y renovaciones", ShieldCheck],
  ["Educación", "Estudiantes y admisiones", GraduationCap],
  ["Servicios", "Proyectos y entregas", Wrench],
] as const;

export function HomeIndustriesSection() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-10" />
          <div className="pointer-events-none absolute -right-32 -top-36 size-[440px] rounded-full border border-primary/30" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold tracking-[.18em] text-accent uppercase">CRM multiindustria</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-[-.045em] sm:text-5xl">
                La industria cambia. La capacidad de adaptarse permanece.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/60">
                Configura las entidades, relaciones y etapas que tu sector necesita sin fragmentar la operación.
              </p>
              <Button asChild variant="dark" className="mt-7 group">
                <Link href="/industrias">
                  Explorar industrias <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {industriesPreview.map(([name, detail, Icon], index) => (
                <article key={name} className={`rounded-2xl border border-white/10 bg-white/[.055] p-4 backdrop-blur sm:p-5 ${index === industriesPreview.length - 1 ? "sm:col-span-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/[.08] text-[#aaaaff]"><Icon className="size-4" /></span>
                    <div><h3 className="text-sm font-bold">{name}</h3><p className="mt-0.5 text-[10px] text-white/50">{detail}</p></div>
                    <ArrowRight className="ml-auto size-3.5 text-white/25" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeAutomationSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="mx-auto max-w-lg rounded-[1.75rem] border border-border bg-surface p-4 shadow-float sm:p-5">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5"><span className="flex size-9 items-center justify-center rounded-xl bg-primary-soft text-primary"><Workflow className="size-4" /></span><div><p className="text-xs font-bold">Seguimiento de nuevos leads</p><p className="text-[9px] text-muted">Workflow de ejemplo</p></div></div>
                <span className="rounded-full bg-accent-soft px-2 py-1 text-[9px] font-bold text-accent">Activo</span>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  ["Cuando", "Se crea un nuevo lead", Sparkles],
                  ["Entonces", "Asignar responsable", CircleUserRound],
                  ["Después", "Crear tarea de seguimiento", ListChecks],
                ].map(([label, text, Icon], index) => (
                  <div key={label as string} className="relative flex items-center gap-3 rounded-xl border border-border bg-background p-3.5">
                    <span className={`flex size-9 items-center justify-center rounded-lg ${index === 1 ? "bg-accent-soft text-accent" : "bg-primary-soft text-primary"}`}><Icon className="size-4" /></span>
                    <div><p className="text-[8px] font-bold tracking-[.14em] text-muted uppercase">{label as string}</p><p className="mt-1 text-xs font-semibold">{text as string}</p></div>
                    {index < 2 && <span className="absolute -bottom-2.5 left-[31px] z-10 h-3 w-px bg-border-strong" />}
                    <CheckCircle2 className="ml-auto size-4 text-accent" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Automatización"
              title="El trabajo repetitivo no debería frenar a tu equipo"
              description="Convierte disparadores, condiciones y acciones en flujos que asignan responsables, crean tareas y mantienen cada proceso en movimiento."
            />
            <Button asChild variant="secondary" className="mt-7 group">
              <Link href="/automatizaciones">
                Ver automatizaciones <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AutomationUseCasesSection() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Casos de uso"
          title="Reglas útiles para procesos reales"
          description="Ejemplos de cómo una automatización puede reducir pasos manuales sin ocultar el control a tu equipo."
          align="center"
        />
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {[
            ["Distribución de leads", "Asigna nuevos registros según zona, presupuesto o disponibilidad del equipo.", CircleUserRound],
            ["Seguimientos consistentes", "Crea tareas y recordatorios cuando un proceso cambia de etapa.", ListChecks],
            ["Procesos conectados", "Actualiza datos relacionados cuando se completa una condición definida.", Settings2],
          ].map(([title, description, Icon]) => (
            <article key={title as string} className="card-hover rounded-2xl border border-border bg-background p-6 shadow-card">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary"><Icon className="size-5" /></span>
              <h2 className="mt-8 font-display text-xl font-semibold tracking-tight">{title as string}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{description as string}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function IntegrationPrinciplesSection() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Ecosistema"
            title="Conexiones útiles, comunicadas con transparencia"
            description="Cada integración se publicará solo cuando esté disponible y con su alcance documentado."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Estado visible", "Cada conexión indica si está disponible o próxima.", CheckCircle2],
              ["Datos controlados", "El alcance y los permisos deben ser explícitos.", ShieldCheck],
              ["Arquitectura abierta", "APIs y webhooks forman parte de la evolución prevista.", Building2],
            ].map(([title, description, Icon]) => (
              <article key={title as string} className="rounded-2xl border border-border bg-background p-5">
                <Icon className="size-5 text-primary" />
                <h2 className="mt-6 text-sm font-bold">{title as string}</h2>
                <p className="mt-2 text-xs leading-5 text-muted">{description as string}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
