import React from 'react';
import './User.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function User() { 
  const profileImageUrl = '/images/profile.jpg';
  const name = 'Hemlata Gautam';

  const tagline = (
    <>
      B.Tech in Computer Science and Engineering<br />
      Indian Institute of Technology Ropar
    </>
  );
  const linkedInUrl = 'https://linkedin.com/in/hemlata-gautam';
  const githubUrl = 'https://github.com/crystae2003';
  const emailAddress = '2022csb1084@iitrpr.ac.in';
  
  return (
    <section id="user" className="user-section user-background-effect"> 
      <div className="user-content-wrapper"> 
        <div className="user-image-container">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="user-profile-img" 
          />
        </div>
        <div className="user-text-container"> 
          <h1 className="user-name">{name}</h1> 
          <p className="user-tagline">{tagline}</p>
        </div>
        <div className="user-contact-links-container"> 
           <a href={linkedInUrl} className="user-contact-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
             <FaLinkedin className="user-contact-icon" /> <span>LinkedIn</span>
           </a>
           <a href={githubUrl} className="user-contact-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"> 
             <FaGithub className="user-contact-icon" /> <span>GitHub</span> 
           </a>
           <a href={`mailto:${emailAddress}`} className="user-contact-link" aria-label="Send Email"> 
             <FaEnvelope className="user-contact-icon" /> <span>Email</span> 
           </a>
        </div>
      </div>
    </section>
  );
}

export default User; // Renamed export