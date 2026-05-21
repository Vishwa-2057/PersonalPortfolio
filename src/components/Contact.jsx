import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          Are you an HR manager looking for a passionate developer? Or maybe a fellow coder interested in collaborating on an open-source project?
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Connections */}
        <div className="contact-left">
          <div className="contact-callout">
            <h3 className="contact-subtitle">Let's build something extraordinary together.</h3>
            <p className="contact-text">
              I am currently a fresher looking for exciting opportunities to kickstart my career. If you have a project in mind or just want to say hi, feel free to reach out through any of the channels below!
            </p>
          </div>

          <div className="contact-channels">
            <a href="mailto:vishwa27032004@gmail.com" className="channel-card">
              <div className="channel-icon-wrapper">
                <Mail size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Email Me</span>
                <span className="channel-value">vishwa27032004@gmail.com</span>
              </div>
            </a>

            <a href="https://github.com/Vishwa-2057" target="_blank" rel="noopener noreferrer" className="channel-card">
              <div className="channel-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="channel-details">
                <span className="channel-label">Github</span>
                <span className="channel-value">github.com/Vishwa-2057</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/vishwa-umapathy" target="_blank" rel="noopener noreferrer" className="channel-card">
              <div className="channel-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="channel-details">
                <span className="channel-label">LinkedIn</span>
                <span className="channel-value">www.linkedin.com/in/vishwa-umapathy</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Contact Form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="Hi Vishwa, I would love to collaborate on a new project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={status === 'sending'}
              />
            </div>

            {status === 'success' ? (
              <div className="success-banner">
                <CheckCircle2 size={20} className="success-icon" />
                <span>Message sent successfully! I will get back to you shortly.</span>
              </div>
            ) : (
              <button
                type="submit"
                className={`submit-btn ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="btn-send-icon" />
                  </>
                )}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
