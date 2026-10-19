"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const previewProjects = [
    { id: "kosmo", title: "Kosmo", subtitle: "AI Prompt Compiler · XPRIZE Category Prize Winner" },
    { id: "a41", title: "A-41 Housing", subtitle: "Premium Tenant Acquisition Platform" },
    { id: "edai", title: "EdAI", subtitle: "Micro Interactive Learning Platform" },
    { id: "goat", title: "GOAT", subtitle: "Autonomous Sports Betting AI" }
];

export function WorkPreview() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white/90 mb-4">Selected Work</h2>
                        <div className="h-0.5 w-16 bg-gold/50" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-mono text-sm tracking-widest uppercase transition-colors"
                        >
                            View Full Case Studies <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {previewProjects.map((project, index) => (
                        <Link href={`/work#${project.id}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="h-full p-6 bg-white/[0.02] border border-white/5 rounded-lg group hover:border-gold/30 transition-colors cursor-pointer"
                            >
                                <h3 className="text-xl font-serif text-white/90 mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground font-mono text-sm">{project.subtitle}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
