import { useState } from 'react';
import { Phone, Building2, CheckCircle2, ChevronRight, Send, Loader2, CheckCircle2 as SuccessIcon, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [needs, setNeeds] = useState<string[]>([]);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const checklistOptions = [
        { id: '1', label: '1️⃣ Ở luôn' },
        { id: '2', label: '2️⃣ Mua cho thuê' },
        { id: '3', label: '3️⃣ Mua đầu tư' },
        { id: '4', label: '4️⃣ Mua tích sản' }
    ];

    const handleCheckboxChange = (label: string) => {
        if (needs.includes(label)) {
            setNeeds(needs.filter(item => item !== label));
        } else {
            setNeeds([...needs, label]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) {
            setStatus('error');
            setMessage('Vui lòng điền đầy đủ Họ tên và Số điện thoại!');
            return;
        }

        // Validate số điện thoại Việt Nam: bắt đầu bằng 0 hoặc +84, tổng cộng 10 chữ số
        const phoneClean = phone.replace(/[\s\-\.]/g, '');
        const vnPhoneRegex = /^(0[2-9]\d{8}|\+84[2-9]\d{8})$/;
        if (!vnPhoneRegex.test(phoneClean)) {
            setStatus('error');
            setMessage('Số điện thoại không hợp lệ! Vui lòng nhập đúng SĐT Việt Nam (VD: 0912345678).');
            return;
        }

        setStatus('loading');
        
        try {
            const apiUrl = import.meta.env.DEV ? 'http://localhost:5001/api/contact' : 'https://server-mu-six-65.vercel.app/api/contact';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, needs }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage(data.message || 'Gửi thông tin thành công!');
                setName('');
                setPhone('');
                setNeeds([]);
            } else {
                setStatus('error');
                setMessage(data.error || 'Có lỗi xảy ra, vui lòng thử lại.');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setMessage('Không thể kết nối đến máy chủ. Vui lòng liên hệ hotline.');
        }
    };

    return (
        <section id="hero" className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center min-h-[95vh] bg-[#090909] text-white">
            {/* Dark Gold Ambient Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[140px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-yellow-600/5 blur-[160px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Column 1: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 space-y-6 text-center md:text-left"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-bold tracking-widest uppercase text-xs border border-amber-500/30"
                            >
                                <Building2 size={14} />
                                HỒNG ÂN CAPITAL • MINH KHOA PROPERTY
                            </motion.div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight font-montserrat">
                                HUỲNH MINH KHOA <br />
                                <span className="inline-block pt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                                    BĐS TẠO DÒNG TIỀN
                                </span>
                            </h1>

                            <p className="text-base text-slate-300 leading-relaxed font-light">
                                Đồng hành cùng khách hàng lựa chọn tài sản an toàn, tích sản lâu dài và phát triển dòng tiền cho thuê bền vững tại các KCN trọng điểm.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300 font-semibold max-w-xl text-left">
                                {[
                                    'Tư vấn giải pháp tài chính & dòng tiền',
                                    'Minh bạch pháp lý, sổ hồng riêng từng căn',
                                    'Đánh giá tiềm năng quy hoạch & hạ tầng',
                                    'Hỗ trợ trọn gói thủ tục & cho thuê'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-amber-400 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                            <a
                                href="#phuoc-dong-bds"
                                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-xl tracking-wider uppercase text-[11px] transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2"
                            >
                                Xem Dự Án Phước Đông
                                <ChevronRight size={14} />
                            </a>
                            <a
                                href="tel:0914318513"
                                className="w-full sm:w-auto px-6 py-3.5 bg-white/5 text-white border border-white/10 hover:border-amber-500/40 rounded-xl font-extrabold tracking-wider uppercase text-[11px] transition-all flex items-center justify-center gap-2"
                            >
                                <Phone size={14} className="text-amber-400" />
                                Hotline: 0914 318 513
                            </a>
                        </div>
                    </motion.div>

                    {/* Column 2: Elegant Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 relative overflow-hidden"
                    >
                        <h3 className="text-md font-bold mb-4 flex items-center gap-2 text-white">
                            <span className="inline-block w-2 h-4 bg-amber-500 rounded-full" />
                            ĐĂNG KÝ TƯ VẤN ĐẦU TƯ
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1">
                                <label htmlFor="hero-name" className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">
                                    Tên khách hàng *
                                </label>
                                <input
                                    type="text"
                                    id="hero-name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Họ tên của Anh/Chị"
                                    className="w-full bg-[#121212]/80 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-xs"
                                    required
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="hero-phone" className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">
                                    Số điện thoại *
                                </label>
                                <input
                                    type="tel"
                                    id="hero-phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Số điện thoại / Zalo"
                                    className="w-full bg-[#121212]/80 border border-white/10 rounded-xl px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-xs"
                                    required
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wide block">
                                    Nhu cầu đầu tư (Chọn checkpoint)
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {checklistOptions.map((option) => {
                                        const isSelected = needs.includes(option.label);
                                        return (
                                            <button
                                                key={option.id}
                                                type="button"
                                                onClick={() => handleCheckboxChange(option.label)}
                                                className={`flex items-center text-left p-2 rounded-lg border text-[11px] font-semibold transition-all ${
                                                    isSelected
                                                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                                                        : 'bg-[#121212]/60 border-white/10 hover:border-white/20 text-slate-300'
                                                }`}
                                            >
                                                <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center mr-2 shrink-0 transition-all ${
                                                    isSelected ? 'bg-amber-500 border-amber-500 text-slate-950' : 'border-slate-500'
                                                }`}>
                                                    {isSelected && (
                                                        <svg className="w-2.5 h-2.5 fill-current font-bold" viewBox="0 0 20 20">
                                                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className="truncate">{option.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-black rounded-xl transition-all text-xs uppercase tracking-wider hover:scale-[1.01]"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={14} className="animate-spin" />
                                        <span>Đang gửi...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={14} />
                                        <span>Gửi thông tin</span>
                                    </>
                                )}
                            </button>

                            <AnimatePresence mode="wait">
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="p-2.5 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-2 text-green-400 text-[11px]"
                                    >
                                        <SuccessIcon className="shrink-0 mt-0.5" size={14} />
                                        <span>{message}</span>
                                    </motion.div>
                                )}

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="p-2.5 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-2 text-red-400 text-[11px]"
                                    >
                                        <AlertCircle className="shrink-0 mt-0.5" size={14} />
                                        <span>{message}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    {/* Column 3: Hero Avatar Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 w-full flex justify-center lg:justify-end group"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-[280px] rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 shadow-2xl z-10">
                            <img
                                src="/img/avatar/818d52dc0acf8491ddde.jpg"
                                alt="Huỳnh Minh Khoa - Chuyên viên tư vấn BĐS"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />

                            <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-950/80 backdrop-blur-xl rounded-xl border border-amber-500/30 text-left space-y-0.5">
                                <h4 className="text-white font-extrabold text-sm">HUỲNH MINH KHOA</h4>
                                <p className="text-amber-400 text-[10px] font-semibold">Chuyên viên tư vấn BĐS</p>
                                <p className="text-slate-400 text-[9px]">Hotline / Zalo: 0914 318 513</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
