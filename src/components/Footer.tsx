import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} {portfolioData.personal.name}</span>
        <span>Built with Next.js, TypeScript, and Tailwind CSS.</span>
      </div>
    </footer>
  );
}
