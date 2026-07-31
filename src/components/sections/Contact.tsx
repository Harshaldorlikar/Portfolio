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
                        Let’s Connect
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Whether you want to talk about <a href="https://askkosmo.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-2 py-0.5 rounded-sm hover:bg-gold transition-colors inline-block mx-1 font-medium">Kosmo</a>, AI systems, or building products, my inbox is open.
                    </p>

                    <p className="text-sm font-mono text-primary/80 uppercase tracking-widest">
                        Direct line for founders and early-stage teams.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 flex-wrap">
                        <Button asChild size="lg" className="h-14 px-8 text-lg font-bold rounded-none shadow-lg shadow-gold/20 bg-gold text-gold-foreground hover:bg-gold/90 hover:shadow-gold/30 hover:scale-105 transition-all uppercase tracking-widest">
                            <a href="mailto:HarshalDorlikar112@gmail.com">
                                [ GET IN TOUCH ]
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
                        <Button asChild variant="outline" size="lg" className="h-14 px-6 text-base rounded-none border-white/10 hover:bg-white/10 hover:text-gold hover:border-gold/30 hover:scale-105 transition-all">
                            <Link href="https://www.reddit.com/user/DorlikarHarshal/" target="_blank">
                                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 13.28c.04.216.066.438.066.664 0 3.392-3.95 6.144-8.828 6.144S.476 17.336.476 13.944c0-.226.023-.448.066-.664a1.584 1.584 0 01-.653-1.28 1.59 1.59 0 011.59-1.59c.418 0 .794.164 1.076.427 1.058-.77 2.52-1.27 4.14-1.33l.698-3.293.016-.042a.32.32 0 01.386-.226l2.33.496a1.13 1.13 0 012.096.422 1.13 1.13 0 01-1.13 1.13 1.134 1.134 0 01-1.096-.862l-2.08-.442-.62 2.926c1.6.07 3.046.57 4.094 1.33.28-.263.658-.426 1.076-.426a1.59 1.59 0 011.59 1.59c0 .536-.27 1.01-.68 1.296zm-9.766.9a1.13 1.13 0 001.13 1.13 1.13 1.13 0 001.13-1.13 1.13 1.13 0 00-1.13-1.13 1.13 1.13 0 00-1.13 1.13zm6.428 2.92c-.793.793-2.06.86-2.728.86-.668 0-1.935-.067-2.728-.86a.3.3 0 010-.424.3.3 0 01.424 0c.5.5 1.564.68 2.304.68.74 0 1.804-.18 2.304-.68a.3.3 0 01.424 0 .3.3 0 010 .424zm-.18-1.79a1.13 1.13 0 001.13-1.13 1.13 1.13 0 00-1.13-1.13 1.13 1.13 0 00-1.13 1.13 1.13 1.13 0 001.13 1.13z"/></svg>
                                Reddit
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 p-6 border border-gold/20 bg-gold/5 mx-auto rounded-sm">
                        <h3 className="text-xl font-serif text-white mb-2">Kosmo is raising.</h3>
                        <p className="text-muted-foreground mb-4 font-mono text-sm max-w-md mx-auto">We are currently opening conversations with early-stage investors who understand the specification gap in AI.</p>
                        <Button asChild size="sm" className="h-10 bg-gold text-gold-foreground hover:bg-gold/90 rounded-none uppercase tracking-widest text-xs font-bold px-6 shadow-lg shadow-gold/10">
                            <a href="mailto:harshal@askkosmo.com">
                                Contact for Investment
                            </a>
                        </Button>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="p-4 text-sm text-muted-foreground border border-border/50 rounded-none bg-background/50 backdrop-blur-sm font-mono text-center flex-1 w-full sm:w-auto min-w-[280px]">
                            <span className="block text-white/50 text-xs mb-1">Personal</span>
                            <a href="mailto:HarshalDorlikar112@gmail.com" className="hover:text-gold transition-colors">HarshalDorlikar112@gmail.com</a>
                        </div>
                        <div className="p-4 text-sm text-gold border border-gold/30 rounded-none bg-gold/5 backdrop-blur-sm font-mono text-center flex-1 w-full sm:w-auto min-w-[280px]">
                            <span className="block text-gold/50 text-xs mb-1">Kosmo Inquiries</span>
                            <a href="mailto:harshal@askkosmo.com" className="hover:text-gold transition-colors">harshal@askkosmo.com</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
