import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import User from './components/User';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="portfolio-container">
      <Topbar />
      <User />
      
      <main className="portfolio-main">
        <About />
        <Skills />  
        <Resume />
        <div id="chatbot">
          <Chatbot />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;