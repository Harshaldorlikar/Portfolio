"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="py-20 relative z-10">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-12 space-y-2">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-white/90">Education & Certifications</h2>
                    <div className="h-1 w-20 bg-primary/20 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h3 className="text-lg font-mono uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">
                            Education
                        </h3>

                        <div className="space-y-8">
                            {/* University */}
                            <div className="group relative">
                                <h4 className="font-semibold text-lg text-white">B.Tech, Electronics & Communication Engineering</h4>
                                <div className="flex justify-between items-baseline text-muted-foreground mt-1 text-sm font-mono">
                                    <span>Ramdeobaba University</span>
                                    <span>Graduating: June 2026</span>
                                </div>
                                <p className="text-sm text-white/70 mt-3 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
                                    Engineering fundamentals combined with hands-on product building, systems thinking, and real-world experimentation outside the classroom.
                                </p>
                            </div>

                            {/* YC */}
                            <div className="group relative">
                                <h4 className="font-semibold text-lg text-white">Y Combinator Startup School (Online)</h4>
                                <div className="flex flex-col text-muted-foreground mt-1 text-sm font-mono">
                                    <span>Participant — Jun 2022 to Aug 2022</span>
                                </div>
                                <p className="text-sm text-white/70 mt-3 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden">
                                    Selected as one of ~10,000 participants globally for YC’s 3-month online startup program focused on early-stage product building, validation, and founder execution.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-lg font-mono uppercase tracking-widest text-muted-foreground border-b border-border/50 pb-2">
                            Certifications
                        </h3>

                        <div className="space-y-8">
                            {/* Google UX */}
                            <div className="group relative">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-semibold text-lg text-white group-hover:text-gold transition-colors">Google UX Design Specialization</h4>
                                        <p className="text-sm text-muted-foreground font-mono">Coursera · Apr 2024</p>
                                    </div>
                                    <Badge variant="secondary" className="text-[10px] uppercase bg-white/5 text-white/50 border-0 group-hover:bg-gold/10 group-hover:text-gold transition-colors">Certified</Badge>
                                </div>

                                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden">
                                    <p className="text-sm text-white/70 mt-3 leading-relaxed">
                                        End-to-end training in user research, interaction design, usability testing, and UX decision-making for real products.
                                    </p>
                                    <a
                                        href="https://www.coursera.org/account/accomplishments/professional-cert/HE3JB59HTABL"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-xs font-bold text-gold mt-2 hover:underline tracking-wider uppercase"
                                    >
                                        View Credential <ExternalLink className="w-3 h-3 ml-1" />
                                    </a>
                                </div>
                            </div>

                            {/* Microsoft AI */}
                            <div className="group relative">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className="font-semibold text-lg text-white group-hover:text-gold transition-colors">Microsoft AI Product Manager</h4>
                                        <p className="text-sm text-muted-foreground font-mono">Coursera · Nov 2025</p>
                                    </div>
                                    <Badge variant="secondary" className="text-[10px] uppercase bg-white/5 text-white/50 border-0 group-hover:bg-gold/10 group-hover:text-gold transition-colors">Certified</Badge>
                                </div>

                                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden">
                                    <p className="text-sm text-white/70 mt-3 leading-relaxed">
                                        Focused on building AI-powered products, defining AI use cases, product strategy, and responsible AI deployment.
                                    </p>
                                    <a
                                        href="https://www.coursera.org/account/accomplishments/professional-cert/IBR9W1S8XCIB"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-xs font-bold text-gold mt-2 hover:underline tracking-wider uppercase"
                                    >
                                        View Credential <ExternalLink className="w-3 h-3 ml-1" />
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
