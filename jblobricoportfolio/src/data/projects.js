// ============================================
// PROJECTS DATA
// JB Lobrico — Developer Portfolio
// Update this file to add, edit, or remove projects.
// ============================================

export const projects = [
  // ── ACADEMIC PROJECTS (College) ──────────────────────────────────
  {
    id: 1,
    title: 'Enrollment Management System with Student Portal Integration',
    category: 'academic',
    categoryLabel: 'Academic Project',
    institution: 'Lyceum of Alabang — BSIT',
    description:
      'An academic project focused on enrollment management and student portal integration. Combines a VB.NET desktop application with a PHP backend and centralized MySQL database.',
    technologies: ['VB.NET', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Desktop application functionality using VB.NET',
      'PHP backend processing for web portal integration',
      'Centralized MySQL database management',
      'Frontend integration using HTML, CSS, and JavaScript',
    ],
    githubUrl: null,
    liveUrl: null,
    image: null,
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Point of Sale (POS) System',
    category: 'academic',
    categoryLabel: 'Academic Project',
    institution: 'Lyceum of Alabang — BSIT',
    description:
      'An academic project focused on sales transaction management and database operations. Initially developed using MS Access and explored migration to MySQL.',
    technologies: ['VB.NET', 'MS Access', 'MySQL'],
    features: [
      'Sales transaction management',
      'Database operations and record keeping',
      'Initially developed using MS Access',
      'Explored migration to MySQL',
    ],
    githubUrl: null,
    liveUrl: null,
    image: null,
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Historia — Web-Based Game',
    category: 'academic',
    categoryLabel: 'Academic Project',
    institution: 'Lyceum of Alabang — BSIT',
    description:
      'A web-based interactive game developed using modern web technologies including React, Next.js, and Prisma ORM with a Neon PostgreSQL database, deployed on Vercel.',
    technologies: ['React.js', 'Next.js', 'Prisma ORM', 'Neon PostgreSQL', 'Vercel'],
    features: [
      'React and Next.js frontend development',
      'Prisma ORM integration for database access',
      'Neon PostgreSQL cloud database',
      'Deployed on Vercel',
    ],
    githubUrl: null,
    liveUrl: null,
    image: null,
    status: 'Completed',
  },

  // ── CAPSTONE PROJECT ─────────────────────────────────────────────
  {
    id: 4,
    title: 'KATIPUNAN: Multiplayer Survival Simulation Game',
    category: 'capstone',
    categoryLabel: 'BSIT Capstone Project',
    institution: 'Lyceum of Alabang — BSIT',
    description:
      'A multiplayer survival simulation game inspired by Philippine history, focusing on historical warfare and survival gameplay. Developed using Roblox Studio as the BSIT capstone project, with AI-assisted Lua scripting throughout development.',
    technologies: ['Roblox Studio', 'Lua', 'AI-Assisted Development'],
    features: [
      'Multiplayer survival mechanics',
      'Philippine history-inspired gameplay',
      'Gameplay system implementation and balancing',
      'Debugging and optimization',
      'Functionality testing',
      'AI-assisted Lua scripting',
    ],
    githubUrl: null,
    liveUrl: null,
    image: null,
    status: 'Completed',
    note: 'AI tools were used to assist with Lua coding. Developed as BSIT capstone project.',
  },

  // ── PERSONAL PROJECTS ────────────────────────────────────────────
  {
    id: 5,
    title: 'Scanner-Based Loan Management System',
    category: 'personal',
    categoryLabel: 'Personal Project',
    institution: null,
    description:
      'A loan management system designed to improve borrower record tracking and payment management through QR code scanning. Features role-based access for Owner, Admin, and Staff.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'QR-based borrower identification',
      'Borrower information retrieval via scanning',
      'Payment recording through QR scanning',
      'Role-based access control (Owner, Admin, Staff)',
    ],
    githubUrl: null,
    liveUrl: null,
    image: null,
    status: 'Completed',
    note: 'Previously deployed on InfinityFree. No longer publicly available.',
  },

  // ── SHS RESEARCH PROJECT ─────────────────────────────────────────
  {
    id: 6,
    title: 'Bus Ticketing System',
    category: 'shs',
    categoryLabel: 'SHS Research Project',
    institution: 'Lyceum of Alabang — Grade 12',
    description:
      'A desktop-based bus ticketing system developed as a Senior High School Grade 12 group research project. Contributed to the development and evaluation of the system as part of the group.',
    technologies: ['VB.NET', 'MS Access'],
    features: [
      'Ticket booking management',
      'Passenger information management',
      'Payment processing',
      'Ticket printing',
      'Database management using MS Access',
    ],
    githubUrl: null,
    liveUrl: null,
    image: null,
    status: 'Completed',
    note: 'Senior High School Grade 12 group research project. Contributed as part of the development group.',
  },
];

// Filter categories for the Projects section
export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'academic', label: 'Academic' },
  { id: 'capstone', label: 'Capstone' },
  { id: 'personal', label: 'Personal' },
  { id: 'shs', label: 'SHS Project' },
];
