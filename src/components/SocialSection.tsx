import { FC } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const SocialSection: FC = () => (
  <div
    className="max-w-4xl mx-auto mt-10 p-7 rounded-lg shadow-lg text-center"
    style={{ border: '2px solid #c4bcab' }}
  >
    <div className="flex justify-center space-x-6">
      <a
        href="https://www.linkedin.com/in/julio-mijares/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-orange-500"
      >
        <FaLinkedin size={40} />
      </a>
      <a
        href="https://github.com/julioocmc"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-orange-500"
      >
        <FaGithub size={40} />
      </a>
      <a
        href="mailto:juliooocmc18@gmail.com"
        className="text-gray-700 hover:text-orange-500"
      >
        <FaEnvelope size={40} />
      </a>
      <a
        href="tel:+584241484800"
        className="text-gray-700 hover:text-orange-500"
      >
        <FaPhone size={40} />
      </a>
    </div>
  </div>
);

export default SocialSection;
