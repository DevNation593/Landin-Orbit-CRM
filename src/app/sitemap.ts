import type { MetadataRoute } from "next";

import { SITE_URL } from "@/config/site";
import { hasPublishedProof } from "@/config/social-proof";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/producto", changeFrequency: "weekly", priority: 0.9 },
    { path: "/soluciones", changeFrequency: "weekly", priority: 0.9 },
    { path: "/industrias", changeFrequency: "weekly", priority: 0.9 },
    { path: "/automatizaciones", changeFrequency: "weekly", priority: 0.8 },
    { path: "/integraciones", changeFrequency: "weekly", priority: 0.8 },
    { path: "/precios", changeFrequency: "weekly", priority: 0.8 },
    { path: "/preguntas-frecuentes", changeFrequency: "monthly", priority: 0.7 },
    { path: "/nosotros", changeFrequency: "monthly", priority: 0.6 },
    ...(hasPublishedProof
      ? [{ path: "/casos-de-exito", changeFrequency: "monthly" as const, priority: 0.7 }]
      : []),
    { path: "/contacto", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terminos", changeFrequency: "yearly", priority: 0.3 },
    { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
