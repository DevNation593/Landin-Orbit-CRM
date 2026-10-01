import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FinalCtaSection } from "@/components/landing/conversion-sections";
import { ProblemSection, ValueSection } from "@/components/landing/foundations";
import { CollaborationSection, CustomerHubSection } from "@/components/landing/operations-sections";
import { PageHero } from "@/components/landing/page-hero";
import { HowItWorksSection } from "@/components/landing/trust-sections";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Soluciones CRM para procesos empresariales",
  description:
    "Centraliza información dispersa, mejora el seguimiento y conecta a tu equipo con un CRM flexible para procesos empresariales.",
  path: "/soluciones",
  keywords: [
    "soluciones CRM",
    "centralizar información de clientes",
    "gestión de procesos empresariales",
    "colaboración CRM",
  ],
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Soluciones", path: "/soluciones" },
]);

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          eyebrow="Soluciones"
          currentPage="Soluciones"
          title={<>Tu operación conectada, sin depender de <span className="text-primary">herramientas rígidas</span></>}
          description="Reúne el contexto que hoy vive entre hojas de cálculo, mensajes y documentos, y conviértelo en procesos claros para todo el equipo."
          points={["Menos información dispersa", "Seguimiento consistente", "Colaboración con contexto"]}
        />
        <ProblemSection />
        <ValueSection />
        <CustomerHubSection />
        <CollaborationSection />
        <HowItWorksSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
    </>
  );
}
