import { FC, useState } from 'react';
import CustomModal from './CustomModal';
import { ExperienceProps, experiences } from '../utils/experiences';

const ExperienceCard: FC<ExperienceProps & { onClick: () => void }> = ({
  projectName,
  title,
  company,
  video,
  date,
  link,
  technologies,
  onClick,
}) => (
  <div
    className="max-w-sm p-5 rounded-lg shadow-lg mr-10 ml-10 mb-10 transform transition duration-500 hover:scale-105 cursor-pointer"
    style={{ backgroundColor: 'var(--primary-card-background)' }}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => {
      if (e.key === 'Enter') onClick();
    }}
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
      <div
        className="font-bold text-xl mb-2"
        style={{ color: 'var(--primary-black)' }}
      >
        {projectName} -{' '}
        <span style={{ color: 'var(--primary-bullet)' }}>{title}</span>
      </div>
      <p className="text-gray-700 text-left font-bold">{company}</p>
      <p className="text-gray-600 text-left">{date}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {(technologies ?? []).map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 rounded-full text-xs font-semibold"
            style={{
              background: 'var(--accent-200)',
              color: 'var(--primary-black)',
              border: '1px solid var(--accent-100)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 hover:text-orange-800 font-bold transition-colors duration-300"
          style={{ color: 'var(--primary-bullet)' }}
        >
          Visita la página
        </a>
      )}
    </div>
  </div>
);

const ExperienceSection: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState<ExperienceProps | null>(null);

  const openModal = (exp: ExperienceProps) => {
    setSelectedExp(exp);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedExp(null);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} onClick={() => openModal(exp)} />
      ))}

      {selectedExp && (
        <CustomModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedExp.projectName}
        >
          <div
            className="text-gray-600 dark:text-gray-300"
            style={{ whiteSpace: 'pre-line' }}
            dangerouslySetInnerHTML={{ __html: selectedExp.description }}
          />
        </CustomModal>
      )}
    </div>
  );
};

export default ExperienceSection;
