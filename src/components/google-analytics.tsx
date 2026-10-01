"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

import { analyticsConfig } from "@/config/site";

const CONSENT_KEY = "vantex-cookie-consent";
type Consent = "pending" | "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const measurementId = analyticsConfig.googleMeasurementId;
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    if (!measurementId) return;
    const timeoutId = window.setTimeout(() => {
      const savedConsent = window.localStorage.getItem(CONSENT_KEY);
      setConsent(savedConsent === "granted" || savedConsent === "denied" ? savedConsent : "pending");
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [measurementId]);

  if (!measurementId) return null;

  const updateConsent = (nextConsent: "granted" | "denied") => {
    window.localStorage.setItem(CONSENT_KEY, nextConsent);
    setConsent(nextConsent);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(measurementId)},{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {consent === "pending" && (
        <div
          role="dialog"
          aria-label="Preferencias de analítica"
          aria-describedby="analytics-consent-description"
          className="fixed bottom-23 left-3 right-3 z-[60] mx-auto max-w-xl rounded-2xl border border-border bg-surface p-4 shadow-preview sm:bottom-5 sm:left-5 sm:right-auto sm:p-5"
        >
          <p className="text-sm font-bold">Analítica opcional</p>
          <p id="analytics-consent-description" className="mt-1.5 text-xs leading-5 text-muted">
            Con tu permiso, usamos Google Analytics para entender qué contenido resulta útil. No se carga hasta que aceptes. Consulta la{" "}
            <Link href="/cookies" className="font-semibold text-primary underline underline-offset-2">política de cookies</Link>.
          </p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => updateConsent("denied")}
              className="h-9 flex-1 rounded-full border border-border bg-surface text-xs font-bold text-muted-foreground"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={() => updateConsent("granted")}
              className="h-9 flex-1 rounded-full bg-primary text-xs font-bold text-white"
            >
              Aceptar analítica
            </button>
          </div>
        </div>
      )}
    </>
  );
}
