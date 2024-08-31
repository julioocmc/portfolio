import { FC } from 'react';
import Swal from 'sweetalert2';

interface Certification {
  title: string;
  institution: string;
  description: string;
  image: string;
  dateRange: string;
}

const certifications: Certification[] = [
  {
    title: 'Programación Backend',
    institution: 'Coderhouse',
    description: 'Curso avanzado de desarrollo backend con Node.js y MongoDB.',
    image: '/public/backend-certificado.png',
    dateRange: '08/2022 - 02/2023',
  },
  {
    title: 'JavaScript',
    institution: 'Coderhouse',
    description:
      'Fundamentos y conceptos avanzados de JavaScript. Top 10 en desempeño.',
    image: '/public/javascript-certificado.png',
    dateRange: '01/2023 - 03/2023',
  },
  {
    title: 'React',
    institution: 'Coderhouse',
    description: 'Desarrollo de aplicaciones SPA escalables con React.',
    image: '/public/react-certificado.png',
    dateRange: '02/2023 - 04/2023',
  },
];

const CertificationCard: FC<Certification> = ({
  title,
  institution,
  description,
  image,
  dateRange,
}) => {
  const showCertificate = () => {
    Swal.fire({
      title: title,
      imageUrl: image,
      imageAlt: title,
      imageWidth: '100%',
      imageHeight: 'auto',
      background: '#f0e8d9',
      color: '#333',
      showCloseButton: false,
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
      onClick={showCertificate}
    >
      <img
        src={image}
        alt={title}
        className="rounded-lg object-cover mb-4"
        style={{ height: '200px', width: '100%' }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2" style={{ color: '#dd6236' }}>
          {title}
        </div>
        <p className="text-gray-700 text-left font-bold">{institution}</p>
        <p className="text-gray-600 text-left mt-2">{description}</p>
        <p className="text-gray-600 text-left mt-2 font-bold">{dateRange}</p>
      </div>
    </div>
  );
};

const CertificationsSection: FC = () => (
  <div className="flex flex-wrap justify-center">
    {certifications.map((cert, index) => (
      <CertificationCard key={index} {...cert} />
    ))}
  </div>
);

export default CertificationsSection;
