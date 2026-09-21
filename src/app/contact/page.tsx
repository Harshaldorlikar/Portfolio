import { Contact } from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Harshal Dorlikar",
  description: "Get in touch with Harshal Dorlikar for founder, AI systems, or product architecture inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
    return (
        <div className="pt-24 min-h-screen">
            <Contact />
        </div>
    );
}
