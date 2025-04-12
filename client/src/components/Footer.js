import React from 'react';
import './ComponentStyles.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="portfolio-footer">
      <p>&copy; {currentYear} Hemlata Gautam. All rights reserved.</p>
    </footer>
  );
}

export default Footer;