// ============================================
// ProjectModal Component
// ============================================

import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={e => e.target === e.currentTarget && onClose()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          className="modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header */}
          <div className="modal-header">
            <div>
              <span className="project-card-category" style={{ display: 'block', marginBottom: '0.375rem' }}>
                {project.categoryLabel}
                {project.institution && ` · ${project.institution}`}
              </span>
              <h2 id="modal-title" className="modal-title">
                {project.title}
              </h2>
            </div>
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Description */}
            <p className="modal-description">{project.description}</p>

            {/* Note / Disclaimer */}
            {project.note && (
              <div className="modal-note">
                <Info size={16} aria-hidden="true" />
                <span>{project.note}</span>
              </div>
            )}

            {/* Tech Stack */}
            <div className="modal-section">
              <h3 className="modal-section-title">Technologies Used</h3>
              <div className="tag-list">
                {project.technologies.map(tech => (
                  <span key={tech} className="badge badge-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="modal-section">
              <h3 className="modal-section-title">Key Features</h3>
              <ul className="modal-features">
                {project.features.map((f, i) => (
                  <li key={i} className="modal-feature-item">
                    <CheckCircle size={15} className="modal-feature-icon" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status */}
            <div className="modal-status">
              <span className="badge badge-green">{project.status}</span>
            </div>

            {/* Actions */}
            <div className="modal-actions">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Github size={16} aria-hidden="true" />
                  View on GitHub
                </a>
              ) : (
                <span className="modal-no-link">
                  GitHub link not available
                </span>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live Demo
                </a>
              )}
              <button className="btn btn-ghost" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
