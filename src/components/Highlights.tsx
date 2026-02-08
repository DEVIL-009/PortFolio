import { motion } from 'framer-motion';
import { GraduationCap, Building2, Rocket, Code2, Trophy, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const topAchievements = [
    {
        icon: Trophy,
        title: 'RoboX 2024',
        subtitle: '🥇 1st | ₹5k Award',
        year: '2024',
    },
    {
        icon: Award,
        title: 'Science Quest 2025',
        subtitle: '🥈 2nd | ₹25k Award',
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
        title: 'YIP',
        subtitle: 'District Winner',
        year: '2024',
    },
];

const Highlights = () => {
    return (
        <section id="highlights" className="py-20 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                        Snapshot
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold">
                        Career <span className="gradient-text">Highlights</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Current Roles Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px bg-border flex-1" />
                            <h3 className="font-display text-xl font-semibold text-muted-foreground uppercase tracking-widest">Current Roles</h3>
                            <div className="h-px bg-border flex-1" />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {roles.map((role, index) => (
                                <motion.div
                                    key={role.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card p-5 hover-lift group"
                                >
                                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                        <role.icon size={20} />
                                    </div>
                                    <h4 className="font-semibold text-foreground">{role.title}</h4>
                                    <p className="text-muted-foreground text-sm">{role.organization}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px bg-border flex-1" />
                            <h3 className="font-display text-xl font-semibold text-muted-foreground uppercase tracking-widest">Recent Wins</h3>
                            <div className="h-px bg-border flex-1" />
                        </div>

                        <div className="space-y-4">
                            {topAchievements.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-colors"
                                >
                                    <div className="bg-secondary p-2 rounded-full text-primary shrink-0">
                                        <item.icon size={18} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-foreground truncate">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm truncate">{item.subtitle}</p>
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                                        {item.year}
                                    </span>
                                </motion.div>
                            ))}

                            <div className="pt-2 text-center lg:text-right">
                                <Link to="/recognition" className="inline-flex items-center gap-2 text-sm text-primary hover:underline hover-lift">
                                    View All Achievements <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
