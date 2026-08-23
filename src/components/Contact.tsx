"use client";

import React, { useState } from "react";
import { 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  MessageSquare,
  Info
} from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy email");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Message received! Thank you for reaching out.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Unable to send message. Please connect directly via email or LinkedIn.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-[#0c121e]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-sky-600 dark:text-sky-400 mb-2 uppercase tracking-wider">
            <span>06 // Contact &amp; Opportunities</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Let&apos;s build something resilient together
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            I am actively seeking <strong>Summer / Fall Software Engineering &amp; DevOps internships</strong> and open-source collaborations. Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  <MailIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Institutional Email
                  </h3>
                  <p className="text-xs text-zinc-500">
                    IIIT Dharwad Student Mail
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 font-mono text-xs">
                <span className="text-zinc-800 dark:text-zinc-200 truncate select-all">
                  {personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  title="Copy email address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                Professional Profiles
              </h3>

              <a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-sky-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0077b5]/10 text-[#0077b5]">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      LinkedIn
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono">
                      prajwal-gv
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-sky-500 transition-colors" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-sky-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-800 text-zinc-100">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      GitHub
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono">
                      @{personal.githubUsername}
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-sky-500 transition-colors" />
              </a>
            </div>

            {/* Location & Status */}
            <div className="p-4 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60 text-xs text-zinc-500 flex items-center justify-between font-mono">
              <span>📍 {personal.location}</span>
              <span className="text-emerald-600 dark:text-emerald-400">Available Q2/Q3 2025</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-sky-500" />
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                    Send a Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  Direct Dispatch
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-sky-500 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-sky-500 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity / Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-sky-500 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, team, or project..."
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-sky-500 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-zinc-950 transition-all disabled:opacity-50"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{status === "submitting" ? "Sending..." : "Submit Message"}</span>
                  </button>

                  {status === "success" && (
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                      ✓ {statusMessage}
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-xs text-rose-600 dark:text-rose-400 font-mono">
                      ✗ {statusMessage}
                    </span>
                  )}
                </div>
              </form>

              {/* Form Backend Integration Helper Note */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-start gap-2 text-[11px] text-zinc-500 leading-relaxed">
                <Info className="h-4 w-4 shrink-0 text-sky-500 mt-0.5" />
                <span>
                  <strong>Developer Note:</strong> Submissions are logged via Next.js API route. To connect to Resend or Formspree, set <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">RESEND_API_KEY</code> or update <code className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded">/src/app/api/contact/route.ts</code>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

