"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, Linkedin, Twitter, Github, Download } from "lucide-react";
import Link from "next/link";

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
                        <a href="https://www.reddit.com/user/DorlikarHarshal/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-gold/10 hover:text-gold transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 13.28c.04.216.066.438.066.664 0 3.392-3.95 6.144-8.828 6.144S.476 17.336.476 13.944c0-.226.023-.448.066-.664a1.584 1.584 0 01-.653-1.28 1.59 1.59 0 011.59-1.59c.418 0 .794.164 1.076.427 1.058-.77 2.52-1.27 4.14-1.33l.698-3.293.016-.042a.32.32 0 01.386-.226l2.33.496a1.13 1.13 0 012.096.422 1.13 1.13 0 01-1.13 1.13 1.134 1.134 0 01-1.096-.862l-2.08-.442-.62 2.926c1.6.07 3.046.57 4.094 1.33.28-.263.658-.426 1.076-.426a1.59 1.59 0 011.59 1.59c0 .536-.27 1.01-.68 1.296zm-9.766.9a1.13 1.13 0 001.13 1.13 1.13 1.13 0 001.13-1.13 1.13 1.13 0 00-1.13-1.13 1.13 1.13 0 00-1.13 1.13zm6.428 2.92c-.793.793-2.06.86-2.728.86-.668 0-1.935-.067-2.728-.86a.3.3 0 010-.424.3.3 0 01.424 0c.5.5 1.564.68 2.304.68.74 0 1.804-.18 2.304-.68a.3.3 0 01.424 0 .3.3 0 010 .424zm-.18-1.79a1.13 1.13 0 001.13-1.13 1.13 1.13 0 00-1.13-1.13 1.13 1.13 0 00-1.13 1.13 1.13 1.13 0 001.13 1.13z"/></svg>
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
                            <Link href="/contact">
                                [ GET IN TOUCH ]
                            </Link>
                        </Button>

                        <div className="flex justify-center md:justify-end gap-6 mt-2">
                            <Link href="/blogs" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors">
                                Blogs
                            </Link>
                            <Link href="/faq" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors">
                                FAQ
                            </Link>
                        </div>

                        {/* 
                        <a
                            href="https://drive.google.com/file/d/1fsQC_WFV89Ji8zGFEIsQJ3bOnpEyh-UX/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors flex items-center justify-center md:justify-end gap-2 py-2"
                        >
                            Download Resume <Download className="w-3 h-3" />
                        </a>
                        */}
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
