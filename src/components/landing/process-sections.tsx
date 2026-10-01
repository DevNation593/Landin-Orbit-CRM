import {
  ArrowDown,
  ArrowRight,
  BellRing,
  Bot,
  Check,
  CircleDollarSign,
  CircleUserRound,
  Clock3,
  Columns3,
  GitBranch,
  GripVertical,
  ListPlus,
  Mail,
  MapPin,
  MoreHorizontal,
  Plus,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  UserRoundCheck,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/landing/section-heading";

const builderFields = [
  ["Dirección", "Texto", MapPin],
  ["Precio", "Moneda", CircleDollarSign],
  ["Habitaciones", "Número", SlidersHorizontal],
  ["Propietario", "Relación", CircleUserRound],
  ["Estado", "Selección", ListPlus],
] as const;

export function CustomizationSection() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-[560px] rounded-[1.75rem] border border-border bg-background p-3 shadow-float sm:p-5">
              <div className="absolute -left-5 top-20 hidden rounded-xl border border-border bg-surface p-3 shadow-float sm:block animate-float">
                <Settings2 className="size-5 text-primary" />
              </div>
              <div className="rounded-2xl border border-border bg-surface">
                <div className="flex items-center justify-between border-b border-border px-4 py-3.5 sm:px-5">
                  <div>
                    <p className="text-[10px] font-bold tracking-[.13em] text-primary uppercase">Constructor de datos</p>
                    <h3 className="mt-1 text-sm font-bold sm:text-base">Crear entidad</h3>
                  </div>
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-bold text-accent">Sin código</span>
                </div>

                <div className="p-4 sm:p-5">
                  <p className="block text-[11px] font-semibold text-muted-foreground">Nombre de la entidad</p>
                  <div className="mt-2 flex items-center gap-2 rounded-xl border border-primary/30 bg-primary-soft/55 px-3 py-3 text-sm font-semibold">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                      <Columns3 className="size-4" />
                    </span>
                    Propiedad
                    <Check className="ml-auto size-4 text-accent" />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-[11px] font-semibold text-muted-foreground">Campos</p>
                    <button type="button" tabIndex={-1} className="flex items-center gap-1 text-[10px] font-bold text-primary" aria-hidden="true">
                      <Plus className="size-3" /> Agregar campo
                    </button>
                  </div>

                  <div className="mt-2 space-y-2">
                    {builderFields.map(([name, type, Icon]) => (
                      <div key={name} className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5">
                        <GripVertical className="size-3.5 text-border-strong" />
                        <span className="flex size-8 items-center justify-center rounded-lg bg-surface-soft text-muted-foreground">
                          <Icon className="size-3.5" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-semibold">{name}</p>
                          <p className="text-[9px] text-muted">{type}</p>
                        </div>
                        <MoreHorizontal className="ml-auto size-4 text-muted" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <span className="rounded-full border border-border px-3 py-2 text-[10px] font-semibold text-muted">Cancelar</span>
                    <span className="rounded-full bg-primary px-3 py-2 text-[10px] font-semibold text-white">Guardar entidad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Configuración"
              title="Configura tu CRM sin modificar código"
              description="Define la estructura que tu operación necesita. Vantex CRM conecta entidades, campos, relaciones, pipelines y automatizaciones sin convertir cada cambio en un proyecto técnico."
            />
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Crea una entidad", "Agrega sus campos", "Conecta relaciones", "Activa el proceso"].map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-xl border border-border bg-background p-3.5">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">{index + 1}</span>
                  <span className="text-sm font-semibold">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-7 rounded-2xl border border-accent/20 bg-accent-soft/60 p-5">
              <p className="text-sm font-bold text-foreground">El modelo crece contigo</p>
              <p className="mt-1.5 text-sm leading-6 text-muted">Añade nuevos procesos y tipos de información a medida que evoluciona tu negocio, manteniendo una base conectada.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const pipelineColumns = [
  {
    title: "Nuevo",
    count: 3,
    color: "bg-[#7777ee]",
    cards: [
      ["Consulta web", "$12.000", "Hoy, 10:30"],
      ["Nueva referencia", "$7.800", "Hoy, 09:15"],
    ],
  },
  {
    title: "Contactado",
    count: 2,
    color: "bg-[#35b89a]",
    cards: [
      ["Proyecto expansión", "$8.500", "Mañana"],
      ["Renovación anual", "$4.200", "Sep 04"],
    ],
  },
  {
    title: "Propuesta",
    count: 2,
    color: "bg-[#e9a23b]",
    cards: [
      ["Implementación regional", "$25.000", "Sep 02"],
      ["Servicio premium", "$9.600", "Sep 06"],
    ],
  },
  {
    title: "Negociación",
    count: 1,
    color: "bg-[#e47c72]",
    cards: [["Acuerdo corporativo", "$18.400", "Hoy, 16:00"]],
  },
  {
    title: "Ganado",
    count: 1,
    color: "bg-[#4eac73]",
    cards: [["Nuevo contrato", "$15.000", "Completado"]],
  },
] as const;

export function PipelineSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Pipelines"
            title="Cada proceso, visible de principio a fin"
            description="Organiza oportunidades en etapas claras, identifica bloqueos y sabe qué necesita avanzar sin perseguir actualizaciones."
          />
          <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-card">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary-soft text-primary"><GitBranch className="size-4" /></span>
            <div>
              <p className="text-[10px] text-muted">Pipeline</p>
              <p className="text-xs font-bold">Comercial · Vista de ejemplo</p>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-border bg-surface p-3 shadow-float sm:p-5">
          <div className="mb-4 flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-navy text-white"><Columns3 className="size-4" /></span>
              <div>
                <p className="text-xs font-bold">Pipeline principal</p>
                <p className="text-[9px] text-muted">Datos ilustrativos</p>
              </div>
            </div>
            <span className="hidden rounded-full border border-border px-3 py-1.5 text-[10px] font-semibold text-muted sm:inline-flex">Filtrar vista</span>
          </div>
          <div className="grid snap-x auto-cols-[245px] grid-flow-col gap-2.5 overflow-x-auto pb-2 lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-5 lg:overflow-visible">
            {pipelineColumns.map((column) => (
              <div key={column.title} className="snap-start rounded-xl bg-surface-soft/80 p-2.5">
                <div className="flex items-center gap-2 px-1 pb-2.5">
                  <span className={`size-2 rounded-full ${column.color}`} />
                  <p className="text-[11px] font-bold">{column.title}</p>
                  <span className="ml-auto rounded-full bg-surface px-1.5 py-0.5 text-[9px] font-bold text-muted">{column.count}</span>
                </div>
                <div className="space-y-2">
                  {column.cards.map(([name, amount, date]) => (
                    <article key={name} className="group rounded-xl border border-border bg-surface p-3 shadow-sm transition-transform hover:-translate-y-0.5">
                      <div className="flex items-start justify-between gap-2">
                        <span className="rounded-md bg-primary-soft px-1.5 py-1 text-[8px] font-bold text-primary">OPP</span>
                        <MoreHorizontal className="size-3.5 text-muted" />
                      </div>
                      <p className="mt-3 text-xs font-bold leading-5">{name}</p>
                      <p className="mt-1 text-sm font-semibold tracking-tight">{amount}</p>
                      <div className="mt-3 flex items-center justify-between border-t border-border pt-2.5">
                        <span className="flex items-center gap-1 text-[9px] text-muted"><Clock3 className="size-3" /> {date}</span>
                        <span className="flex size-6 items-center justify-center rounded-full bg-navy text-[8px] font-bold text-white">AM</span>
                      </div>
                    </article>
                  ))}
                  <div className="flex items-center justify-center gap-1 rounded-lg border border-dashed border-border-strong py-2 text-[9px] font-semibold text-muted">
                    <Plus className="size-3" /> Agregar
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const workflowSteps = [
  {
    type: "CUANDO",
    title: "Un lead completa un formulario",
    meta: "Formulario: Solicitar información",
    icon: Workflow,
    tone: "bg-primary/20 text-[#aaaaff] border-primary/30",
  },
  {
    type: "SI",
    title: "Presupuesto es mayor a $50.000",
    meta: "Condición del registro",
    icon: GitBranch,
    tone: "bg-warning/15 text-[#f3c06d] border-warning/25",
  },
  {
    type: "ENTONCES",
    title: "Asignar responsable senior",
    meta: "Equipo: Comercial",
    icon: UserRoundCheck,
    tone: "bg-accent/15 text-accent border-accent/25",
  },
] as const;

export function AutomationSection() {
  return (
    <section id="automatizaciones" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-10" />
      <div className="pointer-events-none absolute -left-36 bottom-0 size-[480px] rounded-full bg-primary/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-0 size-[380px] rounded-full bg-accent/10 blur-[120px]" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Automatizaciones"
              title="Automatiza el trabajo repetitivo"
              description="Define qué debe ocurrir ante cada cambio y deja que Vantex CRM coordine asignaciones, tareas y notificaciones de forma consistente."
              inverse
            />
            <div className="mt-8 space-y-4">
              {[
                ["Responde más rápido", "Activa el siguiente paso apenas ocurre un evento."],
                ["Reduce omisiones", "Convierte buenas prácticas en reglas de operación."],
                ["Escala el proceso", "Mantén la consistencia aunque crezca el volumen."],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-accent">0{index + 1}</span>
                  <div>
                    <p className="text-sm font-bold">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/50">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -inset-5 rounded-[2.5rem] border border-white/[.05]" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[.055] p-4 shadow-2xl backdrop-blur sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-white"><Bot className="size-4" /></span>
                  <div>
                    <p className="text-xs font-bold">Calificar nuevo lead</p>
                    <p className="text-[9px] text-white/40">Workflow activo</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[9px] font-bold text-accent">
                  <span className="size-1.5 rounded-full bg-accent" /> Activo
                </span>
              </div>

              <div className="space-y-0">
                {workflowSteps.map((step, index) => (
                  <div key={step.type}>
                    <div className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-[#111d31]/85 p-3.5 sm:p-4">
                      <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl border ${step.tone}`}><step.icon className="size-4" /></span>
                      <div className="min-w-0">
                        <p className="text-[8px] font-bold tracking-[.16em] text-white/35">{step.type}</p>
                        <p className="mt-1 truncate text-xs font-semibold sm:text-sm">{step.title}</p>
                        <p className="mt-1 text-[9px] text-white/35">{step.meta}</p>
                      </div>
                      <MoreHorizontal className="ml-auto size-4 shrink-0 text-white/25" />
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="mx-auto flex h-8 w-px items-center justify-center bg-white/15">
                        <ArrowDown className="size-3 shrink-0 rounded-full bg-navy text-white/45" />
                      </div>
                    )}
                  </div>
                ))}

                <div className="mx-auto flex h-8 w-px items-center justify-center bg-white/15">
                  <ArrowDown className="size-3 shrink-0 rounded-full bg-navy text-white/45" />
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-xl border border-accent/20 bg-accent/10 p-3.5">
                    <BellRing className="size-4 text-accent" />
                    <p className="mt-3 text-[10px] font-bold">Crear tarea de seguimiento</p>
                    <p className="mt-1 text-[8px] text-white/35">Vencimiento: en 1 día</p>
                  </div>
                  <div className="rounded-xl border border-primary/25 bg-primary/10 p-3.5">
                    <Mail className="size-4 text-[#aaaaff]" />
                    <p className="mt-3 text-[10px] font-bold">Enviar notificación</p>
                    <p className="mt-1 text-[8px] text-white/35">Canal: equipo comercial</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="flex items-center gap-1.5 text-[9px] text-white/35"><Sparkles className="size-3 text-accent" /> Última ejecución: hace 3 min</span>
                <span className="flex items-center gap-1 text-[9px] font-bold text-[#aaaaff]">Ver historial <ArrowRight className="size-3" /></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
