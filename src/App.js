import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightModeLogo from './finalLogoLightMode.svg';
import DarkModeLogo from './finalLogoDarkMode.svg';

const GlobalNav = ({ isLightMode, toggleLightMode, showNav }) => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const toggleHamburger = () => setIsHamburgerActive((prev) => !prev);

  const mobileMenuClasses = isLightMode
    ? 'glass border-2 border-white/30 text-shadow-white'
    : 'glass-dark border-2 border-white/20';

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 flex items-center justify-between p-6 z-[60] glass-dark hover:backdrop-blur-xl border-b border-white/10"
        style={{
          transform: showNav ? 'translateY(0)' : 'translateY(-110%)',
          opacity: showNav ? 1 : 0,
          transition: 'transform 0.45s ease, opacity 0.45s ease',
        }}
      >
        <a href="#header" className="logoLink group">
          <img
            src={isLightMode ? LightModeLogo : DarkModeLogo}
            alt="amiracle logo"
            className="h-14 float interactive transform-gpu group-hover:scale-110 transition-all duration-300"
          />
        </a>
        <ul className="hidden md:flex gap-8 items-center stagger-animation">
          <li className="navItem">
            <a
              href="#skills"
              className="interactive hover:text-blue-400 transition-all duration-300 text-lg font-mono relative group"
            >
              {"// skills"}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="navItem">
            <a
              href="#projects"
              className="interactive hover:text-blue-400 transition-all duration-300 text-lg font-mono relative group"
            >
              {"// projects"}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="navItem">
            <a
              href="#contact"
              className="interactive hover:text-blue-400 transition-all duration-300 text-lg font-mono relative group"
            >
              {"// get in touch"}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="navItem">
            <div className="flex items-center gap-3">
              <div
                onClick={toggleLightMode}
                className="w-16 h-8 bg-gray-700 rounded-full cursor-pointer relative transition-all duration-500 hover:scale-110 pulse-glow group"
              >
                <div
                  className={`w-8 h-8 ${
                    isLightMode
                      ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500'
                      : 'bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600'
                  } rounded-full absolute top-0 left-0 transition-all duration-500 ${
                    isLightMode ? 'translate-x-8' : 'translate-x-0'
                  } shadow-lg group-hover:shadow-xl flex items-center justify-center`}
                >
                  <i className={`${isLightMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} text-white text-sm`}></i>
                </div>
              </div>
              <span className="text-white text-sm font-mono gradient-text">
                {isLightMode ? 'go dark' : 'go light'}
              </span>
            </div>
          </li>
        </ul>
        <div
          className="block md:hidden hamburger cursor-pointer interactive p-2"
          onClick={toggleHamburger}
        >
          <span className={`block w-7 h-0.5 my-1.5 bg-white transition-all duration-500 ${isHamburgerActive ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-7 h-0.5 my-1.5 bg-white transition-all duration-500 ${isHamburgerActive ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 my-1.5 bg-white transition-all duration-500 ${isHamburgerActive ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </nav>

      {isHamburgerActive && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-xl transition-all duration-500 animate-fade-in">
          <div
            className={`relative ${mobileMenuClasses} rounded-3xl p-10 w-11/12 max-w-md shadow-2xl transform transition-all duration-700 animate-slide-in ring-2 ring-blue-500/30`}
          >
            <button
              onClick={toggleHamburger}
              className="absolute top-4 right-4 text-4xl text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-90 focus:outline-none"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-8 text-center mt-8 stagger-animation">
              <li className="text-2xl hover:text-white transition-all duration-300 hover:scale-110 transform drop-shadow-md hover:drop-shadow-[0_0_15px_rgba(0,191,255,0.8)]">
                <a href="#skills" onClick={toggleHamburger} className="font-mono">
                  {"// skills"}
                </a>
              </li>
              <li className="text-2xl hover:text-white transition-all duration-300 hover:scale-110 transform drop-shadow-md hover:drop-shadow-[0_0_15px_rgba(0,191,255,0.8)]">
                <a href="#projects" onClick={toggleHamburger} className="font-mono">
                  {"// projects"}
                </a>
              </li>
              <li className="text-2xl hover:text-white transition-all duration-300 hover:scale-110 transform drop-shadow-md hover:drop-shadow-[0_0_15px_rgba(0,191,255,0.8)]">
                <a href="#contact" onClick={toggleHamburger} className="font-mono">
                  {"// get in touch"}
                </a>
              </li>
              <li>
                <div
                  onClick={() => {
                    toggleLightMode();
                    toggleHamburger();
                  }}
                  className="flex items-center justify-center gap-3 cursor-pointer hover:scale-110 transition-all duration-300"
                >
                  <div className="w-16 h-8 bg-gray-600 rounded-full relative transition-all duration-300 pulse-glow">
                    <div
                      className={`w-8 h-8 ${
                        isLightMode ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-blue-400 to-purple-500'
                      } rounded-full absolute top-0 left-0 transition-all duration-300 ${
                        isLightMode ? 'translate-x-8' : 'translate-x-0'
                      } shadow-lg flex items-center justify-center`}
                    >
                      <i className={`${isLightMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} text-white text-sm`}></i>
                    </div>
                  </div>
                  <span className="text-xl font-mono">
                    {isLightMode ? 'go dark' : 'go light'}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

const SocialPanel = () => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem('socialPanelCollapsed');
    return savedState ? savedState === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('socialPanelCollapsed', String(isCollapsed));
  }, [isCollapsed]);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[55]">
      <div
        className={`glass-dark rounded-r-xl transition-all ease-in-out duration-700 flex flex-col items-center border-r border-white/20 shadow-lg hover:scale-105 ${
          isCollapsed ? 'w-auto px-2 py-3' : 'w-12 p-2'
        }`}
      >
        {isCollapsed ? (
          <button
            type="button"
            onClick={() => setIsCollapsed(false)}
            className="text-white text-xs tracking-[0.35em] uppercase flex flex-col items-center gap-2 hover:text-blue-400 transition-colors duration-300"
            aria-label="Open socials panel"
          >
            <span className="[writing-mode:vertical-rl] rotate-180">Socials</span>
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </button>
        ) : (
          <>
            <ul className="flex flex-col gap-4 text-white text-lg">
              <li>
                <a
                  href="https://github.com/meerocodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-all duration-300 hover:scale-150 block pulse-glow"
                >
                  <i className="fa-brands fa-github-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:amir.ar@outook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-all duration-300 hover:scale-150 block pulse-glow"
                >
                  <i className="fa-solid fa-inbox"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/meerocodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-all duration-300 hover:scale-150 block pulse-glow"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => setIsCollapsed(true)}
              className="text-white mt-3 text-sm hover:text-blue-400 transition-colors duration-300 animate-pulse"
              aria-label="Collapse socials panel"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

function App() {
  // Initialize the theme based on localStorage or default to light mode (true)
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'light' : true;
  });
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollYRef = useRef(0);

  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  const toggleLightMode = () => {
    setIsThemeTransitioning(true);
    setIsLightMode((prev) => !prev);
  };

  useEffect(() => {
    const getScrollY = () => {
      const scrollElement = document.scrollingElement || document.documentElement;
      return scrollElement ? scrollElement.scrollTop : window.pageYOffset || 0;
    };

    lastScrollYRef.current = getScrollY();

    const handleScroll = () => {
      const currentY = getScrollY();
      const delta = currentY - lastScrollYRef.current;

      if (currentY <= 10) {
        setShowNav(true);
      } else if (delta > 0) {
        setShowNav(false);
      } else if (delta < 0) {
        setShowNav(true);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, []);

  useEffect(() => {
    if (!isThemeTransitioning) {
      return undefined;
    }
    const timer = setTimeout(() => {
      setIsThemeTransitioning(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [isThemeTransitioning]);

  return (
    // When light mode is off, add "dark text-white" to force white text.
    <div className={`${isLightMode ? 'light' : 'dark text-white'} ${isThemeTransitioning ? 'theme-glitch-active' : ''}`}>
      <GlobalNav isLightMode={isLightMode} toggleLightMode={toggleLightMode} showNav={showNav} />
      <SocialPanel isLightMode={isLightMode} />
      <Header isLightMode={isLightMode} />
      <main>
        <About isLightMode={isLightMode} />
        <Skills isLightMode={isLightMode} />
        <Projects isLightMode={isLightMode} />
        <Contact isLightMode={isLightMode} />
      </main>
      <Footer isLightMode={isLightMode} />
    </div>
  );
}

export default App;
