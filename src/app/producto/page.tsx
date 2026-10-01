import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FinalCtaSection } from "@/components/landing/conversion-sections";
import { FeaturesSection } from "@/components/landing/features-section";
import { PageHero } from "@/components/landing/page-hero";
import { ReportsSection } from "@/components/landing/operations-sections";
import { CustomizationSection, PipelineSection } from "@/components/landing/process-sections";
import { SecuritySection } from "@/components/landing/trust-sections";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRM configurable para toda tu operación",
  description:
    "Conoce las funciones de Vantex CRM: contactos, pipelines personalizados, entidades, campos, reportes, roles, permisos y seguridad.",
  path: "/producto",
  keywords: [
    "funciones CRM",
    "CRM configurable",
    "pipeline personalizado",
    "entidades personalizadas CRM",
    "reportes CRM",
  ],
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Producto", path: "/producto" },
]);

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          eyebrow="Producto"
          currentPage="Producto"
          title={<>Un CRM configurable para <span className="text-primary">toda tu operación</span></>}
          description="Organiza relaciones, modela procesos propios y convierte la actividad diaria en información útil para decidir."
          points={["Datos centralizados", "Procesos configurables", "Visibilidad compartida"]}
        />
        <FeaturesSection />
        <CustomizationSection />
        <PipelineSection />
        <ReportsSection />
        <SecuritySection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
    </>
  );
}
