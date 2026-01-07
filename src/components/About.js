import React, { useState, useEffect, useRef } from 'react';
import LightAboutBg from '../assets/lightMode/lightSectionImage3.webp';
import DarkAboutBg from '../assets/darkmode/sectionImage3.webp';

const ethos = [
    {
        title: 'Creative Direction',
        description: 'Lead immersive storytelling, behaviors, and typography that feel hand-built rather than templated.',
    },
    {
        title: 'Commerce Strategy',
        description: 'Architect Shopify ecosystems, CX flows, and retention loops for brands that scale fast.',
    },
    {
        title: 'Rapid Experimentation',
        description: 'Prototype micro-sites, drops, and product splashes in hours to keep a playful edge.',
    },
];

const About = ({ isLightMode }) => {
    const sectionRef = useRef(null);
    const rippleTimeout = useRef(null);
    const [cursorPos, setCursorPos] = useState({ x: 50, y: 40 });
    const [pulse, setPulse] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [scrollGlow, setScrollGlow] = useState(0);
    const [mobileGlowPos, setMobileGlowPos] = useState({ x: 50, y: 40 });
    const [hasMobileInteracted, setHasMobileInteracted] = useState(false);
    const [mobileRipple, setMobileRipple] = useState(null);

    const clamp = (value, min = 0, max = 100) => Math.min(max, Math.max(min, value));

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        const interval = setInterval(() => {
            setPulse((prev) => (prev + 1) % 360);
        }, 120);
        const handleScroll = () => {
            const progress = Math.min(100, (window.scrollY / window.innerHeight) * 100);
            setScrollGlow(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (!isMobile || hasMobileInteracted) {
            return undefined;
        }
        setMobileGlowPos({
            x: 50 + Math.sin(pulse / 15) * 20,
            y: 40 + Math.cos(pulse / 13) * 18,
        });
    }, [isMobile, pulse, hasMobileInteracted]);

    useEffect(() => {
        if (isMobile) {
            return undefined;
        }
        const handlePointerMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 100;
            const y = (event.clientY / window.innerHeight) * 100;
            setCursorPos({ x, y });
        };
        window.addEventListener('pointermove', handlePointerMove);
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, [isMobile]);

    const updateMobileGlow = (clientX, clientY) => {
        if (!sectionRef.current) {
            return;
        }
        const rect = sectionRef.current.getBoundingClientRect();
        const x = clamp(((clientX - rect.left) / rect.width) * 100);
        const y = clamp(((clientY - rect.top) / rect.height) * 100);
        setHasMobileInteracted(true);
        setMobileGlowPos({ x, y });
        if (rippleTimeout.current) {
            clearTimeout(rippleTimeout.current);
        }
        setMobileRipple({ x, y });
        rippleTimeout.current = setTimeout(() => {
            setMobileRipple(null);
        }, 600);
    };

    const handleMobilePointer = (event) => {
        if (!isMobile) {
            return;
        }
        if (event.pointerType === 'touch' || event.type === 'pointerdown') {
            updateMobileGlow(event.clientX, event.clientY);
        }
    };

    const handleMobileTouch = (event) => {
        if (!isMobile) {
            return;
        }
        const touch = event.touches[0];
        if (touch) {
            updateMobileGlow(touch.clientX, touch.clientY);
        }
    };

    useEffect(() => {
        return () => {
            if (rippleTimeout.current) {
                clearTimeout(rippleTimeout.current);
            }
        };
    }, []);

    const accentPos = isMobile ? mobileGlowPos : cursorPos;

    const mobileStripStyle = isMobile
        ? {
              backgroundImage:
                  'linear-gradient(120deg, rgba(79,70,229,0.3), rgba(59,130,246,0.25) 50%, rgba(236,72,153,0.25)), linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '250% 100%, 100% 28px',
              backgroundPosition: `${scrollGlow * 2}% 0%, 0 0`,
              transition: 'background-position 0.6s ease',
          }
        : {};

    const backgroundStyle = {
        backgroundColor: isLightMode ? '#f8fafc' : '#030712',
        backgroundImage: `linear-gradient(130deg, ${
            isLightMode ? 'rgba(255,255,255,0.8)' : 'rgba(15,23,42,0.85)'
        }, ${isLightMode ? 'rgba(226,232,240,0.95)' : 'rgba(2,6,23,0.9)'}), url(${
            isLightMode ? LightAboutBg : DarkAboutBg
        })`,
        backgroundBlendMode: isLightMode ? 'soft-light, normal' : 'color-dodge, normal',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            onPointerDown={handleMobilePointer}
            onPointerMove={handleMobilePointer}
            onTouchStart={handleMobileTouch}
            onTouchMove={handleMobileTouch}
            className="relative border-t-8 section-transition py-20 overflow-hidden bg-cover bg-center"
            style={backgroundStyle}
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`w-72 h-72 rounded-full blur-3xl opacity-50 ${isLightMode ? 'bg-blue-200/50' : 'bg-cyan-500/20'} absolute -top-16 -right-12`}></div>
                <div className={`w-96 h-96 rounded-full blur-3xl opacity-30 ${isLightMode ? 'bg-amber-200/50' : 'bg-fuchsia-500/20'} absolute bottom-0 left-[-10%]`}></div>
                <div
                    className="absolute inset-y-10 left-1/2 w-[70%] max-w-4xl -translate-x-1/2 opacity-20 blur-3xl"
                    style={{
                        backgroundImage: 'conic-gradient(from 90deg at 50% 50%, rgba(250,204,21,0.4), rgba(99,102,241,0.4), rgba(14,165,233,0.35), rgba(250,204,21,0.4))',
                    }}
                ></div>
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 0 0, rgba(255,255,255,0.35), transparent 50%), radial-gradient(circle at 100% 100%, rgba(255,255,255,0.2), transparent 55%), repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 10px)',
                        mixBlendMode: isLightMode ? 'multiply' : 'screen',
                    }}
                ></div>
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '120px 120px',
                    }}
                ></div>
                <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                        background: `radial-gradient(circle at ${accentPos.x}% ${accentPos.y}%, ${
                            isLightMode ? 'rgba(59,130,246,0.22)' : 'rgba(147,197,253,0.22)'
                        }, transparent 45%)`,
                        mixBlendMode: isLightMode ? 'multiply' : 'screen',
                        opacity: isMobile ? 0.4 : 0.5,
                        filter: isMobile ? 'blur(10px)' : 'none',
                    }}
                ></div>
                {isMobile && mobileRipple && (
                    <span
                        className="absolute w-56 h-56 rounded-full border border-white/20 opacity-60 animate-mobile-ripple"
                        style={{
                            left: `${mobileRipple.x}%`,
                            top: `${mobileRipple.y}%`,
                            transform: 'translate(-50%, -50%)',
                            boxShadow: `0 0 80px ${isLightMode ? 'rgba(59,130,246,0.35)' : 'rgba(125,211,252,0.4)'}`,
                        }}
                    ></span>
                )}
                {isMobile && (
                    <>
                        <div
                            className="absolute inset-0 opacity-65"
                            style={mobileStripStyle}
                        ></div>
                        <div
                            className="absolute inset-x-4 top-1/4 h-40 rounded-[32px]"
                            style={{
                                border: '1px solid rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(30px)',
                                background:
                                    isLightMode
                                        ? 'linear-gradient(135deg, rgba(255,255,255,0.35), rgba(229,231,235,0.2))'
                                        : 'linear-gradient(135deg, rgba(15,23,42,0.6), rgba(30,41,59,0.4))',
                                boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
                                transform: `translateY(${Math.sin(pulse / 10) * 4}px)`,
                                transition: 'transform 0.4s ease',
                            }}
                        ></div>
                    </>
                )}
                <div
                    className="absolute inset-0 opacity-20 blur-3xl transition-transform duration-500"
                    style={{
                        background: `conic-gradient(from ${pulse}deg, rgba(56,189,248,0.25), rgba(248,113,113,0.25), rgba(192,132,252,0.25), rgba(56,189,248,0.25))`,
                        transform: `scale(${1.05 + Math.sin(pulse / 20) * 0.02})`,
                        mixBlendMode: isLightMode ? 'multiply' : 'screen',
                    }}
                ></div>
            </div>

            <style jsx>{`
                @keyframes mobileWave {
                    0% {
                        background-position: 0% 0%, 0 0;
                    }
                    100% {
                        background-position: 300% 0%, 0 24px;
                    }
                }
                @keyframes mobileRipple {
                    0% {
                        transform: translate(-50%, -50%) scale(0.5);
                        opacity: 0.9;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1.4);
                        opacity: 0;
                    }
                }
                .animate-mobile-ripple {
                    animation: mobileRipple 0.8s ease-out forwards;
                }
            `}</style>
            <div className="relative w-11/12 sm:w-4/5 mx-auto">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className={`text-4xl font-mono font-bold ${isLightMode ? 'text-gray-900' : 'gradient-text'}`}>
                        {'<ABOUT />'}
                    </h2>
                    <div className={`w-24 h-1 rounded-full mt-4 ${isLightMode ? 'bg-gradient-to-r from-gray-400 to-gray-600' : 'bg-gradient-to-r from-blue-400 to-purple-500'}`}></div>
                    <p className={`mt-6 text-base md:text-lg max-w-3xl ${isLightMode ? 'text-gray-700' : 'text-gray-200'}`}>
                        I’m a multidisciplinary creative and Co-CEO of <span className="font-semibold">Linkify Solutions</span> and <span className="font-semibold">Oudie Heaven Scent</span>.
                        Every build threads together elevated UX, commerce strategy, and brand storytelling so partners get a modern experience that is both clean and brave.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div
                        className={`rounded-[32px] p-8 md:p-10 space-y-8 ${
                            isLightMode
                                ? 'glass border border-white/60 shadow-xl text-gray-900'
                                : 'glass-dark border border-white/20 shadow-2xl text-white'
                        }`}
                    >
                        <div className="flex flex-col gap-3 text-left">
                            <p className={`text-xs uppercase tracking-[0.4em] ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>Profile</p>
                            <h3 className="text-3xl font-bold">Creative + Co-CEO</h3>
                            <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>
                                Linkify Solutions is where we ship data-driven e-commerce systems. Oudie Heaven Scent is where we craft luxury fragrance moments.
                                I bridge both worlds by leading UX/UI, product ops, and experimentation so new drops stay sharp from desktop to mobile.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-4 text-center">
                            {[
                                { label: 'Years Crafting', value: '8+' },
                                { label: 'Platforms', value: 'Shopify · React' },
                                { label: 'Cities Served', value: '12' },
                            ].map((item) => (
                                <div key={item.label} className="p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                                    <p className={`text-xs uppercase tracking-[0.3em] ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>{item.label}</p>
                                    <p className="text-xl font-bold mt-2">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {ethos.map((item, idx) => (
                            <div
                                key={item.title}
                                className={`rounded-3xl p-6 text-left border ${
                                    isLightMode
                                        ? 'glass border-white/60 shadow-lg text-gray-900'
                                        : 'glass-dark border-white/20 shadow-2xl text-white'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-xl font-semibold">{item.title}</h4>
                                    <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/20">{`0${idx + 1}`}</span>
                                </div>
                                <p className={`${isLightMode ? 'text-gray-700' : 'text-gray-300'}`}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
