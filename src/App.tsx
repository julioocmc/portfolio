import AboutSection from './components/ContactSection';
import CertificationsSection from './components/CertifiactionSection';
import Content from './components/Content';
import ExperienceSection from './components/ExperienceSection';
import SectionTitle from './components/SectionTitle';
import SkillsSection from './components/SkillsSection';
import SocialSection from './components/SocialSection';

function App() {
  return (
    <div className="App">
      <header className="flex flex-col items-center justify-center">
        <div className="card">
          <Content />
        </div>
      </header>
      <main className="flex flex-col items-center justify-center">
        <section className="card">
          <SectionTitle title="Experiencia Laboral" /> <ExperienceSection />
        </section>
        <section className="card">
          <SectionTitle title="Habilidades" /> <SkillsSection />
        </section>
        <section className="card mt-10">
          <SectionTitle title="Certificados" /> <CertificationsSection />
        </section>
        <section className="card mt-10">
          <SectionTitle title="Contáctame" /> <AboutSection />
        </section>
        <section className="card mt-10 mb-10">
          <SectionTitle title="Puedes encontrarme:" /> <SocialSection />
        </section>
      </main>
    </div>
  );
}

export default App;
