"use client";

import { useState, type KeyboardEvent } from "react";
import {
  ArrowRight,
  Building2,
  CarFront,
  Check,
  GraduationCap,
  House,
  Plus,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/landing/section-heading";
import { industries } from "@/config/industries";
import { crmLinks } from "@/config/site";
import { cn } from "@/lib/utils";

const icons = {
  inmobiliarias: House,
  automotriz: CarFront,
  seguros: ShieldCheck,
  educacion: GraduationCap,
  servicios: Wrench,
} as const;

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState<(typeof industries)[number]["id"]>("inmobiliarias");
  const current = industries.find((industry) => industry.id === activeIndustry) ?? industries[0];
  const CurrentIcon = icons[current.id];

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % industries.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + industries.length) % industries.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = industries.length - 1;
    else return;

    event.preventDefault();
    const nextIndustry = industries[nextIndex];
    setActiveIndustry(nextIndustry.id);
    document.getElementById(`tab-${nextIndustry.id}`)?.focus();
  };

  return (
    <section id="industrias" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[480px] rounded-full bg-primary/7 blur-[120px]" />
      <Container>
        <SectionHeading
          eyebrow="Multiindustria"
          title="Un CRM para cualquier industria"
          description="Cambia el modelo, no la plataforma. Configura Vantex CRM alrededor de las entidades y procesos que hacen único a tu negocio."
          align="center"
        />

        <div
          role="tablist"
          aria-label="Selecciona una industria"
          className="mx-auto mt-10 flex max-w-4xl snap-x gap-2 overflow-x-auto rounded-2xl border border-border bg-surface p-2 shadow-card sm:justify-center"
        >
          {industries.map((industry, index) => {
            const Icon = icons[industry.id];
            const isActive = activeIndustry === industry.id;
            return (
              <button
                key={industry.id}
                id={`tab-${industry.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${industry.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndustry(industry.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={cn(
                  "flex shrink-0 snap-start items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-navy text-white shadow-lg"
                    : "text-muted-foreground hover:bg-surface-soft hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                {industry.name}
              </button>
            );
          })}
        </div>

        <div
          id={`panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
          className="mt-6 overflow-hidden rounded-[2rem] border border-border bg-surface shadow-float"
        >
          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <CurrentIcon className="size-6" />
              </span>
              <p className="mt-7 text-xs font-bold tracking-[.16em] text-primary uppercase">Vantex CRM para {current.name}</p>
              <h3 className="mt-3 text-balance font-display text-3xl font-semibold tracking-[-.04em] sm:text-4xl">
                {current.headline}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-muted">{current.description}</p>
              <a
                href={crmLinks.register}
                data-track={`industry_${current.id}_register_clicked`}
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary hover:text-primary-strong"
              >
                Configurar mi espacio <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="relative min-h-[430px] overflow-hidden bg-navy p-5 sm:p-8 lg:p-10">
              <div className="dot-grid absolute inset-0 opacity-15" />
              <div className="relative mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/[.06] p-3 shadow-2xl backdrop-blur sm:p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                      <CurrentIcon className="size-4" />
                    </span>
                    <div>
                      <p className="text-[9px] text-white/45">Entidad personalizada</p>
                      <p className="text-xs font-semibold text-white">{current.entity}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[9px] font-semibold text-accent">Activa</span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {current.items.map((item, index) => (
                    <div
                      key={item}
                      className={cn(
                        "rounded-xl border border-white/[.08] bg-white/[.05] p-3",
                        index === 0 && "col-span-2",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex size-7 items-center justify-center rounded-lg bg-white/[.07] text-white/65">
                          {index === 0 ? <Building2 className="size-3.5" /> : <Check className="size-3.5" />}
                        </span>
                        <span className="text-[8px] text-white/25">0{index + 1}</span>
                      </div>
                      <p className="mt-5 text-xs font-semibold text-white/85 sm:text-sm">{item}</p>
                      <div className="mt-2 h-1.5 w-2/3 rounded-full bg-white/[.07]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-border-strong bg-surface-soft/60 px-5 py-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface text-primary shadow-sm">
              <Plus className="size-4" />
            </span>
            <div>
              <p className="text-sm font-bold">¿Tu industria no aparece?</p>
              <p className="mt-0.5 text-sm text-muted">Vantex CRM puede configurarse para nuevos modelos de negocio.</p>
            </div>
          </div>
          <a href="/contacto" className="text-sm font-bold text-primary hover:text-primary-strong">Cuéntanos tu caso</a>
        </div>
      </Container>
    </section>
  );
}
