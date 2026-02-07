import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import About from '@/components/About';
import Skills from '@/components/Skills';
import CurrentRoles from '@/components/CurrentRoles';
import Achievements from '@/components/Achievements';

import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Skills />
      <CurrentRoles />
      <Achievements />

      <TechStack />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
