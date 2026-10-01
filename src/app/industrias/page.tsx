import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FinalCtaSection } from "@/components/landing/conversion-sections";
import { IndustriesSection } from "@/components/landing/industries-section";
import { PageHero } from "@/components/landing/page-hero";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRM para inmobiliarias, seguros, automotriz y más",
  description:
    "Adapta Vantex CRM a inmobiliarias, empresas automotrices, seguros, educación y servicios con entidades y procesos configurables.",
  path: "/industrias",
  keywords: [
    "CRM para inmobiliarias",
    "CRM automotriz",
    "CRM para seguros",
    "CRM para educación",
    "CRM para servicios profesionales",
  ],
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Industrias", path: "/industrias" },
]);

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          eyebrow="Multiindustria"
          currentPage="Industrias"
          title={<>Un CRM para tu industria y para la forma en que <span className="text-primary">realmente trabajas</span></>}
          description="Representa propiedades, vehículos, pólizas, estudiantes o proyectos sin cambiar de plataforma cada vez que cambia el modelo de negocio."
          points={["Entidades por industria", "Pipelines específicos", "Datos relacionados"]}
        />
        <IndustriesSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
    </>
  );
}
