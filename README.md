# Vantex CRM Landing

Landing pública para un CRM SaaS multiindustria. Construida con Next.js App Router, React, TypeScript, Tailwind CSS, componentes estilo shadcn/ui y Lucide.

## Desarrollo local

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Copia `.env.example` como `.env.local` y configura las URLs reales:

   ```env
   NEXT_PUBLIC_SITE_URL=https://www.midominio.com
   NEXT_PUBLIC_CRM_URL=https://app.midominio.com
   NEXT_PUBLIC_CONTACT_EMAIL=hola@midominio.com
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_BUSINESS_PHONE=+593000000000
   NEXT_PUBLIC_BUSINESS_STREET=Dirección real
   NEXT_PUBLIC_BUSINESS_CITY=Ciudad
   NEXT_PUBLIC_BUSINESS_REGION=Provincia
   NEXT_PUBLIC_BUSINESS_POSTAL_CODE=Código postal
   NEXT_PUBLIC_BUSINESS_COUNTRY=EC
   ```

3. Inicia el servidor:

   ```bash
   npm run dev
   ```

Si `NEXT_PUBLIC_CRM_URL` no existe en desarrollo, la aplicación muestra un error claro en consola y usa `http://localhost:3001` como respaldo local.

## Comandos

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
npm start
```

## Estructura

- `src/app`: rutas, metadata, sitemap, robots y páginas legales.
- `src/components/landing`: secciones y previews visuales de la landing.
- `src/components/layout`: navegación, logo, footer y layouts compartidos.
- `src/components/ui`: primitivas reutilizables de interfaz.
- `src/config`: marca, URLs, navegación, funcionalidades, industrias, precios y FAQ.

## Arquitectura pública y SEO

La portada resume la propuesta de valor y deriva el contenido detallado a páginas indexables:

- `/producto`: funcionalidades, personalización, pipeline, reportes y seguridad.
- `/soluciones`: problemas, propuesta de valor, ficha de cliente y colaboración.
- `/industrias`: configuraciones para inmobiliarias, automotriz, seguros, educación y servicios.
- `/automatizaciones`: workflows y casos de uso.
- `/integraciones`: ecosistema y estado de disponibilidad.
- `/precios`: estructura configurable de planes.
- `/preguntas-frecuentes`: respuestas y schema `FAQPage`.
- `/casos-de-exito`: casos y reseñas verificadas; permanece en `noindex` mientras no exista contenido real.
- `/nosotros`: información de DevNation593 y perfiles del equipo.
- `/gracias`: confirmación de contacto en `noindex`.

Cada ruta tiene título, descripción, palabras clave, canonical, Open Graph, Twitter Card, breadcrumb schema y un único `h1`. El sitemap y `robots.txt` se generan desde App Router.

## Analítica

Los CTA usan el atributo `data-track`. `AnalyticsEvents` emite un evento del navegador llamado `vantex:track` con el nombre del evento y su destino.

Google Analytics se activa únicamente si existe `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Incluso configurado, sus scripts no se cargan hasta que el visitante acepta la analítica desde el aviso de consentimiento. Los eventos de CTA se envían a `gtag` después de esa aceptación.

## Contenido verificable

Los casos de éxito, reseñas y miembros del equipo se administran desde `src/config/social-proof.ts`. Los arreglos están vacíos por defecto para evitar testimonios, resultados o personas ficticias.

- Guarda fotografías aprobadas del equipo en `public/team`.
- Guarda imágenes autorizadas de casos en `public/case-studies`.
- Cada imagen requiere un texto alternativo descriptivo en su configuración.
- Al agregar un caso o reseña real, `/casos-de-exito` pasa a ser indexable y entra automáticamente en el sitemap.

El mapa y el schema `ProfessionalService` se publican únicamente cuando calle, ciudad y país están configurados. El mapa externo no se carga hasta que el visitante pulsa “Cargar mapa”.

## Contenido pendiente de negocio

- Confirmar precios y alcance definitivo de cada plan.
- Confirmar disponibilidad individual de integraciones.
- Sustituir las políticas legales preliminares por textos aprobados antes del lanzamiento.
- Configurar dominio, URL del CRM y correo reales en el entorno de producción.
- Confirmar que la promesa de respuesta de dos días hábiles se ajusta a la operación.
- Cargar dirección, casos, reseñas y fotografías reales antes de publicar esas pruebas de confianza.
