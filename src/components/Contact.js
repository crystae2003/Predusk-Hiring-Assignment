import React from 'react';
import './ComponentStyles.css';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const linkedInUrl = 'https://linkedin.com/in/yourprofile';
  const githubUrl = 'https://github.com/yourusername';
  const emailAddress = 'your.email@example.com';
  

  return (
    <section id="contact" className="portfolio-section">
      <h2>Get In Touch</h2>
      <div className="contact-buttons">
        <a
          href={linkedInUrl}
          className="button contact-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          LinkedIn
        </a>
        <a
          href={githubUrl}
          className="button contact-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          GitHub
        </a>
        <a
          href={`mailto:${emailAddress}`}
          className="button contact-button email"
          aria-label="Send Email"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;