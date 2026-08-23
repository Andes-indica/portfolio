import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Prajwal G V",
    preferredName: "Prajwal",
    githubUsername: "Andes-indica",
    title: "Software Engineer & Computer Science Undergraduate",
    tagline: "Building resilient systems at the intersection of technical depth, business model mechanics, and first-principles thinking.",
    headline: "CS & Cybersecurity @ IIIT Dharwad | Systems & DevOps | Stock Markets, Business Models & Geopolitics Enthusiast",
    bioParagraphs: [
      "I am a third-year Computer Science undergraduate with a minor in Cybersecurity at the Indian Institute of Information Technology (IIIT) Dharwad. Beyond writing code, I approach software engineering with a high-agency, first-principles mindset—viewing technology not in isolation, but as the core engine driving global commerce, financial infrastructure, and scalable businesses.",
      "I have a deep intellectual passion for equity markets, corporate business models, and economic moats. I love studying annual reports, dissecting how companies compound capital, analyzing unit economics, and understanding market microstructure. This curiosity directly inspired several of my core projects: architecting a multi-client Portfolio & Order Management System (PMS-OMS) and developing a systematic market risk engine for Indian benchmark indices.",
      "An avid non-fiction reader, I actively study global geopolitics, macroeconomic cycles, and technology history. I connect the dots between sovereign supply chain shifts, semiconductor bottlenecks, monetary policy regimes, and software architecture. This multidimensional lens gives me a sharp clarity on why systems are built, what commercial value they unlock, and how to engineer them for long-term resilience.",
      "In open-source and systems engineering, I focus on production discipline—automating CI/CD release pipelines and link verification for the Orbit monorepo, implementing multi-threaded POSIX socket servers in C, and orchestrating DevSecOps vulnerability workflows."
    ],
    email: "23bcs048@iiitdwd.ac.in",
    linkedIn: "http://linkedin.com/in/prajwal-gv-786a8629a/",
    github: "https://github.com/Andes-indica",
    resumeUrl: "/resume.pdf",
    isResumePlaceholder: true,
    location: "Dharwad, Karnataka, India",
    status: "Seeking SWE / DevOps Internships (Summer & Fall)",
    quickStats: [
      { label: "Degree & Major", value: "3rd Year B.Tech", description: "CS with Cybersecurity Minor" },
      { label: "Open Source", value: "Orbit Contributor", description: "CI/CD, Bun monorepo, Docs" },
      { label: "Core Stack", value: "TS • Python • C++ • Bun", description: "React, Next.js, Docker, Linux" },
      { label: "Intellectual Edge", value: "Markets & Geopolitics", description: "Business models, Quant risk, Macro" }
    ]
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Andes-indica",
      display: "github.com/Andes-indica",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "http://linkedin.com/in/prajwal-gv-786a8629a/",
      display: "linkedin.com/in/prajwal-gv",
      icon: "linkedin"
    },
    {
      platform: "Email",
      url: "mailto:23bcs048@iiitdwd.ac.in",
      display: "23bcs048@iiitdwd.ac.in",
      icon: "mail"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Science and Engineering",
      minor: "Cybersecurity",
      institution: "Indian Institute of Information Technology (IIIT) Dharwad",
      location: "Dharwad, Karnataka, India",
      period: "2023 — 2027",
      status: "In Progress (3rd Year)",
      highlights: [
        "Rigorous coursework in Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, and Software Engineering.",
        "Specialized cybersecurity curriculum covering Network Security, Cryptography, Container Defense, and Vulnerability Assessment.",
        "Architected automated academic scheduling engine for campus course registration and room allocation."
      ]
    }
  ],
  intellectualPillars: [
    {
      title: "Stock Markets & Business Model Dissection",
      category: "Capital Allocation & Business Moats",
      tagline: "Deconstructing unit economics, competitive moats, and capital compounding flywheels.",
      description: "Fascinated by analyzing how companies create and sustain value. I study annual reports, investor memos, margin expansion drivers, customer acquisition flywheels, and market microstructure. I believe great software engineers must understand the business problem and economic mechanics behind what they build.",
      keyThemes: [
        "Economic Moats & Pricing Power",
        "Unit Economics & Free Cash Flow Analysis",
        "Market Microstructure & Order Book Mechanics",
        "Annual Reports (10-K) & Founder Capital Allocation"
      ],
      iconName: "trending-up"
    },
    {
      title: "Global Geopolitics & Macroeconomic Dynamics",
      category: "Global Systems & Supply Chains",
      tagline: "Connecting global trade flows, semiconductor choke points, and monetary policy.",
      description: "Deeply interested in understanding world affairs, sovereign supply chain realignments, the global semiconductor choke points (ASML, TSMC), energy security, and central bank liquidity regimes. I love analyzing how international trade rules and geopolitical shifts impact technological infrastructure.",
      keyThemes: [
        "Semiconductor Supply Chain Geopolitics",
        "Macroeconomic Cycles & Sovereign Debt",
        "Tech Sovereignty & Critical Infrastructure Defense",
        "Global Trade Dynamics & Energy Transitions"
      ],
      iconName: "globe"
    },
    {
      title: "Deep Non-Fiction Reading & Mental Models",
      category: "First-Principles Thinking",
      tagline: "Synthesizing lessons from business history, biographies, and complex adaptive systems.",
      description: "Voracious reader of books on business history, investing philosophy (Buffett, Munger, Howard Marks), technological revolutions, psychology of decision-making, and systems thinking. Reading across disciplines trains me to see second-order effects and make sound architectural decisions.",
      keyThemes: [
        "Business History & Iconic Founder Biographies",
        "Mental Models & Second-Order Thinking",
        "Complex Adaptive Systems & Network Effects",
        "Engineering Philosophy & Risk Asymmetry"
      ],
      iconName: "book-open"
    }
  ],
  openSource: [
    {
      id: "orbit",
      name: "Orbit",
      repo: "Noveum/orbit",
      url: "https://github.com/Noveum/orbit",
      description: "A free, realtime, keyboard-first task manager with instant sync, issues, boards, sprints, docs, and an MCP server for AI agents. Built with a TypeScript & Bun monorepo.",
      role: "Open Source Contributor",
      badge: "Core Open Source Work",
      impactSummary: "Engineered automated release pipelines with date-based tagging, implemented Lychee-driven markdown link verification with immutable SHA security pinning, and eliminated documentation drift across the repository.",
      stack: ["TypeScript", "Bun", "GitHub Actions", "Lefthook", "Biome", "Zod", "Docker"],
      pullRequests: [
        {
          number: 333,
          title: "chore(ci): add automated dated release workflow",
          url: "https://github.com/Noveum/orbit/pull/333",
          state: "open",
          category: "CI/CD",
          summary: "Engineered an automated GitHub Actions release workflow that packages dated production releases with automated release-note generation and idempotent execution.",
          keyHighlights: [
            "Configured idempotent dated tagging logic to prevent duplicate or conflicting release dispatches.",
            "Automated changelog and release notes compilation directly from merged pull requests.",
            "Integrated with Bun monorepo build verification checks to guarantee zero regressions before artifact publish."
          ]
        },
        {
          number: 315,
          title: "Ci/add links check",
          url: "https://github.com/Noveum/orbit/pull/315",
          state: "closed",
          category: "CI/CD",
          summary: "Implemented automated Markdown link validation using lychee-action, hardened against supply chain attacks via immutable commit SHA pinning and accurate exit-code filtering.",
          keyHighlights: [
            "Pinned actions/checkout and lychee action to immutable commit SHAs for supply chain security.",
            "Handled distinct Lychee exit codes (0 for pass, 2 for link rot, 1/3 for runtime/config errors) so build failure accurately flags misconfigurations.",
            "Anchored regex exclusion paths to prevent false positives in vendor folders while maintaining strict internal link checks."
          ]
        },
        {
          number: 305,
          title: "docs: deduplicate quick-start",
          url: "https://github.com/Noveum/orbit/pull/305",
          state: "closed",
          category: "Documentation",
          summary: "Unified fragmented quick-start documentation into a single canonical source of truth, removing copy-pasted commands to reduce maintenance drift.",
          keyHighlights: [
            "Established docs/getting-started.md as the sole authoritative guide for local onboarding.",
            "Validated changes against Lefthook pre-push hooks including Biome linting and TypeScript strict typechecking.",
            "Ensured zero em-dash guideline violations and clean cross-linking across docs."
          ]
        }
      ]
    },
    {
      id: "phantom",
      name: "Phantom",
      repo: "phantomsoldierking/phantom",
      url: "https://github.com/phantomsoldierking/phantom",
      description: "A keyboard-first terminal dashboard companion for developers to monitor system health, logs, processes, ports, and HTTP workflows.",
      role: "Contributor",
      impactSummary: "Built and styled the official project landing page and documentation interface for the Go-based CLI companion tool.",
      stack: ["Go", "HTML/CSS", "Terminal UI", "Markdown"],
      pullRequests: [
        {
          number: 1,
          title: "Landing page",
          url: "https://github.com/phantomsoldierking/phantom/pull/1",
          state: "closed",
          category: "Feature",
          summary: "Designed and implemented the landing page showcasing Phantom's keyboard shortcuts, installation commands, and system dashboard features.",
          keyHighlights: [
            "Created responsive documentation view highlighting CLI features.",
            "Integrated release download commands and terminal previews."
          ]
        }
      ]
    },
    {
      id: "trivy-cicd",
      name: "Trivy CI/CD Container Security",
      repo: "phantomsoldierking/trivy-cicd-github-repo",
      url: "https://github.com/phantomsoldierking/trivy-cicd-github-repo",
      description: "Container security scanning and vulnerability triage pipeline integrating Trivy, LocalStack cloud emulation, and machine learning risk classification.",
      role: "Contributor",
      impactSummary: "Developed the vulnerability visualization dashboard and initialized database schemas for tracking container scan histories and ML risk scores.",
      stack: ["Python", "LocalStack", "Docker", "PostgreSQL", "Trivy"],
      pullRequests: [
        {
          number: 2,
          title: "feat: dashboard and database init",
          url: "https://github.com/phantomsoldierking/trivy-cicd-github-repo/pull/2",
          state: "closed",
          category: "Feature",
          summary: "Constructed the relational database schema and initialized the dashboard interface for vulnerability tracking.",
          keyHighlights: [
            "Designed PostgreSQL database schemas for logging CVE findings, severity tiers, and ML anomaly tags.",
            "Built initial analytics dashboard for viewing scan results."
          ]
        },
        {
          number: 1,
          title: "feat: added documentation",
          url: "https://github.com/phantomsoldierking/trivy-cicd-github-repo/pull/1",
          state: "closed",
          category: "Documentation",
          summary: "Authored architecture documentation and LocalStack setup instructions for developer onboarding.",
          keyHighlights: [
            "Documented AWS LocalStack service mapping for S3, SQS, and Lambda emulation.",
            "Provided step-by-step local testing workflows using Docker Compose."
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: "pms-oms",
      title: "PMS & Order Management System",
      tagline: "High-throughput portfolio management and multi-client synchronized order execution platform.",
      description: "A full-stack financial software platform that enables portfolio managers to maintain multiple client accounts, execute synchronized 1-tap bulk orders across distributed portfolios, and perform automatic portfolio rebalancing.",
      category: "Full Stack",
      technologies: ["TypeScript", "Bun", "React", "Tailwind CSS", "Prisma ORM", "Docker Compose", "REST API"],
      githubUrl: "https://github.com/Andes-indica/pms-oms",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        problem: "Portfolio managers dealing with dozens of retail client accounts face massive latency, operational overhead, and human error when manually executing orders or rebalancing asset allocations across accounts during fast-moving market conditions.",
        approach: "Built a modern monorepo architecture with a high-performance Bun-powered backend (apps/api), a strongly typed database layer with Prisma (packages/db), and a responsive React management interface. Designed atomic batch-execution pipelines to distribute single-tap orders proportionally based on client portfolio weightings.",
        architecture: "Comprises a Bun HTTP REST API service handling client authentication, portfolio calculation, and order routing; a Prisma-backed relational database storing client ledger states and execution history; and a React frontend for one-tap portfolio rebalancing and trade monitoring, all orchestrated via Docker Compose.",
        keyFeatures: [
          "Multi-Client Management: Comprehensive portfolio overview displaying cash reserves, asset weights, and unrealized P&L per client.",
          "One-Tap Bulk Order Routing: Synchronized order execution that calculates proportional share quantities across all managed accounts instantaneously.",
          "Automated Portfolio Rebalancing: Compares actual portfolio allocations with target model weights and generates compensating rebalance orders.",
          "Containerized Architecture: Complete local and staging setup orchestrated with Docker and Docker Compose."
        ],
        technicalChallenges: [
          {
            challenge: "Preventing partial order execution failures and race conditions across simultaneous multi-client updates.",
            solution: "Implemented transactional database operations using Prisma and structured order-routing queues ensuring atomic ledger updates."
          },
          {
            challenge: "Maintaining strict type safety across shared database schemas and API controllers in a monorepo setup.",
            solution: "Configured TypeScript project references and shared workspace packages (packages/db) consumed by the API service without build drift."
          }
        ],
        outcome: "Delivered a functioning, typed portfolio and order management platform capable of managing multi-client holdings and executing coordinated order batches with zero client-side lag.",
        futureImprovements: [
          "Integration with live broker WebSocket feeds for real-time market data streaming.",
          "FIX (Financial Information eXchange) protocol adapter for direct exchange connectivity."
        ]
      }
    },
    {
      id: "risk-engine",
      title: "Indian Market Systematic Risk Engine",
      tagline: "Multi-factor market stress quantification and anomaly detection for NIFTY and BANKNIFTY equity indices.",
      description: "A systematic quantitative risk assessment engine for Indian benchmark indices, moving beyond price prediction to quantify market stress, tail risk, and anomaly regimes using historical volatility and fundamental metrics.",
      category: "Quant & AI",
      technologies: ["Python", "Pandas", "NumPy", "Streamlit", "Scikit-Learn", "Financial Modeling"],
      githubUrl: "https://github.com/Andes-indica/Indain-market-risk-engine-for-retailers",
      stars: 1,
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        problem: "Retail investors frequently lack access to institutional-grade risk metrics, relying instead on lagging price predictions and unhedged sentiment, which leads to severe drawdowns during systematic market liquidity contractions.",
        approach: "Engineered a systematic multi-factor risk engine that evaluates historical price distributions, rolling volatility regimes, parametric and historical Value-at-Risk (VaR), and anomaly detection models to output an objective market stress index for NIFTY 50 and BANKNIFTY.",
        architecture: "Python analytical pipeline fetching historical price indices and macroeconomic indicators, computing rolling statistical risk metrics (VaR, Expected Shortfall, Maximum Drawdown, Volatility Skew), running Scikit-Learn anomaly detection on volume-price divergence, and presenting findings via an interactive Streamlit dashboard.",
        keyFeatures: [
          "Systematic Market Stress Quantification: Computes multi-factor composite risk scores for major Indian indices.",
          "Value-at-Risk (VaR) & Tail Risk Analysis: Models 95% and 99% confidence VaR alongside Expected Shortfall.",
          "Anomaly Detection: Employs unsupervised machine learning to detect unusual volatility shifts and volume anomalies.",
          "Interactive Visual Dashboard: Built with Streamlit for dynamic exploration of historical stress regimes."
        ],
        technicalChallenges: [
          {
            challenge: "Accurately handling regime shifts in non-normal, fat-tailed financial time series data.",
            solution: "Combined parametric Gaussian VaR with historical simulation VaR and rolling volatility window adjustments to account for kurtosis."
          },
          {
            challenge: "Structuring dynamic data ingestion and risk metrics computation with minimal latency on dashboard load.",
            solution: "Optimized vector calculations with NumPy and Pandas array operations, caching computed statistical baselines."
          }
        ],
        outcome: "Created an intuitive, mathematically grounded risk dashboard that helps retail traders understand downside exposure without relying on misleading 'get-rich-quick' price predictions.",
        futureImprovements: [
          "Derivatives option chain implied volatility (IV) surface analysis.",
          "Monte Carlo simulation engine with GARCH volatility modeling."
        ]
      }
    },
    {
      id: "container-security",
      title: "Container Security & ML Vulnerability Pipeline",
      tagline: "LocalStack-based automated container vulnerability scanning and ML anomaly triage.",
      description: "An end-to-end container DevSecOps pipeline using Trivy for automated CVE extraction, LocalStack for zero-cost AWS cloud infrastructure emulation, and machine learning models for intelligent vulnerability prioritization.",
      category: "DevOps & Cloud",
      technologies: ["Python", "LocalStack", "Docker Compose", "Trivy", "Machine Learning", "PostgreSQL"],
      githubUrl: "https://github.com/Andes-indica/trivy-cicd-github-repo",
      featured: true,
      hasCaseStudy: true,
      caseStudy: {
        problem: "Scanning container images for vulnerabilities in cloud environments often incurs high infrastructure costs during development, while standard CVE scanners produce hundreds of raw alerts without contextual severity prioritization.",
        approach: "Constructed a container security pipeline that emulates AWS cloud services (S3, SQS, Lambda) locally with LocalStack, executes automated Trivy image scans on container builds, and feeds vulnerability telemetry into a machine learning classification model to flag critical operational anomalies.",
        architecture: "Microservices setup orchestrated via Docker Compose: a scanner service triggering Trivy upon container build, LocalStack mocking cloud event queues and storage, an ML inference service classifying vulnerability impact scores, and a PostgreSQL database feeding a centralized security dashboard.",
        keyFeatures: [
          "Automated Container CVE Scanning: Inspects base OS packages and application dependencies using Trivy.",
          "Zero-Cost Cloud Emulation: Simulates cloud storage and message triggers entirely within LocalStack.",
          "ML-Driven Vulnerability Triage: Classifies scan results into actionable risk tiers to prevent alert fatigue.",
          "CI/CD Security Gating: Blocks deployment pipeline if unmitigated high-risk vulnerabilities are detected."
        ],
        technicalChallenges: [
          {
            challenge: "Orchestrating multi-container cloud emulation without hitting port conflicts or high memory usage.",
            solution: "Configured a lean Docker Compose manifest with health checks, scoped LocalStack services, and volume mount caching."
          },
          {
            challenge: "Parsing variable Trivy JSON scan schemas into normalized relational database records.",
            solution: "Built robust Python schema validation and extraction routines that handle varying CVSS score formats seamlessly."
          }
        ],
        outcome: "Demonstrated a cost-effective, reproducible DevSecOps security scanning workflow that developers can run locally before pushing to production registries.",
        futureImprovements: [
          "Runtime container behavioral monitoring using eBPF and Falco.",
          "Automated remediation pull-request generation for known vulnerable base image tags."
        ]
      }
    },
    {
      id: "timetable-generator",
      title: "IIIT Dharwad Automated Timetable Scheduler",
      tagline: "Algorithmic constraint-satisfaction engine for academic course and room allocation.",
      description: "An automated scheduling system developed for IIIT Dharwad that resolves multi-department course timetables, faculty teaching constraints, room capacity limits, and elective basket conflicts into structured schedules.",
      category: "Cybersecurity & Systems",
      technologies: ["Python", "Constraint Satisfaction", "Pandas", "OpenPyXL", "Data Flow Modeling"],
      githubUrl: "https://github.com/Andes-indica/Time-Table",
      featured: true,
      hasCaseStudy: false
    },
    {
      id: "tcp-socket-server",
      title: "Concurrent Multi-Client TCP Server & Protocol Suite",
      tagline: "Low-level POSIX multithreaded socket server and network protocol simulation suite in C/C++.",
      description: "A concurrent TCP server utilizing POSIX sockets (AF_INET, SOCK_STREAM) and pthreads for simultaneous client communication, complemented by fundamental network protocol simulations (CSMA/CD, CSMA/CA, Pure/Slotted ALOHA, Go-Back-N, and Stop-and-Wait ARQ).",
      category: "Cybersecurity & Systems",
      technologies: ["C", "C++", "POSIX Sockets", "pthreads", "Network Protocols", "Makefiles"],
      githubUrl: "https://github.com/Andes-indica/Simple-TCP-socket-communication",
      featured: true,
      hasCaseStudy: false
    },
    {
      id: "ttd-extension",
      title: "TTD Queue Automation Browser Extension",
      tagline: "Manifest V3 browser extension automating form submissions upon virtual queue release.",
      description: "A lightweight Chrome extension designed to monitor high-traffic virtual queues, detect queue exit events in real-time, and trigger instantaneous form auto-filling to secure booking slots without manual entry delays.",
      category: "Full Stack",
      technologies: ["JavaScript", "Chrome Extensions API", "DOM MutationObserver", "CSS3"],
      githubUrl: "https://github.com/Andes-indica/TTD-Extension",
      stars: 1,
      featured: false,
      hasCaseStudy: false
    },
    {
      id: "cuda-parallel",
      title: "CUDA GPU Accelerated Matrix Kernels",
      tagline: "Parallel computing kernels and GPU device query utilities built in CUDA C++.",
      description: "High-performance parallel computing implementations including 2D/3D GPU matrix multiplication, parallel DAXPY operations, and GPU device query diagnostic tools exploring thread block and grid hierarchies.",
      category: "Cybersecurity & Systems",
      technologies: ["CUDA", "C++", "Parallel Computing", "GPU Architecture"],
      githubUrl: "https://github.com/Andes-indica/CUDA-",
      featured: false,
      hasCaseStudy: false
    },
    {
      id: "youtube-audio-clipper",
      title: "Local Privacy-First Audio Extraction Utility",
      tagline: "Python utility for secure, local audio extraction without relying on untrusted third-party web scrapers.",
      description: "A local desktop utility that extracts specific audio timestamps directly from media streams on the user's machine, eliminating the security and telemetry risks of third-party audio converter websites.",
      category: "Cybersecurity & Systems",
      technologies: ["Python", "Media Processing", "CLI", "Privacy Defense"],
      githubUrl: "https://github.com/Andes-indica/Youtube-audio-clipper",
      stars: 1,
      featured: false,
      hasCaseStudy: false
    }
  ],
  skillCategories: [
    {
      title: "Languages",
      iconName: "code",
      description: "Programming languages used in systems, full-stack, and algorithmic projects.",
      skills: [
        { name: "TypeScript", highlight: true },
        { name: "C++", highlight: true },
        { name: "Python", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "C", highlight: true },
        { name: "SQL" },
        { name: "CUDA" }
      ]
    },
    {
      title: "Frontend Development",
      iconName: "layout",
      description: "Modern UI engineering, responsive layouts, and typed web applications.",
      skills: [
        { name: "React", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "HTML5 & CSS3" },
        { name: "Responsive Design" },
        { name: "State Management" }
      ]
    },
    {
      title: "Backend & Systems",
      iconName: "server",
      description: "Server architectures, asynchronous runtimes, and low-level system programming.",
      skills: [
        { name: "Bun", highlight: true },
        { name: "Node.js", highlight: true },
        { name: "REST APIs", highlight: true },
        { name: "Prisma ORM" },
        { name: "POSIX Sockets (pthreads)" },
        { name: "Parallel Computing" }
      ]
    },
    {
      title: "DevOps, Cloud & Automation",
      iconName: "cloud",
      description: "Continuous integration, container orchestration, and cloud infrastructure.",
      skills: [
        { name: "Docker", highlight: true },
        { name: "Docker Compose", highlight: true },
        { name: "GitHub Actions", highlight: true },
        { name: "CI/CD Pipelines", highlight: true },
        { name: "LocalStack (AWS)", highlight: true },
        { name: "Linux Administration" },
        { name: "Makefiles" }
      ]
    },
    {
      title: "Cybersecurity & Networking",
      iconName: "shield",
      description: "Container security, vulnerability assessment, and networking fundamentals.",
      skills: [
        { name: "Trivy (Container Security)", highlight: true },
        { name: "Network Protocols (TCP/IP)", highlight: true },
        { name: "Vulnerability Scanning" },
        { name: "Nmap & Port Auditing" },
        { name: "OSINT Techniques" },
        { name: "ARQ & MAC Layer Protocols" }
      ]
    },
    {
      title: "Developer Tooling & Collaboration",
      iconName: "wrench",
      description: "Code quality tooling, monorepo linters, and version control workflows.",
      skills: [
        { name: "Git & GitHub", highlight: true },
        { name: "Biome", highlight: true },
        { name: "Lefthook (Git Hooks)", highlight: true },
        { name: "Zod Schema Validation" },
        { name: "Postman" },
        { name: "Streamlit" }
      ]
    }
  ],
  githubData: {
    username: "Andes-indica",
    profileUrl: "https://github.com/Andes-indica",
    totalPublicRepos: 21,
    verifiedContributions: "Active contributor to Noveum/orbit, phantomsoldierking/phantom, and multiple open-source repositories",
    primaryLanguages: [
      { name: "TypeScript", share: "34%", color: "#3178c6" },
      { name: "Python", share: "30%", color: "#3572A5" },
      { name: "C / C++", share: "22%", color: "#f34b7d" },
      { name: "JavaScript", share: "10%", color: "#f1e05a" },
      { name: "CUDA & Others", share: "4%", color: "#3B82F6" }
    ],
    highlightNotes: [
      "Monorepo release automation & link-check CI workflows in Orbit (Bun + TypeScript).",
      "Low-level POSIX multithreaded networking and protocol simulations in C.",
      "Quantitative multi-factor market risk assessment engine with Streamlit dashboard.",
      "Container security scanning & ML anomaly triage pipeline with LocalStack."
    ]
  }
};
