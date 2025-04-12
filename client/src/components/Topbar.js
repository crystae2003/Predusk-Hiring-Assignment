import React, { useState, useEffect } from 'react';
import './Topbar.css';

const Topbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY;
      
      // Check for dark theme transition point (About section start)
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        setIsDarkMode(scrollPosition >= aboutTop - 70);
      }
      
      // Track active section for navigation
      const sections = ['user', 'about', 'skills', 'resume', 'chatbot'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const position = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= position - 200 && 
            scrollPosition < position + height - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    setIsScrolling(true);
    setActiveSection(sectionId);
    
    // If it's the chatbot section, also open the chatbot
    if (sectionId === 'chatbot') {
      const chatButton = document.querySelector('.chat-button');
      if (chatButton && !document.querySelector('.chatbot-container.open')) {
        chatButton.click();
      }
    }else{
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
        
    }
    setTimeout(() => setIsScrolling(false), 1000);

    
  };

  return (
    <div className={`topbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="topbar-container">
        <div className="logo">HG</div>
        <nav className="topbar-nav">
          <ul>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <button onClick={() => scrollToSection('about')}>About Me</button>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <button onClick={() => scrollToSection('skills')}>Skills</button>
            </li>
            <li className={activeSection === 'resume' ? 'active' : ''}>
              <button onClick={() => scrollToSection('resume')}>Resume</button>
            </li>
            <li className={activeSection === 'chatbot' ? 'active' : ''}>
              <button onClick={() => scrollToSection('chatbot')}>Chatbot</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;