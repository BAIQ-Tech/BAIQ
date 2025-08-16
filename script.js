// Language translations
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-technology': 'Technology',
        'nav-contact': 'Contact',
        'hero-title': 'Revolutionizing Industries with Blockchain, AI, and Quantum',
        'hero-subtitle': 'Leading the future of technology through innovative solutions that transform businesses and create unprecedented opportunities',
        'btn-explore': 'Explore Our Solutions',
        'btn-contact': 'Get In Touch',
        'about-title': 'About BAIQ',
        'about-subtitle': 'Pioneering the convergence of three revolutionary technologies',
        'about-description': 'BAIQ stands at the forefront of technological innovation, combining the power of Blockchain, Artificial Intelligence, and Quantum Computing to create solutions that were once thought impossible. Our mission is to revolutionize industries and empower businesses with cutting-edge technology.',
        'stat-projects': 'Projects Delivered',
        'stat-clients': 'Global Clients',
        'stat-years': 'Years of Innovation',
        'services-title': 'Our Services',
        'services-subtitle': 'Comprehensive solutions powered by next-generation technology',
        'service-blockchain-title': 'Blockchain Solutions',
        'service-blockchain-desc': 'Secure, transparent, and decentralized systems for supply chain, finance, and digital identity management.',
        'service-blockchain-1': 'Smart Contract Development',
        'service-blockchain-2': 'DeFi Platforms',
        'service-blockchain-3': 'NFT Marketplaces',
        'service-blockchain-4': 'Cryptocurrency Solutions',
        'service-ai-title': 'AI & Machine Learning',
        'service-ai-desc': 'Intelligent systems that learn, adapt, and optimize business processes for maximum efficiency.',
        'service-ai-1': 'Predictive Analytics',
        'service-ai-2': 'Natural Language Processing',
        'service-ai-3': 'Computer Vision',
        'service-ai-4': 'Automated Decision Systems',
        'service-quantum-title': 'Quantum Computing',
        'service-quantum-desc': 'Harness the power of quantum mechanics to solve complex problems at unprecedented speeds.',
        'service-quantum-1': 'Quantum Algorithms',
        'service-quantum-2': 'Cryptographic Security',
        'service-quantum-3': 'Optimization Problems',
        'service-quantum-4': 'Research & Development',
        'tech-title': 'Our Technology Stack',
        'tech-subtitle': 'Built on the most advanced and reliable technologies',
        'tech-blockchain-title': 'Blockchain',
        'tech-ai-title': 'Artificial Intelligence',
        'tech-quantum-title': 'Quantum Computing',
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Ready to revolutionize your business? Let\'s talk.',
        'contact-email-title': 'Email',
        'contact-phone-title': 'Phone',
        'contact-address-title': 'Address',
        'contact-address': 'Silicon Valley, CA, USA',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        'footer-home': 'Home',
        'footer-about': 'About',
        'footer-services': 'Services',
        'footer-contact': 'Contact',
        'footer-copyright': '© 2025 BAIQ. All rights reserved.'
    },
    ja: {
        'nav-home': 'ホーム',
        'nav-about': '会社概要',
        'nav-services': 'サービス',
        'nav-technology': '技術',
        'nav-contact': 'お問い合わせ',
        'hero-title': 'ブロックチェーン、AI、量子技術で産業を革新',
        'hero-subtitle': '革新的なソリューションでビジネスを変革し、前例のない機会を創出する技術の未来をリードします',
        'btn-explore': 'ソリューションを探る',
        'btn-contact': 'お問い合わせ',
        'about-title': 'BAIQについて',
        'about-subtitle': '3つの革命的技術の融合を先駆ける',
        'about-description': 'BAIQは技術革新の最前線に立ち、ブロックチェーン、人工知能、量子コンピューティングの力を組み合わせて、かつては不可能と思われていたソリューションを創造しています。私たちの使命は、最先端技術で産業を革新し、企業に力を与えることです。',
        'stat-projects': '完了プロジェクト',
        'stat-clients': 'グローバルクライアント',
        'stat-years': '革新の年数',
        'services-title': 'サービス',
        'services-subtitle': '次世代技術によって支えられた包括的ソリューション',
        'service-blockchain-title': 'ブロックチェーンソリューション',
        'service-blockchain-desc': 'サプライチェーン、金融、デジタルアイデンティティ管理のための安全で透明性の高い分散システム。',
        'service-blockchain-1': 'スマートコントラクト開発',
        'service-blockchain-2': 'DeFiプラットフォーム',
        'service-blockchain-3': 'NFTマーケットプレイス',
        'service-blockchain-4': '暗号通貨ソリューション',
        'service-ai-title': 'AI・機械学習',
        'service-ai-desc': '学習し、適応し、最大効率でビジネスプロセスを最適化するインテリジェントシステム。',
        'service-ai-1': '予測分析',
        'service-ai-2': '自然言語処理',
        'service-ai-3': 'コンピュータビジョン',
        'service-ai-4': '自動意思決定システム',
        'service-quantum-title': '量子コンピューティング',
        'service-quantum-desc': '量子力学の力を活用して、前例のない速度で複雑な問題を解決します。',
        'service-quantum-1': '量子アルゴリズム',
        'service-quantum-2': '暗号化セキュリティ',
        'service-quantum-3': '最適化問題',
        'service-quantum-4': '研究開発',
        'tech-title': '技術スタック',
        'tech-subtitle': '最も先進的で信頼性の高い技術で構築',
        'tech-blockchain-title': 'ブロックチェーン',
        'tech-ai-title': '人工知能',
        'tech-quantum-title': '量子コンピューティング',
        'contact-title': 'お問い合わせ',
        'contact-subtitle': 'ビジネスを革新する準備はできていますか？お話しましょう。',
        'contact-email-title': 'メール',
        'contact-phone-title': '電話',
        'contact-address-title': '住所',
        'contact-address': 'シリコンバレー、カリフォルニア州、アメリカ',
        'form-name': 'お名前',
        'form-email': 'メールアドレス',
        'form-subject': '件名',
        'form-message': 'メッセージ',
        'form-submit': 'メッセージを送信',
        'footer-home': 'ホーム',
        'footer-about': '会社概要',
        'footer-services': 'サービス',
        'footer-contact': 'お問い合わせ',
        'footer-copyright': '© 2025 BAIQ. 全著作権所有。'
    },
    zh: {
        'nav-home': '首页',
        'nav-about': '关于我们',
        'nav-services': '服务',
        'nav-technology': '技术',
        'nav-contact': '联系我们',
        'hero-title': '用区块链、AI和量子技术革新行业',
        'hero-subtitle': '通过创新解决方案引领技术未来，改变企业并创造前所未有的机遇',
        'btn-explore': '探索我们的解决方案',
        'btn-contact': '联系我们',
        'about-title': '关于BAIQ',
        'about-subtitle': '开创三项革命性技术的融合',
        'about-description': 'BAIQ站在技术创新的前沿，结合区块链、人工智能和量子计算的力量，创造曾经被认为不可能的解决方案。我们的使命是用尖端技术革新行业并赋能企业。',
        'stat-projects': '已完成项目',
        'stat-clients': '全球客户',
        'stat-years': '创新年数',
        'services-title': '我们的服务',
        'services-subtitle': '由下一代技术驱动的综合解决方案',
        'service-blockchain-title': '区块链解决方案',
        'service-blockchain-desc': '为供应链、金融和数字身份管理提供安全、透明和去中心化的系统。',
        'service-blockchain-1': '智能合约开发',
        'service-blockchain-2': 'DeFi平台',
        'service-blockchain-3': 'NFT市场',
        'service-blockchain-4': '加密货币解决方案',
        'service-ai-title': 'AI与机器学习',
        'service-ai-desc': '学习、适应并优化业务流程以实现最大效率的智能系统。',
        'service-ai-1': '预测分析',
        'service-ai-2': '自然语言处理',
        'service-ai-3': '计算机视觉',
        'service-ai-4': '自动决策系统',
        'service-quantum-title': '量子计算',
        'service-quantum-desc': '利用量子力学的力量以前所未有的速度解决复杂问题。',
        'service-quantum-1': '量子算法',
        'service-quantum-2': '密码安全',
        'service-quantum-3': '优化问题',
        'service-quantum-4': '研究与开发',
        'tech-title': '我们的技术栈',
        'tech-subtitle': '基于最先进和可靠的技术构建',
        'tech-blockchain-title': '区块链',
        'tech-ai-title': '人工智能',
        'tech-quantum-title': '量子计算',
        'contact-title': '联系我们',
        'contact-subtitle': '准备好革新您的业务了吗？让我们谈谈。',
        'contact-email-title': '邮箱',
        'contact-phone-title': '电话',
        'contact-address-title': '地址',
        'contact-address': '美国加利福尼亚州硅谷',
        'form-name': '您的姓名',
        'form-email': '您的邮箱',
        'form-subject': '主题',
        'form-message': '您的留言',
        'form-submit': '发送消息',
        'footer-home': '首页',
        'footer-about': '关于我们',
        'footer-services': '服务',
        'footer-contact': '联系我们',
        'footer-copyright': '© 2025 BAIQ. 版权所有。'
    }
};

