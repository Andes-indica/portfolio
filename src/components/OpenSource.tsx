import React from "react";
import { 
  ExternalLink, 
  GitMerge, 
  CheckCircle2, 
  Clock
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function OpenSource() {
  const { openSource } = portfolioData;
  const orbit = openSource.find((p) => p.id === "orbit");
  const otherProjects = openSource.filter((p) => p.id !== "orbit");

  return (
    <section id="open-source" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-[#0c121e]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-2 uppercase tracking-wider">
            <span>02 // Open Source</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Verified open-source contributions
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Active contributor to production open-source ecosystems, focusing on CI/CD automation, release pipelines, linting infrastructure, and technical documentation.
          </p>
        </div>

        {/* Orbit Featured Showcase */}
        {orbit && (
          <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
            <div className="ambient-glow top-0 right-0 w-80 h-80 bg-sky-500/10 dark:bg-sky-500/15" />

            {/* Orbit Header Info */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 font-mono">
                    {orbit.name}
                  </h3>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                    {orbit.repo}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    TypeScript • Bun Monorepo
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 max-w-3xl">
                  {orbit.description}
                </p>
              </div>

              <a
                href={orbit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-colors shrink-0"
              >
                <span>View Repository</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Pull Requests List */}
            <div className="relative z-10 mt-6 space-y-4">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Key Orbit Pull Requests &amp; CI Engineering
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {orbit.pullRequests.map((pr) => {
                  const isMerged = pr.state === "merged";
                  const isOpen = pr.state === "open";

                  return (
                    <div
                      key={pr.number}
                      className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/90 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                    >
                      <div>
                        {/* PR Header / State */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">
                            #{pr.number}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium ${
                              isMerged
                                ? "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800"
                                : isOpen
                                ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800"
                                : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700"
                            }`}
                          >
                            {isMerged ? (
                              <>
                                <GitMerge className="h-3 w-3" /> Merged
                              </>
                            ) : isOpen ? (
                              <>
                                <Clock className="h-3 w-3" /> Under Review
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="h-3 w-3" /> Completed
                              </>
                            )}
                          </span>
                        </div>

                        {/* Title */}
                        <h5 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-2 mb-2 font-mono">
                          {pr.title}
                        </h5>

                        {/* Summary */}
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                          {pr.summary}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="space-y-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                          {pr.keyHighlights.slice(0, 2).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-sky-500 mt-0.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* View PR Link */}
                      <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800/80 inline-flex items-center justify-between text-xs font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                      >
                        <span>View Pull Request #{pr.number}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Other Open Source Contributions */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Additional Open-Source Contributions
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="p-5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                      {project.name}
                    </h4>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">
                    {project.impactSummary}
                  </p>

                  <div className="space-y-2">
                    {project.pullRequests.map((pr) => (
                      <a
                        key={pr.number}
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800/60 hover:border-sky-500/40 transition-colors text-xs"
                      >
                        <div className="flex items-center justify-between text-zinc-800 dark:text-zinc-200 font-mono">
                          <span>PR #{pr.number}: {pr.title}</span>
                          <span className="text-[10px] text-purple-600 dark:text-purple-400">Merged</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

