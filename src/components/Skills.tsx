import { Code, Server, Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const skillGroups = [
    {
        category: 'Frontend Development',
        icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
        skills: ['React', 'HTML / CSS', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        category: 'Backend Systems',
        icon: <Server className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
        skills: ['Node.js', 'Express', 'JWT Auth', 'RESTful API'],
    },
    {
        category: 'Data & Database',
        icon: <Database className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
        skills: ['PostgreSQL', 'SQL Querying', 'Python (Basics)', 'Applied ML Patterns'],
    },
    {
        category: 'Engineering Tools',
        icon: <Terminal className="w-8 h-8 text-slate-700 dark:text-slate-500" />,
        skills: ['Git / GitHub', 'Docker (Learning)', 'Postman', 'Vercel Deployment'],
    },
];

const Skills = () => {
    return (
        <section id="stack" className="py-32 md:py-48 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    >
                        <h2 className="text-blue-600 dark:text-blue-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4">
                            TECHNICAL STACK
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-10">
                            Technologies I <br className="hidden md:block" /> Use & Learn.
                        </h3>
                        <div className="w-20 h-1 bg-slate-100 dark:bg-slate-800 rounded-full" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-12 border border-slate-100 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-500 hover:-translate-y-3"
                        >
                            <div className="flex flex-col gap-10">
                                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:scale-110 transition-all duration-500 shadow-sm shadow-slate-100 dark:shadow-none">
                                    {group.icon}
                                </div>
                                <h4 className="font-black text-slate-900 dark:text-white text-2xl tracking-tight leading-tight">
                                    {group.category}
                                </h4>
                                <ul className="space-y-5">
                                    {group.skills.map((skill, sIdx) => (
                                        <li key={sIdx} className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-bold tracking-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300" />
                                            {skill.toUpperCase()}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Rhythm: Section Divider */}
            <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-px bg-slate-100 dark:bg-slate-900 w-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-white dark:bg-slate-950 text-[10px] font-black text-slate-300 dark:text-slate-700 tracking-[0.5em] uppercase transition-colors">
                        Knowledge Summary
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
