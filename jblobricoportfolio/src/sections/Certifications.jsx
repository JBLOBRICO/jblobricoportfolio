// ============================================
// Certifications Section
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Award, BookOpen } from 'lucide-react';
import { certifications } from '../data/certifications';

const ICONS = { Monitor, Award, BookOpen };
const COLOR_STYLES = {
  accent: {
    icon: 'var(--accent-primary)',
    bg: 'linear-gradient(135deg, var(--accent-primary), #60d8f8)',
  },
  purple: {
    icon: 'var(--accent-secondary)',
    bg: 'linear-gradient(135deg, var(--accent-secondary), #a78bfa)',
  },
  green: {
    icon: 'var(--accent-tertiary)',
    bg: 'linear-gradient(135deg, var(--accent-tertiary), #6ee7b7)',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Credentials & Recognition</h2>
          <p className="section-desc">
            Certifications and assessments completed during my academic journey.
          </p>
        </motion.div>

        <div className="certs-grid">
          {certifications.map((cert, index) => {
            const IconComponent = ICONS[cert.icon];
            const style = COLOR_STYLES[cert.color] || COLOR_STYLES.accent;

            return (
              <motion.div
                key={cert.id}
                className="cert-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="cert-icon"
                  style={{ background: style.bg }}
                  aria-hidden="true"
                >
                  {IconComponent && <IconComponent size={22} />}
                </div>
                <div className="cert-body">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-org">{cert.fullOrganization}</p>
                  <span className="cert-level">{cert.level}</span>
                  <p className="cert-desc">{cert.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
