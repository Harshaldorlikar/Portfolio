"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, Play, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageItem {
    src: string;
    label: string;
}

const projects = [
    {
        id: "kosmo",
        title: "Kosmo",
        subtitle: "AI Prompt Compiler",
        timeline: "June 2026 to Present",
        summary: "A compiler that turns plain English ideas into structured, tool-aware AI prompts grounded in live documentation. Winner of the Education and Human Potential category prize ($50,000) in the Build with Gemini XPRIZE.",
        tags: ["AI", "Compilers", "Product Design", "Prompt Engineering", "XPRIZE Category Prize"],
        link: "https://askkosmo.com",
        images: [] as ImageItem[],
        details: {
            problem: "Most AI tools fail because of hidden assumptions and tool mismatch. You cannot ask an AI to build something if you do not know what to ask for. The result is endless babysitting, outdated answers, and hallucinated code.",
            solution: "An intelligent prompt compiler that takes raw ideas and automatically injects expert guardrails, strict boundaries, and hidden reasoning loops. It verifies facts against current official documentation before generating a final deployable prompt adapted specifically for tools like Claude, Gemini, or Cursor.",
            role: [
                "Founder and core builder.",
                "Designed the knowledge vault architecture for live documentation syncing.",
                "Engineered the Socratic Loop and Anti-Cliché constraints.",
                "Built the end-to-end user experience and web platform."
            ],
            outcome: "Won the Education and Human Potential category prize ($50,000) in the global Build with Gemini XPRIZE in September 2026, selected from over 26,000 registered builders worldwide. Kosmo is currently offering compiles to early users to eliminate prompt babysitting."
        }
    },
    {
        id: "a41",
        title: "A-41 Housing",
        subtitle: "Premium Tenant Acquisition Platform",
        timeline: "May 2026",
        summary: "A high converting real estate web app built to market and lease a premium 3BHK student housing property.",
        tags: ["Real Estate", "Lead Gen", "Web App", "UI/UX"],
        link: "https://a41housing.com",
        images: [] as ImageItem[],
        details: {
            problem: "When my family bought a flat to diversify their rental income, we needed a way to bypass traditional brokers and directly attract high value tenants.",
            solution: "A fully responsive, highly visual web app showcasing the property's amenities, room options, and location details. It features a direct lead capture funnel and integrated gallery.",
            role: [
                "Solo developer and designer.",
                "Built 100% with AI.",
                "Designed the UX to highlight premium amenities and urgency (limited capacity).",
                "Deployed and optimized the site for search and local discovery."
            ],
            outcome: "Secured high value tenants and fully booked the property before the physical renovations were even completed."
        }
    },
    {
        id: "edai",
        title: "EdAI",
        subtitle: "Micro Interactive Learning Platform",
        timeline: "Jan 2026 to June 2026",
        summary: "An AI platform that turns static textbooks into interactive, game like micro courses.",
        tags: ["EdTech", "AI Agents", "Gamification", "Full Stack"],
        video: "https://youtu.be/4cnpDlm0wxw",
        images: [] as ImageItem[],
        details: {
            problem: "Standard textbooks and traditional online courses suffer from low engagement. Students consume information passively rather than interacting with the material.",
            solution: "A working product built 100% with AI. It ingests static educational content and automatically restructures it into bite sized, game like interactive courses to force active recall and engagement.",
            role: [
                "Solo all rounder intern.",
                "Owned the entire idea from concept to functional product in 5 months.",
                "Built the core AI transformation logic and the gamified front end.",
                "Created the demo and application pitch for Emergent."
            ],
            outcome: "Successfully took a raw idea to a working product in 5 months and used it as the core project for my VibeCon hackathon entry."
        }
    },
    {
        id: "goat",
        title: "GOAT",
        subtitle: "Autonomous Sports Betting AI",
        timeline: "April 2026",
        summary: "A 100% autonomous AI agent designed to execute real time sports betting strategies via shadow betting.",
        tags: ["AI Agent", "Autonomous", "FinTech", "Risk Management"],
        link: "https://github.com/Harshaldorlikar/Goat/",
        images: [
            { src: "/projects/goat/01_home.png", label: "Home" },
            { src: "/projects/goat/02_dashboard.png", label: "Dashboard" },
            { src: "/projects/goat/03_analytics.png", label: "Analytics" },
            { src: "/projects/goat/04_engine.png", label: "Engine" },
            { src: "/projects/goat/05_ledger.png", label: "Ledger" },
            { src: "/projects/goat/06_radar.png", label: "Radar" },
            { src: "/projects/goat/Bet Proofs from stake/Screenshot 2026-07-31 131444.png", label: "Bet Proof 1" },
            { src: "/projects/goat/Bet Proofs from stake/Screenshot 2026-07-31 131521.png", label: "Bet Proof 2" }
        ],
        details: {
            problem: "Testing the true limits of AI autonomy requires high stakes, real time decision making in an unpredictable environment.",
            solution: "An autonomous betting engine with a live dashboard, analytics suite, and internal ledger. Because crypto betting platforms were in a regulatory grey area in India, I engineered a safe mode. The AI agent made autonomous shadow bets in a safe virtual environment, which I then executed in real time on Stake.",
            role: [
                "Core architect and developer.",
                "Built 100% with AI.",
                "Designed the shadow betting infrastructure to bypass regulatory hurdles safely.",
                "Integrated the analytics engine, real time radar, and financial ledger."
            ],
            outcome: "The agent successfully turned $5 into $71 in exactly 4 days (April 22 to April 26). Then, it lost it all. A perfect, humbling case study in autonomous edge cases and risk management."
        }
    },
    {
        id: "cafes",
        title: "Cafe Web Apps",
        subtitle: "Full Stack Operations & Customer Utility",
        timeline: "March 2026",
        summary: "A full stack platform built to uplift local cafe businesses, including bespoke solutions like The Western Brew.",
        tags: ["Freelance", "Full Stack", "Operations", "AI Development"],
        images: [
            { src: "/projects/cafes/01_Home.png", label: "Home" },
            { src: "/projects/cafes/02_Menu.png", label: "Menu" },
            { src: "/projects/cafes/03_Gallery.png", label: "Gallery" },
            { src: "/projects/cafes/04_Orders.png", label: "Orders" },
            { src: "/projects/cafes/05_Announcements.png", label: "Announcements" },
            { src: "/projects/cafes/06_Auth.png", label: "Authentication" },
            { src: "/projects/cafes/07_Checkout.png", label: "Checkout" },
            { src: "/projects/cafes/08_Tracker.png", label: "Order Tracker" },
            { src: "/projects/cafes/09_Staff.png", label: "Staff Portal" },
            { src: "/projects/cafes/10_Admin.png", label: "Admin Dashboard" }
        ],
        details: {
            problem: "Local cafes struggle with fragmented systems. They need a unified way to handle menus, process checkout orders, manage staff, and track daily announcements without expensive enterprise software.",
            solution: "A comprehensive web app tailored for cafes like The Western Brew. It features secure authentication, dynamic menu and gallery management, a live order tracker, and a dedicated admin portal for staff operations.",
            role: [
                "Freelance full stack developer.",
                "Built 100% with AI.",
                "Designed the database architecture for orders and inventory.",
                "Built the customer facing UI and the internal staff dashboard."
            ],
            outcome: "Modernized cafe core operations and significantly improved the utility and ordering experience for their customers."
        }
    },
    {
        id: "gyms",
        title: "Apex Gym Engine",
        subtitle: "Gym Operations & Member Utility Platform",
        timeline: "March 2026",
        summary: "A robust management dashboard and member utility app built to digitize local gym operations and generate leads.",
        tags: ["Freelance", "Member Utility", "Lead Gen", "B2B"],
        images: [
            { src: "/projects/gyms/demo_images/ApexGymEngine/ApexGymEngine_home.png", label: "Apex Home" },
            { src: "/projects/gyms/demo_images/ApexGymEngine/ApexGymEngine_dashboard.png", label: "Apex Dashboard" },
            { src: "/projects/gyms/demo_images/ApexGymEngine/ApexGymEngine_admin.png", label: "Apex Admin" },
            { src: "/projects/gyms/demo_images/ApexGymEngine/ApexGymEngine_resources_diets.png", label: "Apex Diets" },
            { src: "/projects/gyms/demo_images/ApexGymEngine/ApexGymEngine_resources_workouts.png", label: "Apex Workouts" },
            { src: "/projects/gyms/demo_images/bodypowergym/bodypowergym_home.png", label: "BodyPower Home" },
            { src: "/projects/gyms/demo_images/bodypowergym/bodypowergym_dashboard.png", label: "BodyPower Dashboard" },
            { src: "/projects/gyms/demo_images/bodypowergym/bodypowergym_admin.png", label: "BodyPower Admin" },
            { src: "/projects/gyms/demo_images/bodypowergym/bodypowergym_resources_diets.png", label: "BodyPower Diets" },
            { src: "/projects/gyms/demo_images/bodypowergym/bodypowergym_resources_workouts.png", label: "BodyPower Workouts" },
            { src: "/projects/gyms/demo_images/spl-fitness-hub/spl-fitness-hub_home.png", label: "SPL Home" },
            { src: "/projects/gyms/demo_images/spl-fitness-hub/spl-fitness-hub_dashboard.png", label: "SPL Dashboard" },
            { src: "/projects/gyms/demo_images/spl-fitness-hub/spl-fitness-hub_admin.png", label: "SPL Admin" },
            { src: "/projects/gyms/demo_images/spl-fitness-hub/spl-fitness-hub_resources_diets.png", label: "SPL Diets" },
            { src: "/projects/gyms/demo_images/spl-fitness-hub/spl-fitness-hub_resources_workouts.png", label: "SPL Workouts" }
        ],
        details: {
            problem: "Local gyms rely on paper records or basic spreadsheets to manage memberships. Members lack a unified place to track their progress, and gyms miss out on organic digital lead generation.",
            solution: "A dual purpose platform. For the owners: a centralized admin dashboard to track active members, resources, and attendance. For the members: a utility app offering custom workouts, diets, and personal attendance tracking. It also features a secure anonymous feedback portal routing directly to gym decision makers. The public facing pages act as a dedicated lead generation machine.",
            role: [
                "Freelance full stack developer.",
                "Built 100% with AI.",
                "Developed the administrative dashboard and dual user/admin attendance monitoring.",
                "Built the member facing features and anonymous feedback loop.",
                "Designed the public lead generation funnel."
            ],
            outcome: "Uplifted local fitness businesses by providing a modern operational backbone while directly driving new member acquisition."
        }
    },
    {
        id: "vibecon",
        title: "VibeCon Hackathon",
        subtitle: "Emergent AI Builder Competition",
        timeline: "25 Mar 2026 to 8 Apr 2026",
        summary: "An elite, selection led hackathon where I competed by showcasing my AI built projects.",
        tags: ["Hackathon", "Vibe Coding", "AI Development", "Rapid Prototyping"],
        video: "https://youtu.be/jPklcLT2fzE",
        images: [] as ImageItem[],
        details: {
            problem: "Traditional software development is slow. 'Vibe coding' demands taking ideas to functional products in record time using AI, requiring intense speed and execution.",
            solution: "I used my work on EdAI as my core demonstration of building 100% with AI. I created an application pitch and demo video to prove my ability to rapidly prototype and execute complex ideas.",
            role: [
                "Solo builder and competitor.",
                "Scripted, recorded, and presented the EdAI demo video.",
                "Executed entirely within the vibe coding philosophy."
            ],
            outcome: "Out of over 20,000 applicants, I successfully secured entry into Round 2. The founder of Emergent officially reposted my application video, validating my approach to building with AI."
        }
    },
    {
        id: "braxton",
        title: "Braxton",
        subtitle: "Agentic AI Mentorship Project",
        timeline: "Late May 2026 to June 2026",
        summary: "An intensive two month mentorship where I taught peers to build a fully autonomous, stateful AI web agent from scratch.",
        tags: ["Mentorship", "Agentic AI", "System Architecture", "LLM Orchestration"],
        video: "https://www.youtube.com/watch?v=CXD_FSSa7FY",
        videoLabel: "Watch Mentee's Demo",
        images: [] as ImageItem[],
        details: {
            problem: "Many aspiring builders want to leverage AI but fail to bridge the gap between simple prompting and building complex, agentic workflows.",
            solution: "I hosted two friends at my house and taught them how to build software 100% with AI. I guided them from zero knowledge to architecting Braxton, an autonomous background daemon that executes continuous research, negotiation, and engagement loops across SPAs like Reddit and Instagram.",
            role: [
                "Lead mentor and technical architect.",
                "Taught multi tier LLM orchestration (LangGraph, Groq, NVIDIA APIs).",
                "Guided the integration of RAG, persistent memory (Supabase, pgvector), and stealth browser automation (Playwright).",
                "Engineered the cognitive fallbacks and Anti Loop Mandate logic alongside my mentees."
            ],
            outcome: "Successfully transformed absolute beginners into capable AI builders. My mentee shipped a highly complex 5 role autonomous agent that monitors timelines, negotiates in DMs, and synthesizes live web data."
        }
    },
    {
        id: "booz",
        title: "BOOZ Liquor Delivery MVP",
        subtitle: "End-to-End Startup Execution",
        timeline: "Oct 2024 to Dec 2024",
        summary: "A real-world MVP built to test speed, demand, and execution under tight constraints using Bubble.io.",
        tags: ["Product management", "Operations", "No-code dev", "User testing"],
        link: "https://harshaldorlikar112.bubbleapps.io/version-test/register",
        images: [] as ImageItem[],
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
        id: "agentos",
        title: "AgentOS",
        subtitle: "Autonomous AI Operating System Concept",
        timeline: "Aug 2025 | Proof-of-Concept Sprint",
        summary: "An AI-native operating system designed to let autonomous agents perceive, reason, and act inside real software environments.",
        tags: ["Product vision", "System architecture", "Agent roles", "Rule-based AI"],
        link: "https://github.com/Harshaldorlikar/AgentOS",
        video: "https://youtu.be/xkoMZJhX6ho",
        images: [] as ImageItem[],
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
        id: "air-purifier",
        title: "Air Purifier",
        subtitle: "Hardware / IoT Systems Thinking",
        timeline: "Mar 2023 to May 2023",
        summary: "An exploratory hardware project focused on systems thinking where constraints are physical and non-negotiable.",
        tags: ["Systems design", "Hardware", "IoT", " Trade-off analysis"],
        video: "https://youtube.com/shorts/0Tex-9wLsko?feature=share",
        images: [] as ImageItem[],
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

function ImageGallery({ images }: { images: ImageItem[] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxImage, setLightboxImage] = useState<ImageItem | null>(null);

    // Auto-scroll
    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % images.length);
        }, 4000); // 4 seconds per image
        return () => clearInterval(interval);
    }, [images.length]);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setActiveIndex((current) => (current + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setActiveIndex((current) => (current - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="space-y-4">
            {/* Main Carousel View */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/30 group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => setLightboxImage(images[activeIndex])}
                    >
                        <Image
                            src={images[activeIndex].src}
                            alt={images[activeIndex].label}
                            fill
                            loading="lazy"
                            className="object-contain bg-black/50"
                            sizes="(max-width: 1024px) 100vw, 800px"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-sm font-mono text-gold/90 uppercase tracking-widest">{images[activeIndex].label}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Visible Navigation Buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 border border-white/20 rounded-full flex items-center justify-center text-white hover:text-gold hover:border-gold hover:bg-black/80 transition-all backdrop-blur-sm shadow-xl"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 border border-white/20 rounded-full flex items-center justify-center text-white hover:text-gold hover:border-gold hover:bg-black/80 transition-all backdrop-blur-sm shadow-xl"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}
            </div>

            {/* Dot Indicators */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 flex-wrap mt-4">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                i === activeIndex ? "w-8 bg-gold" : "w-2 bg-white/20 hover:bg-white/40"
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImage && (
                    <Portal>
                        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setLightboxImage(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-3xl cursor-zoom-out"
                            />
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="relative z-10 w-full max-w-7xl h-full max-h-[85vh] flex items-center justify-center"
                            >
                                <button
                                    onClick={() => setLightboxImage(null)}
                                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 bg-black/50 border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={lightboxImage.src}
                                        alt={lightboxImage.label}
                                        fill
                                        unoptimized
                                        loading="lazy"
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 100vw, 1200px"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                                    <p className="text-xl font-mono text-gold uppercase tracking-widest text-center">{lightboxImage.label}</p>
                                </div>
                            </motion.div>
                        </div>
                    </Portal>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Work() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        };
    }, [selectedProject]);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const proj = projects.find(p => p.id === hash);
            if (proj) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setSelectedProject(proj);
            }
        }
    }, []);

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
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer h-full"
                        >
                            <div className="h-full bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-gold/30 hover:bg-black/60 transition-all duration-300 flex flex-col group-hover:shadow-[0_0_30px_-5px_var(--gold-shadow)] relative overflow-hidden" style={{ "--gold-shadow": "oklch(0.78 0.15 85 / 0.1)" } as React.CSSProperties}>
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

            <AnimatePresence>
                {selectedProject && (
                    <Portal>
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />
                            <motion.div
                                layoutId={selectedProject.id}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                className="bg-[#0a0a0a] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative z-10 flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="sticky top-0 right-0 z-50 flex justify-end p-4 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 bg-black/50 hover:bg-white/10 border border-white/10 rounded-full transition-colors cursor-pointer pointer-events-auto backdrop-blur-sm"
                                    >
                                        <X className="w-5 h-5 text-white/70" />
                                    </button>
                                </div>
                                <div className="p-6 md:p-12 border-b border-white/5 bg-white/[0.02]">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3 text-gold font-mono text-xs tracking-widest uppercase">
                                            <Calendar className="w-3 h-3" />
                                            {selectedProject.timeline}
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-serif text-white">{selectedProject.title}</h2>
                                        <p className="text-xl text-muted-foreground">{selectedProject.subtitle}</p>
                                        <div className="flex flex-wrap gap-3 mt-4">
                                            {selectedProject.link && (
                                                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${selectedProject.title} project website`} title={`Visit ${selectedProject.title} Project`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-gold-foreground font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-gold/90 transition-colors">
                                                    {selectedProject.link.includes('github.com') ? 'View GitHub' : 'Visit Project'} <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                            {selectedProject.video && (
                                                <a href={selectedProject.video} target="_blank" rel="noopener noreferrer" aria-label={`Watch video demo for ${selectedProject.title}`} title={`Watch ${selectedProject.title} Demo`} className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-white/20 transition-colors border border-white/10">
                                                    {'videoLabel' in selectedProject && typeof selectedProject.videoLabel === 'string' ? selectedProject.videoLabel : "Watch Demo"} <Play className="w-4 h-4 ml-1 fill-current" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 md:p-12 space-y-12">
                                    <div className="grid md:grid-cols-[160px_1fr] gap-8">
                                        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">Overview</h3>
                                        <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                                            {selectedProject.details.problem}
                                        </p>
                                    </div>
                                    
                                    {selectedProject.images && selectedProject.images.length > 0 && (
                                        <div className="grid md:grid-cols-[160px_1fr] gap-8 border-t border-white/5 pt-12">
                                            <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">Gallery</h3>
                                            <ImageGallery images={selectedProject.images} />
                                        </div>
                                    )}

                                    <div className="grid md:grid-cols-[160px_1fr] gap-8 border-t border-white/5 pt-12">
                                        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">What I Built</h3>
                                        <div className="space-y-4 max-w-2xl">
                                            <p className="text-lg text-white/90 leading-relaxed">
                                                {selectedProject.details.solution}
                                            </p>
                                        </div>
                                    </div>
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
                                    <div className="grid md:grid-cols-[160px_1fr] gap-8 border-t border-white/5 pt-12">
                                        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mt-1">Outcome</h3>
                                        <p className="text-lg font-serif italic text-white/80 border-l-2 border-gold/30 pl-4">
                                            &quot;{selectedProject.details.outcome}&quot;
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Portal>
                )}
            </AnimatePresence>
        </section>
    );
}

function Portal({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return createPortal(children, document.body);
}
