import { Focus } from "@/components/sections/Focus";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Focus & Philosophy | Harshal Dorlikar",
  description: "Core focus areas and operating principles of Harshal Dorlikar.",
  alternates: {
    canonical: "/focus",
  },
};

export default function FocusPage() {
    return (
        <div className="pt-24 min-h-screen">
            <Focus />
        </div>
    );
}
