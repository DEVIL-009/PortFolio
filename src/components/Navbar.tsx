import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Github, Gamepad2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Recognition', href: '/recognition' },
  { name: 'Work', href: '/#work' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(href.replace('/#', ''));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(href.replace('/#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('deva_nandan_09');
    toast.success('Discord username copied to clipboard!');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: 0,
          width: isScrolled ? 'auto' : '100%',
          top: isScrolled ? '1rem' : '0',
          borderRadius: isScrolled ? '9999px' : '0',
          backgroundColor: isScrolled ? 'rgba(var(--background), 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          border: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
          padding: isScrolled ? '0.75rem 1.5rem' : '1.5rem 2rem',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between transition-all duration-300 ${isScrolled
            ? 'glass-card shadow-lg max-w-5xl'
            : 'max-w-[100vw]'
          }`}
        style={{
          backgroundColor: isScrolled ? 'hsl(var(--background) / 0.8)' : 'transparent',
        }}
      >
        <button
          onClick={() => handleNavClick('/')}
          className={`font-display font-bold text-foreground transition-all duration-300 ${isScrolled ? 'text-xl mr-8' : 'text-2xl tracking-widest uppercase'
            }`}
        >
          Deva Nandan S
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${isScrolled ? 'text-muted-foreground' : 'text-foreground/80 uppercase tracking-wide'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 ml-8">
          <div className="flex items-center gap-3 border-r border-border/50 pr-4">
            <a
              href="https://linkedin.com/in/deva-nandan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Darknight4433"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <button
              onClick={handleCopyDiscord}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Copy Discord Username"
            >
              <Gamepad2 size={18} />
            </button>
          </div>
          <button
            onClick={() => handleNavClick('/#contact')}
            className={`btn-primary text-sm ${isScrolled ? 'px-4 py-2' : 'px-6 py-2.5'}`}
          >
            Let's Work
          </button>
        </div>

        <button
          className="md:hidden text-foreground p-2 ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col gap-6 items-center">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {item.name}
                </motion.button>
              ))}

              <div className="flex gap-6 mt-8">
                <a
                  href="https://linkedin.com/in/deva-nandan-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Darknight4433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Github size={24} />
                </a>
                <button
                  onClick={handleCopyDiscord}
                  className="p-3 bg-secondary rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  title="Copy Discord Username"
                >
                  <Gamepad2 size={24} />
                </button>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => handleNavClick('/#contact')}
                className="btn-primary text-lg mt-4 px-8 py-3"
              >
                Let's Work
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
