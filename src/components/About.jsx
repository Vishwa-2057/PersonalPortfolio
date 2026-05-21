import React from 'react';
import { Calendar, Briefcase, Award } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      role: 'MCA',
      company: 'MEASI Institute of Information Technology, Chennai',
      period: 'Aug 2024 - Present',
      description: 'Dwelt deep into advanced computer science concepts such as DSA, Advanced Machine Learning and Computer Vision. Engaged in projects that involved building scalable applications and optimizing performance.'
    },
    {
      role: 'Software and Data Intern',
      company: 'SMAART HEALTHCARE',
      period: 'Aug 2025 - Apr 2026',
      description: ' Developed and maintained web applications using React, Node.js, Express, and MongoDB. Collaborated on real world software systems and data workflows'
    },
    {
      role: 'B.Sc. IT',
      company: 'The New College, Chennai',
      period: 'Aug 2021 - Apr 2024',
      description: 'Graduated with First Class Honours. Achieved Rank 1 in my batch in the department of Information Technology.'
    }
  ];

  const skillCategories = [
    { name: 'Languages', skills: ['JavaScript', 'Python', 'SQL'] },
    { name: 'Frontend', skills: ['React / Next.js', 'Tailwind CSS', 'HTML5 & CSS3', 'WebSockets', 'Bootstrap'] },
    { name: 'Backend, Databases & DevOps', skills: ['Node.js / Express', 'EC2 / AWS', 'CI/CD','MongoDB Atlas', 'MySQL'] }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          A brief overview of my professional journey, skills, and values.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: Biography & Skills */}
        <div className="about-left">
          <div className="bio-block">
            <h3 className="about-subtitle">My Philosophy</h3>
            <p className="bio-text">
              I believe that software should not only be highly efficient and scalable, but also beautifully engineered and satisfying to interact with. 
              Software development is a creative craft, and I take pride in writing code that is both functional and elegant.
            </p>
            <p className="bio-text">
              With over 8 months of internship experience as a Software and Data Intern and two years of project experience, I enjoy building genuine products that solve real-world complex user problems. 
              Whether it's identifying the best library or optimizing performance, I treat every line of code with dedication.
            </p>
          </div>

          <div className="skills-block">
            <h3 className="about-subtitle">Core Expertise</h3>
            <div className="skills-container">
              {skillCategories.map((cat) => (
                <div key={cat.name} className="skill-cat-card">
                  <h4 className="skill-cat-title">{cat.name}</h4>
                  <div className="skill-cat-tags">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Work Experience Timeline */}
        <div className="about-right">
          <h3 className="about-subtitle">Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-inner"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-role">{exp.role}</span>
                    <span className="timeline-period">
                      <Calendar size={14} className="timeline-icon" /> {exp.period}
                    </span>
                  </div>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
