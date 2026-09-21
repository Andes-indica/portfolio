export const portfolioData = {
  personal: {
    name: "Prajwal G V",
    shortName: "Prajwal",
    role: "Software Engineer",
    education: "B.Tech CSE + Cybersecurity minor · IIIT Dharwad · 2027",
    headline: "I build reliable software for finance, infrastructure, and the web.",
    summary:
      "Computer Science undergraduate focused on full-stack systems, DevOps, and open source. I like turning complex workflows into practical, production-minded software.",
    status: "Open to software engineering, full-stack, and DevOps internships",
    email: "23bcs048@iiitdwd.ac.in",
    location: "Dharwad, India",
    resume: "/resume.pdf",
  },
  links: {
    github: "https://github.com/Andes-indica",
    linkedin: "https://linkedin.com/in/prajwal-gv-786a8629a/",
    codechef: "https://www.codechef.com/users/andesindica25",
  },
  proof: [
    { value: "4", label: "Orbit PRs merged" },
    { value: "3", label: "Selected products" },
    { value: "2027", label: "B.Tech graduation" },
  ],
  projects: [
    {
      name: "PMS–OMS",
      label: "Financial infrastructure",
      description:
        "A multi-client portfolio and order management platform with protected workflows, risk checks, broker abstraction, and order lifecycle tracking.",
      outcome: "Built to coordinate portfolio operations and orders across client accounts from one system.",
      stack: ["TypeScript", "Bun", "React", "Prisma", "PostgreSQL", "Docker"],
      github: "https://github.com/Andes-indica/pms-oms",
      live: undefined,
      featured: true,
    },
    {
      name: "Darukaa Earth",
      label: "Geospatial full stack",
      description:
        "A deployed project workspace with authentication, project CRUD, terrain maps, polygon drawing, and land-area calculation in hectares.",
      outcome: "Shipped as a three-service application with a FastAPI backend and interactive Mapbox workspace.",
      stack: ["React", "FastAPI", "PostgreSQL", "Mapbox", "Render"],
      github: "https://github.com/Andes-indica/Darukaa",
      live: "https://darukaa-earth-web.onrender.com",
      featured: false,
    },
    {
      name: "Indian Market Risk Engine",
      label: "Quantitative analytics",
      description:
        "An interactive risk dashboard for Indian benchmarks with VaR, CVaR, correlation analysis, fundamentals, and anomaly detection.",
      outcome: "Makes portfolio risk easier to inspect through practical metrics and interactive visualizations.",
      stack: ["Python", "Streamlit", "Plotly", "scikit-learn"],
      github: "https://github.com/Andes-indica/Indain-market-risk-engine-for-retailers",
      live: undefined,
      featured: false,
    },
  ],
  openSource: {
    project: "Orbit",
    repo: "Noveum/orbit",
    url: "https://github.com/Noveum/orbit",
    summary:
      "Contributed production CI/CD and documentation infrastructure to a TypeScript/Bun monorepo used for real-time project management.",
    contributions: [
      {
        number: 364,
        title: "Published a searchable VitePress documentation site",
        detail: "Generated navigation, local search, themed docs, and GitHub Pages deployment.",
        url: "https://github.com/Noveum/orbit/pull/364",
      },
      {
        number: 333,
        title: "Automated dated releases and release notes",
        detail: "Added recovery-safe, idempotent tagging with tested GitHub API validation.",
        url: "https://github.com/Noveum/orbit/pull/333",
      },
      {
        number: 315,
        title: "Added secure Markdown link verification",
        detail: "Introduced Lychee checks with immutable action pins and accurate failure handling.",
        url: "https://github.com/Noveum/orbit/pull/315",
      },
      {
        number: 305,
        title: "Removed duplicated quick-start documentation",
        detail: "Created one canonical setup path to reduce documentation drift.",
        url: "https://github.com/Noveum/orbit/pull/305",
      },
    ],
  },
  stack: [
    {
      label: "Build",
      items: ["TypeScript", "React", "Next.js", "Bun", "Python", "FastAPI"],
    },
    {
      label: "Data & systems",
      items: ["PostgreSQL", "Prisma", "REST APIs", "C/C++", "Linux", "Computer Networks"],
    },
    {
      label: "Ship",
      items: ["Docker", "GitHub Actions", "CI/CD", "Render", "Vercel", "Git"],
    },
  ],
  interests: [
    "Financial markets & market structure",
    "Business models & unit economics",
    "Cloud infrastructure & resilient systems",
    "Geopolitics, macroeconomics & technology history",
  ],
} as const;
