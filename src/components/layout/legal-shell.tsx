import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Logo } from "@/components/layout/logo";
import { createBreadcrumbSchema } from "@/lib/metadata";

export function LegalShell({
  eyebrow,
  title,
  description,
  path,
  children,
}: React.PropsWithChildren<{
  eyebrow: string;
  title: string;
  description: string;
  path: `/${string}`;
}>) {
  const breadcrumbs = createBreadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: title, path },
  ]);

  return (
    <>
      <header className="border-b border-border bg-surface">
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Vantex CRM, inicio"><Logo /></Link>
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="size-4" /> Volver al inicio
          </Link>
        </Container>
      </header>
      <main id="contenido">
        <section className="border-b border-border bg-surface-soft/45 py-16 sm:py-20">
          <Container>
            <nav aria-label="Migas de pan" className="mb-7 flex items-center gap-2 text-xs font-semibold text-muted">
              <Link href="/" className="hover:text-primary">Inicio</Link><ChevronRight className="size-3" /><span aria-current="page" className="text-foreground">{title}</span>
            </nav>
            <p className="text-xs font-bold tracking-[.16em] text-primary uppercase">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-semibold tracking-[-.045em] sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{description}</p>
          </Container>
        </section>
        <Container className="py-14 sm:py-20">
          <article className="mx-auto max-w-3xl space-y-10 text-[15px] leading-7 text-muted-foreground [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </article>
        </Container>
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
    </>
  );
}
