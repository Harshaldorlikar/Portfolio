"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { X, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Experience Data ---
const experiences = [
    {
        id: "google",
        type: "Paid User Research",
        role: "UX Research Participant (Selected & Referred)",
        company: "Google",
        dates: "Feb 2022 – Sep 2025",
        summary: "Selected and repeatedly referred to participate in paid, early-stage UX research studies for Google products. Worked directly with Google UX research teams to evaluate workflows, usability, and user behavior prior to public release.",
        tags: ["Product Validation", "Usability Testing", "Feedback Loops"],
        details: {
            overview: "Selected and repeatedly referred to participate in paid, early-stage UX research studies for Google products. Worked directly with Google UX research teams to evaluate workflows, usability, and user behavior prior to public release. This experience significantly shaped how I think about product validation, iteration, and decision-making at scale.",
            products: [
                {
                    name: "YouTube",
                    date: "Feb 2022",
                    focus: "Evaluated content discovery, engagement patterns, and interaction clarity.",
                    learning: "Small UX changes in high-traffic surfaces compound into massive long-term impact."
                },
                {
                    name: "Google One",
                    date: "Dec 2024",
                    focus: "Reviewed pricing clarity, subscription flows, and trust signals.",
                    learning: "Clear communication is as critical as feature depth in subscription products."
                },
                {
                    name: "Circle to Search",
                    date: "Aug 2025 – Sep 2025",
                    focus: "Evaluated discoverability, intent recognition, and contextual relevance for gesture-based search.",
                    learning: "New interaction paradigms require exceptional UX clarity to build user trust."
                }
            ],
            collaboration: [
                "Selected and referred for multiple paid UX research studies",
                "Delivered 30+ pieces of structured feedback",
                "Collaborated with UX research teams (3–5 members per study)",
                "Reviewed unreleased prototypes, workflows, and interaction models"
            ],
            keyTakeaway: "How to communicate feedback clearly and objectively, and how real user behavior often differs from internal assumptions."
        }
    },
    {
        id: "pioneer",
        type: "Internal Tools & Workflow Automation",
        role: "IT Intern",
        company: "Pioneer Automation Services",
        dates: "May 2024 – July 2024",
        summary: "Joined the internal tools team to support senior engineers in improving operational efficiency, reporting accuracy, and workflow automation.",
        tags: ["Process Automation", "Internal Tools", "Documentation"],
        details: {
            overview: "Pioneer Automation Services is a SIEMENS Authorized Partner. I joined the internal tools team to support senior engineers in improving operational efficiency, reporting accuracy, and workflow automation. Worked across backend automation logic, basic frontend interfaces, QA, and documentation.",
            problem: "Internal service reporting relied heavily on manual data extraction from machine logs and spreadsheet-based consolidation, leading to high time costs and errors.",
            work: [
                "Supported development of an internal workflow optimization tool",
                "Helped automate service report generation end-to-end",
                "Assisted with data extraction, cleanup, and business logic implementation",
                "Authored structured documentation (Setup guides, Usage instructions)"
            ],
            impact: "Reduced manual reporting effort significantly and improved the consistency and accuracy of service reports.",
            keyTakeaway: "How internal tools directly impact productivity and why documentation is critical in real teams."
        }
    }
];

export function Experience() {
    const [selectedExp, setSelectedExp] = useState<typeof experiences[0] | null>(null);

    useEffect(() => {
        if (selectedExp) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedExp]);

    return (
        <section id="experience" className="py-24 bg-background/50">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-16 space-y-2">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium">Experience & Research</h2>
                    <div className="h-1 w-20 bg-primary/20 rounded-full" />
                </div>

                <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedExp(exp)}
                            className="relative pl-8 md:pl-12 group cursor-pointer"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:bg-gold group-hover:scale-125 transition-all duration-300" />

                            <div className="p-6 bg-card/30 hover:bg-card/50 border border-transparent hover:border-white/5 rounded-xl transition-all duration-300 -ml-4 md:-ml-0">
                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                                    <h3 className="text-xl font-semibold group-hover:text-gold transition-colors">{exp.role}</h3>
                                    <span className="text-primary font-medium group-hover:text-white transition-colors">@ {exp.company}</span>
                                    {exp.dates && <span className="text-sm text-muted-foreground md:ml-auto font-mono flex items-center gap-2"><Calendar className="w-3 h-3" /> {exp.dates}</span>}
                                </div>

                                <span className="inline-block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 border border-border px-2 py-0.5 rounded-md group-hover:border-gold/30 group-hover:text-gold transition-colors">
                                    {exp.type}
                                </span>

                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {exp.summary}
                                </p>

                                <div className="flex items-center text-sm font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                    VIEW FULL DETAILS <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Experience Detail Modal */}
            <AnimatePresence>
                {selectedExp && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedExp(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            layoutId={selectedExp.id}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="bg-[#0a0a0a] border border-white/10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative z-10 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedExp(null)}
                                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20 cursor-pointer"
                            >
                                <X className="w-5 h-5 text-white/70" />
                            </button>

                            <div className="p-8 md:p-10 border-b border-white/5 bg-white/[0.02]">
                                <h2 className="text-3xl font-serif text-white mb-2">{selectedExp.company}</h2>
                                <h3 className="text-xl text-gold">{selectedExp.role}</h3>
                                <div className="flex items-center gap-3 text-muted-foreground font-mono text-xs tracking-widest uppercase mt-4">
                                    <Calendar className="w-3 h-3" />
                                    {selectedExp.dates}
                                </div>
                            </div>

                            <div className="p-8 md:p-10 space-y-10">
                                {/* Google Specific or Generic Layout */}
                                {selectedExp.id === 'google' ? (
                                    <>
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Overview</h4>
                                            <p className="text-white/90 leading-relaxed">{selectedExp.details.overview}</p>
                                        </div>

                                        <div className="space-y-6">
                                            <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground border-b border-white/5 pb-2">Product Specifics</h4>
                                            {selectedExp.details.products?.map((prod, i) => (
                                                <div key={i} className="pl-4 border-l-2 border-gold/20">
                                                    <div className="flex justify-between items-baseline mb-1">
                                                        <h5 className="font-bold text-white">{prod.name}</h5>
                                                        <span className="text-xs font-mono text-muted-foreground">{prod.date}</span>
                                                    </div>
                                                    <p className="text-sm text-white/80 mb-2">{prod.focus}</p>
                                                    <p className="text-xs text-gold/80 italic">“{prod.learning}”</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Collaboration</h4>
                                            <ul className="space-y-2">
                                                {selectedExp.details.collaboration?.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                        <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    /* Pioneer Logic */
                                    <>
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Overview</h4>
                                            <p className="text-white/90 leading-relaxed">{selectedExp.details.overview}</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Core Problem</h4>
                                                <p className="text-white/80 text-sm leading-relaxed">{selectedExp.details.problem}</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Impact</h4>
                                                <p className="text-white/80 text-sm leading-relaxed">{selectedExp.details.impact}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">What I Worked On</h4>
                                            <ul className="space-y-2">
                                                {selectedExp.details.work?.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                        <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}

                                <div className="pt-8 border-t border-white/5">
                                    <h4 className="text-sm font-mono uppercase tracking-widest text-gold mb-3">Key Takeaway</h4>
                                    <p className="text-xl font-serif text-white leading-relaxed">
                                        “{selectedExp.details.keyTakeaway}”
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
