import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FinalCtaSection } from "@/components/landing/conversion-sections";
import { PageHero } from "@/components/landing/page-hero";
import { TeamSection } from "@/components/landing/social-proof-sections";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sobre DevNation593 y Vantex CRM",
  description: "Conoce la visión de DevNation593 y al equipo responsable de desarrollar Vantex CRM.",
  path: "/nosotros",
  keywords: ["DevNation593", "equipo Vantex CRM", "empresa de software CRM"],
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
]);

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          eyebrow="DevNation593"
          currentPage="Nosotros"
          title={<>Construimos software que se adapta a <span className="text-primary">la operación real</span></>}
          description="Vantex CRM nace de una convicción sencilla: cada empresa debe poder organizar sus procesos sin renunciar a la forma en que genera valor."
          points={["Producto con propósito", "Diseño orientado al usuario", "Evolución transparente"]}
        />
        <TeamSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
    </>
  );
}
