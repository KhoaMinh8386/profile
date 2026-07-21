export interface ProjectEvidence {
    label: string;
    value: string;
    type: 'performance' | 'architecture' | 'scalability' | 'quality';
}

export interface ProjectSignal {
    problem: string;
    solution: string;
    result: string;
}

export interface Project {
    id: string;
    title: string;
    categories: string;
    images: string[];
    description: string;
    longDescription?: string;
    stack: string[];
    github?: string;
    featured?: boolean;
    techniques: string[];
    evidence?: ProjectEvidence[];
    signals?: ProjectSignal;
}

export const projects: Project[] = [
    {
        id: 'qlbanhang',
        title: 'QLBanHang - POS System',
        categories: 'Academic Project',
        images: [
            '/img/quanlibanhang/Picture1.png',
            '/img/quanlibanhang/Picture2.png',
            '/img/quanlibanhang/Picture3.png',
            '/img/quanlibanhang/Picture4.png',
            '/img/quanlibanhang/Picture5.png',
            '/img/quanlibanhang/Picture6.png',
            '/img/quanlibanhang/Picture7.png',
            '/img/quanlibanhang/Picture8.png',
            '/img/quanlibanhang/Picture9.png',
            '/img/quanlibanhang/Picture10.png',
            '/img/quanlibanhang/Picture11.png',
            '/img/quanlibanhang/Picture12.png',
            '/img/quanlibanhang/Picture13.png',
            '/img/quanlibanhang/Picture14.png',
            '/img/quanlibanhang/Picture15.png',
            '/img/quanlibanhang/Picture16.png',
            '/img/quanlibanhang/Picture17.png',
            '/img/quanlibanhang/Picture18.png',
            '/img/quanlibanhang/Picture19.png',
            '/img/quanlibanhang/Picture20.png',
            '/img/quanlibanhang/Picture21.png',
            '/img/quanlibanhang/Picture22.png',
            '/img/quanlibanhang/Picture23.png',
        ],
        featured: true,
        description: 'A desktop application project for retail management with inventory tracking and invoicing.',
        longDescription: 'Developed as part of my coursework, this project explores building desktop applications using Electron and React. It features basic inventory management, order processing, and invoice generation. I implemented custom logic for QR code generation and thermal printing through Node.js.',
        stack: ['Electron', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
        techniques: [
            'Electron multi-process communication',
            'Context Isolation for security',
            'CRUD operations with PostgreSQL',
            'Responsive UI with Tailwind CSS',
            'Local hardware interaction logic',
        ],
        evidence: [
            { label: 'Primary Tech', value: 'Electron + React', type: 'architecture' },
            { label: 'Security', value: 'Context Isolation', type: 'quality' },
            { label: 'Data Store', value: 'PostgreSQL', type: 'scalability' },
            { label: 'Type Safety', value: 'TypeScript Build', type: 'quality' },
        ],
        signals: {
            problem: 'Integrating local printing into a web-based UI',
            solution: 'Exploring Node.js child processes for driver communication',
            result: 'Functional thermal printer output from desktop app'
        }
    },
    {
        id: 'nongsan',
        title: 'Fresh Farm E-Commerce',
        categories: 'Personal Project',
        images: [
            '/img/nongsan/Picture24.png',
            '/img/nongsan/Picture25.png',
            '/img/nongsan/Picture26.png',
            '/img/nongsan/Picture27.png',
            '/img/nongsan/Picture28.png',
            '/img/nongsan/Picture29.png',
            '/img/nongsan/Picture30.png',
            '/img/nongsan/Picture31.png',
            '/img/nongsan/Picture32.png',
            '/img/nongsan/Picture33.png',
            '/img/nongsan/Picture34.png',
            '/img/nongsan/Picture35.png',
            '/img/nongsan/Picture36.png',
            '/img/nongsan/Picture37.png',
            '/img/nongsan/Picture38.png',
            '/img/nongsan/Picture39.png',
            '/img/nongsan/Picture40.png',
            '/img/nongsan/Picture41.png',
            '/img/nongsan/Picture42.png',
            '/img/nongsan/Picture43.png',
            '/img/nongsan/Picture44.png',
            '/img/nongsan/Picture45.png',
        ],
        github: 'https://github.com/KhoaMinh8386/nongsan',
        description: 'An e-commerce platform concept for agricultural products with category filtering.',
        longDescription: 'This personal project was focused on learning how to manage complex UI states in an e-commerce context. I built a dynamic product catalog, filtering system, and shopping cart logic. It helped me understand how to handle large arrays of data efficiently on the client side.',
        stack: ['React', 'REST API', 'CSS Grid'],
        techniques: [
            'State management for cart logic',
            'Dynamic product filtering',
            'Component reusability patterns',
            'Responsive layout design',
        ],
        evidence: [
            { label: 'UI Library', value: 'React Hooks', type: 'architecture' },
            { label: 'Data Source', value: 'JSON REST API', type: 'scalability' },
            { label: 'Styling', value: 'Modern CSS Grid', type: 'quality' },
            { label: 'Interaction', value: 'Optimized State', type: 'performance' },
        ],
        signals: {
            problem: 'Handling fluid layouts for numerous product cards',
            solution: 'Applying CSS Grid and responsive media queries',
            result: 'Clean, accessible browsing across all screen sizes'
        }
    },
    {
        id: 'htea',
        title: 'HTea Ordering App',
        categories: 'Personal Project',
        images: [
            'https://placehold.co/1280x720/1e293b/cbd5e1?text=HTea+Dashboard',
            'https://placehold.co/1280x720/1e293b/cbd5e1?text=HTea+Menu',
            'https://placehold.co/1280x720/1e293b/cbd5e1?text=HTea+Order',
        ],
        github: 'https://github.com/KhoaMinh8386/htea-website',
        description: 'A full-stack ordering application for beverages with order tracking.',
        longDescription: 'HTea is a project where I explored building a full-stack application from scratch. I used Node.js for the backend API and PostgreSQL for data persistence. The project includes user authentication, product management, and real-time status updates for orders.',
        stack: ['React', 'Node.js', 'PostgreSQL', 'Express'],
        techniques: [
            'Full-stack integration',
            'Database schema designing',
            'Authentication flow implementation',
            'Form validation & error handling',
        ],
        evidence: [
            { label: 'Backend', value: 'Node.js / Express', type: 'performance' },
            { label: 'Database', value: 'Relational Schema', type: 'architecture' },
            { label: 'Auth', value: 'JWT Integration', type: 'quality' },
            { label: 'Frontend', value: 'Functional React', type: 'quality' },
        ],
        signals: {
            problem: 'Managing complex ordering states',
            solution: 'Implementing clear data flows and state validation',
            result: 'Reliable order processing without data loss'
        }
    },
    {
        id: 'phuocdong-newcity',
        title: 'Phước Đông New City Landing Page & Digital Showcase',
        categories: 'Real Estate & Commercial',
        images: [
            '/images/bds/phoi-canh-dem-du-an-phuoc-dong-new-city.webp',
            '/images/bds/2aoboqzprk96tksxey9bgbdmpvnxa24uj0k382ou-1536x864.jpg',
            '/images/bds/mat-bang-giai-doan-2-phuoc-dong-new-city.jpg',
            '/images/bds/5-diem-khac-biet-chi-co-tai-phuoc-dong-new-city.jpg',
            '/images/bds/he-thong-tien-ich-phuoc-dong-new-city.jpg',
            '/images/bds/tien-ich-ngoai-khu-du-an-phuoc-dong-new-city.webp',
            '/images/bds/so-do-vi-tri-khu-do-thi-phuoc-dong-new-city-tay-ninh.jpg',
            '/images/bds/tien-do-moi-nhat-phuoc-dong-new-city-thang-05-2025-7-750x422.jpg',
            '/images/bds/phap-ly-hoan-thien-da-co-so-hong-tung-can-nha-pho-tai-phuoc-dong-new-city.jpg',
            '/images/bds/so-do-hong-tung-can-tai-du-an-phuoc-dong-new-city-750x526.jpg',
            '/images/bds/phoi-canh-nha-pho-phuoc-dong-new-city-tay-ninh-750x423.png',
            '/images/bds/phoi-canh-nha-pho-phuoc-dong-new-city-1-750x323.jpg',
            '/images/bds/2aoboqzprk4qzypqkq8seuqtx7uyctzrb5xec46i-1536x864.jpg',
            '/images/bds/2aoboqzprk7jkzvh2hyv8ohnrwxh3n5qjh8edek8-1536x864.jpg'
        ],
        github: '',
        featured: true,
        description: 'Tư vấn giải pháp bất động sản Phước Đông New City - Nhà phố ngay lòng KCN Phước Đông 3.285ha (Tây Ninh), pháp lý Sổ hồng riêng từng căn.',
        longDescription: 'Dự án Phước Đông New City (Quy mô 247ha Khu A Đô thị) sở hữu vị trí chiến lược trên đường TL782 & D11, phục vụ hơn 80.000 chuyên gia và lao động tại KCN Phước Đông. Trang showcase giới thiệu thông tin chính xác về quy hoạch, mặt bằng giai đoạn, tiện ích nội ngoại khu, sơ đồ vị trí và chứng nhận pháp lý minh bạch.',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Luxury Dark Design'],
        techniques: [
            'Hero background & 3D tilt presentation with dark gold aesthetic',
            'Masonry layout & aspect ratio normalization for architectural renderings',
            'Interactive master plan lightbox with detailed lot mapping',
            'Infographic integration keeping Vietnamese text sharp without dark overlays',
            'Legal transparency showcase with red stamp and individual land title verification'
        ],
        evidence: [
            { label: 'Quy mô KCN', value: '3.285 ha', type: 'scalability' },
            { label: 'Lao động & Chuyên gia', value: '80.000+', type: 'performance' },
            { label: 'Khu A Đô thị GĐ1', value: '247 ha', type: 'architecture' },
            { label: 'Pháp lý', value: 'Sổ hồng riêng', type: 'quality' }
        ],
        signals: {
            problem: 'Cần giới thiệu dự án Phước Đông New City chuẩn mực, sang trọng, minh bạch thông tin và tôn vinh bộ ảnh tư liệu thực tế.',
            solution: 'Thiết kế phong cách Luxury Minimalism kết hợp hiệu ứng visual mượt mà, phân loại ảnh infographic và phối cảnh chuẩn xác.',
            result: 'Hiển thị hoàn hảo bộ ảnh BĐS Phước Đông New City, mang lại vẻ ngoài cao cấp và tin cậy cho thương hiệu Minh Khoa Property.'
        }
    }
];
