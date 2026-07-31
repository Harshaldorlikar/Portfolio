"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const previewExperience = [
    { id: "kosmo", role: "Founder", company: "Kosmo", timeline: "June 2026 to Present" },
    { id: "vibecon", role: "Selected Competitor", company: "VibeCon Hackathon", timeline: "25 Mar 2026 to 8 Apr 2026" },
    { id: "edai", role: "Product Manager", company: "EdAI", timeline: "Jan 2026 to June 2026" }
];

export function ExperiencePreview() {
    return (
        <section className="py-24 bg-background/30 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white/90 mb-4">Experience</h2>
                        <div className="h-0.5 w-16 bg-gold/50" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link
                            href="/experience"
                            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-mono text-sm tracking-widest uppercase transition-colors"
                        >
                            View Full History <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                <div className="space-y-6">
                    {previewExperience.map((exp, index) => (
                        <Link href={`/experience#${exp.id}`} key={index} className="block">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:border-gold/30 transition-colors cursor-pointer group"
                            >
                                <div>
                                    <h3 className="text-xl font-serif text-white/90 mb-1 group-hover:text-gold transition-colors">{exp.role}</h3>
                                    <p className="text-muted-foreground font-mono text-sm">{exp.company}</p>
                                </div>
                                <div className="mt-4 sm:mt-0 text-sm font-mono text-gold/80 bg-gold/10 px-3 py-1 rounded-full border border-gold/20 inline-flex self-start sm:self-center">
                                    {exp.timeline}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
