import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Pharmacy Management System',
      year: '2026',
      category: 'MERN FULL STACK',
      description: 'End-to-end pharmacy management platform to manage prescriptions, alerts, and inventory effectively.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'React'],
      /*link: 'https://github.com' */
    },
    {
      id: 2,
      title: 'MovieWatch',
      year: '2026',
      category: 'OPEN SOURCE',
      description: 'An open-source movie management web application designed to help users create and maintain a personal watchlist of movies they are interested in watching.',
      tags: ['React', 'MongoDB Atlas', 'Tailwind CSS'],
      link: 'https://github.com/Vishwa-2057/MovieWatchlist/'
    },
    {
      id: 3,
      title: 'Geolocation-based Complaint Web App',
      year: '2025',
      category: 'HACKATHON',
      description: 'Developed a complaint management platform with integrated JavaScript Geolocation API support to capture users’ real-time latitude and longitude data for accurate complaint tracking and reporting.',
      tags: ['JavaScript', 'WebRTC', 'Canvas'],
      link: 'https://github.com'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-layout-container">
        {/* Left Column: Big Section Typography */}
        <div className="projects-left-pane">
          <div className="selected-works-badge">
            SELECTED WORKS
          </div>
          <h2 className="projects-main-title">
            <span>THINGS</span>
            <span>I'VE</span>
            <span>BUILT.</span>
          </h2>
          <p className="projects-side-desc">
            A small slice of projects shipped, broken, and re-shipped. Most live on GitHub.
          </p>
        </div>

        {/* Right Column: Beautiful Vertical Project List */}
        <div className="projects-right-pane">
          <div className="project-list">
            {projectsData.map((project) => (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={project.id} 
                className="project-list-item-link"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <div className="project-list-item">
                  <div className="project-item-header">
                    <h3 className="project-item-title">{project.title}</h3>
                    <span className="project-item-year">{project.year}</span>
                  </div>
                  
                  <div className="project-item-category">
                    {project.category}
                  </div>
                  
                  <p className="project-item-description">
                    {project.description}
                  </p>
                  
                  <div className="project-item-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-item-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
