import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harshal Dorlikar | Product Builder & Engineer",
  description: "Portfolio of Harshal Dorlikar — a product builder and engineer working on agentic AI systems such as AgentOS. Experience includes system design, UX research (including studies conducted by Google), and building AI-first products.",
  keywords: ["Harshal Dorlikar", "AgentOS", "Agentic AI", "Product Builder", "System Design", "UX Research"],
  verification: {
    google: "AJAn7Tw_Eu2b456_awsX96MTEGy8LeA6G0fZ_XUNszQ",
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
    "name": "Harshal Dorlikar",
    "url": "https://harshaldorlikar.me",
    "jobTitle": "Product Builder & Engineer",
    "description": "Harshal Dorlikar is a product builder and engineer based in India, focused on building and experimenting with agentic AI systems and AI-first products. He is the creator of AgentOS and has participated in multiple UX research studies conducted by Google.",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Y Combinator Startup School",
        "description": "Online Participant (June–August 2022)"
      }
    ],
    "knowsAbout": [
      "Agentic AI Systems",
      "AgentOS",
      "System Design",
      "UX Research",
      "Product Prototyping"
    ],
    "sameAs": [
      "https://github.com/Harshaldorlikar",
      "https://www.linkedin.com/in/harshaldorlikar/",
      "https://x.com/HarshalDorlikar"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative`}
      >
        <ParticleBackground />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
