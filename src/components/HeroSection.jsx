import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const heroTypedLines = [
    "I am a Computer Science & Statistics student at the University of Toronto!",
    "I am an aspiring software engineer!",
    "I love building cool and useful full-stack projects!",
    "I am curious and love learning new things!"
];

export const HeroSection = () => {
    const [lineIndex, setLineIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduceMotion(mediaQuery.matches);

        const handleMotionChange = (event) => {
            setReduceMotion(event.matches);
        };

        mediaQuery.addEventListener("change", handleMotionChange);
        return () => mediaQuery.removeEventListener("change", handleMotionChange);
    }, []);

    useEffect(() => {
        if (reduceMotion) {
            setTypedText(heroTypedLines[0]);
            return;
        }

        const fullText = heroTypedLines[lineIndex];
        let delay = 65;

        if (isWaiting) {
            delay = 1200;
        } else if (isDeleting) {
            delay = 35;
        }

        const timer = setTimeout(() => {
            if (isWaiting) {
                setIsWaiting(false);
                setIsDeleting(true);
                return;
            }

            if (isDeleting) {
                const nextText = fullText.slice(0, Math.max(0, typedText.length - 1));
                setTypedText(nextText);

                if (nextText.length === 0) {
                    setIsDeleting(false);
                    setLineIndex((prev) => (prev + 1) % heroTypedLines.length);
                }
                return;
            }

            const nextText = fullText.slice(0, typedText.length + 1);
            setTypedText(nextText);
            if (nextText === fullText) {
                setIsWaiting(true);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [isDeleting, isWaiting, lineIndex, reduceMotion, typedText]);

    const scrollToFeaturedProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        <span  className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Ryan
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "} 
                            Yu
                        </span>
                    </h1>

                    <p
                        className="text-lg md:text-2xl text-primary max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 mb-6 min-h-[3rem] md:min-h-[3.5rem]"
                        aria-live="polite"
                    >
                        {typedText}
                        <span className="typing-caret" aria-hidden="true" />
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <button 
                            className="cosmic-button"
                            onClick={scrollToFeaturedProjects}
                        >
                            View My Work
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};
