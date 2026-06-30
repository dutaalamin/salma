import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';

function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print flex justify-center ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-amber-100/10 py-3.5 shadow-sm shadow-stone-100/10' 
        : 'bg-transparent py-5'
    }`}>
      <nav className="flex items-center gap-1.5">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-amber-50 text-amber-700 font-extrabold'
                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50/50'
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </header>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button visibility
      setShowScrollTop(window.scrollY > 500);

      // Section ScrollSpy Logic
      const sections = ['home', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const currEl = document.getElementById(sections[i]);
        if (currEl) {
          const top = currEl.offsetTop;
          const height = currEl.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ParallaxProvider>
      <Router>
        <div className="min-h-screen bg-[#E6DFD3] text-stone-800 font-sans flex flex-col scroll-smooth">
          
          {/* Header Navigation */}
          <Header activeSection={activeSection} />

          {/* Main Content Layout */}
          <main className="flex-1 w-full pt-0 main-content">
            <Hero />
            
            <Projects />
            
            <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-amber-100/50 to-transparent no-print"></div>
            
            <Experience />
            
            <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-amber-100/50 to-transparent no-print"></div>
            
            <Contact />
          </main>

          {/* Simple Footer */}
          <footer className="py-6 no-print">
            <p className="text-center text-xs font-semibold text-stone-400 tracking-wide">
              Salma Halimatus Sadiyah &copy; 2026
            </p>
          </footer>

          {/* Floating Back to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-40 p-3 bg-stone-900 hover:bg-amber-900 text-white rounded-full transition-colors shadow-lg active:scale-95 no-print focus:outline-none border border-stone-800"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
