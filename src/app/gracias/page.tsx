import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Home } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gracias por contactarnos",
  description: "Confirmación de recepción de una solicitud enviada a Vantex CRM.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="relative flex min-h-[78vh] items-center overflow-hidden pb-20 pt-32 sm:pt-40">
        <div className="hero-grid pointer-events-none absolute inset-0 -z-20" />
        <Container>
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-surface p-7 text-center shadow-float sm:p-12">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent">
              <CheckCircle2 className="size-7" />
            </span>
            <nav aria-label="Migas de pan" className="mt-6 flex justify-center gap-2 text-xs text-muted">
              <Link href="/" className="hover:text-primary">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Gracias</span>
            </nav>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Gracias por escribirnos</h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
              Recibimos tu solicitud. Revisaremos el contexto que compartiste para responder con información relevante para tu operación.
            </p>
            <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-primary-soft px-4 py-2 text-sm font-bold text-primary">
              <Clock3 className="size-4" /> {siteConfig.responseTime}
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row">
              <Button asChild><Link href="/"><Home /> Ir al inicio</Link></Button>
              <Button asChild variant="secondary"><Link href="/producto">Conocer el producto <ArrowRight /></Link></Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
