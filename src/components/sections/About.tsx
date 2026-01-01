"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 bg-background/30 relative overflow-hidden">
            {/* Gradient for section separation */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />

            <div className="container mx-auto px-6 max-w-6xl relative z-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Image (Moved from Hero) */}
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
                        {/* Decorative subtle border/frame */}
                        <div className="absolute -inset-4 border border-white/5 rounded-3xl -z-10" />
                    </motion.div>


                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-serif font-medium">About Me</h2>
                            <div className="h-0.5 w-16 bg-gold/50" />
                        </div>

                        <div className="space-y-6 text-xl text-muted-foreground/90 font-light leading-relaxed">
                            <p>
                                I'm deeply interested in <span className="text-white font-normal border-b border-gold/30 pb-0.5">entrepreneurship</span>, product management, system architecture, operations, UI/UX, and design.
                            </p>
                            <p>
                                I enjoy working <span className="text-white font-normal">end-to-end</span> — from understanding user problems, to designing workflows, to shaping systems that scale.
                            </p>
                            <p>
                                I prefer shipping prototypes over writing long documents, and I learn fastest by building real things and iterating based on feedback.
                            </p>
                        </div>

                        {/* Operating Principle (Styled simpler as per new flow) */}
                        <div className="pt-4">
                            <h3 className="text-sm font-mono uppercase tracking-widest text-gold mb-4 opacity-80">
                                Operating Principle
                            </h3>
                            <p className="text-2xl md:text-3xl font-serif text-white leading-tight">
                                “I believe good products come from understanding real workflows, not just building features.”
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
