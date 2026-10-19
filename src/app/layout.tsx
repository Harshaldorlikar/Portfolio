import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://harshaldorlikar.me"),
  title: "Harshal Dorlikar | Founder & Builder",
  description: "Portfolio of Harshal Dorlikar, a product builder and Founder of Kosmo, an AI Prompt Compiler. I build 100% with AI to create production-ready software and agentic systems.",
  keywords: ["Harshal Dorlikar", "Kosmo", "Agentic AI", "Founder", "Product Builder", "AI Development", "Next.js", "A-41 Housing", "AI Prompt Compiler", "Build with Gemini XPRIZE"],
  authors: [{ name: "Harshal Dorlikar" }],
  creator: "Harshal Dorlikar",
  openGraph: {
    title: "Harshal Dorlikar | Founder & Builder",
    description: "Portfolio of Harshal Dorlikar, a product builder and Founder of Kosmo.",
    url: "https://harshaldorlikar.me",
    siteName: "Harshal Dorlikar Portfolio",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshal Dorlikar | Founder & Builder",
    description: "Portfolio of Harshal Dorlikar, a product builder and Founder of Kosmo.",
    creator: "@HarshalDorlikar",
  },
  verification: {
    google: "AJAn7Tw_Eu2b456_awsX96MTEGy8LeA6G0fZ_XUNszQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Harshal Dorlikar",
    "url": "https://harshaldorlikar.me",
    "jobTitle": "Founder & Product Builder",
    "description": "Harshal Dorlikar is a product builder based in India, currently the Founder of Kosmo. He focuses on building 100% with AI, shipping products at immense speed.",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Y Combinator Startup School",
        "description": "Online Participant (June–August 2022)"
      }
    ],
    "knowsAbout": [
      "Agentic AI Systems",
      "AI Prompt Compilers",
      "System Design",
      "Next.js App Router",
      "Full-Stack Development"
    ],
    "award": [
      "Education and Human Potential Category Prize ($50,000), Build with Gemini XPRIZE (September 2026) for Kosmo"
    ],
    "sameAs": [
      "https://github.com/Harshaldorlikar",
      "https://www.linkedin.com/in/harshaldorlikar/",
      "https://x.com/HarshalDorlikar",
      "https://www.reddit.com/user/DorlikarHarshal/"
    ]
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Harshal Dorlikar Portfolio",
    "url": "https://harshaldorlikar.me"
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
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
