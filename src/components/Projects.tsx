import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Bot, Sun, Zap, Cloud, Thermometer, Droplets, Brain } from 'lucide-react';

const projects = [
  {
    name: 'SafeSpeak',
    subtitle: 'Hardware-Integrated Reporting Platform',
    description: 'A hardware-software hybrid reporting system featuring physical kiosk prototypes for anonymous input, ensuring secure data transmission from terminal to cloud with end-to-end encryption.',
    tags: ['Embedded', 'IoT', 'Hardware'],
    icon: Shield,
  },
  {
    name: 'OMNIS',
    subtitle: 'Intelligent Robotics System',
    description: 'A sophisticated robotics platform featuring custom chassis design, sensor-fusion for navigation, and integrated motor control logic using ESP32 and specialized motor drivers.',
    tags: ['Robotics', 'Embedded C++', 'PCB'],
    icon: Bot,
  },
  {
    name: 'AquaGuard',
    subtitle: 'Institutional Water Management Hardware',
    description: 'A high-precision monitoring system utilizing flow-rate sensors and automated solenoid valves to manage water distribution and detect leaks in real-time through embedded logic.',
    tags: ['Sensors', 'Automation', 'Arduino'],
    icon: Droplets,
  },
  {
    name: 'SONOVOLT',
    subtitle: 'Energy Harvesting Circuitry',
    description: 'An experimental hardware project focused on converting mechanical sound waves into electrical energy using piezoelectric transducers and custom-built energy storage circuits.',
    tags: ['Electronics', 'Energy', 'Circuitry'],
    icon: Zap,
  },
  {
    name: 'RoboCore',
    subtitle: 'Modular Hardware Controller',
    description: 'A modular embedded controller platform for robotics, integrating multi-channel PWM control, sensor interfacing, and dedicated power management for mobile automation.',
    tags: ['Embedded Systems', 'Robotics'],
    icon: Bot,
  },
  {
    name: 'TankView',
    subtitle: 'IoT Sensor Node & Dashboard',
    description: 'A hardware-to-cloud bridge utilizing ultrasonic depth sensors and ESP8266 nodes to stream real-time utility data to a centralized monitoring dashboard.',
    tags: ['IoT', 'Nodes', 'Data'],
    icon: Cloud,
  },
  {
    name: 'EnviroTrack',
    subtitle: 'Sensor Node Network',
    description: 'A distributed network of environmental sensor nodes capturing temperature, humidity, and electrical parameters through calibrated physical probes and wireless data transmission.',
    tags: ['Sensors', 'Wireless', 'IoT'],
    icon: Thermometer,
  },
  {
    name: 'HydroSafe',
    subtitle: 'Water Quality Probe System',
    description: 'An environmental monitoring system integrating pH, TDS, and turbidity sensor probes with real-time hardware calibration and an automated alert module.',
    tags: ['Hardware', 'Environmental'],
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
