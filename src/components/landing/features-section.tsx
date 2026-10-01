import {
  Activity,
  ChartSpline,
  ContactRound,
  GitBranch,
  KeyRound,
  ListFilter,
  SlidersHorizontal,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/landing/section-heading";
import { features, type FeatureIcon } from "@/config/features";
import { cn } from "@/lib/utils";

const iconMap = {
  contacts: ContactRound,
  pipeline: GitBranch,
  fields: SlidersHorizontal,
  entities: ListFilter,
  automation: Workflow,
  activity: Activity,
  permissions: KeyRound,
  reports: ChartSpline,
} satisfies Record<FeatureIcon, typeof ContactRound>;

function PipelineMiniature() {
  return (
    <div className="mt-7 grid grid-cols-3 gap-1.5" aria-hidden="true">
      {[
        ["Nuevo", "7", "bg-primary"],
        ["En curso", "4", "bg-accent"],
        ["Cierre", "2", "bg-warning"],
      ].map(([label, value, color]) => (
        <div key={label} className="rounded-lg border border-border bg-surface-soft/70 p-2.5">
          <div className="flex items-center gap-1.5 text-[9px] font-medium text-muted">
            <span className={cn("size-1.5 rounded-full", color)} /> {label}
          </div>
          <p className="mt-2 text-sm font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}

function EntityMiniature() {
  return (
    <div className="mt-6 flex flex-wrap gap-2" aria-hidden="true">
      {["Propiedad", "Vehículo", "Póliza", "Proyecto"].map((item) => (
        <span key={item} className="rounded-full border border-border bg-surface-soft px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
          {item}
        </span>
      ))}
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="producto" className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Producto"
            title={<>La flexibilidad que necesitas.<br className="hidden sm:block" /> La claridad que tu equipo espera.</>}
            description="Las piezas esenciales para organizar relaciones, adaptar procesos y ejecutar el trabajo desde un mismo lugar."
          />
          <p className="max-w-sm text-sm leading-6 text-muted lg:pb-1 lg:text-right">
            Cada módulo comparte el mismo contexto para evitar duplicados, saltos entre herramientas y puntos ciegos.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <article
                key={feature.title}
                className={cn(
                  "card-hover group relative overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-card sm:p-6",
                  feature.wide && "lg:col-span-2",
                  index === 3 && "bg-navy text-white",
                )}
              >
                <div
                  className={cn(
                    "mb-8 flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-105",
                    index === 3 && "bg-white/10 text-accent",
                  )}
                >
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">{feature.title}</h3>
                <p className={cn("mt-2 max-w-md text-sm leading-6 text-muted", index === 3 && "text-white/55")}>{feature.description}</p>
                {feature.icon === "pipeline" && <PipelineMiniature />}
                {feature.icon === "entities" && <EntityMiniature />}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
