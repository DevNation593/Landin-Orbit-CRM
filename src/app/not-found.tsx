import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="relative flex min-h-[78vh] items-center overflow-hidden pb-20 pt-32 sm:pt-40">
        <div className="hero-grid pointer-events-none absolute inset-0 -z-20" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
              <Compass className="size-7" />
            </span>
            <p className="mt-7 text-xs font-bold tracking-[.2em] text-primary uppercase">Error 404</p>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-[-.05em] sm:text-6xl">
              Esta ruta quedó fuera de órbita
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
              La página que buscas no existe, cambió de ubicación o ya no está disponible. Puedes volver al inicio o explorar el producto.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row">
              <Button asChild size="lg">
                <Link href="/"><Home /> Volver al inicio</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/producto"><ArrowLeft className="rotate-180" /> Explorar el producto</Link>
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
