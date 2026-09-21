import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const siteUrl = "https://prajwal-g-v.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prajwal G V | Software Engineer",
  description: "Software engineer and IIIT Dharwad student building full-stack systems, financial infrastructure, DevOps automation, and open-source software.",
  keywords: ["Prajwal G V", "Software Engineer", "IIIT Dharwad", "Full Stack", "DevOps", "TypeScript", "Python", "Cybersecurity"],
  authors: [{ name: "Prajwal G V", url: "https://github.com/Andes-indica" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Prajwal G V | Software Engineer",
    description: "Full-stack systems, financial infrastructure, DevOps, and open-source work.",
    siteName: "Prajwal G V",
    images: [{ url: "https://avatars.githubusercontent.com/u/195678752?v=4", width: 400, height: 400, alt: "Prajwal G V" }],
  },
  twitter: {
    card: "summary",
    title: "Prajwal G V | Software Engineer",
    description: "Full-stack systems, financial infrastructure, DevOps, and open-source work.",
    images: ["https://avatars.githubusercontent.com/u/195678752?v=4"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prajwal G V",
    alternateName: "Andes-indica",
    url: siteUrl,
    email: "mailto:23bcs048@iiitdwd.ac.in",
    alumniOf: { "@type": "CollegeOrUniversity", name: "Indian Institute of Information Technology Dharwad" },
    sameAs: [
      "https://github.com/Andes-indica",
      "https://linkedin.com/in/prajwal-gv-786a8629a/",
      "https://www.codechef.com/users/andesindica25",
    ],
    knowsAbout: ["Software engineering", "Full-stack development", "DevOps", "Cybersecurity", "Financial markets"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
