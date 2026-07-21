import { Github, ArrowUpRight, AlertCircle, CheckCircle2, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
    return (
        <section id="projects" className="py-32 md:py-60 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-32 md:text-center max-w-4xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    >
                        <h2 className="text-blue-600 dark:text-blue-400 font-black tracking-[0.4em] uppercase text-[10px] mb-6">
                            PORTFOLIO
                        </h2>
                        <h3 className="text-6xl md:text-[6rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-12">
                            Academic & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">Personal Projects.</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-slate-400 dark:text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
                            Selected projects where I applied <span className="text-slate-900 dark:text-white font-medium">backend development</span>, <span className="text-slate-900 dark:text-white font-medium">databases</span>, and <span className="text-slate-900 dark:text-white font-medium">system design</span> concepts.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.98, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                            className={`group relative flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-slate-800 transition-all duration-700 ${project.featured ? 'lg:col-span-2 lg:flex-row' : ''
                                }`}
                        >
                            {/* Improved Image Showcase */}
                            <div className={`relative overflow-hidden ${project.featured ? 'lg:w-[55%] h-80 lg:h-auto border-b lg:border-b-0 lg:border-r border-slate-50 dark:border-slate-800' : 'h-72 border-b border-slate-50 dark:border-slate-800'}`}>
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    pagination={{ clickable: true, dynamicBullets: true }}
                                    autoplay={{ delay: 6000, disableOnInteraction: true }}
                                    className="h-full w-full"
                                    grabCursor={true}
                                >
                                    {project.images.slice(0, 5).map((img, imgIdx) => (
                                        <SwiperSlide key={imgIdx} className="bg-slate-50 dark:bg-slate-800">
                                            <Link to={`/project/${project.id}`} className="block w-full h-full relative group/img">
                                                <img
                                                    src={img}
                                                    alt={`${project.title} preview`}
                                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.04] transition-transform duration-1000 ease-out will-change-transform"
                                                    style={{ imageRendering: 'auto' }}
                                                />
                                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase bg-black/40 backdrop-blur-xl text-white rounded-xl border border-white/10 shadow-2xl">
                                        {project.categories}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section with Engineering Signals */}
                            <div className={`flex flex-col flex-1 p-10 md:p-14 ${project.featured ? 'lg:w-[45%] justify-between' : ''}`}>
                                <div className="space-y-10">
                                    <div className="flex items-start justify-between">
                                        <Link to={`/project/${project.id}`} className="group/title space-y-3">
                                            <h4 className="text-3xl font-black text-slate-900 dark:text-white group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400 transition-colors tracking-tighter">
                                                {project.title}
                                            </h4>
                                            <div className="flex items-center gap-2.5">
                                                {project.stack.slice(0, 3).map((s, i) => (
                                                    <span key={i} className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s}</span>
                                                ))}
                                            </div>
                                        </Link>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all"
                                            >
                                                <Github size={22} />
                                            </a>
                                        )}
                                    </div>

                                    {/* 🧠 Project Signals: Purpose / Learning / Solution */}
                                    {project.signals && (
                                        <div className="space-y-6 pt-2">
                                            <h5 className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.3em]">
                                                Project Analysis
                                            </h5>
                                            <div className="space-y-4">
                                                <div className="flex gap-4">
                                                    <AlertCircle size={14} className="text-amber-500 shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <span className="block text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase">Context</span>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug font-light">{project.signals.problem}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    <FlaskConical size={14} className="text-blue-500 shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <span className="block text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase">Solution</span>
                                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug font-medium italic">{project.signals.solution}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <span className="block text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase">Lesson Learned</span>
                                                        <p className="text-sm text-slate-900 dark:text-white font-bold tracking-tight">{project.signals.result}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {!project.signals && (
                                        <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-light line-clamp-4">
                                            {project.description}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-auto pt-10 flex items-center justify-between">
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest flex items-center gap-2 group/btn"
                                    >
                                        View Details
                                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Rhythm Separator */}
                <div className="mt-40 h-px bg-slate-100 dark:bg-slate-900 w-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-white dark:bg-slate-950 text-[10px] font-black text-slate-300 dark:text-slate-700 tracking-[0.6em] uppercase transition-colors">
                        Project Review End
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
