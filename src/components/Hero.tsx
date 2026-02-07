import { motion } from 'framer-motion';
import { ArrowRight, Bot } from 'lucide-react';
import CursorParticles from './CursorParticles';

const Hero = () => {
  // Updated to match the user's actual filename from their screenshot
  const profileImagePath = '/dev.jpg';

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <CursorParticles />
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.02, 0.05, 0.02],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary rounded-full blur-[100px]"
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 lg:order-1 relative"
          >
            {/* Center-weight element: Static Text Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground"
            >
              Deva Nandan S
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted-foreground font-medium text-lg mb-6"
            >
              Student Roboticist • Embedded Systems Developer • IoT Innovator
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-muted-foreground/80 text-lg leading-relaxed mb-8 max-w-xl"
            >
              I design and build real-world hardware–software systems focused on automation, sustainability, and smart infrastructure. My work combines electronics, embedded programming, and cloud-connected dashboards to create systems that are practical, reliable, and deployable beyond prototypes.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-muted-foreground/60 text-sm font-medium tracking-wide uppercase mb-8"
            >
              I design and deploy systems that move from idea to real-world use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary-glow flex items-center gap-2 group">
                Build With Me
              </a>
              <a href="#work" className="btn-ghost flex items-center gap-2 group">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Fallback */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-3 rounded-full bg-primary/20 blur-2xl"
              />

              <div className="profile-ring-slow p-1">
                <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-secondary flex items-center justify-center">
                  <img
                    src={profileImagePath}
                    alt="Deva Nandan S"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (img.src.endsWith('.jpg')) {
                        img.src = '/deva.png'; // Try PNG if JPG fails
                      } else if (img.src.endsWith('.png')) {
                        img.src = '/deva.jpeg'; // Try JPEG if PNG fails
                      } else {
                        img.style.display = 'none';
                        const fallback = img.parentElement?.querySelector('.fallback-icon');
                        if (fallback) (fallback as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="fallback-icon hidden items-center justify-center">
                    <Bot size={120} className="text-primary opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
