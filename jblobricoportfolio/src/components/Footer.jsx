// ============================================
// Footer Component
// ============================================

import React, { useState, useEffect } from 'react';
import { Github, Mail, ArrowUp, Terminal } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          {/* Branding */}
          <div className="footer-brand">
            <span className="footer-logo">
              <Terminal size={16} aria-hidden="true" />
              {personalInfo.displayName}
            </span>
            <p className="footer-tagline">
              {personalInfo.title} · {personalInfo.subtitle}
            </p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub profile"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-link"
              aria-label="Send email"
            >
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="footer-copy">
            © {year} {personalInfo.displayName}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top */}
      {showTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </button>
      )}
    </>
  );
}
