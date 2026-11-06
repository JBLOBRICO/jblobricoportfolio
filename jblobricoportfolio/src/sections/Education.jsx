// ============================================
// Education Section
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Technology',
    school: 'Lyceum of Alabang',
    level: 'College',
    year: '4th Year — Present',
    description:
      'Pursuing a Bachelor of Science in Information Technology with a focus on software development, database systems, and web technologies. Completed multiple academic projects involving desktop applications, web systems, and game development.',
    highlights: [
      'Desktop Application Development',
      'Web Development',
      'Database Integration',
      'Capstone Project: KATIPUNAN — Multiplayer Survival Simulation Game',
    ],
  },
  {
    id: 2,
    degree: 'Senior High School — STEM / TVL / ICT Track',
    school: 'Lyceum of Alabang',
    level: 'Senior High School',
    year: 'Grade 11–12 — Completed',
    description:
      'Completed Senior High School at Lyceum of Alabang. Developed a Bus Ticketing System as a Grade 12 group research project using VB.NET and MS Access.',
    highlights: [
      'Grade 12 Group Research Project: Bus Ticketing System',
      'VB.NET & MS Access Development',
      'TESDA NC II in Computer Systems Servicing',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-desc">
            My educational journey at Lyceum of Alabang.
          </p>
        </motion.div>

        <div className="education-timeline">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="education-dot" aria-hidden="true">
                <GraduationCap size={18} />
              </div>

              <div className="education-content card">
                <div className="education-header">
                  <div>
                    <span className="education-level badge badge-accent">
                      {edu.level}
                    </span>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-school">
                      <BookOpen size={14} aria-hidden="true" />
                      {edu.school}
                    </p>
                  </div>
                  <div className="education-year">
                    <Calendar size={14} aria-hidden="true" />
                    {edu.year}
                  </div>
                </div>

                <p className="education-desc">{edu.description}</p>

                <ul className="education-highlights">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="education-highlight-item">
                      <span className="education-highlight-dot" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
