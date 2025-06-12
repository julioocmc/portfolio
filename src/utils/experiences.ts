export interface ExperienceProps {
  projectName: string;
  title: string;
  company: string;
  video?: string;
  date: string;
  description: string;
  link?: string;
  technologies?: string[];
}

export const experiences: ExperienceProps[] = [
  {
    projectName: 'Panel Administrativo',
    title: 'Desarrollador Frontend',
    company: 'Go-Ya Venezuela',
    video: '/goya-video.mp4',
    date: '03/2025 - 05/2025',
    description: `
  Participé como Desarrollador Frontend en la creación de un panel administrativo de alto impacto, diseñado para centralizar la gestión interna de una de las principales empresas de retail en Venezuela.  
  Mi rol principal fue construir desde cero una plataforma robusta, eficiente y segura, utilizada por distintos perfiles dentro de la empresa, desde gerentes hasta vendedores.  
  Implementé funcionalidades clave para el monitoreo de operaciones, generación de tickets, gestionar el flujo de los mismos y otras actividades que pueden hacerse en el panel, asegurando una interfaz moderna y adaptada a las necesidades reales del cliente.  
  Todo el desarrollo se realizó usando tecnologías como React, TypeScript, Bootstrap, Metronic y SweetAlert, enfocándome en la modularidad, usabilidad y rendimiento de la aplicación.  
  Debido a temas de confidencialidad, el acceso a la plataforma es privado.
`,
    technologies: [
      'React',
      'TypeScript',
      'Metronic',
      'Bootstrap',
      'Jest',
      'ApexCharts',
    ],
  },

  {
    projectName: 'Tienda Virtual',
    title: 'Desarrollador Frontend',
    company: 'Makro Redvital',
    video: '/tienda-video.mp4',
    date: '11/2023 - 03/2025',

    description: `
  Me incorporé en la fase final del desarrollo de la Tienda Virtual de Makro Redvital, una plataforma de ecommerce para productos farmacéuticos y de consumo masivo.  
  Mi principal contribución fue optimizar y finalizar la funcionalidad del carrito de compras, así como la lógica del proceso de confirmación y checkout, asegurando una experiencia fluida y segura para los usuarios en la etapa de compra.  
  Trabajé utilizando React, TypeScript y Tailwind, adaptándome a la arquitectura existente y contribuyendo a la entrega exitosa del proyecto.  
  Este trabajo me permitió integrarme rápidamente a un equipo en marcha y aportar valor en la parte más crítica del flujo de venta.
`,

    technologies: ['React', 'TypeScript', 'Tailwind', 'Jest'],
    link: 'https://tienda.redvital.com/',
  },
  {
    projectName: 'Gestor de Pedidos',
    title: 'Desarrollador Frontend',
    company: 'Makro Redvital',
    video: '/pedidos-video.mp4',
    date: '11/2023 - 03/2025',
    description: `
  Desarrollé el frontend de un sistema de gestión de pedidos diseñado para mejorar el flujo operativo y la trazabilidad dentro de Makro Redvital.  
  El gestor permite a los empleados monitorear y actualizar solicitudes de pedidos de manera sencilla, reduciendo errores y agilizando procesos internos.  
  Trabajé utilizando React y TypeScript, creando componentes reutilizables, validaciones dinámicas y reportes interactivos.  
  Este proyecto facilitó una gestión eficiente de la cadena de suministro, mejorando la comunicación entre los distintos departamentos involucrados.
`,
    technologies: ['React', 'TypeScript', 'Tailwind', 'Jest', 'SweetAlert'],
  },
  {
    projectName: 'Panel para Proveedores',
    title: 'Desarrollador Frontend',
    company: 'Makro Redvital',
    video: '/redvital-videoc.mp4',
    date: '11/2023 - 03/2025',
    description: `
      Mi primer gran proyecto en una de las principales empresas de Venezuela. 
      Como desarrollador frontend, fui el único responsable del desarrollo inicial de toda la plataforma web interna, 
      destinada exclusivamente a los empleados de la empresa, incluyendo gerentes, proveedores, liquidadores y administradores. 
      Esta plataforma les permite monitorear y gestionar el rendimiento de sus productos dentro de la empresa. 
      El proyecto, desarrollado con tecnologías como Metronic, React, TypeScript, SASS, SweetAlert y Bootstrap, es altamente 
      modular y complejo, adaptado a las necesidades específicas de cada usuario. 
      Debido a un acuerdo de confidencialidad, no puedo compartir el enlace ni hacer público su acceso.
    `,
    technologies: ['React', 'TypeScript', 'Metronic', 'Bootstrap', 'Jest'],
  },
  {
    projectName: 'JM Store',
    title: 'Desarrollador Full Stack',
    company: 'Grupo Aplired',
    video: '/jmstore-video.mp4',
    date: '01/2023 - 02/2023',
    description: `
      En este proyecto, fui contratado por Grupo Aplired para desarrollar un modelo de ecommerce, donde asumí tanto el 
      desarrollo del frontend como una pequeña integración con el backend utilizando Firebase para gestionar el historial de compras. 
      El frontend fue desarrollado con Vite, React, JavaScript y CSS, creando una experiencia de usuario simple y directa que permite 
      a los usuarios navegar por los productos, añadirlos al carrito y completar la compra de manera intuitiva. Esta fue una versión 
      base, la cual entregué al cliente para que pudieran continuar con su desarrollo posterior.
    `,
    technologies: ['React', 'Javascript', 'Firebase', 'CSS'],
    link: 'https://sparkly-peony-0e7e86.netlify.app/',
  },
  {
    projectName: 'Gastronomía Venezolana',
    title: 'Desarrollador Full Stack',
    company: 'Grupo Aplired',
    video: '/vzlafood-video.mp4',
    date: '02/2023 - 03/2023',
    description: `
      Para este proyecto con Grupo Aplired, fui encargado de desarrollar una página informativa dedicada a ofrecer detalles sobre 
      planes de comida típica venezolana. Mi objetivo fue crear una página visualmente atractiva y fácil de navegar, permitiendo a 
      los usuarios explorar diferentes opciones de menús. Utilicé HTML, JavaScript y CSS para construir esta plataforma, enfocándome 
      en una interfaz sencilla pero efectiva que resaltara la información de manera clara y accesible para todos los visitantes.
    `,
    technologies: ['HTML', 'CSS', 'Javascript'],
    link: 'https://unrivaled-mandazi-3196aa.netlify.app/',
  },
];
