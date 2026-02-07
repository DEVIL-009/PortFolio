import { motion } from 'framer-motion';
import newspaperImage from '@/assets/newspaper-clipping.jpeg';

const MediaRecognition = () => {
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
            Press
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Media <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovation and robotics projects featured across leading Malayalam newspapers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-4 hover-lift group">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={newspaperImage}
                alt="Kerala Kaumudi newspaper article featuring Deva Nandan's robotics project"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-muted-foreground text-sm">
                Kerala Kaumudi – January 2026
              </p>
              <p className="text-foreground font-medium mt-1">
                "MGM Model School students bring robot back to life"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaRecognition;
