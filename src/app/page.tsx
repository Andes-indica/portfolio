import {
  ArrowRight,
  ArrowUpRight,
  Check,
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
  const { personal, links, proof, projects, openSource, stack, interests } = portfolioData;

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
      </section>

      <section id="open-source" className="scroll-mt-20 border-y border-zinc-200 bg-zinc-100/60 py-20 dark:border-white/10 dark:bg-white/[0.025] md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className={sectionLabel}>Open source</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-white sm:text-4xl">
              Production work in Orbit.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">{openSource.summary}</p>
            <a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 hover:text-sky-600 dark:text-white dark:hover:text-sky-400" href={openSource.url} target="_blank" rel="noreferrer">
              {openSource.repo} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-white/10 dark:border-white/10">
            {openSource.contributions.map((contribution) => (
              <a
                key={contribution.number}
                href={contribution.url}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-2 py-5 transition-colors sm:grid-cols-[70px_1fr_auto] sm:items-start sm:gap-5"
              >
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">MERGED</span>
                <span>
                  <span className="block font-semibold text-zinc-900 group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                    {contribution.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-zinc-500 dark:text-zinc-400">{contribution.detail}</span>
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                  #{contribution.number} <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
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
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">What keeps me curious</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {interests.map((interest) => (
                <li key={interest} className="rounded-xl border border-zinc-200 bg-white p-4 text-sm leading-6 text-zinc-600 dark:border-white/10 dark:bg-white/[0.025] dark:text-zinc-300">
                  {interest}
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
