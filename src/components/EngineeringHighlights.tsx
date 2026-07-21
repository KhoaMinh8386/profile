import { motion } from 'framer-motion';
import { Target, Cpu, ShieldCheck, Zap, Layers, BarChart3 } from 'lucide-react';

const focusAreas = [
    {
        title: 'Backend API Development',
        description: 'Building server-side applications using Node.js and Express with RESTful principles.',
        icon: <Cpu className="w-6 h-6 text-blue-500" />
    },
    {
        title: 'Database Design & SQL',
        description: 'Designing relational database schemas and optimizing queries with PostgreSQL.',
        icon: <Layers className="w-6 h-6 text-indigo-500" />
    },
    {
        title: 'Applied Machine Learning',
        description: 'Exploring academic-level ML models like XGBoost and AHP for data analysis.',
        icon: <BarChart3 className="w-6 h-6 text-emerald-500" />
    },
    {
        title: 'Auth & Authorization',
        description: 'Learning secure user authentication flows using JWT and middleware integration.',
        icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />
    },
    {
        title: 'Data Flow Management',
        description: 'Handling client-server synchronization and state transitions in web applications.',
        icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
        title: 'DevOps Basics',
        description: 'Understanding containerization with Docker and standard deployment workflows.',
        icon: <Target className="w-6 h-6 text-slate-500" />
    }
];

const EngineeringHighlights = () => {
    return (
        <section className="py-24 md:py-40 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Sticky Sidebar Header */}
                    <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-blue-600 dark:text-blue-400 font-black tracking-[0.4em] uppercase text-[10px] mb-6">
                                LEARNING FOCUS
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-10">
                                Technical <br />
                                <span className="text-slate-400 dark:text-slate-600">Focus Areas.</span>
                            </h3>
                            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                A reflection of my current technical journey, focusing on core software engineering principles and backend systems.
                            </p>
                        </motion.div>
                    </div>

                    {/* Highlights Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {focusAreas.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-500"
                            >
                                <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                                    {item.title}
                                </h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-px bg-slate-200 dark:bg-slate-800 w-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-slate-50 dark:bg-[#111c2e] text-[9px] font-black text-slate-300 dark:text-slate-700 tracking-[0.4em] uppercase">
                        Continuous Improvement
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngineeringHighlights;
