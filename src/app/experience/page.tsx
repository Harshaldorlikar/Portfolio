import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Harshal Dorlikar",
  description: "Experience, background, and career history of Harshal Dorlikar.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperiencePage() {
    return (
        <div className="pt-24 min-h-screen">
            <Experience />
            <Education />
        </div>
    );
}
