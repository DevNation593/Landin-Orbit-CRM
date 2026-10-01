export const industries = [
  {
    id: "inmobiliarias",
    name: "Inmobiliarias",
    headline: "De la propiedad al cierre, con cada relación conectada.",
    description:
      "Organiza inventario, propietarios, interesados, visitas y negociaciones en un flujo hecho para tu operación.",
    entity: "Propiedad",
    items: ["Clientes", "Propiedades", "Visitas", "Negociaciones", "Contratos"],
  },
  {
    id: "automotriz",
    name: "Automotriz",
    headline: "Cada vehículo, servicio y seguimiento en contexto.",
    description:
      "Relaciona clientes con vehículos y acompaña cotizaciones, servicios y oportunidades sin perder el hilo.",
    entity: "Vehículo",
    items: ["Clientes", "Vehículos", "Servicios", "Cotizaciones", "Seguimientos"],
  },
  {
    id: "seguros",
    name: "Seguros",
    headline: "Renovaciones y atención que llegan a tiempo.",
    description:
      "Gestiona pólizas, vencimientos, siniestros y conversaciones desde una visión unificada del cliente.",
    entity: "Póliza",
    items: ["Clientes", "Pólizas", "Renovaciones", "Siniestros", "Seguimientos"],
  },
  {
    id: "educacion",
    name: "Educación",
    headline: "Un recorrido claro para cada estudiante.",
    description:
      "Coordina admisiones, cursos, documentos y seguimientos con procesos adaptados a tu institución.",
    entity: "Estudiante",
    items: ["Estudiantes", "Cursos", "Procesos", "Seguimientos", "Documentación"],
  },
  {
    id: "servicios",
    name: "Servicios",
    headline: "Del primer contacto a la entrega del proyecto.",
    description:
      "Conecta clientes, propuestas, proyectos y tareas para que tu equipo trabaje sobre una misma realidad.",
    entity: "Proyecto",
    items: ["Clientes", "Proyectos", "Tareas", "Cotizaciones", "Seguimientos"],
  },
] as const;
