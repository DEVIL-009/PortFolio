import { motion } from 'framer-motion';
import { Globe, LayoutDashboard, Lightbulb, Calendar, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Custom websites built with modern frameworks and beautiful interfaces',
  },
  {
    icon: LayoutDashboard,
    title: 'Animated Dashboards',
    description: 'Interactive data visualizations with smooth animations',
  },
  {
    icon: Lightbulb,
    title: 'Innovation MVPs',
    description: 'Rapid prototyping for new product ideas and concepts',
  },
  {
    icon: Calendar,
    title: 'Tech Event Websites',
    description: 'Landing pages and platforms for hackathons and tech events',
  },
  {
    icon: GraduationCap,
    title: 'Student Project Systems',
    description: 'Educational platforms and project management tools',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary/20 relative">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] transform -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What I Can Build <span className="text-primary">For You</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="p-3 rounded-xl bg-secondary text-muted-foreground mb-4 w-fit group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              <a href="#contact" className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary group-hover:gap-3 transition-all duration-300">
                Request Build
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;