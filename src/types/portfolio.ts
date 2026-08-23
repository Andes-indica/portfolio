export interface CaseStudy {
  problem: string;
  approach: string;
  architecture: string;
  keyFeatures: string[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  outcome: string;
  futureImprovements: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full Stack" | "DevOps & Cloud" | "Cybersecurity & Systems" | "Quant & AI";
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  hasCaseStudy: boolean;
  caseStudy?: CaseStudy;
}

export interface PullRequestDetail {
  number: number;
  title: string;
  url: string;
  state: "merged" | "open" | "closed";
  category: "Feature" | "CI/CD" | "Documentation" | "Refactor";
  summary: string;
  keyHighlights: string[];
}

export interface OpenSourceProject {
  id: string;
  name: string;
  repo: string;
  url: string;
  description: string;
  role: string;
  badge?: string;
  impactSummary: string;
  stack: string[];
  pullRequests: PullRequestDetail[];
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: "code" | "layout" | "server" | "database" | "cloud" | "shield" | "wrench";
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  major: string;
  minor: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  display: string;
  icon: "github" | "linkedin" | "mail";
}

export interface CuratedGitHubData {
  username: string;
  profileUrl: string;
  totalPublicRepos: number;
  verifiedContributions: string;
  primaryLanguages: { name: string; share: string; color: string }[];
  highlightNotes: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    preferredName: string;
    githubUsername: string;
    title: string;
    tagline: string;
    headline: string;
    bioParagraphs: string[];
    email: string;
    linkedIn: string;
    github: string;
    resumeUrl: string;
    isResumePlaceholder: boolean;
    location: string;
    status: string;
    quickStats: { label: string; value: string; description: string }[];
  };
  socialLinks: SocialLink[];
  education: EducationItem[];
  openSource: OpenSourceProject[];
  projects: Project[];
  skillCategories: SkillCategory[];
  githubData: CuratedGitHubData;
}

