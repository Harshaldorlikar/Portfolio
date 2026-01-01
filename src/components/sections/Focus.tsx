"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lightbulb, Layout, Server, Terminal, ArrowRight } from "lucide-react";

// Updated Data Structure based on User Request
const focusAreas = [
    {
        title: "Product & Strategy",
        icon: Lightbulb,
        items: [
            "Turning ambiguous problems into scoped, buildable products",
            "Making trade-offs between speed, quality, and leverage",
            "Shipping MVPs to learn from real usage, not assumptions"
        ]
    },
    {
        title: "UX & Design",
        icon: Layout,
        items: [
            "Designing workflows users can understand without explanation",
            "Balancing power and simplicity in complex systems",
            "Using UX feedback and research insights to drive product decisions"
        ]
    },
    {
        title: "Architecture & Operations",
        icon: Server,
        items: [
            "Designing systems that tolerate failure and ambiguity",
            "Building internal tools that unblock real work",
            "Thinking in workflows, state, and recovery — not just features"
        ]
    },
    {
        title: "Execution Stack",
        icon: Terminal,
        items: [
            "Rapid prototyping with AI-assisted development",
            "Google Anti-Gravity (Agent First IDE)",
            "Bubble.io for fast, real-world MVPs",
            "GitHub for version control and iteration",
            "Figma for workflow and interaction thinking",
            "Notion & Trello for execution and operational clarity"
        ]
    }
];

export function Focus() {
    return (
        <section id="focus" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-10 opacity-40" />

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-16 space-y-2">
                    <h2 className="text-3xl md:text-5xl font-serif font-medium text-white/90">Focus Areas & Capabilities</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-black/40 backdrop-blur-md border border-white/5 hover:border-gold/30 hover:bg-black/60 transition-all duration-300 group">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-gold/10 transition-colors">
                                        <area.icon className="h-6 w-6 text-white/70 group-hover:text-gold transition-colors" />
                                    </div>
                                    <CardTitle className="text-xl font-serif font-normal text-white/90 group-hover:text-white transition-colors">
                                        {area.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <ul className="space-y-4">
                                        {area.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-base text-muted-foreground/80 leading-relaxed font-light">
                                                <ArrowRight className="h-4 w-4 mr-3 mt-1 text-gold/50 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
