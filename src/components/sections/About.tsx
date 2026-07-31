"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 bg-background/30 relative overflow-hidden">
            {/* Gradient for section separation */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />

            <div className="container mx-auto px-6 max-w-4xl relative z-20">
                <div className="flex flex-col gap-12 items-center">

                    {/* Top: Image (Moved from Hero) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full max-w-sm"
                    >
                        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
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


                    {/* Bottom: Text Content */}
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
                                I&apos;m deeply interested in <span className="text-white font-normal border-b border-gold/30 pb-0.5">entrepreneurship</span>, product management, system architecture, operations, UI/UX, and design.
                            </p>
                            <p>
                                I enjoy working <span className="text-white font-normal">end-to-end</span>. From understanding user problems to designing workflows and shaping systems that scale.
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
                            <p className="text-2xl md:text-3xl font-serif text-white leading-tight mb-8">
                                “I believe good products come from understanding real workflows, not just building features.”
                            </p>
                        </div>

                        {/* 100% with AI Section */}
                        <div className="pt-8 border-t border-white/10 space-y-6">
                            <div className="inline-flex items-center gap-2 text-gold font-mono text-sm tracking-widest uppercase mb-2">
                                The Method
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif text-white/90">
                                100% with AI. Since 2022.
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground/90 font-mono leading-relaxed">
                                <p>
                                    When ChatGPT launched in November 2022, I made a decision that shaped everything after it. I would build 100% with AI. Not as a side experiment. As my primary method.
                                </p>
                                <p>
                                    Every project on this site was built that way. From the first one in 2023 to the company I am running right now. I do not write code by hand. I describe what I want, and I work with AI until it exists. I have been doing this for over three years.
                                </p>
                                <div className="pl-6 border-l-2 border-gold/30 my-8 py-2">
                                    <p className="text-white/80 font-serif italic text-xl leading-relaxed">
                                        &quot;It works. Unreasonably well. A single person operating this way can ship at the speed of a full engineering team.&quot;
                                    </p>
                                </div>
                                <p>
                                    I have built hardware prototypes, delivery MVPs, browser concepts, an AI operating system, gym platforms, cafe systems, a real estate app, a gamified learning product, and an autonomous betting agent. All solo. All with AI.
                                </p>
                                <p>
                                    But the more I built, the more I noticed a pattern. The AI was never the bottleneck. I was. Specifically, the way I talked to it.
                                </p>
                                <p>
                                    Every project started the same way. I would describe what I wanted. The AI would build something close but wrong. I would spend hours correcting assumptions I did not know I was making. The model did not lack capability. It lacked context. It lacked boundaries. It lacked the things a domain expert would have said out loud before writing a single line of code.
                                </p>
                                <p>
                                    That is the real problem with AI right now. Not that it cannot build. It can. The problem is that the person asking does not know what they do not know. And the AI is not going to tell them. The gap between &quot;I have an idea&quot; and &quot;the AI built exactly what I wanted&quot; is not a knowledge gap. It is a specification gap.
                                </p>
                                
                                <div className="mt-12 pt-8 border-t border-white/10 space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-serif text-white/90">
                                        So I built <a href="https://askkosmo.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-2 py-0.5 rounded-sm hover:bg-gold transition-colors inline-block mx-1 font-medium">Kosmo</a>. A prompt compiler.
                                    </h3>
                                    <p>
                                        You describe what you want in plain English. Kosmo asks the questions a domain expert would ask. It checks current official documentation. It injects guardrails, stopping conditions, and hidden reasoning loops. Then it outputs a structured, tool-aware prompt specifically adapted for the AI you are using, whether that is Claude, Gemini, Cursor, or ChatGPT.
                                    </p>
                                    <p>
                                        It is not another AI wrapper. It is the layer that should have existed from the start. The layer between the person with the idea and the tool that builds it.
                                    </p>
                                    <p className="pb-4">
                                        I have been on both sides of this problem longer than almost anyone. I know what it feels like when the prompt is wrong because I have felt it hundreds of times across dozens of projects over three years. Kosmo is not a theory. It is the solution to a problem I lived.
                                    </p>
                                    
                                    <a
                                        href="https://askkosmo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-bold font-mono text-sm tracking-wide uppercase hover:bg-gold/90 transition-colors rounded-sm"
                                    >
                                        Discover Kosmo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
