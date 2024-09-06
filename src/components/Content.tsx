import AnimatedText from './AnimatedText';
import Summary from './Summary';
import SectionTitle from './SectionTitle';
import './styles/main.scss';

const Content = () => {
  return (
    <div className="content-container max-w-screen-lg w-full mx-auto p-10">
      {' '}
      <header className="flex flex-col md:flex-row p-5">
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <AnimatedText />
        </div>
        <div className="w-full md:w-1/2 relative">
          <SectionTitle title="Resumen" />
          <div
            className="p-5 mt-4 md:mt-8 rounded-lg overflow-y-auto"
            style={{ backgroundColor: '#c4bcab', maxHeight: '400px' }}
          >
            <Summary />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Content;
