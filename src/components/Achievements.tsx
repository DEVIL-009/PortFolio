import { motion } from 'framer-motion';
import { Trophy, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const topAchievements = [
  {
    icon: Trophy,
    title: 'RoboX 2024 – Oxford School, Kollam',
    subtitle: '🥇 1st Position | ₹5,000 Cash Award',
    year: '2024',
  },
  {
    icon: Award,
    title: 'Science Quest 2025 – Amrita Vishwa Vidyapeetham',
    subtitle: '🥈 2nd Position | ₹25,000 Cash Award',
    year: '2025',
  },
  {
    icon: Award,
    title: 'FLP Skill Quest',
    subtitle: '🥇 1st Place',
    year: '2025',
  },
  {
    icon: Trophy,
    title: 'Rajadhani Aspire Innovation Event',
    subtitle: '🥉 3rd Prize | ₹5,000 Cash Award',
    year: '2024',
  },
  {
    icon: Award,
    title: 'Unibotix Robotics Quiz',
    subtitle: '🥈 2nd Place',
    year: '2024',
  },
  {
    icon: Trophy,
    title: 'YIP – District Winner | State Finalist',
    subtitle: 'Innovation in safety technology',
    year: '2024',
  },
];

const Achievements = () => {
  return (
    <section id="recognition" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Recognition
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4 mb-10">
          {topAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-5 hover-lift group flex items-center gap-4"
            >
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <achievement.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {achievement.title}
                </h3>
                {achievement.subtitle && (
                  <p className="text-muted-foreground text-sm">
                    {achievement.subtitle}
                  </p>
                )}
              </div>
              <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full shrink-0">
                {achievement.year}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/recognition"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            View Full Recognition
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
