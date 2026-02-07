import { motion } from 'framer-motion';
import { GraduationCap, Building2, Rocket, Code2 } from 'lucide-react';

const roles = [
  {
    icon: GraduationCap,
    title: 'Student',
    organization: 'MGM Model School',
  },
  {
    icon: Code2,
    title: 'Developer',
    organization: 'IoT & Robotics Projects',
  },
  {
    icon: Rocket,
    title: 'Innovator',
    organization: 'Competitions & Research',
  },
  {
    icon: Building2,
    title: 'System Builder',
    organization: 'Smart Infrastructure',
  },
];

const CurrentRoles = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Current
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold drop-shadow-md">
            What I'm Doing <span className="gradient-text">Now</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <role.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {role.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentRoles;
