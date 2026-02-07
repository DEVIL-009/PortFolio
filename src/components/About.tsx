import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px] transform -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-muted-foreground text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            About
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground"
          >
            Who Am <span className="text-primary">I?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed mb-6"
          >
            I am a student technologist from Kerala, India, with hands-on experience in
            robotics, embedded systems, IoT, and web-based monitoring platforms.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground/80 text-lg leading-relaxed mb-6"
          >
            I primarily work with Arduino, ESP8266/ESP32, and Raspberry Pi, integrating
            end-to-end systems. My projects include SafeSpeak, an anonymous safety
            reporting platform, and OMNIS, an educational robotics platform, with
            a focus on automation, sustainability, and smart infrastructure. These
            systems are designed for real-world environments such as schools and
            community infrastructure.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground/80 text-lg leading-relaxed"
          >
            I enjoy solving problems that require system thinking—connecting hardware,
            software, and data into one functional solution.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;