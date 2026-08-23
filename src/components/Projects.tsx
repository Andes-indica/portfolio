"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  BookOpen, 
  Star
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";
import { Project } from "@/types/portfolio";
import { ProjectModal } from "@/components/ProjectModal";

export function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeCaseStudyProject, setActiveCaseStudyProject] = useState<Project | null>(null);

  const categories = ["All", "Full Stack", "DevOps & Cloud", "Cybersecurity & Systems", "Quant & AI"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-2 uppercase tracking-wider">
              <span>03 // Featured Projects</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Systems, infrastructure &amp; full-stack software
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
              Selected repositories demonstrating backend architecture, financial risk quantification, container security, low-level socket programming, and university scheduling systems.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs border border-zinc-200/80 dark:border-zinc-700/60"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl bg-white dark:bg-zinc-900/60 border transition-all duration-200 flex flex-col justify-between overflow-hidden group ${
                project.featured
                  ? "border-zinc-300 dark:border-zinc-800 hover:border-sky-500/50 dark:hover:border-sky-500/40 shadow-xs hover:shadow-md"
                  : "border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              {/* Card Header & Content */}
              <div className="p-6">
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.stars && project.stars > 0 ? (
                      <span className="inline-flex items-center gap-1 text-xs text-amber-500 font-mono">
                        <Star className="h-3 w-3 fill-amber-500" />
                        <span>{project.stars}</span>
                      </span>
                    ) : null}

                    {project.featured && (
                      <span className="text-[10px] font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-200 dark:border-sky-800">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors font-mono mb-2">
                  {project.title}
                </h3>

                {/* Tagline / Description */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-950/70 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-4 bg-zinc-50/70 dark:bg-zinc-950/40 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/60 transition-colors"
                    >
                      <span>Live</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>

                {/* Case Study Trigger */}
                {project.hasCaseStudy && (
                  <button
                    onClick={() => setActiveCaseStudyProject(project)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 dark:hover:bg-sky-900/50 border border-sky-200 dark:border-sky-800/80 transition-colors"
                  >
                    <BookOpen className="h-3 w-3" />
                    <span>Case Study</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeCaseStudyProject}
        onClose={() => setActiveCaseStudyProject(null)}
      />
    </section>
  );
}

