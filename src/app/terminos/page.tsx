import { LegalShell } from "@/components/layout/legal-shell";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Términos de uso",
  description: `Términos aplicables al sitio público de ${siteConfig.name}.`,
  path: "/terminos",
});

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Términos de uso"
      path="/terminos"
      description="Condiciones preliminares para el uso del sitio público. Los términos comerciales del producto se formalizarán por separado."
    >
      <section>
        <h2>Objeto del sitio</h2>
        <p>Este sitio presenta Vantex CRM y permite acceder a los flujos de registro e inicio de sesión de la aplicación. Su contenido tiene finalidad informativa.</p>
      </section>
      <section>
        <h2>Información comercial</h2>
        <p>Los planes, alcances y precios mostrados como pendientes o próximos no constituyen una oferta definitiva. Las condiciones aplicables se confirmarán antes de contratar el servicio.</p>
      </section>
      <section>
        <h2>Uso permitido</h2>
        <p>El usuario se compromete a utilizar el sitio de manera lícita y a no intentar afectar su disponibilidad, seguridad o funcionamiento.</p>
      </section>
      <section>
        <h2>Propiedad intelectual</h2>
        <p>La identidad, interfaz, textos y materiales propios de Vantex CRM no pueden reproducirse o explotarse sin autorización, salvo los usos permitidos por la ley.</p>
      </section>
      <section>
        <h2>Disponibilidad</h2>
        <p>Podemos actualizar el contenido del sitio y realizar tareas de mantenimiento. No se garantiza disponibilidad ininterrumpida de una versión preliminar o en evolución.</p>
      </section>
      <section>
        <h2>Contacto</h2>
        <p>Para consultas sobre estos términos, escribe a <a className="font-semibold text-primary" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
      </section>
    </LegalShell>
  );
}
