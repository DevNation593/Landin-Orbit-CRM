import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FinalCtaSection } from "@/components/landing/conversion-sections";
import { AutomationUseCasesSection } from "@/components/landing/home-sections";
import { PageHero } from "@/components/landing/page-hero";
import { AutomationSection } from "@/components/landing/process-sections";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Automatización de tareas y procesos CRM",
  description:
    "Automatiza asignaciones, tareas, seguimientos y notificaciones con reglas configurables dentro de Vantex CRM.",
  path: "/automatizaciones",
  keywords: [
    "automatización CRM",
    "automatizar seguimiento de leads",
    "workflow CRM",
    "automatización de tareas empresariales",
  ],
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Automatizaciones", path: "/automatizaciones" },
]);

export default function AutomationsPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          eyebrow="Automatizaciones"
          currentPage="Automatizaciones"
          title={<>Automatiza el seguimiento sin perder <span className="text-primary">el control del proceso</span></>}
          description="Usa disparadores, condiciones y acciones para ejecutar pasos repetitivos de forma consistente y mantener a tu equipo enfocado."
          points={["Disparadores configurables", "Condiciones claras", "Acciones conectadas"]}
        />
        <AutomationUseCasesSection />
        <AutomationSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
    </>
  );
}
