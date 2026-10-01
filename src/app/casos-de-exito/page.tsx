import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FinalCtaSection } from "@/components/landing/conversion-sections";
import { PageHero } from "@/components/landing/page-hero";
import { CaseStudiesSection, ReviewsSection } from "@/components/landing/social-proof-sections";
import { hasPublishedProof } from "@/config/social-proof";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Casos de éxito y reseñas verificadas",
  description: "Casos de implementación y opiniones verificadas de organizaciones que utilizan Vantex CRM.",
  path: "/casos-de-exito",
  keywords: ["casos de éxito CRM", "reseñas Vantex CRM", "resultados CRM"],
  index: hasPublishedProof,
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Casos de éxito", path: "/casos-de-exito" },
]);

export default function SuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          eyebrow="Evidencia"
          currentPage="Casos de éxito"
          title={<>Historias reales, contadas con <span className="text-primary">datos verificables</span></>}
          description="Documentamos el punto de partida, la configuración aplicada y los resultados autorizados por cada organización."
          points={["Contexto real", "Implementación documentada", "Resultados autorizados"]}
        />
        <CaseStudiesSection />
        <ReviewsSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
    </>
  );
}
