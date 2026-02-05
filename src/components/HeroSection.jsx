import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
    const navigate = useNavigate();
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

                    <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 mb-6">
                        Paragaph about me section would be here.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <button 
                            className="cosmic-button"
                            onClick={() => navigate("/projects")}
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