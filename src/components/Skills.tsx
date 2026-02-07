import { motion } from 'framer-motion';
import { Lightbulb, Wrench, Target, Zap } from 'lucide-react';

const skills = [
  {
    icon: Lightbulb,
    title: 'Roboticist',
    description: 'Designing autonomous and remote-controlled systems',
  },
  {
    icon: Wrench,
    title: 'IoT Developer',
    description: 'Connecting hardware to cloud via ESP32, Firebase & Pi',
  },
  {
    icon: Target,
    title: 'Full-Stack Hardware',
    description: 'Embedded C++, Python, and React dashboards',
  },
  {
    icon: Zap,
    title: 'System Integration',
    description: 'Sensors, actuators, and real-world deployment',
  },
];

const Skills = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What Defines <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center hover-lift group"
            >
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <skill.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
