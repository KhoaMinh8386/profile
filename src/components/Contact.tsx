import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [needs, setNeeds] = useState<string[]>([]);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const checklistOptions = [
        { id: '1', label: '1️⃣ Ở luôn' },
        { id: '2', label: '2️⃣ Mua cho thuê' },
        { id: '3', label: '3️⃣ Mua đầu tư (đợi tăng giá bán lại)' },
        { id: '4', label: '4️⃣ Mua tích sản giữ dài hạn' }
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
                setMessage(data.message || 'Cảm ơn Anh/Chị! Thông tin đã được gửi thành công.');
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
            setMessage('Không thể kết nối đến máy chủ. Vui lòng liên hệ hotline trực tiếp.');
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-[#090909] text-white transition-colors duration-500 overflow-hidden border-t border-amber-500/20 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 font-extrabold tracking-widest uppercase text-xs border border-amber-500/30">
                                ĐỒNG HÀNH CÙNG NHÀ ĐẦU TƯ
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-montserrat">
                                Liên Hệ Tư Vấn <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Huỳnh Minh Khoa</span>
                            </h3>
                            <p className="text-slate-300 font-light leading-relaxed">
                                Liên hệ ngay hoặc điền form đăng ký nhu cầu đầu tư để nhận thông tin giỏ hàng đẹp nhất, phân tích dòng tiền và báo giá chi tiết.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a
                                href="tel:0914318513"
                                className="group flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-xl transition-all shadow-lg shadow-amber-500/10 text-sm uppercase tracking-wider hover:scale-[1.02]"
                            >
                                <Phone size={20} />
                                <span>Hotline: 0914 318 513</span>
                            </a>

                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href="https://zalo.me/0914318513"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-2 px-4 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 text-xs uppercase tracking-wider hover:scale-[1.02]"
                                >
                                    <MessageCircle size={18} className="text-amber-400" />
                                    <span>Chat Zalo</span>
                                </a>

                                <a
                                    href="mailto:minhkhoaproperty@gmail.com"
                                    className="group flex items-center justify-center gap-2 px-4 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 text-xs uppercase tracking-wider hover:scale-[1.02]"
                                >
                                    <Mail size={18} className="text-amber-400" />
                                    <span>Email</span>
                                </a>
                            </div>
                        </div>

                        {/* Social channels */}
                        <div className="pt-4 space-y-3">
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Kênh truyền thông</p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="https://www.tiktok.com/@minhkhoaproperty"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2.5 bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-white/10 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.15 6.34 6.34 0 0 0 .913 8.761 6.335 6.335 0 0 0 8.043-.615 6.325 6.325 0 0 0 1.9-4.492V8.406a8.217 8.217 0 0 0 4.771 1.524V6.485a4.79 4.79 0 0 1-1.002-.201z"/>
                                    </svg>
                                    <span>TikTok</span>
                                </a>

                                <a
                                    href="https://www.facebook.com/hiiadonis"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2.5 bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-white/10 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden"
                    >
                        <h4 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-2">
                            <span className="inline-block w-2.5 h-6 bg-amber-500 rounded-full" />
                            ĐĂNG KÝ TƯ VẤN NHANH
                        </h4>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                                        Tên khách hàng *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Ví dụ: Nguyễn Văn A"
                                        className="w-full bg-[#121212]/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                                        Số điện thoại *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Ví dụ: 0912345678"
                                        className="w-full bg-[#121212]/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-300 uppercase tracking-wide block">
                                    Nhu cầu đầu tư (Chọn checkpoint)
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {checklistOptions.map((option) => {
                                        const isSelected = needs.includes(option.label);
                                        return (
                                            <button
                                                key={option.id}
                                                type="button"
                                                onClick={() => handleCheckboxChange(option.label)}
                                                className={`flex items-center text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                                                    isSelected
                                                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold shadow-md shadow-amber-500/5'
                                                        : 'bg-[#121212]/60 border-white/10 hover:border-white/20 text-slate-300'
                                                }`}
                                            >
                                                <div className={`w-4 h-4 rounded border flex items-center justify-center mr-3 transition-all ${
                                                    isSelected ? 'bg-amber-500 border-amber-500 text-slate-950' : 'border-slate-500'
                                                }`}>
                                                    {isSelected && (
                                                        <svg className="w-3 h-3 fill-current font-bold" viewBox="0 0 20 20">
                                                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                                                        </svg>
                                                    )}
                                                </div>
                                                <span>{option.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-black rounded-xl transition-all shadow-xl shadow-amber-500/10 text-sm uppercase tracking-wider hover:scale-[1.01]"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        <span>Đang gửi thông tin...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        <span>Gửi Yêu Cầu Tư Vấn</span>
                                    </>
                                )}
                            </button>

                            <AnimatePresence mode="wait">
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-start gap-3 text-green-400 text-sm"
                                    >
                                        <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
                                        <span>{message}</span>
                                    </motion.div>
                                )}

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3 text-red-400 text-sm"
                                    >
                                        <AlertCircle className="shrink-0 mt-0.5" size={18} />
                                        <span>{message}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-16 text-center border-t border-white/5 pt-8">
                    <p className="text-amber-400/80 text-xs font-bold tracking-widest uppercase">
                        EMAIL: MINHKHOAPROPERTY@GMAIL.COM • HOTLINE: 0914 318 513
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
