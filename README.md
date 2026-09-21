## personal portfolio 
A place to showcase my works and interests to public who wants to know about me

## Project Structure

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

