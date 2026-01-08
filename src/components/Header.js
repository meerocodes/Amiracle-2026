import React, { useState, useEffect } from 'react';
import LightModeHeaderBg from '../assets/lightMode/lightMainHeader.webp';
import DarkModeHeaderBg from '../assets/darkmode/mainHeader.webp';

const words = ['BRANDING', 'STORYTELLING', 'GRAPHICS', 'E-COMMERCE'];

const Header = ({ isLightMode }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Enhanced parallax and mouse tracking
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Enhanced typewriter effect
    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const typingSpeed = isDeleting ? 80 : 150;
        setIsTouchDevice(('ontouchstart' in window || navigator.maxTouchPoints > 0));

        const handleTyping = () => {
            if (!isDeleting) {
                const nextText = currentWord.substring(0, displayText.length + 1);
                setDisplayText(nextText);
                if (nextText === currentWord) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 2000);
                }
            } else {
                const nextText = currentWord.substring(0, displayText.length - 1);
                setDisplayText(nextText);
                if (nextText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((currentWordIndex + 1) % words.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentWordIndex]);

    return (
        <header
            id="header"
            style={{
                backgroundImage: `url(${isLightMode ? LightModeHeaderBg : DarkModeHeaderBg})`,
                backgroundPosition: `${mousePosition.x * 0.02}px ${mousePosition.y * 0.02 + scrollY * 0.2}px`
            }}
            className="relative bg-cover h-[100dvh] section-transition overflow-hidden"
        >
            {/* Animated particles */}
            {/* Refined Matrix-style Code Rain */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="code-rain-column"
                        style={{
                            left: `${5 + (i * 8)}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${4 + (i % 3)}s`
                        }}
                    >
                        {[...Array(8)].map((_, j) => (
                            <div
                                key={j}
                                className={`code-char ${isLightMode ? 'code-char-light' : ''}`}
                                style={{
                                    animationDelay: `${j * 0.1}s`
                                }}
                            >
                                {['<', '>', '/', '{', '}', '(', ')', ';', '=', '+', '-', '*'][Math.floor(Math.random() * 12)]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Enhanced Typewriter Display */}
            <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span
                        className="text-white text-lg font-mono inline-block gradient-text bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 rounded-full glass-dark border border-white/20"
                        style={{
                            minWidth: '15ch',
                            textShadow: isLightMode ? '1px 2px 1px rgba(0,0,0,1)' : 'none'
                        }}
                    >
                        {displayText}<span className="animate-pulse">|</span>
                    </span>
                </div>
            </div>

            {/* Enhanced Main Content */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center gap-6 px-4"
                style={{ perspective: '1000px' }}
            >
                <div className="relative">
                    {/* Enhanced Tooltip */}
                    <div
                        className="absolute -top-8 -right-10 cursor-pointer interactive z-10 hidden sm:block"
                        onMouseEnter={!isTouchDevice ? () => setShowTooltip(true) : undefined}
                        onMouseLeave={!isTouchDevice ? () => setShowTooltip(false) : undefined}
                        onClick={() => setShowTooltip((prev) => !prev)}
                    >
                        <span
                            className={`text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 pulse-glow border ${
                                isLightMode 
                                    ? 'text-gray-800 glass border-gray-300 shadow-lg' 
                                    : 'text-white glass-dark border-white/20'
                            }`}
                            style={{
                                color: isLightMode ? 'black' : 'white'
                            }}
                        >
                            ?
                        </span>
                        {showTooltip && (
                            <div
                                className={`absolute -top-12 right-0 w-56 p-4 text-sm rounded-xl shadow-2xl transition-all duration-500 z-20 animate-fade-in transform-gpu ${
                                    isLightMode
                                        ? 'glass border border-gray-300 text-black'
                                        : 'glass-dark border border-white/20 text-white'
                                }`}
                            >
                              Production ready
                                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Tooltip - Positioned differently */}
                    <div className="absolute -top-16 right-0 cursor-pointer interactive z-10 sm:hidden">
                        <span
                            className={`text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 pulse-glow border ${
                                isLightMode 
                                    ? 'text-gray-800 glass border-gray-300 shadow-lg' 
                                    : 'text-white glass-dark border-white/20'
                            }`}
                            onClick={() => setShowTooltip((prev) => !prev)}
                        >
                            ?
                        </span>
                        {showTooltip && (
                            <div
                                className={`absolute -top-12 right-full mr-2 w-56 p-4 text-sm rounded-xl shadow-2xl transition-all duration-500 z-20 animate-fade-in transform-gpu ${
                                    isLightMode
                                        ? 'glass border border-gray-300 text-black'
                                        : 'glass-dark border border-white/20 text-white'
                                }`}
                            >
                                 Production ready
                                <div className="absolute top-4 left-full w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-400"></div>
                            </div>
                        )}
                    </div>

                    {/* Enhanced Sliding Text */}
                    <div className="sliding-text-block four-words mr-20 transform-gpu">
                        <ul className="Words">
                            <li className="Words-line">
                                <p className="dev-3d">&nbsp;</p>
                                <p>CEO</p>
                            </li>
                            <li className="Words-line">
                                <p>CEO</p>
                                <p>CREATOR</p>
                            </li>
                            <li className="Words-line">
                                <p>CREATOR</p>
                                <p>INNOVATOR</p>
                            </li>
                            <li className="Words-line">
                                <p>INNOVATOR</p>
                                <p>Web Developer</p>
                            </li>
                            <li className="Words-line">
                                <p>Web Developer</p>
                                <p className="dev-4">&nbsp;</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-slide-in {
                    animation: slideIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                @keyframes slideIn {
                    from {
                        transform: translateY(-30px) scale(0.9);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                }
                .particle {
                    animation: particle-float linear infinite;
                }
                @keyframes particle-float {
                    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
                }
            `}</style>
        </header>
    );
};

export default Header;
