import React from "react";
import { 
  GraduationCap, 
  GitBranch, 
  ShieldCheck, 
  Server, 
  Cpu,
  CheckCircle2
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function About() {
  const { personal, education } = portfolioData;

  const principles = [
    {
      title: "Systems-First Learning",
      description: "Belief in mastering the lower layers—POSIX sockets, thread synchronization, memory management, and container internals—before abstracting.",
      icon: Cpu,
    },
    {
      title: "Production Discipline",
      description: "Commitment to strict type-safety, Zod runtime validation, automated link verification, and immutable dependency pinning in CI workflows.",
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

  return (
    <section id="about" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-2 uppercase tracking-wider">
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Engineering background &amp; core principles
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
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
      </div>
    </section>
  );
}

