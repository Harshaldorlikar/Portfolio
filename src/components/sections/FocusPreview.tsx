"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Rocket, Target } from "lucide-react";

const previewFocus = [
    { title: "AI Systems", icon: BrainCircuit, description: "Building autonomous agents and intelligent workflows." },
    { title: "Product Velocity", icon: Rocket, description: "Moving from 0 to 1 with unprecedented speed using AI." },
    { title: "System Architecture", icon: Target, description: "Designing robust, scalable backends for complex ideas." }
];

export function FocusPreview() {
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
                        <h2 className="text-4xl md:text-5xl font-serif text-white/90 mb-4">Core Focus</h2>
                        <div className="h-0.5 w-16 bg-gold/50" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link
                            href="/focus"
                            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-mono text-sm tracking-widest uppercase transition-colors"
                        >
                            Explore Methodologies <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {previewFocus.map((focus, index) => (
                        <Link href="/focus" key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="h-full p-6 bg-white/[0.02] border border-white/5 rounded-xl group hover:border-gold/30 transition-all cursor-pointer"
                            >
                                <focus.icon className="w-8 h-8 text-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-xl font-serif text-white/90 mb-3 group-hover:text-gold transition-colors">{focus.title}</h3>
                                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{focus.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
