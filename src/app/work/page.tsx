import { Work } from "@/components/sections/Work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Harshal Dorlikar",
  description: "Selected projects and software built by Harshal Dorlikar, including Kosmo, A-41 Housing, and autonomous AI systems.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Work />
    </div>
  );
}
