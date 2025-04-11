import React from 'react';
import './ComponentStyles.css';

function Resume() {
  const resumePath = ''; 
  

  return (
    <section id="resume" className="portfolio-section">
      <h2>Resume</h2>
      <p>View or download my detailed professional background:</p>
      <a
        href={resumePath}
        className="button resume-button"
        target="_blank" 
        rel="noopener noreferrer" // Security best practice
        download=""
      >
        View My Resume (PDF)
      </a>
    </section>
  );
}

export default Resume;