import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Github, ArrowLeft, Layers, Zap, ChevronLeft, ChevronRight, Activity, ShieldCheck, Cpu, Terminal, Maximize2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, Thumbs, Keyboard } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
        }
    };

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 font-sans">
                <div className="text-center space-y-8">
                    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter">Project Not Found</h2>
                    <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-2xl hover:bg-blue-600 transition-all">
                        <ArrowLeft size={20} />
                        Return to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-white pb-40 transition-colors duration-500">
            {/* Dark Mode Overlay Support */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-100 dark:border-slate-800 py-4 transition-all overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-all font-bold text-xs tracking-widest group uppercase">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        BACK
                    </Link>
                    <div className="hidden sm:flex items-center gap-4">
                        <div className="text-[10px] font-black text-slate-300 dark:text-slate-700 tracking-[0.3em] uppercase">
                            PROJECT OVERVIEW / {project.id}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header: Student Profile Format */}
                    <motion.header
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="mb-24"
                    >
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase border border-blue-100 dark:border-blue-900/50">
                                {project.categories}
                            </span>
                        </motion.div>

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-12">
                            <motion.div variants={itemVariants} className="flex-1 space-y-8">
                                <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85] relative inline-block">
                                    {project.title}
                                    <span className="absolute -bottom-4 left-0 w-1/4 h-3 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                </h1>
                                <p className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 max-w-[60ch] leading-relaxed font-light mt-12">
                                    {project.longDescription || project.description}
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex shrink-0 items-center gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-4 px-10 py-6 bg-slate-950 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all duration-500 font-black tracking-widest uppercase text-xs overflow-hidden"
                                    >
                                        <Github size={20} className="relative z-10" />
                                        <span className="relative z-10">View GitHub Repo</span>
                                        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    </motion.header>

                    {/* Advanced Gallery System */}
                    <motion.section
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-40"
                    >
                        <div className="relative space-y-6">
                            {/* Main Showcase */}
                            <div className="relative rounded-[3.5rem] p-3 bg-slate-900/5 dark:bg-white/5 ring-1 ring-slate-900/10 dark:ring-white/10 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] overflow-hidden">
                                <div className="relative bg-slate-50 dark:bg-slate-900 rounded-[3rem] overflow-hidden aspect-[16/9] border border-slate-200 dark:border-slate-800 shadow-inner group">
                                    <Swiper
                                        modules={[Navigation, Pagination, EffectFade, Autoplay, Thumbs, Keyboard]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        keyboard={{ enabled: true }}
                                        navigation={{
                                            prevEl: '.swiper-custom-prev',
                                            nextEl: '.swiper-custom-next',
                                        }}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        effect={'fade'}
                                        autoplay={{ delay: 7000, disableOnInteraction: true }}
                                        className="w-full h-full"
                                        onSlideChange={(s) => setActiveImageIndex(s.realIndex)}
                                    >
                                        {project.images.map((image, idx) => (
                                            <SwiperSlide key={idx} className="bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                                                <div
                                                    className="w-full h-full cursor-zoom-in relative"
                                                    onClick={() => setIsLightboxOpen(true)}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`${project.title} screenshot ${idx + 1}`}
                                                        className="w-full h-full object-cover select-none transform group-hover:scale-[1.02] transition-transform duration-1000"
                                                    />
                                                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white">
                                                        <Maximize2 size={24} />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Glass Controls */}
                                    <button className="swiper-custom-prev absolute left-8 top-1/2 -translate-y-1/2 z-20 p-5 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 -translate-x-4 group-hover:translate-x-0">
                                        <ChevronLeft size={28} />
                                    </button>
                                    <button className="swiper-custom-next absolute right-8 top-1/2 -translate-y-1/2 z-20 p-5 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 translate-x-4 group-hover:translate-x-0">
                                        <ChevronRight size={28} />
                                    </button>

                                    {/* Counter */}
                                    <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 px-6 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 text-[10px] font-black text-white/70 tracking-[0.3em] uppercase">
                                        SCREENSHOT {activeImageIndex + 1} / {project.images.length}
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnails Control */}
                            <div className="px-4">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    modules={[Thumbs]}
                                    spaceBetween={12}
                                    slidesPerView={'auto'}
                                    watchSlidesProgress={true}
                                    className="thumbs-swiper"
                                >
                                    {project.images.map((image, idx) => (
                                        <SwiperSlide key={idx} className="!w-24 md:!w-32 aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent transition-all opacity-40 hover:opacity-100 [.swiper-slide-thumb-active_&]:border-blue-600 [.swiper-slide-thumb-active_&]:opacity-100">
                                            <img src={image} className="w-full h-full object-cover" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </motion.section>

                    {/* Project Logic Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-36">

                        {/* Project Insights */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="lg:col-span-4 space-y-20"
                        >
                            <motion.div variants={itemVariants} className="space-y-12">
                                <h3 className="flex items-center gap-4 text-xs font-black text-slate-300 dark:text-slate-600 tracking-[0.4em] uppercase">
                                    <Terminal className="w-5 h-5 text-blue-500" />
                                    PROJECT INSIGHTS
                                </h3>
                                <div className="bg-slate-900 rounded-[2.5rem] p-10 space-y-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[60px] rounded-full" />

                                    <div className="space-y-6">
                                        {project.evidence?.map((ev, i) => (
                                            <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-6 group/ev">
                                                <div className="space-y-2">
                                                    <span className="text-[9px] font-black text-slate-500 tracking-widest uppercase flex items-center gap-2 group-hover/ev:text-blue-400 transition-colors">
                                                        {ev.type === 'performance' && <Zap size={10} />}
                                                        {ev.type === 'architecture' && <Cpu size={10} />}
                                                        {ev.type === 'scalability' && <Activity size={10} />}
                                                        {ev.type === 'quality' && <ShieldCheck size={10} />}
                                                        {ev.label}
                                                    </span>
                                                    <span className="block text-xl font-bold text-white tracking-tight">{ev.value}</span>
                                                </div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 flex items-center gap-3 text-slate-500 text-[10px] font-bold tracking-widest uppercase">
                                        <ShieldCheck size={14} className="text-emerald-500" /> PROJECT VERIFIED
                                    </div>
                                </div>
                            </motion.div>

                            {/* Core Stack */}
                            <motion.div variants={itemVariants} className="space-y-10">
                                <h3 className="flex items-center gap-4 text-xs font-black text-slate-300 dark:text-slate-600 tracking-[0.4em] uppercase">
                                    <Layers className="w-5 h-5 text-purple-500" />
                                    CORE STACK
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="px-5 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-[11px] font-black rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 cursor-default uppercase">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Implementation Details */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="lg:col-span-8 space-y-16"
                        >
                            <motion.h3 variants={itemVariants} className="flex items-center gap-6 text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
                                <Zap className="w-12 h-12 text-yellow-500 fill-yellow-500" />
                                Technical <br /> Implementation.
                            </motion.h3>

                            <div className="grid gap-12">
                                {project.techniques.map((tech, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="group relative flex flex-col md:flex-row items-start gap-10 p-12 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:border-blue-100 dark:hover:border-blue-900 transition-all duration-500"
                                    >
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-slate-900 dark:bg-slate-800 flex items-center justify-center shrink-0 text-white font-black text-lg group-hover:bg-blue-600 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                                            {idx + 1}
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 transition-colors">
                                                {tech}
                                            </h4>
                                            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                                                Exploring concepts related to <span className="text-slate-900 dark:text-white font-medium italic">{tech.toLowerCase()}</span>.
                                                This project served as a valuable learning experience where I focused on applying logic,
                                                improving data structures, and ensuring the application met its intended goals.
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* Lightbox Implementation */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 md:p-20"
                    >
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-10 right-10 text-white hover:text-blue-400 transition-colors"
                        >
                            <Terminal size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            src={project.images[activeImageIndex]}
                            className="max-w-full max-h-full object-contain shadow-2xl rounded-2xl"
                        />
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs font-black tracking-widest uppercase">
                            FULL RESOLUTION VIEW
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Rhythm: Dark Final Summary */}
            <div className="mt-52 pt-40 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 text-center pb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <h4 className="text-xs font-black text-slate-400 tracking-[0.6em] uppercase mb-16 underline decoration-blue-600 decoration-4 underline-offset-8">PROJECT SUMMARY</h4>
                        <Link to="/" className="inline-block text-8xl md:text-[12rem] font-black text-slate-900 dark:text-white hover:text-blue-600 transition-all tracking-tighter leading-none">
                            KHOA<span className="text-blue-600">.</span>DEV
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
