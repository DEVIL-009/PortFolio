import { motion } from 'framer-motion';
import { Brain, Trophy, Newspaper, FileText } from 'lucide-react';

const trustItems = [
  {
    icon: Brain,
    title: 'MGM Model School',
    subtitle: 'Robotics Team',
  },
  {
    icon: Trophy,
    title: 'YIP State Finalist',
    subtitle: 'Innovation Winner',
  },
  {
    icon: Newspaper,
    title: 'Media Featured',
    subtitle: 'Lead Innovation',
  },
  {
    icon: FileText,
    title: 'KAPILA Patent',
    subtitle: 'Filing in Progress',
  },
];

const TrustStrip = () => {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-4 md:p-5 hover-lift group"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-2.5 rounded-xl bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {item.subtitle}
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

export default TrustStrip;
