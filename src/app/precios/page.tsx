import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FaqSection, FinalCtaSection, PricingSection } from "@/components/landing/conversion-sections";
import { PageHero } from "@/components/landing/page-hero";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Planes y precios de Vantex CRM",
  description:
    "Explora la estructura de planes Starter, Professional y Business de Vantex CRM. Los precios finales se publicarán al cerrar la oferta comercial.",
  path: "/precios",
  keywords: ["precios CRM", "planes CRM", "CRM para equipos pequeños", "CRM para empresas"],
});

const breadcrumbs = createBreadcrumbSchema([
  { name: "Inicio", path: "/" },
  { name: "Precios", path: "/precios" },
]);

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <PageHero
          eyebrow="Planes"
          currentPage="Precios"
          title={<>Una estructura que puede crecer con <span className="text-primary">tu organización</span></>}
          description="Compara el enfoque previsto para cada plan. Publicaremos los valores definitivos cuando el alcance comercial esté confirmado."
          points={["Starter para comenzar", "Professional para crecer", "Business para escalar"]}
        />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={breadcrumbs} />
    </>
  );
}
