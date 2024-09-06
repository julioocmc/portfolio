import { FC } from 'react';
import Swal from 'sweetalert2';

interface ExperienceProps {
  projectName: string;
  title: string;
  company: string;
  video?: string;
  date: string;
  description: string;
  link?: string;
}

const experiences: ExperienceProps[] = [
  {
    projectName: 'Redvital Platform',
    title: 'Desarrollador Frontend',
    company: 'Makro Redvital',
    video: '/public/redvital-videoc.mp4',
    date: '11/2023 - Presente',
    description: `
      Mi primer gran proyecto en una de las principales empresas de Venezuela. 
      Como desarrollador frontend, fui el único responsable del desarrollo inicial de toda la plataforma web interna, 
      destinada exclusivamente a los empleados de la empresa, incluyendo gerentes, proveedores, liquidadores y administradores. 
      Esta plataforma les permite monitorear y gestionar el rendimiento de sus productos dentro de la empresa. 
      El proyecto, desarrollado con tecnologías como Metronic, React, TypeScript, SASS, SweetAlert y Bootstrap, es altamente 
      modular y complejo, adaptado a las necesidades específicas de cada usuario. 
      Debido a un acuerdo de confidencialidad, no puedo compartir el enlace ni hacer público su acceso.
    `,
  },
  {
    projectName: 'JM Store',
    title: 'Desarrollador Full Stack',
    company: 'Grupo Aplired',
    video: '/public/jmstore-video.mp4',
    date: '01/2023 - 02/2023',
    description: `
      En este proyecto, fui contratado por Grupo Aplired para desarrollar un modelo de ecommerce, donde asumí tanto el 
      desarrollo del frontend como una pequeña integración con el backend utilizando Firebase para gestionar el historial de compras. 
      El frontend fue desarrollado con Vite, React, JavaScript y CSS, creando una experiencia de usuario simple y directa que permite 
      a los usuarios navegar por los productos, añadirlos al carrito y completar la compra de manera intuitiva. Esta fue una versión 
      base, la cual entregué al cliente para que pudieran continuar con su desarrollo posterior.
    `,
    link: 'https://sparkly-peony-0e7e86.netlify.app/',
  },
  {
    projectName: 'Gastronomía Venezolana',
    title: 'Desarrollador Full Stack',
    company: 'Grupo Aplired',
    video: '/public/vzlafood-video.mp4',
    date: '02/2023 - 03/2023',
    description: `
      Para este proyecto con Grupo Aplired, fui encargado de desarrollar una página informativa dedicada a ofrecer detalles sobre 
      planes de comida típica venezolana. Mi objetivo fue crear una página visualmente atractiva y fácil de navegar, permitiendo a 
      los usuarios explorar diferentes opciones de menús. Utilicé HTML, JavaScript y CSS para construir esta plataforma, enfocándome 
      en una interfaz sencilla pero efectiva que resaltara la información de manera clara y accesible para todos los visitantes.
    `,
    link: 'https://unrivaled-mandazi-3196aa.netlify.app/',
  },
];

const ExperienceCard: FC<ExperienceProps> = ({
  projectName,
  title,
  company,
  video,
  date,
  description,
  link,
}) => {
  const showModal = () => {
    Swal.fire({
      title: projectName,
      html: `<div style="text-align: left;">${description}</div>`,
      background: '#f0e8d9',
      color: '#333',
      showCloseButton: true,
      confirmButtonColor: '#dd6236',
      customClass: {
        title: 'text-xl font-bold',
        htmlContainer: 'text-base',
      },
    });
  };

  return (
    <div
      className="max-w-sm p-5 rounded-lg shadow-lg mr-10 ml-10 mb-10 transform transition duration-500 hover:scale-105 cursor-pointer"
      style={{ backgroundColor: '#c4bcab' }}
      onClick={showModal}
    >
      {video ? (
        <video
          className="w-full rounded-lg h-50 object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          className="w-full rounded-lg h-50 object-cover"
          src="https://via.placeholder.com/150"
          alt={title}
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {projectName} - <span style={{ color: '#dd6236' }}>{title}</span>
        </div>
        <p className="text-gray-700 text-left">{company}</p>
        <p className="text-gray-600 text-left">{date}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-orange-600 hover:text-orange-800 font-bold transition-colors duration-300"
          >
            Visita la página
          </a>
        )}
      </div>
    </div>
  );
};

const ExperienceSection: FC = () => (
  <div className="flex flex-wrap justify-center">
    {experiences.map((exp, index) => (
      <ExperienceCard key={index} {...exp} />
    ))}
  </div>
);

export default ExperienceSection;
