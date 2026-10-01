import { LegalShell } from "@/components/layout/legal-shell";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Política de privacidad",
  description: `Información sobre el tratamiento de datos en el sitio público de ${siteConfig.name}.`,
  path: "/privacidad",
});

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Política de privacidad"
      path="/privacidad"
      description="Esta página resume cómo se trata la información en el sitio público de Vantex CRM. Debe revisarse con asesoría legal antes del lanzamiento definitivo."
    >
      <section>
        <h2>Información que recopilamos</h2>
        <p>Este sitio público no solicita datos personales para navegar. Si nos contactas por correo, recibiremos la información que decidas incluir en tu mensaje para poder responderte.</p>
      </section>
      <section>
        <h2>Finalidad del tratamiento</h2>
        <p>Utilizamos la información enviada voluntariamente para atender consultas, evaluar solicitudes comerciales y mantener la comunicación relacionada con Vantex CRM.</p>
      </section>
      <section>
        <h2>Analítica y terceros</h2>
        <p>Google Analytics puede habilitarse para obtener métricas agregadas de navegación. Sus scripts no se cargan sin un identificador configurado ni antes de que el visitante otorgue consentimiento. La preferencia puede rechazarse desde el aviso correspondiente.</p>
      </section>
      <section>
        <h2>Conservación y seguridad</h2>
        <p>La información se conserva solo durante el tiempo necesario para atender la finalidad por la que fue compartida. Se aplican medidas razonables para limitar accesos no autorizados.</p>
      </section>
      <section>
        <h2>Tus derechos</h2>
        <p>Puedes solicitar acceso, corrección o eliminación de la información que hayas compartido escribiendo a <a className="font-semibold text-primary" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
      </section>
      <section>
        <h2>Actualizaciones</h2>
        <p>Última actualización: 31 de agosto de 2026. Cualquier cambio material se reflejará en esta página.</p>
      </section>
    </LegalShell>
  );
}
