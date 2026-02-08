import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Highlights from '@/components/Highlights';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Highlights />
      <Skills />

      <div className="py-12">
        <TechStack />
      </div>

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
