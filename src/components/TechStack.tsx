import { motion } from 'framer-motion';
import { Github, GitBranch, Users } from 'lucide-react';

const techStack = [
  'Arduino', 'ESP32/ESP8266', 'Raspberry Pi', 'C/C++', 'Python',
  'JavaScript', 'Firebase', 'IoT Architecture', 'Robotics', 'React', 'HTML/CSS'
];

const stats = [
  { icon: GitBranch, value: '60+', label: 'Repositories' },
  { icon: Users, value: '10+', label: 'Domains' },
  { icon: Github, value: 'Active', label: 'Contributor' },
];

const TechStack = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Technical
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  GitHub Profile
                </h3>
                <p className="text-muted-foreground text-sm">
                  Open-source contributions and personal projects
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <div className="font-display text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="tech-chip"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
