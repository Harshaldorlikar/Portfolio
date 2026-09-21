import { About } from "@/components/sections/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Harshal Dorlikar",
  description: "About Harshal Dorlikar, founder of Kosmo, building software 100% with AI.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
    return (
        <div className="pt-24 pb-12">
            <About />
        </div>
    );
}
