// ============================================
// Navbar Component
// ============================================

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/personalInfo';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(l => l.href.slice(1));
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <nav className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={e => handleNavClick(e, '#home')}
            aria-label="JB Lobrico — Home"
          >
            <span className="navbar-logo-icon" aria-hidden="true">
              <Terminal size={16} />
            </span>
            <span className="navbar-logo-text">
              {personalInfo.displayName}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="navbar-links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar-link${activeSection === link.href.slice(1) ? ' navbar-link--active' : ''}`}
                  onClick={e => handleNavClick(e, link.href)}
                  aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="navbar-controls">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              className="navbar-hamburger"
              onClick={() => setIsMenuOpen(o => !o)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${isMenuOpen ? ' mobile-menu--open' : ''}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        <ul className="mobile-menu-links" role="list">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ '--i': i }}>
              <a
                href={link.href}
                className={`mobile-menu-link${activeSection === link.href.slice(1) ? ' mobile-menu-link--active' : ''}`}
                onClick={e => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </>
  );
}