// Current language
let currentLanguage = 'en';

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const langButtons = document.querySelectorAll('.lang-btn');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeContactForm();
});

// Language functionality
function initializeLanguage() {
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
            
            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function switchLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.dataset.key;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update document language
    document.documentElement.lang = lang;
}

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Initialize animations
function initializeAnimations() {
    // Hero buttons animation
    const heroButtons = document.querySelectorAll('.hero-buttons .btn-primary, .hero-buttons .btn-secondary');
    heroButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        });
    });

    // Tech items animation
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder*="Subject"], input[placeholder*="件名"], input[placeholder*="主题"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scroll for hero buttons
document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.querySelector('[data-key="btn-explore"]');
    const contactBtn = document.querySelector('[data-key="btn-contact"]');
    
    exploreBtn.addEventListener('click', () => {
        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    
    contactBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroLogo = document.querySelector('.hero-logo-img');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    setTimeout(() => {
        if (heroLogo) heroLogo.style.opacity = '1';
    }, 300);
    
    setTimeout(() => {
        if (heroTitle) heroTitle.style.opacity = '1';
    }, 600);
    
    setTimeout(() => {
        if (heroSubtitle) heroSubtitle.style.opacity = '1';
    }, 900);
    
    setTimeout(() => {
        if (heroButtons) heroButtons.style.opacity = '1';
    }, 1200);
});

// Initial hero elements opacity
document.addEventListener('DOMContentLoaded', () => {
    const heroElements = [
        '.hero-logo-img',
        '.hero-title',
        '.hero-subtitle',
        '.hero-buttons'
    ];
    
    heroElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transition = 'opacity 0.6s ease';
        }
    });
});
