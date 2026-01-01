"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight">
                        Let’s Build Something
                    </h2>

                    <p className="text-xl text-muted-foreground">
                        If you’re building startups, AI-first products, internal tools, or new workflows, I’d love to talk.
                    </p>

                    <p className="text-sm font-mono text-primary/80 uppercase tracking-widest">
                        Especially interested in early-stage, founder-led teams.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 flex-wrap">
                        <Button asChild size="lg" className="h-14 px-8 text-lg font-bold rounded-none shadow-lg shadow-gold/20 bg-gold text-gold-foreground hover:bg-gold/90 hover:shadow-gold/30 hover:scale-105 transition-all uppercase tracking-widest">
                            <a href="mailto:HarshalDorlikar112@gmail.com">
                                [ WORK WITH ME ]
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-14 px-6 text-base rounded-none border-white/10 hover:bg-white/10 hover:text-gold hover:border-gold/30 hover:scale-105 transition-all">
                            <Link href="https://linkedin.com/in/HarshalDorlikar" target="_blank">
                                <Linkedin className="mr-2 h-5 w-5" />
                                LinkedIn
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-14 px-6 text-base rounded-none border-white/10 hover:bg-white/10 hover:text-gold hover:border-gold/30 hover:scale-105 transition-all">
                            <Link href="https://x.com/HarshalDorlikar" target="_blank">
                                <Twitter className="mr-2 h-5 w-5" />
                                X
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-14 px-6 text-base rounded-none border-white/10 hover:bg-white/10 hover:text-gold hover:border-gold/30 hover:scale-105 transition-all">
                            <Link href="https://github.com/Harshaldorlikar" target="_blank">
                                <Github className="mr-2 h-5 w-5" />
                                GitHub
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 p-4 text-sm text-muted-foreground border border-border/50 rounded-none inline-block bg-background/50 backdrop-blur-sm font-mono">
                        <p>HarshalDorlikar112@gmail.com</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
