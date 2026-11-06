// ============================================
// Hero Section
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, FolderOpen } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

const CODE_LINES = [
  { type: 'comment',  text: '// Developer Profile' },
  { type: 'keyword',  text: 'const ', suffix: { type: 'variable', text: 'developer' }, end: ' = {' },
  { type: 'indent',   key: 'name',     val: '"JB Saspa Lobrico"' },
  { type: 'indent',   key: 'role',     val: '"Junior Software Developer"' },
  { type: 'indent',   key: 'study',    val: '"BS Information Technology"' },
  { type: 'indent',   key: 'school',   val: '"Lyceum of Alabang"' },
  { type: 'indent',   key: 'location', val: '"Muntinlupa, PH 🇵🇭"' },
  { type: 'close',    text: '};' },
];

function CodeBlock() {
  return (
    <div className="hero-code-block" aria-hidden="true">
      <div className="hero-code-header">
        <span className="hero-code-dot hero-code-dot--red" />
        <span className="hero-code-dot hero-code-dot--yellow" />
        <span className="hero-code-dot hero-code-dot--green" />
        <span className="hero-code-filename">profile.js</span>
      </div>
      <pre className="hero-code-body">
        {CODE_LINES.map((line, i) => {
          if (line.type === 'comment') {
            return <div key={i}><span className="syn-comment">{line.text}</span></div>;
          }
          if (line.type === 'keyword') {
            return (
              <div key={i}>
                <span className="syn-keyword">{line.text}</span>
                <span className="syn-variable">{line.suffix.text}</span>
                <span className="syn-default"> {`= {`}</span>
              </div>
            );
          }
          if (line.type === 'indent') {
            return (
              <div key={i} style={{ paddingLeft: '1.5rem' }}>
                <span className="syn-variable">{line.key}</span>
                <span className="syn-default">: </span>
                <span className="syn-string">{line.val}</span>
                <span className="syn-default">,</span>
              </div>
            );
          }
          if (line.type === 'close') {
            return <div key={i}><span className="syn-default">{line.text}</span></div>;
          }
          return null;
        })}
      </pre>
    </div>
  );
}

export default function Hero() {
  const scrollToProjects = e => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = e => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = e => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        {/* Left: Text Content */}
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="hero-badge-dot" aria-hidden="true" />
            Available for Opportunities
          </motion.div>

          <motion.h1
            className="hero-name"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            className="hero-titles"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <span className="hero-title-primary">{personalInfo.title}</span>
            <span className="hero-title-separator" aria-hidden="true">·</span>
            <span className="hero-title-secondary">{personalInfo.subtitle}</span>
          </motion.div>

          <motion.p
            className="hero-intro"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {personalInfo.heroIntro}
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a
              href="#projects"
              className="btn btn-primary btn-lg"
              onClick={scrollToProjects}
              id="hero-view-projects"
            >
              <FolderOpen size={18} aria-hidden="true" />
              View My Projects
            </a>
            <a
              href="#contact"
              className="btn btn-secondary btn-lg"
              onClick={scrollToContact}
              id="hero-contact"
            >
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
              id="hero-github"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </motion.div>

          {/* Tech labels */}
          <motion.div
            className="hero-tech-labels"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            aria-label="Technologies"
          >
            {['React', 'PHP', 'VB.NET', 'MySQL', 'JavaScript'].map(t => (
              <span key={t} className="badge">{t}</span>
            ))}
          </motion.div>
        </div>

        {/* Right: Code Block */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        >
          <CodeBlock />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <button
          onClick={scrollToAbout}
          className="hero-scroll-btn"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={18} aria-hidden="true" />
        </button>
      </motion.div>
    </section>
  );
}
