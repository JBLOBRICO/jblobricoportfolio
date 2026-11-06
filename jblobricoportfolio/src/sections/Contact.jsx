// ============================================
// Contact Section
// ============================================

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function ContactInfoCard({ icon: Icon, label, value, href, copyable }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="contact-info-card">
      <div className="contact-icon-wrap">
        <Icon size={18} aria-hidden="true" />
      </div>
      <div className="contact-info-body">
        <p className="contact-info-label">{label}</p>
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="contact-info-value contact-info-link"
          >
            {value}
            {href.startsWith('http') && <ExternalLink size={12} style={{ marginLeft: 4 }} aria-hidden="true" />}
          </a>
        ) : (
          <p className="contact-info-value">{value}</p>
        )}
      </div>
      {copyable && (
        <button
          className="btn btn-ghost btn-sm contact-copy-btn"
          onClick={handleCopy}
          aria-label={copied ? 'Copied!' : `Copy ${label}`}
          title={copied ? 'Copied!' : `Copy ${label}`}
        >
          {copied ? (
            <Check size={14} style={{ color: 'var(--accent-tertiary)' }} aria-hidden="true" />
          ) : (
            <Copy size={14} aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email.';
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // mailto fallback — opens email client with pre-filled content
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            I'm open to internship opportunities and junior developer positions.
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="contact-info-heading">Contact Information</h3>
            <div className="contact-info-list">
              <ContactInfoCard
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
                copyable
              />
              <ContactInfoCard
                icon={Phone}
                label="Phone"
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                copyable
              />
              <ContactInfoCard
                icon={Github}
                label="GitHub"
                value={`github.com/${personalInfo.githubUsername}`}
                href={personalInfo.github}
              />
              <ContactInfoCard
                icon={MapPin}
                label="Location"
                value={personalInfo.location}
              />
            </div>

            <div className="contact-cta-row">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-primary"
                id="contact-email-btn"
              >
                <Mail size={16} aria-hidden="true" />
                Email Me
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="contact-github-btn"
              >
                <Github size={16} aria-hidden="true" />
                GitHub Profile
              </a>
            </div>

            {/* Resume download */}
            <div className="contact-resume">
              <a
                href={personalInfo.resumePath}
                download
                className="btn btn-ghost"
                id="contact-resume-btn"
              >
                Download Resume (PDF)
              </a>
              <p className="contact-resume-note">
                * Replace <code>/public/resume.pdf</code> with your actual resume file.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrap"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
          >
            <div className="card contact-form-card">
              <h3 className="contact-form-heading">Send a Message</h3>
              <p className="contact-form-note">
                This form will open your email client with a pre-filled message.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
                aria-label="Contact form"
              >
                <div className="contact-form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={`form-input${errors.name ? ' form-input--error' : ''}`}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error" role="alert">{errors.name}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className={`form-input${errors.email ? ' form-input--error' : ''}`}
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error" role="alert">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className="form-input"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`form-textarea${errors.message ? ' form-input--error' : ''}`}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  id="contact-submit-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={16} aria-hidden="true" />
                  Send via Email Client
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
