"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, Play, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Project Data ---
const projects = [
    {
        id: "agentos",
        title: "AgentOS",
        subtitle: "Autonomous AI Operating System",
        timeline: "Aug 2025 – Aug 2025",
        summary: "An AI-native operating system designed to let autonomous agents perceive, reason, and act inside real software environments.",
        tags: ["Product vision", "System architecture", "Agent roles", "Rule-based AI"],
        link: "https://osagent.tech",
        video: "https://youtu.be/xkoMZJhX6ho",
        details: {
            problem: "Most AI automation tools fail because they rely on brittle scripts, assume perfect environments, and lack true UI understanding. Human workflows are messy.",
            solution: "AgentOS treats AI as an operational worker capable of executing tasks, handling failure, and coordinating across systems using a central 'Brain' and defined roles (Writer, Poster, Supervisor).",
            role: [
                "Product vision and system architecture",
                "Agent role definition and orchestration",
                "Failure-handling and retry logic",
                "End-to-end execution"
            ],
            outcome: "Demonstrated how AI agents can operate as first-class workers, not just assistants."
        }
    },
    {
        id: "agentic-browser",
        title: "Agentic Browser",
        subtitle: "Interface Layer for Autonomous Agents",
        timeline: "Jan 2025 – Present",
        summary: "A browser UI exploring what happens when the browser itself is designed for AI agents, not just humans.",
        tags: ["Product Concept", "UX/UI Design", "Prototyping", "Trust & Safety"],
        link: "https://osagent.tech/Browser.html",
        details: {
            problem: "Traditional browsers hide state from automation and make safe agent execution difficult. AI agents need clarity, guardrails, and observability.",
            solution: "A browser UI where agents operate on the same layer as the user, explaining intent before acting and exposing state visually.",
            role: [
                "Product concept and positioning",
                "Interaction and UX design",
                "Front-end prototyping",
                "Iteration based on trust signals"
            ],
            outcome: "Reframes the browser as an agent-native execution environment."
        }
    },
    {
        id: "booz",
        title: "BOOZ — Liquor Delivery MVP",
        subtitle: "End-to-End Startup Execution",
        timeline: "Oct 2024 – Dec 2024",
        summary: "A real-world MVP built to test speed, demand, and execution under tight constraints using Bubble.io.",
        tags: ["Product management", "Operations", "No-code dev", "User testing"],
        link: "https://harshaldorlikar112.bubbleapps.io/version-test/register",
        details: {
            problem: "Local liquor delivery showed demand, but margins were tight and operations complex. Overbuilding would slow validation.",
            solution: "A functional MVP supporting user onboarding, ordering, and backend workflows. Optimized for clarity and speed.",
            role: [
                "Product management & UX/UI",
                "No-code development",
                "Operational decision-making",
                "User testing and iteration"
            ],
            outcome: "Launched in ~3 weeks, validated demand, and strengthened execution instincts."
        }
    },
    {
        id: "air-purifier",
        title: "Air Purifier",
        subtitle: "Hardware / IoT Systems Thinking",
        timeline: "Mar 2023 – May 2023",
        summary: "An exploratory hardware project focused on systems thinking where constraints are physical and non-negotiable.",
        tags: ["Systems design", "Hardware", "IoT", " Trade-off analysis"],
        video: "https://youtube.com/shorts/0Tex-9wLsko?feature=share",
        details: {
            problem: "Hardware introduces physical failures, component limitations, and cost-performance trade-offs that software does not.",
            solution: "A functional air purifier prototype balancing airflow, filtration efficiency, and component placement.",
            role: [
                "System design & Hardware integration",
                "Testing and iteration",
                "Trade-off analysis"
            ],
            outcome: "Strengthened ability to design end-to-end systems under real-world constraints."
        }
    }
];

export function Work() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProject]);

    return (
        <section id="work" className="py-24 relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-20 space-y-2">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-white/90">Selected Work</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer h-full"
                        >
                            <div className="h-full bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-gold/30 hover:bg-black/60 transition-all duration-300 flex flex-col group-hover:shadow-[0_0_30px_-5px_var(--gold-shadow)] shadow-[var(--gold)] relative overflow-hidden" style={{ "--gold-shadow": "oklch(0.78 0.15 85 / 0.1)" } as React.CSSProperties}>

                                <div className="flex justify-between items-start mb-4">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-serif font-normal text-white/90 group-hover:text-gold transition-colors">{project.title}</h3>
                                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{project.timeline}</p>
                                    </div>
                                    <Badge variant="outline" className="border-white/10 text-xs font-mono text-gold/80 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                        VIEW DETAILS
                                    </Badge>
                                </div>

                                <p className="text-base text-muted-foreground/80 font-mono leading-relaxed mb-8 flex-grow">
                                    {project.summary}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="font-mono text-[10px] font-bold uppercase tracking-wider bg-gold/10 text-gold hover:bg-gold/20 border-0 rounded-sm px-2 py-1"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            layoutId={selectedProject.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="bg-[#0a0a0a] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative z-10 flex flex-col"
                            // Stop click propagation so clicking inside doesn't close it
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20 cursor-pointer"
                            >
                                <X className="w-5 h-5 text-white/70" />
                            </button>

                            {/* Header */}
                            <div className="p-8 md:p-12 border-b border-white/5 bg-white/[0.02]">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-gold font-mono text-xs tracking-widest uppercase">
                                        <Calendar className="w-3 h-3" />
                                        {selectedProject.timeline}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-serif text-white">{selectedProject.title}</h2>
                                    <p className="text-xl text-muted-foreground">{selectedProject.subtitle}</p>

                                    <div className="flex flex-wrap gap-3 mt-4">
                                        {selectedProject.link && (
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-gold-foreground font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-gold/90 transition-colors"
                                            >
                                                Visit Project <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                        {selectedProject.video && (
                                            <a
                                                href={selectedProject.video}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-white/20 transition-colors border border-white/10"
                                            >
                                                Watch Demo <Play className="w-4 h-4 ml-1 fill-current" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-8 md:p-12 space-y-12">
                                {/* Overview */}
                                <div className="grid md:grid-cols-[160px_1fr] gap-8">
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">Overview</h3>
                                    <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                                        {selectedProject.details.problem}
                                    </p>
                                </div>

                                {/* Solution (What I Built) */}
                                <div className="grid md:grid-cols-[160px_1fr] gap-8 border-t border-white/5 pt-12">
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">What I Built</h3>
                                    <div className="space-y-4 max-w-2xl">
                                        <p className="text-lg text-white/90 leading-relaxed">
                                            {selectedProject.details.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* My Role */}
                                <div className="grid md:grid-cols-[160px_1fr] gap-8 border-t border-white/5 pt-12">
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">My Role</h3>
                                    <ul className="space-y-3">
                                        {selectedProject.details.role.map((role, i) => (
                                            <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                                                {role}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Outcome */}
                                <div className="grid md:grid-cols-[160px_1fr] gap-8 border-t border-white/5 pt-12">
                                    <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">Outcome</h3>
                                    <p className="text-lg font-serif italic text-white/80 border-l-2 border-gold/30 pl-4">
                                        "{selectedProject.details.outcome}"
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
