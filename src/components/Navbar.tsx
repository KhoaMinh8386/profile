import { Building2, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
    isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (location.pathname !== '/') {
            e.preventDefault();
            navigate('/#' + id);
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${isScrolled
                ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-amber-500/20 py-3 shadow-2xl shadow-amber-500/5'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="p-2.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-slate-950 group-hover:scale-105 transition-all shadow-lg shadow-amber-500/20">
                        <Building2 size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-base md:text-lg tracking-tighter text-white uppercase leading-none">
                            MINH KHOA <span className="text-amber-400">PROPERTY</span>
                        </span>
                        <span className="text-[10px] font-semibold text-slate-400 tracking-wider">HỒNG ÂN CAPITAL</span>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-6 text-[11px] font-extrabold tracking-[0.15em] text-slate-300 uppercase">
                        {[
                            { name: 'DỰ ÁN PHƯỚC ĐÔNG', id: 'phuoc-dong-bds' },
                            { name: 'GIỚI THIỆU', id: 'about' },
                            { name: 'LIÊN HỆ TƯ VẤN', id: 'contact' }
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`/#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className="relative group hover:text-amber-400 transition-colors py-2"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="w-px h-6 bg-white/10" />

                    {/* Social Media Header Icons */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.tiktok.com/@minhkhoaproperty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-all border border-white/10 flex items-center gap-1.5 text-xs font-bold"
                            title="TikTok @minhkhoaproperty"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.15 6.34 6.34 0 0 0 .913 8.761 6.335 6.335 0 0 0 8.043-.615 6.325 6.325 0 0 0 1.9-4.492V8.406a8.217 8.217 0 0 0 4.771 1.524V6.485a4.79 4.79 0 0 1-1.002-.201z"/>
                            </svg>
                            <span className="hidden xl:inline">TikTok</span>
                        </a>

                        <a
                            href="https://www.facebook.com/profile.php?id=61592345032920"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-all border border-white/10 flex items-center gap-1.5 text-xs font-bold"
                            title="Fanpage Facebook"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span className="hidden xl:inline">Fanpage</span>
                        </a>
                    </div>

                    <a
                        href="tel:0914318513"
                        className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 rounded-full text-xs font-black tracking-widest uppercase transition-all transform active:scale-95 shadow-lg shadow-amber-500/20 flex items-center gap-2"
                    >
                        <Phone size={14} />
                        0914 318 513
                    </a>
                </div>

                {/* Mobile Call CTA */}
                <div className="flex items-center gap-2 lg:hidden">
                    <a
                        href="tel:0914318513"
                        className="px-4 py-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-black tracking-wider flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
                    >
                        <Phone size={14} />
                        0914 318 513
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
