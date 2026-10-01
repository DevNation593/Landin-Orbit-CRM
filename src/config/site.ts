const trimTrailingSlash = (value: string) => value.replace(/\/$/, "");

const configuredCrmUrl = process.env.NEXT_PUBLIC_CRM_URL;

if (!configuredCrmUrl && process.env.NODE_ENV === "development") {
  console.error(
    "[Vantex CRM] Falta NEXT_PUBLIC_CRM_URL. Usando http://localhost:3001 durante el desarrollo.",
  );
}

export const APP_URL = trimTrailingSlash(
  configuredCrmUrl || "http://localhost:3001",
);

export const SITE_URL = trimTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
);

export const crmLinks = {
  login: `${APP_URL}/login`,
  register: `${APP_URL}/register`,
} as const;

export const siteConfig = {
  name: "Vantex CRM",
  shortName: "Vantex CRM",
  copyrightOwner: "DevNation593",
  responseTime: "Respondemos en un máximo de 2 días hábiles.",
  title: "CRM multiindustria para clientes, procesos y automatizaciones",
  description:
    "CRM flexible para gestionar clientes, oportunidades, procesos, tareas y automatizaciones en empresas de cualquier industria.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hola@vantexcrm.com",
  locale: "es_EC",
  url: SITE_URL,
} as const;

export const analyticsConfig = {
  googleMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
} as const;

export const businessLocation = {
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "",
  street: process.env.NEXT_PUBLIC_BUSINESS_STREET || "",
  city: process.env.NEXT_PUBLIC_BUSINESS_CITY || "",
  region: process.env.NEXT_PUBLIC_BUSINESS_REGION || "",
  postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE || "",
  country: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || "",
} as const;

export const hasBusinessAddress = Boolean(
  businessLocation.street &&
    businessLocation.city &&
    businessLocation.country,
);
