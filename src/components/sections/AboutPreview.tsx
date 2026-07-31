"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function AboutPreview() {
    return (
        <section className="py-24 bg-background/30 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                            <Image
                                src="/profile-hero.jpg"
                                alt="Harshal Dorlikar"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -inset-4 border border-white/5 rounded-3xl -z-10" />
                    </motion.div>

                    {/* Right: Hook */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 text-gold font-mono text-sm tracking-widest uppercase mb-4">
                            <Terminal className="w-4 h-4" />
                            The Method
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white/90 leading-tight">
                            100% with AI. Since 2022.
                        </h2>
                        <div className="space-y-6 text-xl text-muted-foreground/90 font-mono leading-relaxed">
                            <p>
                                When ChatGPT launched in November 2022, I made a decision that shaped everything after it. I would build 100% with AI. Not as a side experiment. As my primary method.
                            </p>
                            <p>
                                Every project on this site was built that way. From the first one in 2023 to the company I am running right now.
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-bold font-mono text-sm tracking-wide uppercase hover:bg-gold/90 transition-colors rounded-sm"
                        >
                            Read More About Me <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
