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
    { value: "7", label: "Open-source PRs merged" },
    { value: "10", label: "Projects built" },
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
  otherProjects: [
    {
      name: "Container Security & ML Pipeline",
      category: "DevSecOps",
      description: "Trivy scanning, LocalStack cloud emulation, PostgreSQL history, and ML-assisted vulnerability prioritization.",
      stack: ["Python", "Trivy", "Docker"],
      github: "https://github.com/Andes-indica/trivy-cicd-github-repo",
    },
    {
      name: "Automated Timetable Scheduler",
      category: "Constraint solving",
      description: "Schedules courses, faculty, rooms, and elective baskets while resolving institutional constraints.",
      stack: ["Python", "Pandas", "OpenPyXL"],
      github: "https://github.com/Andes-indica/Time-Table",
    },
    {
      name: "Concurrent TCP Server",
      category: "Systems & networking",
      description: "A POSIX socket server with pthread concurrency and simulations of core network protocols.",
      stack: ["C", "C++", "POSIX"],
      github: "https://github.com/Andes-indica/Simple-TCP-socket-communication",
    },
    {
      name: "Jenkins CI/CD Deployment",
      category: "DevOps",
      description: "A Flask delivery pipeline from GitHub checkout through Docker build, registry push, and deployment.",
      stack: ["Jenkins", "Docker", "Flask"],
      github: "https://github.com/Andes-indica/jenkins-ci-cd",
    },
    {
      name: "TTD Queue Automation Extension",
      category: "Browser tooling",
      description: "A Manifest V3 extension that detects queue release and autofills time-sensitive booking forms.",
      stack: ["JavaScript", "Chrome API", "DOM"],
      github: "https://github.com/Andes-indica/TTD-Extension",
    },
    {
      name: "CUDA GPU Kernels",
      category: "Parallel computing",
      description: "CUDA C++ matrix, DAXPY, and device-query programs exploring GPU execution hierarchies.",
      stack: ["CUDA", "C++", "GPU"],
      github: "https://github.com/Andes-indica/CUDA-",
    },
    {
      name: "Local Audio Extraction Utility",
      category: "Privacy tooling",
      description: "A local Python utility for extracting selected audio ranges without third-party converters.",
      stack: ["Python", "CLI", "Media"],
      github: "https://github.com/Andes-indica/Youtube-audio-clipper",
    },
  ],
  openSource: [
    {
      project: "Orbit",
      repo: "Noveum/orbit",
      url: "https://github.com/Noveum/orbit",
      summary: "Production CI/CD and documentation work in a TypeScript/Bun real-time project-management monorepo.",
      contributions: [
        {
          number: 364,
          title: "Searchable VitePress documentation site",
          detail: "Generated navigation, local search, theming, and GitHub Pages deployment.",
          url: "https://github.com/Noveum/orbit/pull/364",
        },
        {
          number: 333,
          title: "Automated dated releases and release notes",
          detail: "Recovery-safe tagging, exact commit ranges, validation, and focused tests.",
          url: "https://github.com/Noveum/orbit/pull/333",
        },
        {
          number: 315,
          title: "Secure Markdown link verification",
          detail: "Lychee checks with immutable action pins and accurate failure handling.",
          url: "https://github.com/Noveum/orbit/pull/315",
        },
        {
          number: 305,
          title: "Canonical quick-start documentation",
          detail: "Removed duplicated setup instructions to reduce documentation drift.",
          url: "https://github.com/Noveum/orbit/pull/305",
        },
      ],
    },
    {
      project: "Phantom",
      repo: "phantomsoldierking/phantom",
      url: "https://github.com/phantomsoldierking/phantom",
      summary: "A keyboard-first terminal companion for monitoring developer workflows.",
      contributions: [
        {
          number: 1,
          title: "Project landing page",
          detail: "Built the responsive landing and documentation interface for the Go CLI.",
          url: "https://github.com/phantomsoldierking/phantom/pull/1",
        },
      ],
    },
    {
      project: "Trivy CI/CD",
      repo: "phantomsoldierking/trivy-cicd-github-repo",
      url: "https://github.com/phantomsoldierking/trivy-cicd-github-repo",
      summary: "A container-security workflow combining Trivy, LocalStack, data storage, and risk analytics.",
      contributions: [
        {
          number: 2,
          title: "Dashboard and database foundation",
          detail: "Added vulnerability tracking schemas and the initial analytics dashboard.",
          url: "https://github.com/phantomsoldierking/trivy-cicd-github-repo/pull/2",
        },
        {
          number: 1,
          title: "Architecture and setup documentation",
          detail: "Documented LocalStack services and local Docker-based testing workflows.",
          url: "https://github.com/phantomsoldierking/trivy-cicd-github-repo/pull/1",
        },
      ],
    },
  ],
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
    {
      title: "Markets & business models",
      description: "Annual reports, unit economics, economic moats, capital allocation, and market microstructure.",
    },
    {
      title: "Geopolitics & macro",
      description: "Trade flows, monetary regimes, sovereign debt, energy security, and second-order effects.",
    },
    {
      title: "Technology & supply chains",
      description: "Semiconductors, cloud infrastructure, critical systems, and technology history.",
    },
    {
      title: "Systems & mental models",
      description: "Software architecture, resilient design, non-fiction, and first-principles thinking.",
    },
  ],
} as const;
