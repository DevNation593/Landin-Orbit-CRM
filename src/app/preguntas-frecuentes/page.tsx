import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FaqSection, FinalCtaSection } from "@/components/landing/conversion-sections";
import { PageHero } from "@/components/landing/page-hero";
import { faqItems } from "@/config/faq";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Preguntas frecuentes sobre Vantex CRM",
  description:
    "Resuelve dudas sobre campos personalizados, pipelines, módulos propios, permisos, importación, automatizaciones y acceso a Vantex CRM.",
  path: "/preguntas-frecuentes",
  keywords: ["preguntas CRM", "cómo funciona Vantex CRM", "CRM campos personalizados", "CRM SaaS"],
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          eyebrow="Centro de ayuda"
          currentPage="Preguntas frecuentes"
          title={<>Respuestas claras para evaluar si Vantex CRM encaja con <span className="text-primary">tu empresa</span></>}
          description="Consulta los aspectos esenciales del producto, su configuración y la forma en que puede adaptarse a distintos procesos."
          points={["Configuración", "Funcionalidades", "Acceso y operación"]}
        />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
    </>
  );
}
