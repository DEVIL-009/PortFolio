import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Award, Star, Medal, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import newspaperImage from '@/assets/newspaper-clipping.jpeg';

const achievements = [
  {
    icon: Trophy,
    title: 'RoboX 2024 – Oxford School, Kollam',
    description: '🥇 1st Position | ₹5,000 Cash Award for excellence in robotics design and competition.',
    year: '2024',
    category: 'Robotics',
  },
  {
    icon: Award,
    title: 'Science Quest 2025 – Amrita Vishwa Vidyapeetham',
    description: '🥈 2nd Position | ₹25,000 Cash Award in the prestigious Science Quest innovation competition.',
    year: '2025',
    category: 'Innovation',
  },
  {
    icon: Award,
    title: 'FLP Skill Quest',
    description: '🥇 1st Place performance in the skill development and innovation challenge.',
    year: '2025',
    category: 'Competition',
  },
  {
    icon: Trophy,
    title: 'Rajadhani Aspire Innovation Event',
    description: '🥉 3rd Prize | ₹5,000 Cash Award for smart infrastructure prototype development.',
    year: '2024',
    category: 'Innovation',
  },
  {
    icon: Medal,
    title: 'Unibotix Robotics Quiz',
    description: '🥈 2nd Place in the competitive robotics knowledge and application challenge.',
    year: '2024',
    category: 'Robotics',
  },
  {
    icon: Trophy,
    title: 'YIP – District Winner | State Finalist',
    description: 'Young Innovators Programme recognition at district and state level for innovation in safety technology.',
    year: '2024',
    category: 'Innovation',
  },
  {
    icon: Medal,
    title: 'Southzone Sahodaya CBSE',
    description: '🥉 3rd Position in the regional level educational and technology showcase.',
    year: '2024',
    category: 'Academic',
  },
];

const mediaItems = [
  {
    image: newspaperImage,
    publication: 'Kerala Kaumudi',
    date: 'January 2026',
    headline: '"MGM Model School students bring robot back to life"',
  },
];

const Recognition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-6 pt-8 pb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Recognition
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground"
          >
            Achievements & <span className="gradient-text">Recognition</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            A timeline of awards, competitions, and media features that validate the work.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto relative">
            <div className="timeline-line" />

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative pl-16 pb-16 last:pb-0"
              >
                <div className="timeline-dot" style={{ top: '8px' }} />

                <div className="glass-card p-8 hover-lift group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                      {achievement.year}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                      {achievement.category}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                      <achievement.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Press
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Media <span className="gradient-text">Coverage</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Featured in regional publications for innovation and robotics projects.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.publication}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card overflow-hidden hover-lift group"
              >
                <div className="md:flex">
                  <div className="md:w-2/3 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.publication} article featuring Deva Nandan's project`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:w-1/3 p-6 flex flex-col justify-center">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full w-fit mb-4">
                      {item.date}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {item.publication}
                    </h3>
                    <p className="text-muted-foreground text-sm italic">
                      {item.headline}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link to="/" className="btn-ghost inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Recognition;
