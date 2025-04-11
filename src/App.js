import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-container">
      <Hero /> 
      <main className="portfolio-main">
        <Skills />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;