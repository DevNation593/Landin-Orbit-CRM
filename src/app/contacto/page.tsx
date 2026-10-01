import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronRight, Clock3, Mail, MessageSquareText } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { LocalPresence } from "@/components/contact/local-presence";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";
import { createLocalBusinessSchema } from "@/lib/local-business";

export const metadata = createPageMetadata({
  title: "Contacto",
  description: `Contacta al equipo de ${siteConfig.name} para evaluar cómo configurar clientes, procesos y automatizaciones según tu operación.`,
  path: "/contacto",
  keywords: ["contacto Vantex CRM", "asesoría CRM", "CRM para mi empresa"],
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Contacto", path: "/contacto" },
]);

export default function ContactPage() {
  const subject = encodeURIComponent("Quiero conocer Vantex CRM");
  const mailto = `mailto:${siteConfig.email}?subject=${subject}`;
  const localBusinessSchema = createLocalBusinessSchema();

  return (
    <>
      <header className="border-b border-border bg-surface">
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Vantex CRM, inicio"><Logo /></Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" /> Volver</Link>
        </Container>
      </header>
      <main id="contenido" className="relative overflow-hidden py-16 sm:py-24">
        <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <Container>
          <nav aria-label="Migas de pan" className="mx-auto mb-6 flex max-w-4xl items-center gap-2 text-xs font-semibold text-muted">
            <Link href="/" className="hover:text-primary">Inicio</Link><ChevronRight className="size-3" /><span aria-current="page" className="text-foreground">Contacto</span>
          </nav>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-surface shadow-float">
            <div className="grid lg:grid-cols-[1.1fr_.9fr]">
              <div className="p-7 sm:p-12">
                <p className="text-xs font-bold tracking-[.16em] text-primary uppercase">Contacto</p>
                <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-[-.045em] sm:text-5xl">Cuéntanos cómo trabaja tu empresa</h1>
                <p className="mt-5 text-base leading-7 text-muted">Queremos entender tus entidades, procesos y retos antes de mostrarte cómo podría configurarse Vantex CRM.</p>
                <Button asChild size="lg" className="mt-8">
                  <a href={mailto} data-track="contact_email_clicked">Escribir al equipo <ArrowUpRight /></a>
                </Button>
                <div className="mt-5 space-y-2 text-xs text-muted">
                  <p className="flex items-center gap-1.5"><Clock3 className="size-3.5 text-accent" /> {siteConfig.responseTime}</p>
                  <p>Responderemos desde {siteConfig.email}</p>
                </div>
              </div>
              <div className="relative flex items-center bg-navy p-7 text-white sm:p-10">
                <div className="dot-grid absolute inset-0 opacity-10" />
                <div className="relative">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white"><MessageSquareText className="size-5" /></span>
                  <h2 className="mt-6 font-display text-2xl font-semibold">Para aprovechar la conversación</h2>
                  <ul className="mt-5 space-y-4 text-sm leading-6 text-white/55">
                    <li>• Cuéntanos tu industria y el tamaño del equipo.</li>
                    <li>• Describe el proceso que quieres centralizar.</li>
                    <li>• Indica las herramientas que utilizas hoy.</li>
                  </ul>
                  <a href={mailto} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent"><Mail className="size-4" /> {siteConfig.email}</a>
                </div>
              </div>
            </div>
          </div>
          <LocalPresence />
        </Container>
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
      {localBusinessSchema && <JsonLd data={localBusinessSchema} />}
    </>
  );
}
