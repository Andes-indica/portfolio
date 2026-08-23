import React from "react";
import { Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { personal, socialLinks } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#080c14] py-12 text-zinc-600 dark:text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copy */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <div className="flex items-center gap-2 font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                <Code2 className="h-3.5 w-3.5" />
              </span>
              <span>{personal.name}</span>
              <span className="text-zinc-400 dark:text-zinc-600 font-normal">(@{personal.githubUsername})</span>
            </div>
            <p className="text-xs text-zinc-500 font-mono mt-1">
              B.Tech in Computer Science &amp; Engineering • IIIT Dharwad &apos;27
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon === "github" ? GithubIcon : social.icon === "linkedin" ? LinkedinIcon : MailIcon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js 15, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

