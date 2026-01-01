"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 opacity-30" />

            <div className="container mx-auto px-6 flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-8 max-w-4xl"
                >
                    <Badge variant="outline" className="text-sm py-1.5 px-4 border-white/10 bg-white/5 text-muted-foreground backdrop-blur-sm rounded-full font-mono uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-gold mr-2 inline-block animate-pulse" />
                        Product · Systems · UX · Operations
                    </Badge>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight">
                        Founder-minded product <br className="hidden md:block" />
                        builder designing <span className="italic font-light">AI</span> <br className="hidden md:block" />
                        <span className="italic font-light">systems</span>, workflows, and <br className="hidden md:block" />
                        user experiences.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl font-mono">
                        I work across product management, system architecture, UX, and operations to turn ambiguous ideas into real, usable products.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                        <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-mono rounded-none border-white/20 hover:bg-white/5 uppercase tracking-widest bg-transparent">
                            <Link href="#work">[ VIEW SELECTED WORK ]</Link>
                        </Button>

                        <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-none shadow-lg shadow-gold/10 bg-gold text-gold-foreground hover:bg-gold/90 hover:shadow-gold/20 transition-all uppercase tracking-widest border border-gold/20">
                            <Link href="#contact">
                                [ WORK WITH ME ]
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
