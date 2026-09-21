import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  GitBranch,
  Mail,
  MapPin,
  Network,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const sectionLabel = "text-xs font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400";

export default function Home() {
  const { personal, links, proof, projects, otherProjects, openSource, stack, interests } = portfolioData;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-zinc-200/80 pt-32 pb-20 dark:border-white/10 md:pt-44 md:pb-28">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl dark:bg-sky-500/10" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {personal.status}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-zinc-950 dark:text-white sm:text-6xl md:text-7xl">
              {personal.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              {personal.summary}
            </p>
            <p className="mt-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {personal.education}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button-primary" href="#work">
                View selected work <ArrowRight className="h-4 w-4" />
              </a>
              <a className="button-secondary" href={personal.resume} target="_blank" rel="noreferrer">
                Resume <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-3 divide-x divide-zinc-200 border-y border-zinc-200 py-5 dark:divide-white/10 dark:border-white/10">
            {proof.map((item) => (
              <div key={item.label} className="px-3 first:pl-0 sm:px-6 sm:first:pl-0">
                <div className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">{item.value}</div>
                <div className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400 sm:text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-shell scroll-mt-20">
        <div className="section-heading">
          <div>
            <p className={sectionLabel}>Selected work</p>
            <h2>Built around real workflows.</h2>
          </div>
          <p>Three projects that best represent how I think, build, and ship.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`project-card ${project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-12" : ""}`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
                  {project.label}
                </p>
                <h3>{project.name}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base">
                  {project.description}
                </p>
                <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                  {project.outcome}
                </p>
              </div>

              <div className={`flex flex-col justify-between ${project.featured ? "mt-8 lg:mt-0" : "mt-8"}`}>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span className="tech-pill" key={item}>{item}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
                    <GitBranch className="h-4 w-4" /> Code <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  {project.live && (
                    <a className="text-link" href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live product <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <details className="project-archive group mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/[0.025]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 transition hover:bg-zinc-50 dark:hover:bg-white/[0.025] sm:px-8">
            <span>
              <span className="block font-semibold text-zinc-950 dark:text-white">Explore all projects</span>
              <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                {otherProjects.length} more builds across DevOps, systems, security, automation, and parallel computing.
              </span>
            </span>
            <ChevronDown className="archive-chevron h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200" />
          </summary>

          <div className="grid gap-px border-t border-zinc-200 bg-zinc-200 dark:border-white/10 dark:bg-white/10 md:grid-cols-2">
            {otherProjects.map((project) => (
              <article key={project.name} className="bg-white p-6 dark:bg-zinc-950 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {project.stack.map((item) => <span key={item} className="tech-pill">{item}</span>)}
                </div>
                <a className="text-link mt-6" href={project.github} target="_blank" rel="noreferrer">
                  <GitBranch className="h-4 w-4" /> Repository <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </details>
      </section>

      <section id="open-source" className="scroll-mt-20 border-y border-zinc-200 bg-zinc-100/60 py-20 dark:border-white/10 dark:bg-white/[0.025] md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="section-heading">
            <div>
              <p className={sectionLabel}>Open source</p>
              <h2>Seven merged contributions.</h2>
            </div>
            <p>CI/CD, documentation systems, developer tooling, and security dashboards across three repositories.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {openSource.map((project, index) => (
              <article
                key={project.repo}
                className={`rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-zinc-950 sm:p-8 ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className={`${index === 0 ? "lg:grid lg:grid-cols-[0.6fr_1.4fr] lg:gap-12" : ""}`}>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-600 dark:text-purple-400">
                          {project.contributions.length} merged {project.contributions.length === 1 ? "PR" : "PRs"}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">{project.project}</h3>
                      </div>
                      <a className="text-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.repo}`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.summary}</p>
                    <p className="mt-4 text-xs font-medium text-zinc-400">{project.repo}</p>
                  </div>

                  <div className={`${index === 0 ? "mt-7 lg:mt-0" : "mt-7"} divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-white/10 dark:border-white/10`}>
                    {project.contributions.map((contribution) => (
                      <a
                        key={contribution.number}
                        href={contribution.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-5"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-zinc-900 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                            {contribution.title}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-zinc-500 dark:text-zinc-400">{contribution.detail}</span>
                        </span>
                        <span className="flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                          #{contribution.number} <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell scroll-mt-20">
        <div className="section-heading">
          <div>
            <p className={sectionLabel}>About</p>
            <h2>Technical depth, commercial curiosity.</h2>
          </div>
          <p>I care about how systems work and why they are worth building.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              I&apos;m a third-year Computer Science student at IIIT Dharwad with a Cybersecurity minor. My work spans full-stack products, backend systems, CI/CD, and applied financial analytics.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin className="h-4 w-4 text-sky-500" /> {personal.location}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">Intellectual Framework &amp; Passions</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {interests.map((interest) => (
                <li key={interest.title} className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.025]">
                  <span className="block text-sm font-semibold text-zinc-900 dark:text-white">{interest.title}</span>
                  <span className="mt-1.5 block text-xs leading-5 text-zinc-500 dark:text-zinc-400">{interest.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="stack" className="mt-16 grid gap-5 border-t border-zinc-200 pt-10 dark:border-white/10 md:grid-cols-3">
          {stack.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">{group.label}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-zinc-950 px-6 py-12 text-white shadow-2xl shadow-sky-950/10 sm:px-10 md:px-14 md:py-16 dark:border dark:border-white/10">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Let&apos;s talk</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Looking for an engineer who learns fast and ships carefully?
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                I&apos;m open to internships, engineering collaborations, and thoughtful conversations about software, markets, or infrastructure.
              </p>
            </div>
            <a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-sky-100" href={`mailto:${personal.email}`}>
              <Mail className="h-4 w-4" /> Email me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-7 text-sm text-zinc-400">
            <a className="social-link" href={links.github} target="_blank" rel="noreferrer"><GitBranch className="h-4 w-4" /> GitHub</a>
            <a className="social-link" href={links.linkedin} target="_blank" rel="noreferrer"><Network className="h-4 w-4" /> LinkedIn</a>
            <a className="social-link" href={links.codechef} target="_blank" rel="noreferrer"><Code2 className="h-4 w-4" /> CodeChef</a>
          </div>
        </div>
      </section>
    </main>
  );
}
