import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  FileCheck2,
  Quote,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/landing/section-heading";
import {
  caseStudies,
  teamMembers,
  verifiedReviews,
} from "@/config/social-proof";

export function CaseStudiesSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Casos de éxito"
          title="Resultados publicados con evidencia"
          description="Cada caso debe contar con autorización, contexto y resultados que puedan explicarse sin cifras inventadas."
          align="center"
        />

        {caseStudies.length > 0 ? (
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {caseStudies.map((study) => (
              <article key={study.slug} className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-card">
                <Image
                  src={study.image.src}
                  alt={study.image.alt}
                  width={720}
                  height={420}
                  className="aspect-[12/7] w-full object-cover"
                />
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-bold tracking-[.14em] text-primary uppercase">{study.industry}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">{study.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{study.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {study.results.map((result) => (
                      <li key={result} className="flex gap-2 text-sm text-muted-foreground"><BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" /> {result}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {[
              ["Problema documentado", "Explicamos el contexto inicial sin revelar información sensible.", FileCheck2],
              ["Implementación verificable", "Mostramos qué se configuró y cómo se integró al proceso.", ShieldCheck],
              ["Resultados autorizados", "Solo publicamos métricas aprobadas por el cliente.", BarChart3],
            ].map(([title, description, Icon]) => (
              <article key={title as string} className="rounded-2xl border border-border bg-surface p-6 shadow-card">
                <Icon className="size-5 text-primary" />
                <h2 className="mt-7 text-base font-bold">{title as string}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{description as string}</p>
              </article>
            ))}
            <p className="md:col-span-3 mt-3 rounded-2xl border border-dashed border-border-strong bg-surface-soft/60 p-5 text-center text-sm leading-6 text-muted">
              Estamos preparando los primeros casos verificables. No publicaremos empresas, cifras ni resultados sin autorización expresa.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Reseñas"
          title="Opiniones reales, atribuidas y verificables"
          description="Las reseñas aparecerán con nombre, rol y empresa únicamente después de contar con autorización para publicarlas."
        />
        {verifiedReviews.length > 0 ? (
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {verifiedReviews.map((review) => (
              <blockquote key={`${review.author}-${review.company}`} className="rounded-2xl border border-border bg-background p-6">
                <Quote className="size-6 text-primary" />
                <p className="mt-5 text-base leading-7 text-foreground">“{review.quote}”</p>
                <footer className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-bold">{review.author}</p>
                  <p className="mt-1 text-xs text-muted">{review.role} · {review.company}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-dashed border-border-strong bg-background p-6 sm:p-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary"><Quote className="size-5" /></span>
            <div><h2 className="font-display text-xl font-semibold">Reseñas verificadas próximamente</h2><p className="mt-1.5 text-sm leading-6 text-muted">Este espacio está listo para incorporar opiniones reales sin recurrir a testimonios ficticios.</p></div>
          </div>
        )}
      </Container>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Equipo"
          title="Las personas detrás de Vantex CRM"
          description="Producto desarrollado por DevNation593 con una visión clara: hacer que el software represente al negocio y no al revés."
          align="center"
        />
        {teamMembers.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-card">
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  width={560}
                  height={600}
                  className="aspect-[14/15] w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="font-display text-xl font-semibold">{member.name}</h2>
                  <p className="mt-1 text-xs font-bold tracking-[.12em] text-primary uppercase">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">{member.bio}</p>
                  {member.profileUrl && <Link href={member.profileUrl} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Ver perfil <ArrowRight className="size-4" /></Link>}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] border border-dashed border-border-strong bg-surface p-8 text-center shadow-card">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary"><UsersRound className="size-6" /></span>
            <h2 className="mt-6 font-display text-2xl font-semibold">Perfiles pendientes de autorización</h2>
            <p className="mt-3 text-sm leading-6 text-muted">La estructura está preparada para publicar fotografías, nombres, roles y biografías reales cuando DevNation593 proporcione y apruebe esos contenidos.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
