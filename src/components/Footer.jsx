import { ArrowUp } from "lucide-react";

export const Footer = () => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <footer className="py-4 px-4 bg-card/95 relative border-t border-border mt-6">
            <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
                <p className="text-xs md:text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Ryan Yu. All rights reserved.
                </p>
                <button
                    onClick={handleScrollTop}
                    className="p-1.5 md:p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
                </button>
            </div>
        </footer>
    );
};
