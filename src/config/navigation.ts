export const mainNavigation = [
  { label: "Producto", href: "/producto" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Industrias", href: "/industrias" },
  { label: "Automatizaciones", href: "/automatizaciones" },
  { label: "Integraciones", href: "/integraciones" },
  { label: "Precios", href: "/precios" },
  { label: "FAQ", href: "/preguntas-frecuentes" },
] as const;

export const footerNavigation = {
  Producto: [
    { label: "Características", href: "/producto" },
    { label: "Automatizaciones", href: "/automatizaciones" },
    { label: "Integraciones", href: "/integraciones" },
    { label: "Precios", href: "/precios" },
  ],
  Soluciones: [
    { label: "Inmobiliarias", href: "/industrias" },
    { label: "Servicios", href: "/industrias" },
    { label: "Automotriz", href: "/industrias" },
    { label: "Educación", href: "/industrias" },
    { label: "Seguros", href: "/industrias" },
  ],
  Empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Casos de éxito", href: "/casos-de-exito" },
    { label: "Contacto", href: "/contacto" },
  ],
  Legal: [
    { label: "Privacidad", href: "/privacidad" },
    { label: "Términos", href: "/terminos" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;
