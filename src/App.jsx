import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { Mail, ArrowUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Toggle Theme
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Cursor Follower Position Tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Actions: Active Section Spy and Scroll-to-Top Button Visibility
  useEffect(() => {
    const handleScroll = () => {
      // Scroll to Top visibility
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Active Section Spy
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200; // offset for nav height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
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

  const handleNavigateToSection = (sectionName) => {
    setActiveSection(sectionName.toLowerCase());
    const el = document.getElementById(sectionName.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Background Mesh Glow Effects */}
      <div className="glowing-mesh">
        <div className="mesh-circle-1"></div>
        <div className="mesh-circle-2"></div>
      </div>
      
      {/* Interactive Cursor Follower */}
      <div 
        className="cursor-follower"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      ></div>

      {/* Navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Sections */}
      <main className="main-content">
        <Hero 
          onViewProjectsClick={() => handleNavigateToSection('projects')}
          onContactClick={() => handleNavigateToSection('contact')}
        />
        
        <Projects />
        
        <About />
        
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-text">
            © {new Date().getFullYear()} Vishwa Umapathy. Built with React. All rights reserved.
          </div>
          <div className="footer-socials">
            <a href="https://github.com/Vishwa-2057" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub Profile">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/vishwa-umapathy/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn Profile">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:vishwa27032004@gmail.com" className="footer-social-link" aria-label="Send Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Arrow */}
      <button 
        className={`theme-toggle-btn scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 99,
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'all' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
