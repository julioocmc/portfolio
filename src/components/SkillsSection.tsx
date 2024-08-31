import { FC } from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaSass,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

interface Skill {
  name: string;
  icon: JSX.Element;
  link: string;
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: <FaReact size={60} color="#61DBFB" />,
    link: 'https://reactjs.org/',
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare size={60} color="#F0DB4F" />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={60} color="#3178C6" />,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'HTML',
    icon: <FaHtml5 size={60} color="#E34C26" />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={60} color="#1572B6" />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'SASS',
    icon: <FaSass size={60} color="#CC6699" />,
    link: 'https://sass-lang.com/',
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap size={60} color="#7952B3" />,
    link: 'https://getbootstrap.com/',
  },
];

const SkillsSection: FC = () => (
  <div
    className="max-w-4xl mx-auto p-7 rounded-lg shadow-lg"
    style={{ border: '2px solid #c4bcab' }}
  >
    <div className="flex flex-wrap justify-center space-x-8">
      {skills.map((skill, index) => (
        <a
          key={index}
          href={skill.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition duration-500 hover:scale-105 cursor-pointer flex flex-col items-center"
        >
          {skill.icon}
          <span className="mt-3 text-gray-700">{skill.name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default SkillsSection;
