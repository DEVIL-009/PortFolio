import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Bot, Sun, Zap, Cloud, Thermometer, Droplets, Brain } from 'lucide-react';

const projects = [
  {
    name: 'SafeSpeak',
    subtitle: 'Anonymous Safety Reporting Platform',
    description: 'A secure, privacy-first platform that enables students to report safety concerns anonymously. Designed to protect identity while ensuring reports reach the right authorities with accountability and structure.',
    tags: ['Web', 'Firebase', 'Safety Systems'],
    icon: Shield,
  },
  {
    name: 'OMNIS',
    subtitle: 'Educational Robotics Platform',
    description: 'An enhanced educational robot system rebuilt with improved intelligence, modular hardware integration, and real-world interaction capabilities for learning environments.',
    tags: ['Robotics', 'IoT', 'Hardware'],
    icon: Bot,
  },
  {
    name: 'AquaGuard',
    subtitle: 'School Water Analytics System',
    description: 'A distributed water monitoring system with flow sensors, servo-controlled valves, and centralized analytics to reduce water wastage in institutions.',
    tags: ['IoT', 'Sustainability'],
    icon: Droplets,
  },
  {
    name: 'SONOVOLT',
    subtitle: 'Hybrid Sound & Vibration Energy',
    description: 'An experimental energy system that converts ambient sound, vibration, and mechanical motion into usable electrical energy with real-time monitoring.',
    tags: ['Energy', 'Innovation'],
    icon: Zap,
  },
  {
    name: 'RoboCore',
    subtitle: 'Modular Robotics Platform',
    description: 'A customizable robotics platform integrating motors, sensors, and embedded control logic for automation, navigation, and learning applications.',
    tags: ['Robotics', 'Automation'],
    icon: Bot,
  },
  {
    name: 'TankView',
    subtitle: 'Real-Time IoT Monitoring Dashboard',
    description: 'A modern web-based dashboard built with React and Firebase for visualizing sensor data, pump status, and historical trends.',
    tags: ['Web', 'IoT'],
    icon: Cloud,
  },
  {
    name: 'EnviroTrack',
    subtitle: 'Environmental & Utility Monitoring',
    description: 'A sensor-driven system for monitoring temperature, humidity, water usage, and electrical parameters with cloud-based visualization.',
    tags: ['IoT', 'Monitoring'],
    icon: Thermometer,
  },
  {
    name: 'HydroSafe',
    subtitle: 'Water Quality Monitoring System',
    description: 'An environmental safety system that tracks water quality parameters and triggers alerts to prevent contamination and ensure safe usage.',
    tags: ['IoT', 'Safety'],
    icon: Shield,
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A focused collection of systems, platforms, and prototypes I’ve built across web, AI, robotics, and sustainability — each solving a real-world problem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="glass-card p-6 hover-lift group h-full flex flex-col"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4 w-fit group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <project.icon className="w-6 h-6" />
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {project.name}
              </h3>
              <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide">
                {project.subtitle}
              </p>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <button className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline">
                  <ExternalLink className="w-3.5 h-3.5" />
                  Case Study
                </button>
                <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm">
            More experimental and open-source projects are available on my{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-all"
            >
              GitHub
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
