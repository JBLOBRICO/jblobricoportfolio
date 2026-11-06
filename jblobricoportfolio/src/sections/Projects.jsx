// ============================================
// Projects Section
// ============================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">Project Experience</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-desc">
            A collection of academic, capstone, and personal software development projects.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="projects-filter"
          role="tablist"
          aria-label="Project category filter"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projectCategories.map(cat => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`filter-btn${activeCategory === cat.id ? ' filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              id={`filter-${cat.id}`}
            >
              {cat.label}
              <span className="filter-count">
                {cat.id === 'all'
                  ? projects.length
                  : projects.filter(p => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="projects-grid" role="tabpanel">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.06 }}
              >
                <ProjectCard
                  project={project}
                  onClick={setSelectedProject}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
