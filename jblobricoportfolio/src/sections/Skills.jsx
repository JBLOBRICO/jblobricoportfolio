// ============================================
// Skills Section
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Globe, Database, Wrench, Sparkles, ClipboardList,
} from 'lucide-react';
import { skillCategories } from '../data/skills';
import SkillBadge from '../components/SkillBadge';

const ICONS = { Code2, Globe, Database, Wrench, Sparkles, ClipboardList };
const COLOR_MAP = {
  accent: { icon: 'var(--accent-primary)', bg: 'var(--accent-primary-muted)' },
  purple: { icon: 'var(--accent-secondary)', bg: 'var(--accent-secondary-muted)' },
  green:  { icon: 'var(--accent-tertiary)', bg: 'var(--accent-tertiary-muted)' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-desc">
            Technologies and tools I have worked with through academic projects, personal projects, and self-directed learning.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => {
            const IconComponent = ICONS[cat.icon];
            const colors = COLOR_MAP[cat.iconColor] || COLOR_MAP.accent;

            return (
              <motion.div
                key={cat.id}
                className="skill-category"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="skill-category-header">
                  <div
                    className="skill-category-icon"
                    style={{ background: colors.bg, color: colors.icon }}
                  >
                    {IconComponent && <IconComponent size={18} aria-hidden="true" />}
                  </div>
                  <h3 className="skill-category-title">{cat.title}</h3>
                </div>
                <div className="skill-category-grid">
                  {cat.skills.map(skill => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="skills-disclaimer"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          Skills reflect tools and technologies used in academic and personal projects. No proficiency levels assigned.
        </motion.p>
      </div>
    </section>
  );
}
