"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Focus", href: "#focus" },
    { name: "Contact", href: "#contact" },
];

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false); // Close mobile menu on click
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-serif font-bold tracking-tight uppercase relative z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Harshal Dorlikar
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScroll(e, item.href)}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider cursor-pointer"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button
                        asChild
                        className="hidden md:inline-flex rounded-sm font-mono text-xs font-bold uppercase tracking-widest bg-gold text-gold-foreground hover:bg-gold/90 transition-colors"
                    >
                        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Work With Me</a>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden relative z-50 p-2 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className="text-2xl font-serif font-medium text-foreground hover:text-gold transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <Button
                            asChild
                            size="lg"
                            className="mt-8 rounded-none font-mono uppercase tracking-widest bg-gold text-gold-foreground hover:bg-gold/90"
                        >
                            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Work With Me</a>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
