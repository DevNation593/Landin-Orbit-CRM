import { LegalShell } from "@/components/layout/legal-shell";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Política de cookies",
  description: `Uso de cookies en el sitio público de ${siteConfig.name}.`,
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalShell
      eyebrow="Privacidad"
      title="Política de cookies"
      path="/cookies"
      description="Información transparente sobre el almacenamiento local y las tecnologías de seguimiento de esta landing."
    >
      <section>
        <h2>Estado actual</h2>
        <p>Vantex CRM incluye una integración opcional con Google Analytics. La herramienta solo puede cargarse cuando existe un identificador configurado y el visitante acepta expresamente la analítica desde el aviso de consentimiento.</p>
      </section>
      <section>
        <h2>Cookies esenciales</h2>
        <p>La infraestructura puede utilizar mecanismos estrictamente necesarios para seguridad, balanceo de carga o funcionamiento técnico. Estos no se usan para crear perfiles publicitarios.</p>
      </section>
      <section>
        <h2>Google Analytics</h2>
        <p>Si aceptas, Google Analytics puede utilizar identificadores como <code>_ga</code> para medir visitas y navegación de forma agregada. La configuración activa anonimización de IP. Si rechazas, los scripts de Google Analytics no se cargan.</p>
      </section>
      <section>
        <h2>Tu elección</h2>
        <p>La decisión se guarda localmente en tu navegador. Puedes eliminar los datos del sitio desde la configuración del navegador para volver a mostrar la solicitud de consentimiento.</p>
      </section>
      <section>
        <h2>Contacto</h2>
        <p>Puedes enviar preguntas sobre cookies o privacidad a <a className="font-semibold text-primary" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
      </section>
    </LegalShell>
  );
}
