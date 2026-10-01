import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CalendarCheck2,
  CheckCircle2,
  CircleUserRound,
  Clock3,
  FolderOpen,
  MessageCircle,
  MessageSquareText,
  MoreHorizontal,
  Paperclip,
  Phone,
  PieChart,
  Send,
  Sparkles,
  Target,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/landing/section-heading";

const activityItems = [
  {
    time: "10:40",
    title: "Llamada realizada",
    detail: "Seguimiento de propuesta · 12 min",
    icon: Phone,
    color: "bg-primary-soft text-primary",
  },
  {
    time: "09:15",
    title: "Propuesta enviada",
    detail: "Propuesta_comercial.pdf · 2.4 MB",
    icon: Send,
    color: "bg-accent-soft text-accent",
  },
  {
    time: "Ayer",
    title: "Lead creado",
    detail: "Origen: formulario del sitio web",
    icon: Sparkles,
    color: "bg-[#fff4dc] text-[#bd7921]",
  },
] as const;

export function CustomerHubSection() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Vista 360°"
              title="Toda la información de tus clientes en un solo lugar"
              description="Cada contacto reúne su información, actividad, negocios, tareas, notas y archivos. Tu equipo obtiene el contexto completo antes de actuar."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Historial continuo", "Cada interacción queda conectada al registro.", Activity],
                ["Próximo paso claro", "Tareas y responsables visibles para todos.", CalendarCheck2],
                ["Documentos a mano", "Archivos organizados junto al contexto.", FolderOpen],
                ["Relaciones conectadas", "Contactos, empresas y procesos vinculados.", UsersRound],
              ].map(([title, description, Icon]) => (
                <div key={title as string} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary"><Icon className="size-4" /></span>
                  <div>
                    <p className="text-sm font-bold">{title as string}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{description as string}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 z-10 hidden items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 shadow-float sm:flex animate-float">
              <CheckCircle2 className="size-4 text-accent" />
              <span className="text-[10px] font-bold">Ficha actualizada</span>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-border bg-background p-3 shadow-float sm:p-5">
              <div className="rounded-2xl border border-border bg-surface">
                <div className="flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white">JP</span>
                    <div>
                      <h3 className="text-sm font-bold">Juan Pérez</h3>
                      <p className="mt-0.5 text-[10px] text-muted">Director de operaciones · Cuenta de ejemplo</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[9px] font-bold text-muted-foreground"><Phone className="size-3" /> Llamar</span>
                    <span className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[9px] font-bold text-white"><MessageCircle className="size-3" /> Mensaje</span>
                  </div>
                </div>

                <div className="flex gap-4 overflow-x-auto border-b border-border px-4 text-[10px] font-semibold text-muted sm:px-5">
                  {["Información", "Actividad", "Negocios", "Tareas", "Notas", "Archivos"].map((tab, index) => (
                    <span key={tab} className={`shrink-0 border-b-2 py-3 ${index === 1 ? "border-primary text-primary" : "border-transparent"}`}>{tab}</span>
                  ))}
                </div>

                <div className="grid md:grid-cols-[1.2fr_.8fr]">
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold">Actividad reciente</p>
                        <p className="mt-0.5 text-[9px] text-muted">Últimas interacciones registradas</p>
                      </div>
                      <span className="rounded-full border border-border px-2.5 py-1 text-[9px] font-semibold text-muted">Todo</span>
                    </div>
                    <div className="relative mt-5 space-y-5 before:absolute before:bottom-5 before:left-[17px] before:top-5 before:w-px before:bg-border">
                      {activityItems.map((item) => (
                        <div key={item.title} className="relative flex gap-3">
                          <span className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border-4 border-surface ${item.color}`}><item.icon className="size-3.5" /></span>
                          <div className="min-w-0 flex-1 rounded-xl bg-background p-3">
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-[10px] font-bold sm:text-[11px]">{item.title}</p>
                              <time className="text-[8px] text-muted">{item.time}</time>
                            </div>
                            <p className="mt-1 truncate text-[9px] text-muted">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <aside className="border-t border-border bg-background p-4 md:border-l md:border-t-0 sm:p-5">
                    <p className="text-xs font-bold">Resumen</p>
                    <dl className="mt-4 space-y-3">
                      {[
                        ["Responsable", "Andrea M."],
                        ["Estado", "En negociación"],
                        ["Último contacto", "Hoy, 10:40"],
                        ["Próxima tarea", "Mañana"],
                      ].map(([term, detail]) => (
                        <div key={term} className="flex items-center justify-between gap-3 border-b border-border pb-2.5 last:border-0">
                          <dt className="text-[9px] text-muted">{term}</dt>
                          <dd className="text-right text-[9px] font-bold">{detail}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-5 rounded-xl border border-primary/15 bg-primary-soft/60 p-3">
                      <p className="text-[9px] font-bold text-primary">Próximo paso</p>
                      <p className="mt-1.5 text-[10px] font-semibold">Revisar propuesta con el cliente</p>
                      <p className="mt-2 flex items-center gap-1 text-[8px] text-muted"><Clock3 className="size-3" /> Mañana, 11:00</p>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CollaborationSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -bottom-48 -right-32 size-[480px] rounded-full bg-accent/10 blur-[100px]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Colaboración"
                title="Todo tu equipo trabajando con la misma información"
                description="Responsables, comentarios, actividades, tareas y permisos viven junto al trabajo. Menos mensajes para pedir contexto; más claridad para ejecutar."
              />
              <div className="mt-7 flex flex-wrap gap-2">
                {["Responsables", "Comentarios", "Tareas", "Notificaciones", "Roles", "Permisos"].map((item) => (
                  <span key={item} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground">{item}</span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="rounded-2xl border border-border bg-background p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent"><MessageSquareText className="size-4" /></span>
                    <div><p className="text-xs font-bold">Comentarios del equipo</p><p className="text-[9px] text-muted">Propuesta comercial</p></div>
                  </div>
                  <MoreHorizontal className="size-4 text-muted" />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy text-[9px] font-bold text-white">AM</span>
                    <div className="rounded-r-xl rounded-bl-xl bg-surface p-3 shadow-sm">
                      <div className="flex items-center gap-2"><p className="text-[10px] font-bold">Andrea M.</p><span className="text-[8px] text-muted">10:32</span></div>
                      <p className="mt-1.5 text-[10px] leading-5 text-muted-foreground">Ya incorporé los cambios. <span className="font-bold text-primary">@Carlos</span>, ¿puedes validar el alcance final?</p>
                      <div className="mt-2 flex w-fit items-center gap-1 rounded-md border border-border px-2 py-1 text-[8px] font-semibold"><Paperclip className="size-2.5" /> Propuesta_v3.pdf</div>
                    </div>
                  </div>
                  <div className="flex gap-3 pl-8 sm:pl-12">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-[9px] font-bold text-primary">CR</span>
                    <div className="rounded-r-xl rounded-bl-xl bg-primary-soft/60 p-3">
                      <div className="flex items-center gap-2"><p className="text-[10px] font-bold">Carlos R.</p><span className="text-[8px] text-muted">10:41</span></div>
                      <p className="mt-1.5 text-[10px] leading-5 text-muted-foreground">Revisado. Todo listo para enviar al cliente.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5">
                  <CircleUserRound className="size-4 text-muted" />
                  <span className="flex-1 text-[9px] text-muted">Escribe un comentario...</span>
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary text-white"><Send className="size-3" /></span>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-3 flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 shadow-float sm:-right-6">
                <UserRoundCheck className="size-4 text-accent" />
                <div><p className="text-[9px] font-bold">Tarea asignada</p><p className="text-[8px] text-muted">Carlos · Ahora</p></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const reportMetrics = [
  ["Conversión", "31,8%", "+4,2%", Target],
  ["Nuevos leads", "148", "+12,5%", UsersRound],
  ["Negocios ganados", "24", "+8,1%", CheckCircle2],
  ["Actividades", "386", "+18,4%", Activity],
] as const;

export function ReportsSection() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Reportes"
          title="Decisiones basadas en datos, no en suposiciones"
          description="Convierte la actividad diaria en una lectura clara de conversión, pipeline, productividad y rendimiento."
          align="center"
        />

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border bg-background p-3 shadow-float sm:p-5">
          <div className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold">Panel de rendimiento</p>
                <p className="mt-1 text-[9px] text-muted">Datos ilustrativos · Últimos 30 días</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[9px] font-semibold text-muted"><CalendarCheck2 className="size-3" /> 01 ago — 30 ago</span>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {reportMetrics.map(([label, value, change, Icon]) => (
                <div key={label} className="rounded-xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary-soft text-primary"><Icon className="size-3.5" /></span>
                    <span className="flex items-center gap-0.5 text-[9px] font-bold text-accent"><ArrowUpRight className="size-3" /> {change}</span>
                  </div>
                  <p className="mt-4 text-[10px] text-muted">{label}</p>
                  <p className="mt-1 font-display text-2xl font-semibold tracking-tight">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 lg:grid-cols-[1.35fr_.65fr]">
              <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div><p className="text-xs font-bold">Evolución del pipeline</p><p className="mt-1 text-[9px] text-muted">Valor por semana</p></div>
                  <BarChart3 className="size-4 text-muted" />
                </div>
                <div className="mt-6 flex h-[180px] items-end gap-2 sm:gap-4" aria-label="Gráfico de barras ilustrativo">
                  {[38, 52, 45, 68, 61, 78, 72, 88, 80, 94, 86, 100].map((height, index) => (
                    <div key={index} className="group flex h-full flex-1 items-end">
                      <div className="w-full rounded-t-md bg-primary/15 transition-colors group-hover:bg-primary" style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[8px] text-muted"><span>Semana 1</span><span>Semana 6</span><span>Semana 12</span></div>
              </div>

              <div className="rounded-xl border border-border bg-navy p-4 text-white sm:p-5">
                <div className="flex items-center justify-between"><div><p className="text-xs font-bold">Distribución</p><p className="mt-1 text-[9px] text-white/35">Procesos por estado</p></div><PieChart className="size-4 text-white/35" /></div>
                <div className="mx-auto mt-6 flex size-32 items-center justify-center rounded-full bg-[conic-gradient(#6565ee_0_42%,#35b89a_42%_70%,#e9a23b_70%_88%,#ffffff22_88%)]">
                  <div className="flex size-20 flex-col items-center justify-center rounded-full bg-navy"><span className="text-2xl font-bold">64</span><span className="text-[8px] text-white/40">procesos</span></div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-2 text-[8px] text-white/55">
                  {["En gestión", "Propuesta", "Negociación", "Otros"].map((item, index) => <span key={item} className="flex items-center gap-1.5"><span className={`size-1.5 rounded-full ${["bg-primary", "bg-accent", "bg-warning", "bg-white/20"][index]}`} /> {item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
