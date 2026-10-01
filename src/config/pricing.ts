export const pricingPlans = [
  {
    name: "Starter",
    audience: "Para equipos pequeños que quieren ordenar su operación.",
    priceLabel: "Precio por definir",
    featured: false,
    features: [
      "Contactos y organizaciones",
      "Pipelines configurables",
      "Tareas y actividades",
      "Campos personalizados",
    ],
  },
  {
    name: "Professional",
    audience: "Para empresas que necesitan procesos conectados y automatización.",
    priceLabel: "Precio por definir",
    featured: true,
    features: [
      "Todo en Starter",
      "Entidades personalizadas",
      "Automatizaciones",
      "Reportes avanzados",
      "Roles y permisos",
    ],
  },
  {
    name: "Business",
    audience: "Para organizaciones con operaciones y controles más avanzados.",
    priceLabel: "Precio por definir",
    featured: false,
    features: [
      "Todo en Professional",
      "Auditoría",
      "Permisos avanzados",
      "Integraciones a medida",
      "Acompañamiento dedicado",
    ],
  },
] as const;
