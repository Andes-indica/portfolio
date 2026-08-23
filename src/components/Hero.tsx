import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export function Hero() {
  const { personal, socialLinks } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="ambient-glow -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sky-500/10 dark:bg-sky-500/15" />
      <div className="ambient-glow top-40 right-[-100px] w-[350px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/10" />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{personal.status}</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] mb-5">
            Hi, I&apos;m <span className="text-sky-600 dark:text-sky-400">{personal.preferredName}</span>.
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-zinc-700 dark:text-zinc-300 mb-6 leading-snug">
            {personal.headline}
          </p>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            Computer Science student at <strong>IIIT Dharwad</strong> specializing in Cybersecurity. I engineer resilient backend services, automate release CI/CD pipelines, and bring a first-principles systems mindset to software architecture, financial market mechanics, and business models.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-zinc-950 transition-all shadow-sm group"
            >
              <span>View Featured Projects</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700/80 transition-colors"
            >
              <span>Get in Touch</span>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:ml-2">
              {socialLinks.map((social) => {
                const Icon = social.icon === "github" ? GithubIcon : social.icon === "linkedin" ? LinkedinIcon : MailIcon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          {personal.quickStats.map((stat) => (
            <div
              key={stat.label}
              className="p-3.5 sm:p-4 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/60"
            >
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                {stat.label}
              </div>
              <div className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5 truncate">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500 truncate">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
