import type { Metadata, Viewport } from "next";

import "./globals.css";

import { AnalyticsEvents } from "@/components/analytics-events";
import { GoogleAnalytics } from "@/components/google-analytics";
import { MobileCta } from "@/components/mobile-cta";
import { ScrollToTop } from "@/components/scroll-to-top";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  creator: siteConfig.copyrightOwner,
  publisher: siteConfig.copyrightOwner,
  category: "business software",
  keywords: [
    "CRM multiindustria",
    "CRM configurable",
    "gestión de clientes",
    "automatización de procesos",
    "pipeline personalizado",
    "software CRM",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `Un CRM que se adapta a tu negocio | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vantex CRM, un CRM que se adapta a tu negocio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Un CRM que se adapta a tu negocio | ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1423" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <a
          href="#contenido"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        {children}
        <ScrollToTop />
        <MobileCta />
        <AnalyticsEvents />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
