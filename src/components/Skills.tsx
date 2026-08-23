import React from "react";
import { 
  Code2, 
  Layout, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Wrench
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SkillCategory } from "@/types/portfolio";

export function Skills() {
  const { skillCategories } = portfolioData;

  const getIcon = (iconName: SkillCategory["iconName"]) => {
    switch (iconName) {
      case "code":
        return Code2;
      case "layout":
        return Layout;
      case "server":
        return Server;
      case "cloud":
        return Cloud;
      case "shield":
        return ShieldCheck;
      case "wrench":
        return Wrench;
      default:
        return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-[#0c121e]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-2 uppercase tracking-wider">
            <span>04 // Technical Capabilities</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Skills &amp; technical stack
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Categorized overview of languages, frameworks, infrastructure platforms, security scanners, and systems tools verified through active codebases and open-source contributions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = getIcon(category.iconName);

            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/90 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                          skill.highlight
                            ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 font-medium"
                            : "bg-zinc-50 dark:bg-zinc-950/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800/80"
                        }`}
                      >
                        {skill.highlight && (
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
                  <span>{category.skills.length} verified technologies</span>
                  <span>Production-tested</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

