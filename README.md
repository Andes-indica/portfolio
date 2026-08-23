# Production Portfolio — Prajwal G V (`Andes-indica`)

A modern, production-ready, authentic developer portfolio website built for **Prajwal G V**, a 3rd-year Computer Science undergraduate with a minor in Cybersecurity at **IIIT Dharwad**, highlighting full-stack engineering, DevOps pipelines, container security, low-level systems, and open-source contributions to **Orbit** (`Noveum/orbit`).

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **next-themes**.

---

## 🌟 Highlights & Features

- **Verified Data Only**: Strictly grounded in public GitHub repositories, PRs, and academic history—no inflated claims or fake percentage meters.
- **Dedicated Open-Source Showcase**: Detailed breakdown of pull requests to [Noveum/orbit](https://github.com/Noveum/orbit) (CI dated release automation, Lychee link-check hardening, canonical documentation deduplication), [Phantom](https://github.com/phantomsoldierking/phantom), and [Trivy DevSecOps](https://github.com/phantomsoldierking/trivy-cicd-github-repo).
- **Expandable Project Case Studies**: Interactive deep-dive modal covering Problem, Approach, Architecture, Key Features, Technical Challenges & Solutions, and Outcomes for top projects (PMS-OMS, Market Risk Engine, Container Security Pipeline).
- **Sophisticated Dark Theme**: Elegant dark palette (default) with clean light mode toggle, subtle ambient glow, and high-contrast typography.
- **Single Source of Truth**: All content is cleanly isolated in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts) for effortless updates without touching UI markup.
- **Accessibility & Motion Compliance**: ARIA dialogs, semantic landmarks, and full support for `prefers-reduced-motion`.
- **Production-Ready & Vercel Optimized**: Complete SEO metadata, Open Graph preview, JSON-LD Schema.org structured data, sitemap generator, and robots.txt.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Fonts**: Inter & JetBrains Mono (via `next/font/google`)

---

## 📁 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        # Serverless API endpoint for contact form
│   │   ├── globals.css             # Dark/Light theme variables & animations
│   │   ├── icon.svg                # Dynamic SVG favicon
│   │   ├── layout.tsx              # Root layout, fonts, SEO, JSON-LD schema
│   │   ├── page.tsx                # Aggregated landing page
│   │   ├── robots.ts               # Automated robots.txt generator
│   │   └── sitemap.ts              # Automated sitemap.xml generator
│   ├── components/
│   │   ├── About.tsx               # CS & Cybersecurity academic narrative
│   │   ├── Contact.tsx             # Interactive contact form & socials
│   │   ├── Footer.tsx              # Semantic footer with status
│   │   ├── GithubActivity.tsx      # Curated repository footprint & stats
│   │   ├── Hero.tsx                # Introduction headline & quick stats
│   │   ├── Navbar.tsx              # Sticky header with mobile drawer & theme toggle
│   │   ├── OpenSource.tsx          # Dedicated Orbit & open-source showcase
│   │   ├── ProjectModal.tsx        # In-depth case study modal dialog
│   │   ├── Projects.tsx            # Filterable project grid
│   │   ├── Skills.tsx              # Categorized technical capabilities
│   │   └── ThemeProvider.tsx       # Next-themes client provider
│   ├── data/
│   │   └── portfolioData.ts        # Central typed repository & personal data
│   └── types/
│       └── portfolio.ts            # Strict TypeScript interfaces
├── public/
│   └── resume-placeholder.txt      # Instructions for adding resume.pdf
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.18+ or v20+) or [Bun](https://bun.sh/) (v1.1+)

### 1. Install Dependencies
```bash
# Using bun:
bun install

# Or using npm:
npm install
```

### 2. Run Development Server
```bash
bun dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Type Checking & Production Build
```bash
# Verify TypeScript strict typing:
npm run typecheck

# Build for production:
npm run build

# Run production build locally:
npm run start
```

---

## ⚙️ Configuration & Customization Checklist

All configurable data is located in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts):

| Item | Location | Action |
|------|----------|--------|
| **Résumé File** | `public/resume.pdf` | Add your exported resume PDF as `public/resume.pdf`. Once placed, the button in the Navbar will automatically serve it. In `src/data/portfolioData.ts`, set `isResumePlaceholder: false`. |
| **Contact Form Email Dispatch** | `.env.local` | (Optional) To automatically receive emails sent through the contact form, create `.env.local` with `RESEND_API_KEY=re_xxx` and `CONTACT_RECEIVER_EMAIL=23bcs048@iiitdwd.ac.in`. If unset, messages are logged server-side. |
| **New Projects or Skills** | `src/data/portfolioData.ts` | Add new projects or technologies directly into the `projects` or `skillCategories` arrays. |
| **Custom Domain** | `src/app/sitemap.ts` & `src/app/layout.tsx` | Replace `https://andes-indica.dev` with your custom domain or Vercel URL once deployed. |

---

## 🌐 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial production portfolio"
   git remote add origin https://github.com/Andes-indica/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `portfolio` repository.
4. Framework preset will automatically detect **Next.js**.
5. (Optional) Add `RESEND_API_KEY` in Environment Variables if using Resend.
6. Click **Deploy**. Your site will be live on an HTTPS subdomain with global edge CDN caching.

---

## 📄 License
MIT © [Prajwal G V](https://github.com/Andes-indica)

