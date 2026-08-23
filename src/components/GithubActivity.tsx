import React from "react";
import { 
  ExternalLink, 
  CheckCircle2
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export function GithubActivity() {
  const { githubData } = portfolioData;

  return (
    <section id="github" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-2 uppercase tracking-wider">
            <span>05 // GitHub Activity</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Public activity &amp; codebase footprint
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            A curated summary of public repository metrics, language distribution, and open-source contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Stats & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            {/* Overview Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 text-white dark:bg-zinc-800 dark:text-zinc-100">
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                      @{githubData.username}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono">
                      {githubData.totalPublicRepos} Public Repositories
                    </p>
                  </div>
                </div>

                <a
                  href={githubData.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-zinc-950 transition-colors"
                >
                  <span>View GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Highlights List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
                  Key Engineering Contributions
                </h4>
                <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                  {githubData.highlightNotes.map((note, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Language Distribution */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-xs h-full flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-mono mb-1">
                  Language Distribution
                </h3>
                <p className="text-xs text-zinc-500 mb-6">
                  Based on public repository codebase volume and active commits.
                </p>

                {/* Progress Bar Stack */}
                <div className="h-3 w-full rounded-full overflow-hidden flex bg-zinc-100 dark:bg-zinc-800 mb-6">
                  {githubData.primaryLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{
                        width: lang.share,
                        backgroundColor: lang.color,
                      }}
                      title={`${lang.name}: ${lang.share}`}
                      className="h-full transition-all"
                    />
                  ))}
                </div>

                {/* Legend */}
                <div className="space-y-3">
                  {githubData.primaryLanguages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="font-mono text-zinc-700 dark:text-zinc-300 font-medium">
                          {lang.name}
                        </span>
                      </div>
                      <span className="font-mono text-zinc-500">
                        {lang.share}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-[11px] text-zinc-500 font-mono text-center">
                Static verified data snapshot • Zero third-party API rate limits
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

