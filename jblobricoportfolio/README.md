# JB Lobrico — Developer Portfolio

A personal developer portfolio website for **JB Saspa Lobrico**, a fourth-year BS Information Technology student at Lyceum of Alabang.

Built with **React + Vite** and designed for Vercel deployment.

---

## 🌐 Live Preview

> Deploy to Vercel using the instructions below.

---

## ✨ Features

- Dark / Light theme toggle (persisted in localStorage)
- Responsive layout (mobile, tablet, desktop)
- Animated hero section with code block visual
- Skills section grouped by category (no fake proficiency levels)
- Project showcase with filter tabs (All, Academic, Capstone, Personal, SHS)
- Project detail modal with features list
- Education timeline (College + SHS)
- Certifications section
- Contact section with mailto form and copy-email functionality
- Resume download button
- Back-to-top button
- SEO meta tags and Open Graph

---

## 🛠 Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite (JavaScript) |
| Styling | Vanilla CSS with CSS Variables |
| Icons | Lucide React |
| Animations | Framer Motion (minimal use) |
| Deployment | Vercel (via GitHub) |

---

## 📁 Project Structure

```
jblobricoportfolio/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf          ← Replace with your actual resume
│   └── og-image.png        ← Add for social previews
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── SkillBadge.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   ├── certifications.js   ← Edit certifications here
│   │   ├── personalInfo.js     ← Edit personal info here
│   │   ├── projects.js         ← Edit/add projects here
│   │   └── skills.js           ← Edit skills here
│   ├── hooks/
│   │   └── useTheme.js
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── styles/
│   │   ├── components.css
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
├── .gitignore
├── .env.example
└── package.json
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18 or later
- npm

### Installation

```bash
# Navigate to the project directory
cd jblobricoportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at **http://localhost:5173**

---

## 🏗 Production Build

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The production build outputs to the `dist/` directory.

---

## ✏️ How to Update Content

### Personal Information
Edit [`src/data/personalInfo.js`](./src/data/personalInfo.js):
- Name, title, email, phone, GitHub, bio, interests

### Projects
Edit [`src/data/projects.js`](./src/data/projects.js):
- Add new project objects to the `projects` array
- Each project has: `id`, `title`, `category`, `description`, `technologies`, `features`, `githubUrl`, `liveUrl`, `image`, `status`, `note`

### Skills
Edit [`src/data/skills.js`](./src/data/skills.js):
- Add or remove skills from each category array

### Certifications
Edit [`src/data/certifications.js`](./src/data/certifications.js):
- Add or update certification objects

### Resume
Replace `public/resume.pdf` with your actual resume PDF file.

### Profile / Images
Add project screenshots to `public/images/` and update the `image` field in `src/data/projects.js`.

---

## 🐙 GitHub Setup

> **Do not push without explicit approval.**

```bash
# Initialize (already done)
git init

# Stage all files
git add .

# Initial commit
git commit -m "feat: JB Lobrico developer portfolio — initial release"

# Add your GitHub remote
git remote add origin https://github.com/JBLOBRICO/jblobricoportfolio.git

# Push to main branch
git push -u origin main
```

---

## ▲ Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"**.
4. Import your GitHub repository.
5. Configure the build settings:

| Setting | Value |
|---------|-------|
| Framework Preset | **Vite** |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

6. Click **Deploy**.
7. Vercel will automatically deploy on every push to `main`.

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel

# Follow prompts, then deploy to production
vercel --prod
```

### SPA Routing
The included `vercel.json` configures SPA routing so all routes are served by `index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 🔐 Environment Variables

No environment variables are required for the current build.

If you add an email service (e.g., EmailJS) in the future:
1. Copy `.env.example` to `.env.local`
2. Fill in your API keys
3. Never commit `.env.local` — it is already in `.gitignore`
4. Add the variables in Vercel's project settings under **Environment Variables**

---

## ✅ Production Checklist

- [x] `npm run build` exits with code 0
- [x] No localhost URLs in source code
- [x] No secrets in source code
- [x] `vercel.json` SPA fallback configured
- [x] `.gitignore` excludes `node_modules/` and `dist/`
- [x] All navigation links work
- [x] Theme toggle persists on reload
- [x] Project filter works
- [x] Project modal opens and closes
- [x] Contact mailto links work
- [x] Mobile layout is responsive
- [ ] Replace `public/resume.pdf` with actual resume
- [ ] Push to GitHub (pending approval)
- [ ] Deploy to Vercel (pending approval)

---

## 📄 License

Personal portfolio — all rights reserved. © JB Saspa Lobrico
