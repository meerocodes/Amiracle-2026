import React, { useRef } from 'react';
// Import the new background images
import LightProjectBg from '../assets/lightMode/lightSectionImage.webp';
import DarkProjectBg from '../assets/darkmode/sectionImage.webp';

const projectsData = [
    {
        id: 5,
        image: '/travel_lounge_logo.PNG',
        alt: 'Travel Lounge messaging platform branding',
        tech: 'NEXT.JS | PYTHON | SUPABASE | AWS | WHATSAPP API',
        description:
            'Travel Lounge is a full international messaging + CRM system replacing ad-hoc WhatsApp juggling for a car travel agency. It routes chats, assigns agents, captures bookings, and syncs customer history so every trip runs through one streamlined workspace.',
        repo: '',
        live: '',
        align: 'left',
    },
    {
        id: 4,
        image: '/GIFS/kidcentralGif.gif',
        alt: 'a preview of the Kidcentral website and live dashboard project',
        tech: 'SHOPIFY | PYTHON WORKFLOWS | SHOPIFY ADMINAPI | REACT.JS | REST API',
        description:
            'Led complete front-end development and UX/UI design for Kidcentral.ca on Shopify, boosting user engagement and sales by 32% YTD. Engineered a dual-faceted platform for both public and B2B users and integrated Salsify for streamlined data management. Developed a React.js-powered live dashboard for real-time monitoring of warehouse operations, enhancing transparency and efficiency while reducing third-party dependencies.',
        repo: 'https://github.com/DevinD55/project-2-gains-app',
        live: 'https://kidcentral.ca',
        align: 'right',
    },
    {
        id: 3,
        image: '/GIFS/oudieWebsiteGif.gif',
        alt: 'a preview of the Oudie brand build project',
        tech: 'SHOPIFY | CUSTOM SNIPPETS | DIGITAL TRANSFORMATION',
        description:
            "Co-Chief Executive Officer role where I established the Oudie brand from inception by designing a custom Shopify website, developing tailored digital solutions, and driving a significant boost in digital engagement.",
        repo: '',
        live: 'https://oudie.ca',
        align: 'left',
    },
    {
        id: 1,
        image: '/GIFS/pokejack.gif',
        alt: 'a preview of my pokejack project',
        tech: 'REACT.JS | SASS | API',
        description:
            'Our group developed a React.js and Sass project that is a Pokemon-themed Blackjack game featuring dynamic components and conditionally rendered elements for a true video game experience. APIs generate the deck and populate the game with Pokémon data.',
        repo: 'https://github.com/Pokemon-x-Blackjack/pokemon-blackjack',
        live: 'https://pokejack.netlify.app/',
        align: 'right',
    },
    {
        id: 2,
        image: '/GIFS/noFaceWebsiteGif.gif',
        alt: 'a preview of my Clients website noFace',
        tech: 'REACT.JS | CSS | SHOPIFY',
        description:
            'A scalable website built with React.js, featuring an integrated Shopify buy button and cart for seamless checkout. Efficiently handles large 3D render files for future expansion.',
        repo: 'https://github.com/meerocodes/no-face',
        live: 'https://noface.netlify.app/',
        align: 'left',
    },
];

const shopifyApps = [
    {
        id: 'variant-organizer',
        name: 'Variant Organizer',
        description:
            'Manage product variants more efficiently with bulk reordering across multiple items. Select any set of products, adjust positions via drag-and-drop or numbered ordering, and commit uniform layouts in a single publish.',
        highlights: [
            'Bulk drag-and-drop variant rearranging across collections',
            'Preview and sync ordering for many products before publishing',
            'Change history captures every adjustment for quick rollback',
        ],
        stage: 'Published',
        ctas: [
            {
                label: 'See listing',
                href: 'https://apps.shopify.com/variant-organizer?search_id=36e7218c-7953-421f-9f9a-b1af3d03c42f&surface_detail=variant+organizer&surface_inter_position=1&surface_intra_position=6&surface_type=search',
                style: 'primary',
                external: true,
            },
            { label: 'Book onboarding', href: 'mailto:amir.ar@outook.com?subject=Variant%20Organizer', style: 'secondary', external: false },
        ],
    },
    {
        id: 'cart-plus',
        name: 'Cart+',
        description:
            'Adds intelligent cart goals, stackable incentives, and lightweight collaboration without bloating your theme.',
        highlights: ['Progress-based gifting', 'Bundle nudges', 'Live cart handoffs'],
        stage: 'Pending Approval',
        ctas: [
            { label: 'Join waitlist', href: 'mailto:amir.ar@outook.com?subject=Cart%2B%20Waitlist', style: 'primary', external: false },
            { label: 'View product deck', href: 'mailto:amir.ar@outook.com?subject=Cart%2B%20Deck', style: 'secondary', external: false },
        ],
    },
];

