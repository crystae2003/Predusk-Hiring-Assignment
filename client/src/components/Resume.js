import React from 'react';
import './Resume.css';
import { FaFileDownload } from 'react-icons/fa';

function Resume() {
  const resumePath = '/Resume/HemlataGautamResume.pdf'; 

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-heading">Resume</h2>
        
        <div className="resume-content">
          <div className="resume-text">
            <p>Download my resume to learn more about my professional experience, technical skills, and achievements.</p>
          </div>
          
          <a
            href={resumePath}
            className="resume-download-button"
            target="_blank"
            rel="noopener noreferrer"
            download="HemlataGautam-Resume.pdf"
          >
            <FaFileDownload className="download-icon" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;