import React from 'react';
import './Hero.css'; 
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Hero() {
  
  const profileImageUrl = '/images/profile.jpg';
  const name = 'Hemlata Gautam';
  
  const aboutMe = (
    <>
      B.Tech in Computer Science and Engineering<br />
      Indian Institute of Technology Ropar
    </>
  );
  
  const linkedInUrl = 'https://linkedin.com/in/hemlata-gautam';
  const githubUrl = 'https://github.com/crystae2003';
  const emailAddress = '2022csb1084@iitrpr.ac.in';
  // -------- END OF DETAILS ----------

  return (
    
    <section id="hero" className="hero-section hero-background-effect">
      <div className="hero-content-wrapper"> 
        
        <div className="hero-image-container">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="hero-profile-img" 
          />
        </div>

        
        <div className="hero-text-container">
          <h1 className="hero-name">{name}</h1>
        
          <p className="hero-about-text">{aboutMe}</p>
        </div>

        
        <div className="hero-contact-links-container">
          <a
            href={linkedInUrl}
            className="hero-contact-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="hero-contact-icon" /> <span>LinkedIn</span>
          </a>
          <a
            href={githubUrl}
            className="hero-contact-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="hero-contact-icon" /> <span>GitHub</span>
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="hero-contact-link"
            aria-label="Send Email"
          >
            <FaEnvelope className="hero-contact-icon" /> <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