const passionProjects = [
    {
        id: 'halaqahub',
        name: 'HalaqaHub',
        category: 'Community Platform',
        timeline: '2024 → present',
        description:
            'Centralizes halaqa programming with live schedules, attendance tracking, class decks, and threaded Q&A. Admin tools let mentors launch courses, upload slides, and manage cohorts without friction.',
        stack: 'Next.js · Supabase · Tailwind · Magic Auth',
        status: 'Live beta',
        cta: { label: 'Visit HalaqaHub', href: 'https://halaqahub.bolt.host/', external: true },
    },
    {
        id: 'oudie-erp',
        name: 'Oudie ERP Core',
        category: 'Internal ERP',
        timeline: 'In development',
        description:
            'A private operating system for Oudie Heaven Scent covering production planning, inventory, fulfillment, and wholesale forecasting. Focused on reducing manual reconciliations and surfacing alerts in one dashboard.',
        stack: 'React · NestJS · PostgreSQL · Temporal workflows',
        status: 'Private build',
        cta: { label: 'Discuss architecture', href: 'mailto:amir.ar@outook.com?subject=Oudie%20ERP', external: false },
    },
];

const ProjectCard = ({ project, index, totalProjects, isLightMode }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        const currentCard = cardRef.current;
        if (currentCard) {
            observer.observe(currentCard);
        }
        return () => {
            if (currentCard) {
                observer.unobserve(currentCard);
            }
        };
    }, []);

    const xp = (totalProjects - index) * 500;
    const life = Math.round(((totalProjects - index) / totalProjects) * 100);

    return (
        <div
            ref={cardRef}
            className={`relative transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mb-16 card-hover`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="group w-full h-96 md:h-80 rounded-xl overflow-hidden" style={{ perspective: '1000px' }}>
                <div className={`relative w-full h-full transition-transform duration-700 ${isHovered ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                    <div className="absolute w-full h-full rounded-xl overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                        <img
                            src={`${process.env.PUBLIC_URL}${project.image}`}
                            alt={project.alt}
                            className="w-full h-full object-cover transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg mb-2 font-mono">{project.tech.split(' | ')[0]}</h3>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">Hover to flip</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`absolute w-full h-full ${isLightMode
                                ? 'glass text-gray-900 flex flex-col justify-between p-6 rounded-xl border-2 border-white/30 shadow-xl overflow-auto'
                                : 'glass-dark text-white flex flex-col justify-between p-6 rounded-xl border-2 border-white/20 shadow-xl overflow-auto'
                            } backdrop-blur-lg`}
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                        }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="w-12 h-12 float">
                                <img
                                    src={`${process.env.PUBLIC_URL}/finalLogoLightMode.svg`}
                                    alt="Logo"
                                    className="object-contain filter drop-shadow-lg"
                                />
                            </div>
                            <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">Project</span>
                        </div>
                        <div className="text-center mb-4">
                            <h4 className="mb-3 text-lg font-bold font-mono gradient-text">{project.tech}</h4>
                            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-gray-800 font-medium' : 'text-gray-200'}`}>{project.description}</p>
                        </div>
                        <div className="space-y-3 mb-4">
                            <div className="flex justify-between items-center">
                                <span className={`text-sm font-mono ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>XP Gained:</span>
                                <span className="text-sm font-mono font-bold text-green-400">{xp} XP</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className={`text-sm font-mono ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>Progress:</span>
                                <div className="w-32 bg-gray-300/30 rounded-full h-3 overflow-hidden">
                                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-1000" style={{ width: `${life}%` }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href={project.repo}
                                className="flex-1 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm rounded-full hover:scale-105 transition-all duration-300 text-center font-mono btn-modern"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-github mr-2"></i>Repo
                            </a>
                            <a
                                href={project.live}
                                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full hover:scale-105 transition-all duration-300 text-center font-mono btn-modern"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-solid fa-external-link mr-2"></i>Live
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const ShopifyAppCard = ({ app, isLightMode }) => {
    const primaryClass =
        'inline-flex items-center justify-center gap-2 min-w-[140px] px-8 py-2 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 btn-modern focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400';
    const secondaryClass = `inline-flex items-center justify-center gap-2 min-w-[140px] px-8 py-2 rounded-full font-semibold text-sm border ${
        isLightMode ? 'border-gray-800 text-gray-900' : 'border-white text-white'
    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400`;

    return (
        <div
            className={`rounded-[28px] p-6 md:p-8 border flex flex-col gap-4 ${
                isLightMode ? 'glass border-white/70' : 'glass-dark border-white/30'
            }`}
        >
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-xl font-semibold">{app.name}</h4>
                    <p className={`text-xs uppercase tracking-[0.4em] mt-1 ${isLightMode ? 'text-gray-500' : 'text-white/60'}`}>
                        {app.stage}
                    </p>
                </div>
                <span className="px-3 py-1 rounded-full border border-white/30 text-xs font-mono">Shopify App</span>
            </div>
            <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-300'} text-sm`}>{app.description}</p>
            <ul className="space-y-2 text-sm">
                {app.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                        <i className="fa-solid fa-circle-check text-green-400 text-xs"></i>
                        <span className={isLightMode ? 'text-gray-800' : 'text-gray-100'}>{highlight}</span>
                    </li>
                ))}
            </ul>
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                {app.ctas.map((cta) => (
                    <a
                        key={cta.label}
                        href={cta.href}
                        target={cta.external ? '_blank' : '_self'}
                        rel={cta.external ? 'noopener noreferrer' : undefined}
                        className={cta.style === 'primary' ? primaryClass : secondaryClass}
                    >
                        {cta.label}
                        {cta.external && <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>}
                    </a>
                ))}
            </div>
        </div>
    );
};

const Projects = ({ isLightMode }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => observer.disconnect();
    }, []);

    const primaryActionClass =
        'inline-flex items-center justify-center gap-2 px-8 py-2 rounded-full btn-modern bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400';
    const outlineActionClass = `inline-flex items-center justify-center gap-2 px-8 py-2 rounded-full text-sm font-semibold border ${
        isLightMode ? 'border-gray-800 text-gray-900' : 'border-white text-white'
    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400`;

    return (
        <section
            id="projects"
            ref={sectionRef}
            style={{
                backgroundImage: `url(${isLightMode ? LightProjectBg : DarkProjectBg})`
            }}
            className="relative border-t-8 section-transition bg-cover min-h-screen pb-4"
        >
            <div className={`w-11/12 sm:w-4/5 mx-auto flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2
                    className={`mt-12 text-4xl font-mono font-bold drop-shadow-lg mb-4 ${isLightMode ? 'text-gray-900' : 'gradient-text'}`}
                >
                    {'<PROJECTS />'}
                </h2>
                <div className={`w-24 h-1 rounded-full mb-4 ${isLightMode ? 'bg-gradient-to-r from-gray-400 to-gray-600' : 'bg-gradient-to-r from-blue-400 to-purple-500'}`}></div>
                <p className={`text-sm font-mono ${isLightMode ? 'text-gray-600' : 'text-gray-300'} mb-2`}>hover to view details</p>
                <i
                    className={`fa-solid fa-angle-down text-2xl ${isLightMode ? 'text-gray-900' : 'text-white'} animate-bounce`}
                ></i>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 w-full stagger-animation">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            totalProjects={projectsData.length}
                            isLightMode={isLightMode}
                        />
                    ))}
                </div>
                <div className="relative z-10 w-full mt-16 space-y-24">
                    <section
                        className={`relative rounded-[40px] px-6 md:px-10 pt-16 pb-10 border ${
                            isLightMode ? 'glass border-white/60 text-gray-900' : 'glass-dark border-white/20 text-white'
                        }`}
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.4em] opacity-70">Shopify Apps Lab</p>
                                    <h3 className="text-3xl font-bold">Modular tools that keep storefronts clean</h3>
                                </div>
                                <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-300'}`}>
                                    Each app ships with doc libraries, handover videos, and Notion playbooks so teams can extend without chaos.
                                </p>
                                <div className="flex flex-wrap gap-3 text-xs font-mono uppercase tracking-[0.3em] opacity-80">
                                    <span className="px-3 py-1 rounded-full border border-white/30">Automation ready</span>
                                    <span className="px-3 py-1 rounded-full border border-dashed border-white/30">Support included</span>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="mailto:amir.ar@outook.com?subject=Shopify%20Apps%20Inquiry"
                                        className={outlineActionClass}
                                    >
                                        Request access
                                    </a>
                                    <a
                                        href="mailto:amir.ar@outook.com?subject=Custom%20Shopify%20App"
                                        className={primaryActionClass}
                                    >
                                        Discuss custom build
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {shopifyApps.map((app) => (
                                    <ShopifyAppCard key={app.id} app={app} isLightMode={isLightMode} />
                                ))}
                            </div>
                        </div>
                    </section>

                    <section
                        className={`relative rounded-[40px] px-6 md:px-10 pt-16 pb-10 border ${
                            isLightMode ? 'glass border-white/60 text-gray-900' : 'glass-dark border-white/20 text-white'
                        }`}
                    >
                        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start mb-10">
                            <div className="space-y-4">
                                <p className={`text-xs uppercase tracking-[0.5em] ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                    Passion Projects & Labs
                                </p>
                                <h3 className={`text-3xl md:text-4xl font-bold ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                                    Purpose-built experiments with real-world impact
                                </h3>
                                <p className={`${isLightMode ? 'text-gray-600' : 'text-gray-300'}`}>
                                    Exploring community platforms, internal systems, and service ops with inclusive UX and transparent ops.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 justify-start lg:justify-end text-xs font-mono uppercase tracking-[0.3em] opacity-80">
                                <span className="px-3 py-1 rounded-full border border-white/30">Community tech</span>
                                <span className="px-3 py-1 rounded-full border border-white/30">Internal ops</span>
                            </div>
                        </div>
                        <div role="list" className="grid gap-6 md:grid-cols-2">
                            {passionProjects.map((project) => (
                                <article
                                    key={project.id}
                                    role="listitem"
                                    aria-labelledby={`${project.id}-title`}
                                    className={`rounded-3xl p-6 border focus-within:ring-2 focus-within:ring-blue-400 transition-shadow ${
                                        isLightMode ? 'glass border-white/70 text-gray-900' : 'glass-dark border-white/20 text-white'
                                    }`}
                                >
                                    <header className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="text-xs font-mono uppercase tracking-[0.3em] opacity-70">{project.category}</p>
                                            <p className="text-xs font-mono opacity-60">{project.timeline}</p>
                                        </div>
                                        <span className="px-3 py-1 rounded-full border border-dashed border-white/40 text-xs font-mono">
                                            {project.status}
                                        </span>
                                    </header>
                                    <div className="mt-4">
                                        <h4 id={`${project.id}-title`} className="text-2xl font-semibold">
                                            {project.name}
                                        </h4>
                                        <p className={`hidden md:block ${isLightMode ? 'text-gray-700' : 'text-gray-300'} mt-3 leading-relaxed`}>
                                            {project.description}
                                        </p>
                                    </div>
                                    <p className="hidden md:block text-xs font-mono opacity-80 mt-2" aria-label="Tech stack">
                                        {project.stack}
                                    </p>
                                    <div className="mt-6 flex justify-end">
                                        <a
                                            href={project.cta.href}
                                            target={project.cta.external ? '_blank' : '_self'}
                                            rel={project.cta.external ? 'noopener noreferrer' : undefined}
                                            className={project.cta.external ? primaryActionClass : outlineActionClass}
                                        >
                                            {project.cta.label}
                                            {project.cta.external && <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>}
                                        </a>
                                    </div>
                                    <details className="md:hidden mt-4 group">
                                        <summary className="flex items-center justify-between text-sm font-semibold cursor-pointer">
                                            <span>View project info</span>
                                            <i className="fa-solid fa-chevron-down transition-transform duration-300 group-open:rotate-180"></i>
                                        </summary>
                                        <div className={`mt-3 text-sm leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                            <p>{project.description}</p>
                                            <p className="text-xs font-mono opacity-80 mt-2">{project.stack}</p>
                                        </div>
                                    </details>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            
            <style jsx>{`
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
};

export default Projects;
