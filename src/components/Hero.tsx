import { Phone, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative pt-28 pb-20 md:pt-44 md:pb-36 overflow-hidden flex items-center min-h-[90vh] bg-[#090909] text-white">
            {/* Dark Gold Ambient Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-yellow-600/5 blur-[160px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse md:flex-row-reverse items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 space-y-8 text-center md:text-left"
                >
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-bold tracking-widest uppercase text-xs border border-amber-500/30"
                        >
                            <Building2 size={14} />
                            HỒNG ÂN CAPITAL • MINH KHOA PROPERTY
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-normal md:leading-relaxed font-montserrat">
                            HUỲNH MINH KHOA <br />
                            <span className="inline-block pt-2 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                                BẤT ĐỘNG SẢN TẠO DÒNG TIỀN
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
                            Đồng hành cùng khách hàng lựa chọn tài sản an toàn, tích sản lâu dài và phát triển dòng tiền cho thuê bền vững tại các KCN trọng điểm.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300 font-medium max-w-xl">
                            {[
                                'Tư vấn giải pháp tài chính & dòng tiền',
                                'Minh bạch pháp lý, sổ hồng riêng từng căn',
                                'Đánh giá tiềm năng quy hoạch & hạ tầng',
                                'Hỗ trợ trọn gói thủ tục & cho thuê'
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                        <a
                            href="#phuoc-dong-bds"
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-2xl tracking-wider uppercase text-xs transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3"
                        >
                            Xem Dự Án Phước Đông New City
                            <ChevronRight size={16} />
                        </a>
                        <a
                            href="tel:0914318513"
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 hover:border-amber-500/40 rounded-2xl font-extrabold tracking-wider uppercase text-xs transition-all flex items-center justify-center gap-3"
                        >
                            <Phone size={16} className="text-amber-400" />
                            Hotline: 0914 318 513
                        </a>
                    </div>
                </motion.div>

                {/* Hero Avatar Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative w-full max-w-sm md:max-w-none flex justify-center md:justify-end group"
                >
                    <div className="absolute inset-0 md:inset-auto md:right-0 md:w-[420px] aspect-square rounded-[3rem] bg-gradient-to-tr from-amber-500 to-yellow-600 opacity-20 blur-[70px] animate-pulse" />

                    <div className="relative aspect-square md:aspect-[3/4] lg:aspect-square w-full md:w-[420px] rounded-[3rem] overflow-hidden border border-amber-500/30 bg-slate-900 shadow-2xl z-10">
                        <img
                            src="/img/avatar/818d52dc0acf8491ddde.jpg"
                            alt="Huỳnh Minh Khoa - Chuyên viên tư vấn BĐS"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />

                        <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-amber-500/30 text-left space-y-1">
                            <h4 className="text-white font-extrabold text-lg">HUỲNH MINH KHOA</h4>
                            <p className="text-amber-400 text-xs font-semibold">Chuyên viên tư vấn BĐS — Hồng Ân Capital</p>
                            <p className="text-slate-400 text-[11px]">Hotline / Zalo: 0914 318 513</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
