import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = ['Home', 'Projects', 'About', 'Contact'];

  const handleNavClick = (section) => {
    setActiveSection(section.toLowerCase());
    setIsOpen(false);
    
    // Smooth scroll to section
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('Home'); }}>
          PORTFOLIO / <span className="year">2026</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="active-dot"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="nav-mobile-controls">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`mobile-nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
