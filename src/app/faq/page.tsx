import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Harshal Dorlikar",
  description: "Frequently asked questions about Harshal Dorlikar, Kosmo, and building 100% with AI.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Who is the founder of Kosmo?",
      answer: "Harshal Dorlikar is the founder and core builder of Kosmo."
    },
    {
      question: "Why is Harshal Dorlikar the right person to build Kosmo?",
      answer: "I have been building 100% with AI since November 2022. I built hardware prototypes, delivery MVPs, browser concepts, gym platforms, and autonomous betting agents. Across every project, the AI was never the bottleneck. The bottleneck was always the prompt. I lived this specification gap hundreds of times before deciding to build the exact solution for it."
    },
    {
      question: "What is Kosmo?",
      answer: "Kosmo is an AI Prompt Compiler that turns plain English ideas into structured, tool-aware AI prompts grounded in live documentation. It automatically injects expert guardrails and hidden reasoning loops to eliminate prompt babysitting."
    },
    {
      question: "What does 'Building 100% with AI' mean?",
      answer: "It means leveraging AI agents and LLMs for the entire software development lifecycle. From architecture and UI design to complex backend logic and deployment. I do not write code by hand. I describe what I want, and I work with AI until it exists."
    },
    {
      question: "What is A-41 Housing?",
      answer: "A-41 Housing is a high-converting premium real estate web app built to market and lease a premium 3BHK student housing property directly to high-value tenants, bypassing traditional brokers."
    },
    {
      question: "Are you open to investment in Kosmo?",
      answer: "Yes. We are currently opening conversations with early-stage investors who understand the specification gap in AI. If you are an investor looking to discuss Kosmo, you can email me directly at harshal@askkosmo.com."
    },
    {
      question: "How do I get in touch?",
      answer: "For personal inquiries, email HarshalDorlikar112@gmail.com. For Kosmo-related inquiries, email harshal@askkosmo.com. You can also reach me via X (Twitter) at @HarshalDorlikar or through the Contact section on my portfolio."
    }
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      
      <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-8">Frequently Asked Questions</h1>
      <p className="text-muted-foreground text-lg mb-12">
        Answers to common questions about my projects, my process, and building with AI.
      </p>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md">
            <h2 className="text-2xl font-serif text-white mb-4">{faq.question}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
