import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Notes | Harshal Dorlikar",
  description: "Essays, thoughts, and original writing by Harshal Dorlikar.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-8">Notes & Writing</h1>
      <p className="text-muted-foreground text-lg mb-12">Essays, thoughts, and original writing on whatever catches my attention.</p>
      <div className="space-y-8">
        <div className="p-8 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md flex flex-col items-center justify-center text-center py-16">
            <h2 className="text-2xl font-serif text-white mb-4">Writing & essays coming soon.</h2>
            <p className="text-muted-foreground">Check back later for new essays and articles.</p>
        </div>
      </div>
    </div>
  );
}
