const Footer = () => {
    return (
        <footer className="py-16 bg-[#060606] text-white border-t border-white/5 font-sans relative">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex flex-col items-center gap-6">
                    <div className="text-xs font-black text-amber-400 tracking-[0.4em] uppercase">
                        Minh Khoa Property — Hồng Ân Capital
                    </div>
                    
                    {/* Direct Contact Summary */}
                    <div className="flex flex-wrap justify-center items-center gap-6 text-slate-300 text-xs font-bold">
                        <a href="tel:0914318513" className="hover:text-amber-400 transition-colors">📞 Hotline: 0914 318 513</a>
                        <span>•</span>
                        <a href="mailto:minhkhoaproperty@gmail.com" className="hover:text-amber-400 transition-colors">✉️ minhkhoaproperty@gmail.com</a>
                        <span>•</span>
                        <a href="https://www.tiktok.com/@minhkhoaproperty" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">🎵 TikTok @minhkhoaproperty</a>
                        <span>•</span>
                        <a href="https://www.facebook.com/hiiadonis" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">📘 Facebook Fanpage</a>
                    </div>

                    <div className="text-slate-800 text-6xl md:text-9xl font-black tracking-tighter leading-none select-none font-montserrat">
                        MINH KHOA
                    </div>
                    <p className="text-slate-400 text-xs font-medium tracking-wider">
                        © {new Date().getFullYear()} Minh Khoa Property. Đồng hành lựa chọn tài sản, kiến tạo giá trị bền vững.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
