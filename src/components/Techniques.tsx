import { Database, Monitor, Cpu, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
    {
        icon: <Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
        title: 'State Handling in Dynamic UIs',
        problem: 'Managing user data and interaction states across multiple components in complex single-page apps.',
        solution: 'Exploring state orchestration patterns using tools like Zustand to maintain clear data flows.',
        technique: 'Global Store Management (Zustand).',
    },
    {
        icon: <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
        title: 'Data Rendering Considerations',
        problem: 'Addressing potential browser lag when displaying large lists of data or image galleries.',
        solution: 'Learning and applying list virtualization techniques to ensure smooth UI interaction.',
        technique: 'List Virtualization & Memoization.',
    },
    {
        icon: <Cpu className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
        title: 'Full-Stack Integration Flow',
        problem: 'Ensuring seamless communication between frontend interfaces and backend SQL databases.',
        solution: 'Building robust RESTful APIs in Node.js with clear endpoints and structured responses.',
        technique: 'Node.js / Express API Design.',
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
        title: 'Application Security Basics',
        problem: 'Securing user data and managing restricted access within a web application environment.',
        solution: 'Implementing standard JWT-based authentication and role-based access control flows.',
        technique: 'JWT Auth & Middleware Logic.',
    },
];

const Techniques = () => {
    return (
        <section id="techniques" className="py-32 md:py-60 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 dark:bg-blue-900/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-blue-600 dark:text-blue-400 font-black tracking-[0.4em] uppercase text-[10px] mb-6">
                            PROBLEM SOLVING
                        </h2>
                        <h3 className="text-5xl md:text-[6rem] font-black text-slate-900 dark:text-white mb-12 tracking-tighter leading-[0.9]">
                            Approaching <br />
                            <span className="text-slate-400 dark:text-slate-700 italic font-light tracking-normal">Technical</span> Problems.
                        </h3>
                        <p className="max-w-2xl text-slate-500 dark:text-slate-400 text-xl font-light leading-relaxed">
                            I approach technical problems by breaking them down, experimenting with solutions, and improving them through iteration.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {problems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            className="group p-12 md:p-16 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-100 dark:border-slate-800/50 hover:shadow-2xl hover:bg-white dark:hover:bg-slate-900 transition-all duration-700 relative flex flex-col items-start"
                        >
                            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-12 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100 dark:border-slate-800">
                                {item.icon}
                            </div>

                            <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-10 tracking-tight group-hover:text-blue-600 transition-colors">
                                {item.title}
                            </h4>

                            <div className="space-y-10 flex-1">
                                <div className="space-y-4">
                                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 tracking-[0.4em] uppercase block">Technical Condition</span>
                                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-light">{item.problem}</p>
                                </div>

                                <div className="space-y-4">
                                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 tracking-[0.4em] uppercase block">My Implementation</span>
                                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-normal">{item.solution}</p>
                                </div>
                            </div>

                            <div className="pt-12 mt-12 border-t border-slate-100 dark:border-slate-800/50 w-full flex items-center justify-between">
                                <div className="space-y-2">
                                    <span className="text-[9px] font-black text-slate-300 dark:text-slate-600 tracking-[0.4em] uppercase block">Key Strategy</span>
                                    <p className="text-slate-900 dark:text-white font-black text-xs tracking-widest uppercase">{item.technique}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-px bg-slate-100 dark:bg-slate-900 w-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-white dark:bg-slate-950 text-[10px] font-black text-slate-300 dark:text-slate-700 tracking-[0.5em] uppercase transition-colors">
                        End of Analysis
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Techniques;
