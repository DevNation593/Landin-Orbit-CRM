import {
  businessLocation,
  hasBusinessAddress,
  siteConfig,
} from "@/config/site";

export function createLocalBusinessSchema() {
  if (!hasBusinessAddress) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#local-business`,
    name: siteConfig.copyrightOwner,
    brand: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    ...(businessLocation.phone ? { telephone: businessLocation.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: businessLocation.street,
      addressLocality: businessLocation.city,
      addressRegion: businessLocation.region,
      postalCode: businessLocation.postalCode,
      addressCountry: businessLocation.country,
    },
  };
}
