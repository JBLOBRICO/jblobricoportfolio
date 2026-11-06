// ============================================
// About Section
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Lightbulb, Bot } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-desc">
            A fourth-year IT student building practical software solutions.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Bio */}
          <motion.div
            className="about-bio"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="card about-card">
              <h3 className="about-card-title">My Background</h3>
              {personalInfo.bio.trim().split('\n\n').map((para, i) => (
                <p key={i} className="about-para">{para.trim()}</p>
              ))}
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="about-info">
            {/* Education */}
            <motion.div
              className="card about-info-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.1 }}
            >
              <div className="about-info-icon">
                <GraduationCap size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="about-info-label">Education</p>
                <p className="about-info-value">BS Information Technology</p>
                <p className="about-info-sub">Lyceum of Alabang · 4th Year</p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="card about-info-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.15 }}
            >
              <div className="about-info-icon">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="about-info-label">Location</p>
                <p className="about-info-value">{personalInfo.location}</p>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              className="card about-info-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.2 }}
            >
              <div className="about-info-icon" style={{ color: 'var(--accent-secondary)' }}>
                <Lightbulb size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="about-info-label">Development Interests</p>
                <div className="about-interests">
                  {personalInfo.interests.map(interest => (
                    <span key={interest} className="badge">{interest}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AI Workflow */}
            <motion.div
              className="card about-info-card about-ai-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.25 }}
            >
              <div className="about-info-icon" style={{ color: 'var(--accent-tertiary)' }}>
                <Bot size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="about-info-label">AI-Assisted Development</p>
                <p className="about-info-sub">
                  I use AI tools for feature planning, code generation, troubleshooting, and debugging — reviewing and testing generated solutions to deepen my understanding.
                </p>
              </div>
            </motion.div>

            {/* Target Positions */}
            <motion.div
              className="card about-info-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <p className="about-info-label" style={{ marginBottom: '0.5rem' }}>Seeking Positions</p>
                <div className="about-interests">
                  {personalInfo.targetPositions.map(pos => (
                    <span key={pos} className="badge badge-purple">{pos}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
