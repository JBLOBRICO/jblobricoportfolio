// ============================================
// App.jsx — Root Application Component
// ============================================

import React from 'react';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

import './styles/global.css';
import './styles/components.css';
import './App.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app" data-theme={theme}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
