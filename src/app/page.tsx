import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { FocusPreview } from "@/components/sections/FocusPreview";
import { ContactPreview } from "@/components/sections/ContactPreview";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <AboutPreview />
      <WorkPreview />
      <ExperiencePreview />
      <FocusPreview />
      <ContactPreview />
    </div>
  );
}
