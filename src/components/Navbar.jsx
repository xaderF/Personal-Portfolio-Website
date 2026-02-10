import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";

const navItems = [
    {name: "Home", href: "/"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "/projects"},
    {name: "GitHub", href: "https://github.com/xaderF", external: true},
    {name: "Resume", href: "/resume"},
    {name: "Contact", href: "/contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Helper to scroll to section or top
    const scrollToSection = (id) => {
        setTimeout(() => {
            if (!id || id === "hero" || id === "top") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }
        }, 100);
    };

    // Handle nav click for Home/About/Skills
    const handleNavClick = (href) => {
        if (href === "/") {
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => scrollToSection("top"), 200);
            } else {
                scrollToSection("top");
            }
        } else if (href.startsWith("#")) {
            const sectionId = href.replace("#", "");
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => scrollToSection(sectionId), 200);
            } else {
                scrollToSection(sectionId);
            }
        } else {
            navigate(href);
        }
    };

    // Always scroll to top on refresh
    useEffect(() => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0 });
        }
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav  
            className={cn("fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >

            <div className="container flex items-center justify-between md:pr-14 lg:pr-16">
                <button
                type="button"
                className="text-lg lg:text-xl font-bold text-primary flex items-center bg-transparent border-none cursor-pointer p-0"
                onClick={() => handleNavClick("/")}
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Ryan Yu </span> Portfolio
                    </span>
                </button>
                
                {/* desktop nav */}
                <div className="hidden md:flex items-center md:gap-4 lg:gap-6 xl:gap-8 md:text-sm lg:text-base">
                    {navItems.map((item, key) => (
                        item.external ? (
                            <a
                                key={key}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 inline-flex items-center gap-1.5 whitespace-nowrap"
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.name}
                                <Github size={16} />
                            </a>
                        ) : (
                            <button
                                key={key}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer whitespace-nowrap"
                                onClick={() => handleNavClick(item.href)}
                                style={{ background: "none", border: "none", padding: 0 }}
                            >
                                {item.name}
                            </button>
                        )
                    ))}
                </div>
                
                {/* mobile nav */}

                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}   
                </button>

                <div 
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen 
                            ? "opacity-100 pointer-events-auto" 
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            item.external ? (
                                <a
                                    key={key}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300 inline-flex items-center justify-center gap-2 text-xl"
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                    <Github size={18} />
                                </a>
                            ) : (
                                <button
                                    key={key}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer text-xl"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        handleNavClick(item.href);
                                    }}
                                    style={{ background: "none", border: "none", padding: 0 }}
                                >
                                    {item.name}
                                </button>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
