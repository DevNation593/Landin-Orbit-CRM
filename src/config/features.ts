export type FeatureIcon =
  | "contacts"
  | "pipeline"
  | "fields"
  | "entities"
  | "automation"
  | "activity"
  | "permissions"
  | "reports";

export const features: Array<{
  title: string;
  description: string;
  icon: FeatureIcon;
  wide?: boolean;
}> = [
  {
    title: "Contactos y empresas",
    description:
      "Centraliza perfiles, relaciones, conversaciones y contexto comercial en una ficha compartida.",
    icon: "contacts",
  },
  {
    title: "Pipelines personalizados",
    description:
      "Diseña etapas que reflejan tu proceso real y mueve cada oportunidad con total visibilidad.",
    icon: "pipeline",
    wide: true,
  },
  {
    title: "Campos personalizados",
    description:
      "Captura la información específica de tu operación sin alterar el sistema.",
    icon: "fields",
  },
  {
    title: "Entidades personalizadas",
    description:
      "Representa propiedades, vehículos, pólizas, casos o proyectos y relaciónalos con tus clientes.",
    icon: "entities",
    wide: true,
  },
  {
    title: "Automatizaciones",
    description:
      "Convierte reglas repetitivas en flujos consistentes para que nada dependa de la memoria.",
    icon: "automation",
  },
  {
    title: "Historial completo",
    description:
      "Consulta llamadas, reuniones, notas, tareas y cambios en una línea de tiempo clara.",
    icon: "activity",
  },
  {
    title: "Roles y permisos",
    description:
      "Define qué puede ver y hacer cada persona según su responsabilidad.",
    icon: "permissions",
  },
  {
    title: "Reportes accionables",
    description:
      "Sigue conversión, actividad y rendimiento con indicadores que ayudan a decidir.",
    icon: "reports",
  },
];
