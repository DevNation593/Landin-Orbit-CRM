import {
  Bell,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  ContactRound,
  LayoutDashboard,
  MoreHorizontal,
  Search,
  Settings2,
  Sparkles,
  Target,
} from "lucide-react";

const metrics = [
  { label: "Nuevos registros", value: "148", change: "+12%", color: "text-[#66dfc2]" },
  { label: "Procesos activos", value: "64", change: "+8%", color: "text-[#a6a6ff]" },
  { label: "Conversión", value: "31%", change: "+4%", color: "text-[#f6c76e]" },
] as const;

const stages = [
  { label: "Nuevo", count: 12, color: "bg-[#8989ff]" },
  { label: "En gestión", count: 8, color: "bg-[#4bc9ad]" },
  { label: "Propuesta", count: 5, color: "bg-[#efad52]" },
  { label: "Completado", count: 3, color: "bg-[#53b57b]" },
] as const;

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[720px] lg:ml-auto">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary/12 blur-3xl" />
      <div className="absolute -right-2 -top-4 z-20 hidden items-center gap-2 rounded-full border border-white/15 bg-navy-soft/90 px-3 py-2 text-[11px] font-medium text-white shadow-xl backdrop-blur sm:flex animate-float">
        <span className="flex size-6 items-center justify-center rounded-full bg-accent/20 text-accent">
          <Sparkles className="size-3.5" />
        </span>
        Vista de ejemplo
      </div>

      <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0c1527] p-1.5 shadow-preview sm:rounded-[1.75rem] sm:p-2">
        <div className="flex h-8 items-center gap-1.5 px-2 sm:h-10 sm:px-3">
          <span className="size-2 rounded-full bg-[#ff6b6b] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#f5c451] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#4bc985] sm:size-2.5" />
          <div className="ml-3 hidden h-5 flex-1 items-center justify-center rounded-md border border-white/[.06] bg-white/[.035] text-[8px] text-white/35 sm:flex">
            app.vantexcrm.com/dashboard
          </div>
        </div>

        <div className="flex min-h-[390px] overflow-hidden rounded-[1rem] border border-white/[.06] bg-[#111c2f] sm:min-h-[460px] sm:rounded-[1.25rem]">
          <aside className="hidden w-[108px] shrink-0 border-r border-white/[.07] bg-[#0e182a] p-3 sm:block md:w-[138px] md:p-4">
            <div className="mb-7 flex items-center gap-2 text-white">
              <span className="relative flex size-6 items-center justify-center rounded-full bg-[#6565ee]">
                <span className="size-2 rounded-full bg-white" />
              </span>
              <span className="text-[11px] font-bold md:text-xs">Vantex CRM</span>
            </div>
            <div className="space-y-1.5">
              {[
                [LayoutDashboard, "Inicio", true],
                [ContactRound, "Contactos", false],
                [Target, "Pipelines", false],
                [CalendarDays, "Actividades", false],
                [Building2, "Entidades", false],
              ].map(([Icon, label, active]) => {
                const IconComponent = Icon as typeof LayoutDashboard;
                return (
                  <div
                    key={label as string}
                    className={`flex items-center gap-2 rounded-lg px-2 py-2 text-[8px] md:text-[9px] ${
                      active ? "bg-white/[.08] text-white" : "text-white/45"
                    }`}
                  >
                    <IconComponent className="size-3.5" />
                    <span>{label as string}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 border-t border-white/[.07] pt-4">
              <div className="flex items-center gap-2 text-[8px] text-white/45 md:text-[9px]">
                <Settings2 className="size-3.5" /> Configuración
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1 bg-[#f5f7fb] text-[#182336]">
            <div className="flex h-11 items-center justify-between border-b border-[#e6e9f0] bg-white px-3 sm:h-14 sm:px-4">
              <div>
                <p className="text-[7px] text-[#8791a2] sm:text-[9px]">Organización</p>
                <div className="flex items-center gap-1 text-[9px] font-semibold sm:text-[11px]">
                  Mi organización <ChevronDown className="size-2.5" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden h-7 w-28 items-center gap-1.5 rounded-lg bg-[#f2f4f8] px-2 text-[8px] text-[#8a94a5] md:flex">
                  <Search className="size-3" /> Buscar...
                </div>
                <span className="flex size-7 items-center justify-center rounded-full border border-[#e5e9f0] bg-white text-[#647085]">
                  <Bell className="size-3" />
                </span>
                <span className="flex size-7 items-center justify-center rounded-full bg-[#e8e8ff] text-[#5c5ce2]">
                  <CircleUserRound className="size-4" />
                </span>
              </div>
            </div>

            <div className="p-3 sm:p-4 md:p-5">
              <div className="mb-3 flex items-end justify-between sm:mb-4">
                <div>
                  <p className="text-[7px] font-medium uppercase tracking-[.16em] text-[#8b95a5] sm:text-[8px]">Resumen</p>
                  <h3 className="mt-1 text-[13px] font-bold tracking-tight sm:text-base">Buenos días, Andrea</h3>
                </div>
                <span className="rounded-md border border-[#e1e5ed] bg-white px-2 py-1 text-[7px] font-medium text-[#687385] sm:text-[8px]">Últimos 30 días</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-[#e5e9f0] bg-white p-2 shadow-[0_2px_8px_rgba(26,36,60,.03)] sm:p-3">
                    <p className="truncate text-[6px] text-[#7e899b] sm:text-[8px]">{metric.label}</p>
                    <div className="mt-1.5 flex items-end justify-between gap-1 sm:mt-2">
                      <p className="text-[13px] font-bold tracking-tight sm:text-lg">{metric.value}</p>
                      <span className={`text-[6px] font-semibold sm:text-[7px] ${metric.color}`}>{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 grid grid-cols-[1.35fr_.9fr] gap-2.5">
                <div className="rounded-lg border border-[#e5e9f0] bg-white p-2.5 sm:p-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] font-semibold sm:text-[9px]">Actividad del equipo</p>
                      <p className="mt-0.5 text-[6px] text-[#929bab] sm:text-[7px]">Datos ilustrativos</p>
                    </div>
                    <MoreHorizontal className="size-3 text-[#97a0af]" />
                  </div>
                  <svg className="mt-3 h-[72px] w-full overflow-visible sm:h-[95px]" viewBox="0 0 280 100" preserveAspectRatio="none" aria-label="Gráfico de actividad de ejemplo" role="img">
                    <defs>
                      <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#6565ee" stopOpacity=".24" />
                        <stop offset="1" stopColor="#6565ee" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[20, 45, 70, 95].map((y) => (
                      <line key={y} x1="0" x2="280" y1={y} y2={y} stroke="#edf0f5" strokeWidth="1" />
                    ))}
                    <path d="M0,82 C25,79 33,54 54,61 C73,68 88,42 108,48 C130,55 144,24 166,36 C186,47 202,22 224,29 C243,35 254,13 280,18 L280,100 L0,100Z" fill="url(#chart-fill)" />
                    <path d="M0,82 C25,79 33,54 54,61 C73,68 88,42 108,48 C130,55 144,24 166,36 C186,47 202,22 224,29 C243,35 254,13 280,18" fill="none" stroke="#6565ee" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="224" cy="29" r="4" fill="#fff" stroke="#6565ee" strokeWidth="3" />
                  </svg>
                </div>

                <div className="rounded-lg border border-[#e5e9f0] bg-white p-2.5 sm:p-3.5">
                  <p className="text-[8px] font-semibold sm:text-[9px]">Tareas de hoy</p>
                  <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                    {[
                      ["Revisar propuesta", true],
                      ["Llamar contacto", false],
                      ["Actualizar proceso", false],
                    ].map(([task, done]) => (
                      <div key={task as string} className="flex items-center gap-1.5 rounded-md bg-[#f7f8fb] p-1.5 text-[6px] text-[#647085] sm:text-[7px]">
                        <span className={`flex size-3 shrink-0 items-center justify-center rounded-full border ${done ? "border-[#52b89a] bg-[#e2f7f1] text-[#229879]" : "border-[#cfd5df] bg-white"}`}>
                          {done && <Check className="size-2" />}
                        </span>
                        <span className={done ? "line-through opacity-60" : ""}>{task as string}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-2.5 rounded-lg border border-[#e5e9f0] bg-white p-2.5 sm:p-3.5">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[8px] font-semibold sm:text-[9px]">Pipeline principal</p>
                  <span className="text-[6px] font-medium text-[#6565ee] sm:text-[7px]">Ver pipeline</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {stages.map((stage) => (
                    <div key={stage.label} className="rounded-md bg-[#f6f7fa] p-1.5 sm:p-2">
                      <div className="flex items-center gap-1">
                        <span className={`size-1.5 rounded-full ${stage.color}`} />
                        <span className="truncate text-[5.5px] font-medium text-[#687385] sm:text-[7px]">{stage.label}</span>
                      </div>
                      <p className="mt-1 text-[8px] font-bold sm:text-[10px]">{stage.count}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
