// ============================================
// SkillBadge Component
// ============================================

import React from 'react';

export default function SkillBadge({ name }) {
  return (
    <span className="skill-badge" title={name}>
      {name}
    </span>
  );
}
