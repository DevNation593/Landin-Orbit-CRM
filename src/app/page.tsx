import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FinalCtaSection } from "@/components/landing/conversion-sections";
import { AudienceStrip } from "@/components/landing/foundations";
import { Hero } from "@/components/landing/hero";
import {
  HomeAutomationSection,
  HomeIndustriesSection,
  HomeOverviewSection,
} from "@/components/landing/home-sections";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRM multiindustria configurable",
  description:
    "Gestiona clientes, procesos, oportunidades, tareas y automatizaciones con un CRM flexible que se adapta a empresas de cualquier industria.",
  path: "/",
  keywords: [
    "CRM multiindustria",
    "CRM para empresas",
    "CRM configurable",
    "gestión de clientes y procesos",
  ],
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.copyrightOwner,
      url: siteConfig.url,
      email: siteConfig.email,
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "es",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}/#software`,
      name: siteConfig.name,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "CustomerRelationshipManagement",
      operatingSystem: "Web",
      description: siteConfig.description,
      url: siteConfig.url,
      provider: { "@id": `${siteConfig.url}/#organization` },
      featureList: [
        "Gestión de contactos y organizaciones",
        "Pipelines configurables",
        "Campos y entidades personalizadas",
        "Automatizaciones",
        "Roles y permisos",
        "Reportes",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <AudienceStrip />
        <HomeOverviewSection />
        <HomeIndustriesSection />
        <HomeAutomationSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <JsonLd data={structuredData} />
    </>
  );
}
