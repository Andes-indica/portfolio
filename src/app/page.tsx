import React from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { OpenSource } from "@/components/OpenSource";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { GithubActivity } from "@/components/GithubActivity";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <OpenSource />
      <Projects />
      <Skills />
      <GithubActivity />
      <Contact />
    </main>
  );
}

