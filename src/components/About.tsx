import React from "react";
import { 
  GraduationCap, 
  GitBranch, 
  ShieldCheck, 
  Server, 
  Cpu, 
  CheckCircle2, 
  TrendingUp, 
  Globe, 
  BookOpen, 
  Sparkles,
  Compass
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { IntellectualPillar } from "@/types/portfolio";

export function About() {
  const { personal, education, intellectualPillars } = portfolioData;

  const principles = [
    {
      title: "Systems-First Learning",
      description: "Mastering lower-level primitives—POSIX sockets, thread synchronization, memory management, and container internals—before abstracting.",
      icon: Cpu,
    },
    {
      title: "Production Discipline",
      description: "Commitment to strict type safety, Zod runtime validation, automated link verification, and immutable dependency pinning in CI workflows.",
      icon: ShieldCheck,
    },
    {
      title: "Open-Source Collaboration",
      description: "Active participation in multi-contributor monorepos (Orbit), following rigorous pull request guidelines, Biome checks, and automated release practices.",
      icon: GitBranch,
    },
    {
      title: "Pragmatic Architecture",
      description: "Designing lean microservices and full-stack monorepos with Bun, Docker Compose, and Prisma tailored for low latency and high maintainability.",
      icon: Server,
    }
  ];

  const getPillarIcon = (iconName: IntellectualPillar["iconName"]) => {
    switch (iconName) {
      case "trending-up":
        return TrendingUp;
      case "globe":
        return Globe;
      case "book-open":
        return BookOpen;
      default:
        return Compass;
    }
  };

  return (
    <section id="about" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-2 uppercase tracking-wider">
            <span>01 // About &amp; Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Engineering with systems thinking &amp; first-principles
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            A software engineer who synthesizes low-level computer science, full-stack architecture, financial market mechanics, and macroeconomic dynamics.
          </p>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Narrative / Bio */}
          <div className="lg:col-span-7 space-y-5 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {personal.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="text-zinc-600 dark:text-zinc-300">
                {paragraph}
              </p>
            ))}

            {/* Academic Card */}
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="mt-8 p-5 sm:p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                        {edu.institution}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mt-0.5">
                      {edu.degree} in {edu.major} • Minor in {edu.minor}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Principles Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-5 rounded-xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      <Icon className="h-4 w-4 text-sky-500" />
                    </div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Intellectual Pillars: Markets, Business Models & Geopolitics */}
        <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800/80">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Intellectual Framework &amp; Passions</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
              Beyond the terminal: Markets, business models &amp; geopolitics
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              I believe the most impactful engineers don&apos;t just optimize algorithms they understand unit economics, business moats, macroeconomic tides, and how global forces shape technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {intellectualPillars.map((pillar) => {
              const Icon = getPillarIcon(pillar.iconName);

              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/90 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {pillar.category}
                      </span>
                      <div className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 group-hover:text-sky-500 transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-mono mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-3 leading-snug">
                      {pillar.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Themes / Tags */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Key Focus Areas:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.keyThemes.map((theme) => (
                        <span
                          key={theme}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-950/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800/80"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
