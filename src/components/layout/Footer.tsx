"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, Linkedin, Twitter, Github, Download } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full py-12 md:py-16 border-t border-white/5 bg-black/40 backdrop-blur-md relative overflow-hidden">
            {/* Background glow for interest */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">

                {/* Brand & Socials */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    <div className="space-y-2">
                        <span className="text-xl font-serif font-bold tracking-tight uppercase text-white/90">
                            Harshal Dorlikar
                        </span>
                        <p className="text-muted-foreground text-sm max-w-[300px] font-light">
                            Building products, systems, and team workflows. <br /> Always learning by doing.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://linkedin.com/in/HarshalDorlikar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-gold/10 hover:text-gold transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="https://x.com/HarshalDorlikar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-gold/10 hover:text-gold transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="https://github.com/Harshaldorlikar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-gold/10 hover:text-gold transition-colors">
                            <Github className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center md:items-end gap-6">
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <Button
                            asChild
                            variant="default"
                            size="lg"
                            className="rounded-none font-mono uppercase tracking-widest bg-gold text-gold-foreground hover:bg-gold/90 hover:scale-105 transition-all shadow-lg shadow-gold/20 w-full md:w-auto"
                        >
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                [ WORK WITH ME ]
                            </a>
                        </Button>

                        <a
                            href="https://drive.google.com/file/d/1fsQC_WFV89Ji8zGFEIsQJ3bOnpEyh-UX/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors flex items-center justify-center md:justify-end gap-2 py-2"
                        >
                            Download Resume <Download className="w-3 h-3" />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors group"
                    >
                        Back to Top <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mt-2">
                        © {currentYear} Harshal Dorlikar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
