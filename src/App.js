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
        <button
          type="button"
          aria-label={isHamburgerActive ? 'Close menu' : 'Open menu'}
          className={`block md:hidden cursor-pointer p-3 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ${
            isLightMode
              ? 'bg-white/80 border-gray-300/60 shadow-[0_12px_30px_rgba(15,23,42,0.15)] hover:bg-white'
              : 'bg-white/10 border-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:bg-white/20'
          }`}
          onClick={toggleHamburger}
        >
          <span
            className={`block w-7 h-0.5 rounded-full transition-all duration-300 ${
              isLightMode ? 'bg-gray-900' : 'bg-white'
            } ${isHamburgerActive ? 'translate-y-2 rotate-45' : ''}`}
          ></span>
          <span
            className={`block w-7 h-0.5 rounded-full my-1.5 transition-all duration-300 ${
              isLightMode ? 'bg-gray-900/70' : 'bg-white/70'
            } ${isHamburgerActive ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block w-7 h-0.5 rounded-full transition-all duration-300 ${
              isLightMode ? 'bg-gray-900' : 'bg-white'
            } ${isHamburgerActive ? '-translate-y-2 -rotate-45' : ''}`}
          ></span>
        </button>
      </nav>

      {isHamburgerActive && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-2xl transition-all duration-500 animate-fade-in"
          onClick={toggleHamburger}
          role="presentation"
        >
          <div
            className={`relative w-11/12 max-w-sm rounded-[28px] border px-8 pb-10 pt-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-500 ${
              isLightMode
                ? 'bg-white/95 border-gray-200 text-gray-900'
                : 'bg-[#0f1115]/90 border-white/10 text-white'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.4em] opacity-60">Menu</span>
              <button
                onClick={toggleHamburger}
                className={`h-10 w-10 rounded-full border text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  isLightMode
                    ? 'border-gray-200 text-gray-700 hover:bg-gray-100'
                    : 'border-white/10 text-white/80 hover:bg-white/10'
                }`}
                aria-label="Close menu"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <ul className="mt-8 flex flex-col gap-4">
              <li>
                <a
                  href="#skills"
                  onClick={toggleHamburger}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-mono transition-all duration-300 ${
                    isLightMode
                      ? 'bg-gray-50 hover:bg-gray-100'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {"// skills"}
                  <i className="fa-solid fa-arrow-right text-sm opacity-60"></i>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={toggleHamburger}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-mono transition-all duration-300 ${
                    isLightMode
                      ? 'bg-gray-50 hover:bg-gray-100'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {"// projects"}
                  <i className="fa-solid fa-arrow-right text-sm opacity-60"></i>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleHamburger}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-mono transition-all duration-300 ${
                    isLightMode
                      ? 'bg-gray-50 hover:bg-gray-100'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {"// get in touch"}
                  <i className="fa-solid fa-arrow-right text-sm opacity-60"></i>
                </a>
              </li>
              <li className="mt-2">
                <div
                  onClick={() => {
                    toggleLightMode();
                    toggleHamburger();
                  }}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.3em] transition-all duration-300 ${
                    isLightMode
                      ? 'bg-gray-50 hover:bg-gray-100'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <span>{isLightMode ? 'Light mode' : 'Dark mode'}</span>
                  <div className="flex items-center gap-2 text-base normal-case">
                    <i className={`${isLightMode ? 'fa-solid fa-sun text-amber-500' : 'fa-solid fa-moon text-blue-300'}`}></i>
                    <span className="text-xs opacity-70">{isLightMode ? 'switch' : 'switch'}</span>
                  </div>
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
