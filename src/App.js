import React from 'react';
import './App.css';
import User from './components/User';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-container">
      <User />
      
      <main className="portfolio-main">
        <About />
        <Skills />  
        <Resume />
        <Footer />
      </main>
    </div>
  );
}

export default App;