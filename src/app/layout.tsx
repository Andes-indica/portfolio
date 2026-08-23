import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://andes-indica.dev"),
  title: {
    default: "Prajwal G V (Andes-indica) | Software Engineer & CS Undergraduate",
    template: "%s | Prajwal G V",
  },
  description:
    "Production portfolio of Prajwal G V (Andes-indica) — 3rd-year CS & Cybersecurity student at IIIT Dharwad. Orbit open-source contributor, full-stack engineer, and DevOps practitioner.",
  keywords: [
    "Prajwal G V",
    "Andes-indica",
    "Software Engineer Portfolio",
    "IIIT Dharwad",
    "Orbit Contributor",
    "Full-Stack Developer",
    "DevOps Engineer",
    "TypeScript",
    "Bun",
    "Docker",
    "Python",
    "Cybersecurity",
  ],
  authors: [{ name: "Prajwal G V", url: "https://github.com/Andes-indica" }],
  creator: "Prajwal G V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andes-indica.dev",
    title: "Prajwal G V (Andes-indica) | Software Engineer Portfolio",
    description:
      "CS & Cybersecurity undergraduate at IIIT Dharwad. Open-source contributor to Orbit, backend monorepo architect, and DevOps practitioner.",
    siteName: "Prajwal G V Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/195678752?v=4",
        width: 400,
        height: 400,
        alt: "Prajwal G V GitHub Avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Prajwal G V (Andes-indica) | Software Engineer",
    description:
      "CS & Cybersecurity undergraduate at IIIT Dharwad. Orbit contributor, full-stack & DevOps engineer.",
    images: ["https://avatars.githubusercontent.com/u/195678752?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prajwal G V",
    alternateName: "Andes-indica",
    url: "https://github.com/Andes-indica",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Indian Institute of Information Technology Dharwad",
    },
    jobTitle: "Software Engineering Intern / Student",
    sameAs: [
      "https://github.com/Andes-indica",
      "http://linkedin.com/in/prajwal-gv-786a8629a/",
    ],
    knowsAbout: [
      "Computer Science",
      "Cybersecurity",
      "Full-Stack Development",
      "DevOps",
      "Cloud Computing",
      "TypeScript",
      "Bun",
      "Docker",
      "Python",
      "CI/CD Release Automation",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-zinc-50 dark:bg-[#090d16] text-zinc-900 dark:text-zinc-100 min-h-screen flex flex-col selection:bg-sky-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

