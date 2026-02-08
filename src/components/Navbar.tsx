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
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed z-50 transition-all duration-300 ${isScrolled
          ? 'top-4 left-0 right-0 mx-auto w-[90%] md:w-fit max-w-[95vw] rounded-full bg-background/20 backdrop-blur-sm border border-white/5'
          : 'top-0 left-0 right-0 w-full'
          }`}
      >
        <div className={`flex items-center justify-between px-4 md:px-8 py-6 md:py-8 transition-all duration-300 ${isScrolled ? 'px-8 py-4' : ''
          }`}>
          <button
            onClick={() => handleNavClick('/')}
            className={`font-display font-bold text-foreground flex-shrink-0 transition-all duration-300 whitespace-nowrap flex items-center ${isScrolled ? 'text-sm' : 'text-lg md:text-xl tracking-widest uppercase'
              }`}
          >
            <span className={`rounded-full bg-primary ${isScrolled ? 'w-1.5 h-1.5 mr-1.5' : 'w-2 h-2 mr-2'}`}></span>
            Deva Nandan S
          </button>

          {!isScrolled && (
            <div className="hidden md:flex items-center gap-10 mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-foreground/80 uppercase tracking-wide hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}

          {isScrolled && (
            <div className="hidden md:flex items-center gap-7 ml-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-xs font-medium text-foreground/70 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}

          <div className={`hidden md:flex items-center transition-all duration-300 ${isScrolled
            ? 'gap-4 ml-6 pl-6 border-l border-white/10'
            : 'gap-4 ml-auto'
            }`}>
            <a
              href="https://linkedin.com/in/deva-nandan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors flex-shrink-0"
            >
              <Linkedin size={isScrolled ? 16 : 18} />
            </a>
            <a
              href="https://github.com/Darknight4433"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors flex-shrink-0"
            >
              <Github size={isScrolled ? 16 : 18} />
            </a>
            <button
              onClick={handleCopyDiscord}
              className="text-foreground/60 hover:text-primary transition-colors flex-shrink-0"
              title="Copy Discord Username"
            >
              <Gamepad2 size={isScrolled ? 16 : 18} />
            </button>
          </div>
          <button
            onClick={() => handleNavClick('/#contact')}
            className={`hidden md:flex transition-all duration-300 border border-primary/50 hover:bg-primary/10 hover:border-primary rounded-full items-center gap-2 ${isScrolled ? 'text-sm px-5 py-2' : 'text-sm px-6 py-2.5'
              }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Let's Work
          </button>

          <button
            className="md:hidden text-foreground p-2 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
