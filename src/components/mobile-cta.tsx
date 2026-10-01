"use client";

import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { crmLinks } from "@/config/site";

const commercialRoutes = new Set([
  "/",
  "/producto",
  "/soluciones",
  "/industrias",
  "/automatizaciones",
  "/integraciones",
  "/precios",
  "/preguntas-frecuentes",
  "/casos-de-exito",
  "/nosotros",
]);

export function MobileCta() {
  const pathname = usePathname();

  if (!commercialRoutes.has(pathname)) return null;

  return (
    <>
      <div aria-hidden="true" className="h-20 sm:hidden" />
      <aside
        aria-label="Acción principal"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-3 pt-2 shadow-[0_-10px_35px_rgba(16,24,40,.12)] backdrop-blur sm:hidden"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.5rem)" }}
      >
        <a
          href={crmLinks.register}
          data-track="mobile_sticky_register_clicked"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-white shadow-[0_8px_24px_rgba(92,92,226,.25)]"
        >
          Comenzar gratis <ArrowRight className="size-4" />
        </a>
      </aside>
    </>
  );
}
