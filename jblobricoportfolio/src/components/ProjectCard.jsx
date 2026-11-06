// ============================================
// ProjectCard Component
// ============================================

import React from 'react';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';

const CATEGORY_COLORS = {
  academic: 'accent',
  capstone: 'purple',
  personal: 'green',
  shs: 'warning',
};

export default function ProjectCard({ project, onClick }) {
  const colorClass = CATEGORY_COLORS[project.category] || 'accent';

  return (
    <article
      className="project-card"
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick(project)}
    >
      {/* Image / Placeholder */}
      <div className="project-card-image-placeholder" aria-hidden="true">
        <FolderOpen size={36} style={{ opacity: 0.3 }} />
      </div>

      {/* Body */}
      <div className="project-card-body">
        <span className={`project-card-category text-${colorClass}`}>
          {project.categoryLabel}
        </span>
        {project.institution && (
          <span className="project-card-institution">{project.institution}</span>
        )}
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {/* Tech Stack */}
        <div className="tag-list" aria-label="Technologies used">
          {project.technologies.map(tech => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="project-card-footer">
        <span className="project-card-cta">View Details →</span>
        <div className="project-card-links" onClick={e => e.stopPropagation()}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={14} aria-hidden="true" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
