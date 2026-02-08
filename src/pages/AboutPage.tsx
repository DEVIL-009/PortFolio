import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="pt-28 pb-16 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase mb-4 block">
                        About Me
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
                        Bridging the Physical and <span className="text-primary">Digital Items</span>
                    </h1>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                            I am Deva Nandan S, a Hardware & Embedded Systems Enthusiast with a passion for building solutions that matter.
                            I specialize in connecting hardware, software, and data to create cohesive and functional ecosystems.
                        </p>
                        <p className="text-lg text-muted-foreground/80 leading-relaxed mb-6">
                            My journey is driven by a curiosity to understand how things work at a fundamental level and a desire to engineer
                            systems that solve real-world problems. Whether it's designing custom PCBs, writing firmware for microcontrollers,
                            or developing full-stack web applications to interface with IoT devices, I enjoy the entire stack of creation.
                        </p>
                        <p className="text-lg text-muted-foreground/80 leading-relaxed">
                            I enjoy solving problems that require systems thinking—looking at the big picture while obsessing over the details
                            that make a product reliable and user-friendly.
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
