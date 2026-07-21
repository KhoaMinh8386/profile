import { Mail, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-40 bg-[#090909] text-white transition-colors duration-500 overflow-hidden border-t border-amber-500/20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 max-w-4xl"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-extrabold tracking-widest uppercase text-xs border border-amber-500/30">
                            ĐỒNG HÀNH CÙNG NHÀ ĐẦU TƯ
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight font-montserrat">
                            Liên Hệ Tư Vấn Bất Động Sản <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Huỳnh Minh Khoa</span>
                        </h3>
                        <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed pt-2">
                            Liên hệ ngay để nhận thông tin giỏ hàng đẹp nhất, báo giá chi tiết và phân tích dòng tiền đầu tư phù hợp nhu cầu của Anh/Chị.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-4xl">
                        <a
                            href="tel:0914318513"
                            className="group flex-1 flex items-center justify-center gap-4 px-8 py-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-2xl transition-all shadow-xl shadow-amber-500/20 text-base uppercase tracking-wider hover:scale-[1.02]"
                        >
                            <Phone size={22} />
                            <span>Hotline: 0914 318 513</span>
                        </a>

                        <a
                            href="https://zalo.me/0914318513"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex-1 flex items-center justify-center gap-4 px-8 py-6 bg-white/5 hover:bg-white/10 text-white font-extrabold rounded-2xl transition-all border border-white/10 text-base uppercase tracking-wider hover:scale-[1.02]"
                        >
                            <MessageCircle size={22} className="text-amber-400" />
                            <span>Chat Zalo Trực Tiếp</span>
                        </a>

                        <a
                            href="mailto:minhkhoaproperty@gmail.com"
                            className="group flex-1 flex items-center justify-center gap-4 px-8 py-6 bg-white/5 hover:bg-white/10 text-white font-extrabold rounded-2xl transition-all border border-white/10 text-base uppercase tracking-wider hover:scale-[1.02]"
                        >
                            <Mail size={22} className="text-amber-400" />
                            <span>Email Tư Vấn</span>
                        </a>
                    </div>

                    {/* Social Channels List */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <a
                            href="https://www.tiktok.com/@minhkhoaproperty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-2xl transition-all border border-white/10 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.15 6.34 6.34 0 0 0 .913 8.761 6.335 6.335 0 0 0 8.043-.615 6.325 6.325 0 0 0 1.9-4.492V8.406a8.217 8.217 0 0 0 4.771 1.524V6.485a4.79 4.79 0 0 1-1.002-.201z"/>
                            </svg>
                            <span>TikTok: @minhkhoaproperty</span>
                        </a>

                        <a
                            href="https://www.facebook.com/hiiadonis"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-2xl transition-all border border-white/10 flex items-center gap-2"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span>Fanpage Facebook</span>
                        </a>
                    </div>

                    <div className="pt-8">
                        <p className="text-amber-400 text-xs font-bold tracking-widest uppercase">
                            EMAIL: MINHKHOAPROPERTY@GMAIL.COM • HOTLINE: 0914 318 513
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
