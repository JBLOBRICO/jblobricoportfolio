// ============================================
// Button Component
// ============================================

import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = '',
  as = 'button',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = ['btn', `btn-${variant}`, size ? `btn-${size}` : '', className]
    .filter(Boolean)
    .join(' ');

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
