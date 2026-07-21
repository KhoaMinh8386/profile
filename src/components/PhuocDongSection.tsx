import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Building2, CheckCircle, Phone, Maximize2, X, Award, Users, Layers } from 'lucide-react';

const PhướcĐôngSection = () => {
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'all' | 'phoi-canh' | 'mat-bang' | 'tien-ich' | 'phap-ly'>('all');

    const galleryImages = [
        {
            src: '/images/bds/phoi-canh-dem-du-an-phuoc-dong-new-city.webp',
            title: 'Phối cảnh villa ban đêm cao cấp',
            tag: 'Hero & Architecture',
            category: 'phoi-canh',
            desc: 'Ánh sáng đêm quyến rũ thể hiện phong cách sống thượng lưu tại Phước Đông New City'
        },
        {
            src: '/images/bds/2aoboqzprk96tksxey9bgbdmpvnxa24uj0k382ou-1536x864.jpg',
            title: 'Nhà phố thương mại hoàng hôn',
            tag: 'Villa & Townhouse',
            category: 'phoi-canh',
            desc: 'Thiết kế hiện đại đón ánh sáng tự nhiên và sinh khí kinh doanh sầm uất'
        },
        {
            src: '/images/bds/phoi-canh-nha-pho-phuoc-dong-new-city-tay-ninh-750x423.png',
            title: 'Dãy nhà phố mẫu 1 trệt 1 lầu',
            tag: 'Architecture',
            category: 'phoi-canh',
            desc: 'Phù hợp cho gia đình trẻ và kết hợp vừa ở vừa cho thuê dòng tiền'
        },
        {
            src: '/images/bds/phoi-canh-nha-pho-phuoc-dong-new-city-1-750x323.jpg',
            title: 'Kiến trúc nhà phố 1 trệt 1 lửng',
            tag: 'Architecture',
            category: 'phoi-canh',
            desc: 'Tối ưu công năng sử dụng, chi phí hợp lý cho nhà đầu tư'
        },
        {
            src: '/images/bds/2aoboqzprk4qzypqkq8seuqtx7uyctzrb5xec46i-1536x864.jpg',
            title: 'Phối cảnh góc phố mua sắm',
            tag: 'Commercial',
            category: 'phoi-canh',
            desc: 'Tuyến đường huyết mạch hội tụ các dịch vụ mua sắm giải trí'
        },
        {
            src: '/images/bds/2aoboqzprk7jkzvh2hyv8ohnrwxh3n5qjh8edek8-1536x864.jpg',
            title: 'Không gian sống xanh chuẩn hiện đại',
            tag: 'Lifestyle',
            category: 'phoi-canh',
            desc: 'Hài hòa giữa mật độ xây dựng và mảng xanh nội khu'
        },
        {
            src: '/images/bds/mat-bang-giai-doan-2-phuoc-dong-new-city.jpg',
            title: 'Sơ đồ mặt bằng phân lô Giai đoạn 2',
            tag: 'Master Plan',
            category: 'mat-bang',
            isInfographic: true,
            desc: 'Quy hoạch phân lô chi tiết, hạ tầng đồng bộ. Click để xem phóng to'
        },
        {
            src: '/images/bds/5-diem-khac-biet-chi-co-tai-phuoc-dong-new-city.jpg',
            title: '5 Điểm khác biệt dự án',
            tag: 'Investment Highlights',
            category: 'mat-bang',
            isInfographic: true,
            desc: 'Những ưu thế vượt trội tạo nên sức hút đầu tư bền vững'
        },
        {
            src: '/images/bds/he-thong-tien-ich-phuoc-dong-new-city.jpg',
            title: 'Tổng quan hệ thống tiện ích nội khu',
            tag: 'Amenities Overview',
            category: 'tien-ich',
            isInfographic: true,
            desc: 'Trường học, phòng khám, trung tâm thương mại, khu thể thao tích hợp'
        },
        {
            src: '/images/bds/tien-ich-ngoai-khu-du-an-phuoc-dong-new-city.webp',
            title: 'Sơ đồ kết nối tiện ích ngoại khu',
            tag: 'Location Connections',
            category: 'tien-ich',
            isInfographic: true,
            desc: 'Bán kính vàng kết nối Co.opmart Phước Đông, ngân hàng, trường học'
        },
        {
            src: '/images/bds/so-do-vi-tri-khu-do-thi-phuoc-dong-new-city-tay-ninh.jpg',
            title: 'Sơ đồ vị trí kết nối chiến lược',
            tag: 'Strategic Location',
            category: 'mat-bang',
            isInfographic: true,
            desc: 'Tọa lạc trên đường TL782 & D11, cửa ngõ KCN Phước Đông 3.285ha'
        },
        {
            src: '/images/bds/tien-do-moi-nhat-phuoc-dong-new-city-thang-05-2025-7-750x422.jpg',
            title: 'Hình ảnh thực tế tiến độ 05/2025',
            tag: 'Actual Progress',
            category: 'phoi-canh',
            desc: 'Minh chứng thực tế công trình hoàn thiện và thi công hạ tầng'
        },
        {
            src: '/images/bds/phap-ly-hoan-thien-da-co-so-hong-tung-can-nha-pho-tai-phuoc-dong-new-city.jpg',
            title: 'Pháp lý hoàn thiện - Đã có sổ hồng',
            tag: 'Legal Transparency',
            category: 'phap-ly',
            isInfographic: true,
            desc: 'Cam kết pháp lý an toàn tuyệt đối với sổ hồng riêng từng căn'
        },
        {
            src: '/images/bds/so-do-hong-tung-can-tai-du-an-phuoc-dong-new-city-750x526.jpg',
            title: 'Bản scan Sổ hồng riêng từng căn',
            tag: 'Certificate of Ownership',
            category: 'phap-ly',
            isInfographic: true,
            desc: 'Quyền sở hữu lâu dài, sẵn sàng sang tên chứng nhận ngay'
        }
    ];

    const filteredImages = activeTab === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === activeTab);

    return (
        <section id="phuoc-dong-bds" className="py-24 md:py-36 bg-[#090909] text-white relative overflow-hidden font-sans border-t border-amber-500/20">
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs tracking-widest uppercase mb-4">
                            <Building2 size={14} className="text-amber-400" />
                            Dự Án Đang Tư Vấn Nổi Bật
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                            PHƯỚC ĐÔNG <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">NEW CITY</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mt-4">
                            Nhà phố thương mại ngay lòng KCN Phước Đông – Tây Ninh. Giải pháp tích sản an toàn & khai thác dòng tiền cho thuê bền vững.
                        </p>
                    </motion.div>

                    {/* Key Stats Counter Grid with Smooth Easing */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8">
                        {[
                            { value: '3.285 ha', label: 'Quy mô KCN Phước Đông', icon: <Building2 className="w-5 h-5 text-amber-400" /> },
                            { value: '80.000+', label: 'Lao động & Chuyên gia', icon: <Users className="w-5 h-5 text-amber-400" /> },
                            { value: '247 ha', label: 'Quy mô Khu A Đô Thị', icon: <Layers className="w-5 h-5 text-amber-400" /> },
                            { value: 'Sổ Hồng', label: 'Pháp lý riêng từng căn', icon: <Award className="w-5 h-5 text-amber-400" /> }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-amber-500/40 transition-all hover:scale-[1.03]"
                            >
                                <div className="p-2.5 rounded-xl bg-amber-500/10 mb-3">{stat.icon}</div>
                                <span className="text-2xl md:text-3xl font-black text-amber-400 tracking-tight font-sans">{stat.value}</span>
                                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Hero Feature Banner with 3D Tilt Aesthetics */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-center mt-16">
                    <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_20px_50px_rgba(212,175,55,0.15)]">
                        <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900 relative">
                            <img 
                                src="/images/bds/phoi-canh-dem-du-an-phuoc-dong-new-city.webp" 
                                alt="Phước Đông New City Phối Cảnh Đêm"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-95"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 space-y-3">
                            <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider rounded-lg">
                                Master Architecture Nightview
                            </span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-sans">Phối cảnh ban đêm Phước Đông New City</h3>
                            <p className="text-slate-300 text-sm font-light">Tâm điểm giao thương sầm uất với các dãy nhà phố 1 trệt 1 lửng & 1 trệt 1 lầu hiện đại.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-6">
                            <h3 className="text-2xl font-bold text-amber-400 flex items-center gap-3 font-sans">
                                <ShieldCheck size={24} />
                                Vì Sao Đầu Tư Phước Đông New City?
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Vị trí lõi KCN Phước Đông trên mặt tiền TL782 & D11 rộng 60m',
                                    'Nhu cầu thuê cực cao từ 80.000+ kĩ sư và chuyên gia công nghệ',
                                    'Sổ hồng riêng từng căn - An tâm tích sản lâu dài',
                                    'Thiết kế đa năng: Vừa ở vừa kinh doanh shophouse hoặc cho thuê',
                                    'Hạ tầng hoàn thiện: TTTM, trường học, bệnh viện, khu thể thao'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                                        <CheckCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="tel:0914318513"
                                    className="flex-1 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 text-sm uppercase tracking-wider transition-all hover:scale-[1.02]"
                                >
                                    <Phone size={16} />
                                    Hotline: 0914 318 513
                                </a>
                                <a 
                                    href="#contact"
                                    className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-white font-bold text-sm uppercase tracking-wider transition-all"
                                >
                                    Tư Vấn Giỏ Hàng
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter Tabs for Gallery with View Transition Animation */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {[
                        { id: 'all', label: 'Tất cả hình ảnh' },
                        { id: 'phoi-canh', label: 'Phối cảnh kiến trúc' },
                        { id: 'mat-bang', label: 'Mặt bằng & Vị trí' },
                        { id: 'tien-ich', label: 'Tiện ích nội/ngoại khu' },
                        { id: 'phap-ly', label: 'Pháp lý & Sổ hồng' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`relative px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105'
                                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid Mapped accurately according to guidelines */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {filteredImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col justify-between hover:border-amber-500/50 transition-all duration-500 ${
                                img.isInfographic ? 'shadow-lg' : 'hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]'
                            }`}
                        >
                            <div 
                                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer"
                                onClick={() => setLightboxImg(img.src)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${
                                        img.isInfographic 
                                            ? 'object-contain bg-slate-950 p-2 group-hover:scale-102' 
                                            : 'group-hover:scale-108 brightness-95 group-hover:brightness-100'
                                    }`}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
                                        {img.tag}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 size={16} />
                                </div>
                            </div>

                            <div className="p-5 space-y-2 border-t border-white/5">
                                <h4 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors">
                                    {img.title}
                                </h4>
                                <p className="text-slate-400 text-xs font-light leading-relaxed">
                                    {img.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Agent Profile & Direct Contact Box */}
                <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="space-y-4 text-center md:text-left">
                        <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest">MINH KHOA PROPERTY - HỒNG ÂN CAPITAL</span>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white">Tư vấn chuyên sâu Phước Đông New City</h3>
                        <p className="text-slate-300 max-w-xl text-sm font-light leading-relaxed">
                            Huỳnh Minh Khoa đồng hành cùng quý khách chọn lựa sản phẩm bất động sản tạo dòng tiền an toàn, pháp lý minh bạch và tiềm năng gia tăng lâu dài.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                        <a
                            href="tel:0914318513"
                            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3"
                        >
                            <Phone size={18} />
                            Gọi Ngay: 0914 318 513
                        </a>
                    </div>
                </div>

            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxImg(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                    >
                        <button
                            onClick={() => setLightboxImg(null)}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-amber-500 hover:text-black transition-all"
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            src={lightboxImg}
                            alt="Zoom view"
                            className="max-w-full max-h-[90vh] object-contain rounded-xl border border-white/20 shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PhướcĐôngSection;
