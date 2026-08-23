"use client";

import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0f172a] border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 text-zinc-900 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">
              Deep-Dive Case Study
            </span>
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight font-mono">
            {project.title}
          </h3>

          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>

          {/* Links */}
          <div className="flex items-center gap-3 mt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Source Repository</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Case Study Sections */}
        <div className="space-y-8 text-sm">
          {/* Problem */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-1.5">
              <span>01. The Problem</span>
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-900/40 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/60">
              {caseStudy.problem}
            </p>
          </div>

          {/* Approach & Architecture */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-1.5">
              <span>02. Engineering Approach &amp; Architecture</span>
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
              {caseStudy.approach}
            </p>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/60 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 block mb-1">Architecture Overview:</span>
              {caseStudy.architecture}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-1.5">
              <span>03. Key Features &amp; Implementation</span>
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {caseStudy.keyFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50/70 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/50"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges & Solutions */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-1.5">
              <span>04. Technical Challenges &amp; Resolution</span>
            </h4>
            <div className="space-y-3">
              {caseStudy.technicalChallenges.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 space-y-2"
                >
                  <div className="flex items-start gap-2 text-amber-600 dark:text-amber-400 font-medium">
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Challenge: {item.challenge}</span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300 pl-6 border-l-2 border-emerald-500/40 ml-2">
                    <span>Solution: {item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-1.5">
              <span>05. Concrete Outcome</span>
            </h4>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-xl border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200">
              {caseStudy.outcome}
            </p>
          </div>

          {/* Future Improvements */}
          {caseStudy.futureImprovements.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2 flex items-center gap-1.5">
                <span>06. Future Improvements &amp; Roadmap</span>
              </h4>
              <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
                {caseStudy.futureImprovements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-sky-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-lg text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

