import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold text-foreground mb-1">
              Deva Nandan S
            </h3>
            <p className="text-muted-foreground text-sm">
              Student Roboticist • Embedded Systems Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DEVIL-009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/deva-nandan-s-72038438b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:devanandan170@gmail.com"
              className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Deva Nandan S. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            Built with React • Tailwind • Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
