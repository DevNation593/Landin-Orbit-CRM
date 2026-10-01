import {
  AppWindow,
  Braces,
  CalendarDays,
  Check,
  CloudCog,
  DatabaseBackup,
  FileClock,
  KeyRound,
  LockKeyhole,
  Mail,
  MessageCircleMore,
  Network,
  PlugZap,
  ShieldCheck,
  UserCog,
  UsersRound,
  Webhook,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/landing/section-heading";

const integrations = [
  { name: "Google", subtitle: "Workspace", icon: AppWindow, tone: "bg-[#eef3ff] text-[#4074d8]" },
  { name: "Microsoft", subtitle: "Microsoft 365", icon: CloudCog, tone: "bg-[#edf8ff] text-[#2786b7]" },
  { name: "WhatsApp", subtitle: "Mensajería", icon: MessageCircleMore, tone: "bg-accent-soft text-accent" },
  { name: "Email", subtitle: "Correo", icon: Mail, tone: "bg-[#fff3e6] text-[#c97d27]" },
  { name: "Calendario", subtitle: "Agenda", icon: CalendarDays, tone: "bg-primary-soft text-primary" },
  { name: "Webhooks", subtitle: "Eventos", icon: Webhook, tone: "bg-[#f1edff] text-[#7956c7]" },
  { name: "API", subtitle: "Desarrolladores", icon: Braces, tone: "bg-[#e9eef5] text-[#52657c]" },
] as const;

export function IntegrationsSection() {
  return (
    <section id="integraciones" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Integraciones"
              title="Conecta Vantex CRM con las herramientas que ya usas"
              description="Estamos preparando un ecosistema para que los datos fluyan entre tu CRM y las herramientas clave de tu operación."
            />
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-warning/25 bg-[#fff7e8] px-3 py-1.5 text-xs font-bold text-[#a76a1d]">
              <PlugZap className="size-3.5" /> Integraciones mostradas: próximamente
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              La disponibilidad se comunicará por integración. No presentamos conexiones futuras como funcionalidades activas.
            </p>
          </div>

          <div className="relative min-h-[460px]">
            <div className="brand-ring absolute left-1/2 top-1/2 h-[270px] w-[500px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 opacity-80" />
            <div className="brand-ring absolute left-1/2 top-1/2 h-[380px] w-[580px] max-w-[98vw] -translate-x-1/2 -translate-y-1/2 opacity-40" />
            <div className="absolute left-1/2 top-1/2 z-10 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.75rem] border border-primary/20 bg-navy text-white shadow-preview">
              <span className="relative flex size-10 items-center justify-center rounded-full bg-primary">
                <span className="size-3 rounded-full bg-white" />
                <span className="absolute h-5 w-12 rotate-[-28deg] rounded-full border border-white/80" />
              </span>
              <span className="mt-2 text-xs font-bold">Vantex CRM</span>
            </div>
            <div className="relative grid h-[460px] grid-cols-2 content-between gap-3 sm:grid-cols-3">
              {integrations.map((integration, index) => (
                <article
                  key={integration.name}
                  className={`relative z-20 flex items-center gap-3 self-center rounded-2xl border border-border bg-surface p-3 shadow-card transition-transform hover:-translate-y-1 sm:p-4 ${
                    index === integrations.length - 1 ? "col-span-2 mx-auto w-1/2 min-w-40 sm:col-span-1 sm:mx-0 sm:w-auto" : ""
                  }`}
                >
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${integration.tone}`}><integration.icon className="size-5" /></span>
                  <div className="min-w-0"><p className="truncate text-xs font-bold">{integration.name}</p><p className="mt-0.5 truncate text-[9px] text-muted">{integration.subtitle}</p></div>
                  <span className="absolute -right-1.5 -top-2 rounded-full border border-warning/20 bg-[#fff7e8] px-1.5 py-0.5 text-[7px] font-bold text-[#a76a1d]">Próximamente</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const securityFeatures = [
  ["Control por roles", "Accesos alineados con cada responsabilidad.", UserCog],
  ["Permisos", "Acciones y datos disponibles según autorización.", KeyRound],
  ["Auditoría", "Registro de cambios para mantener trazabilidad.", FileClock],
  ["Aislamiento", "Información separada entre organizaciones.", Network],
  ["Backups", "Copias de respaldo para proteger la continuidad.", DatabaseBackup],
  ["Sesiones seguras", "Acceso web protegido mediante HTTPS.", LockKeyhole],
] as const;

export function SecuritySection() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-10" />
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-primary/20 blur-[90px]" />
          <div className="relative grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20">
            <div>
              <span className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                <ShieldCheck className="size-7" />
              </span>
              <SectionHeading
                eyebrow="Seguridad"
                title="Tus datos bajo control"
                description="Capas de acceso, separación y trazabilidad para que la información correcta esté disponible para las personas correctas."
                inverse
              />
              <p className="mt-5 text-xs leading-5 text-white/35">
                Vantex CRM no declara certificaciones que aún no han sido obtenidas. La confianza empieza por comunicar con transparencia.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {securityFeatures.map(([title, description, Icon]) => (
                <article key={title} className="bg-navy/95 p-5 transition-colors hover:bg-navy-soft sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/[.07] text-[#a8a8ff]"><Icon className="size-4" /></span>
                    <div><h3 className="text-sm font-bold">{title}</h3><p className="mt-1.5 text-xs leading-5 text-white/45">{description}</p></div>
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

const steps = [
  {
    number: "01",
    title: "Crea tu organización",
    description: "Define tu espacio de trabajo y la información básica de tu empresa.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Configura tu CRM",
    description: "Adapta campos, entidades y pipelines al proceso que ya utilizas.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Invita a tu equipo",
    description: "Asigna roles y reúne a todos alrededor de la misma información.",
    icon: UserCog,
  },
  {
    number: "04",
    title: "Empieza a automatizar",
    description: "Activa reglas para ejecutar el trabajo repetitivo con consistencia.",
    icon: PlugZap,
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Implementación"
          title="De cero a un CRM hecho para ti"
          description="Empieza con la estructura esencial y añade complejidad solo cuando tu operación la necesite."
          align="center"
        />
        <ol className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t border-dashed border-border-strong lg:block" aria-hidden="true" />
          {steps.map((step, index) => (
            <li key={step.number} className="card-hover relative rounded-2xl border border-border bg-surface p-5 text-center shadow-card sm:p-6">
              <span className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary-soft text-primary shadow-[0_0_0_8px_var(--background)]">
                <step.icon className="size-6" />
              </span>
              <p className="mt-7 text-[10px] font-bold tracking-[.16em] text-primary">PASO {step.number}</p>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              {index < steps.length - 1 && <span className="absolute -right-2 top-7 z-20 hidden size-4 items-center justify-center rounded-full bg-primary text-[8px] text-white lg:flex"><Check className="size-2.5" /></span>}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
