"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function ContactPreview() {
    return (
        <section className="py-24 bg-background/30 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8 flex flex-col items-center"
                >
                    <Mail className="w-12 h-12 text-gold opacity-80" />
                    <h2 className="text-4xl md:text-5xl font-serif text-white/90">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-xl text-muted-foreground font-mono max-w-2xl">
                        Whether you want to talk about <a href="https://askkosmo.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-2 py-0.5 rounded-sm hover:bg-gold transition-colors inline-block mx-1 font-medium">Kosmo</a>, AI systems, or building products, my inbox is open.
                    </p>
                    
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 mt-4 bg-gold text-gold-foreground font-bold font-mono text-sm tracking-wide uppercase hover:bg-gold/90 transition-all rounded-sm shadow-lg shadow-gold/10 hover:shadow-gold/20"
                    >
                        Get in Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
