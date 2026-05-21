import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onViewProjectsClick, onContactClick }) {
  const techStack = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Python',
    'REST API Development',
    'Express.js',
    'MongoDB',
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Big Bold Name */}
        <div className="hero-left">
          <h1 className="hero-name">
            <span className="first-name">VISHWA</span>
            <span className="last-name">UMAPATHY</span>
          </h1>
        </div>

        {/* Right Column: Profile details */}
        <div className="hero-right">
          <div className="developer-badge">
            FULL STACK DEVELOPER
          </div>

          <p className="hero-description">
            Building polished digital experiences at the intersection of design and engineering. 
            Currently focused on building optimized web applications.
          </p>

          <div className="tech-tags-container">
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <button 
              className="action-link-btn" 
              onClick={onViewProjectsClick}
            >
              VIEW PROJECTS <ArrowRight className="arrow-icon" size={16} />
            </button>
            <button 
              className="action-primary-btn" 
              onClick={onContactClick}
            >
              GET IN TOUCH
            </button>
          </div>

          <div className="stats-divider"></div>

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-number">3 Plus</span>
              <span className="stat-label">PROJECTS BUILT</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8 Months</span>
              <span className="stat-label">INTERNSHIP EXPERIENCE</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1st Rank</span>
              <span className="stat-label">DEPARTMENT TOPPER (UG)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
