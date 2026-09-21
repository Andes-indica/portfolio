"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolioData";

const links = [
  { label: "Work", href: "#work" },
  { label: "Open source", href: "#open-source" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-white">
          {portfolioData.personal.name}
          <span className="ml-2 text-zinc-400">/ software engineer</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={portfolioData.personal.resume} target="_blank" rel="noreferrer" className="hidden rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-100 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/5 sm:inline-flex">
            Resume
          </a>
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="grid h-9 w-9 place-items-center rounded-full border border-zinc-300 text-zinc-600 transition hover:bg-zinc-100 dark:border-white/15 dark:text-zinc-300 dark:hover:bg-white/5"
            aria-label="Toggle color theme"
          >
            {mounted && resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button type="button" className="grid h-9 w-9 place-items-center rounded-full md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-zinc-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-zinc-950 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
