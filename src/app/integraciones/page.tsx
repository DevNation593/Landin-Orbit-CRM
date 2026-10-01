import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FinalCtaSection } from "@/components/landing/conversion-sections";
import { IntegrationPrinciplesSection } from "@/components/landing/home-sections";
import { PageHero } from "@/components/landing/page-hero";
import { IntegrationsSection } from "@/components/landing/trust-sections";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Integraciones de Vantex CRM",
  description:
    "Consulta el ecosistema previsto de integraciones de Vantex CRM con correo, calendario, mensajería, webhooks y APIs.",
  path: "/integraciones",
  keywords: [
    "integraciones CRM",
    "CRM con email",
    "CRM con calendario",
    "webhooks CRM",
    "API CRM",
  ],
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Integraciones", path: "/integraciones" },
]);

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          eyebrow="Integraciones"
          currentPage="Integraciones"
          title={<>Un CRM preparado para conectar <span className="text-primary">tu ecosistema</span></>}
          description="Vantex CRM evoluciona hacia conexiones con las herramientas que ya forman parte de tu operación, comunicando con claridad qué está disponible."
          points={["Estado de disponibilidad", "Permisos explícitos", "Evolución documentada"]}
        />
        <IntegrationPrinciplesSection />
        <IntegrationsSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
    </>
  );
}
