import { Briefcase, Code, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AboutSection = () => {
    const navigate = useNavigate();
    return (
        <section id="about" className="py-24 px-4 relative bg-secondary/20">
            {" "} 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Game Developer & Software Engineer
                        </h3>

                        <p className="text-muted-foreground">
                            Paragraph here, add later, maybe skills here and stuff
                        </p>

                        <p className="text-muted-foreground">
                            Paragraph here, add later, maybe passions and interests
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center">
                            <button
                                className="cosmic-button"
                                onClick={() => navigate('/contact')}
                            >
                                Get In Touch
                            </button>

                            <button
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition duration-300"
                                onClick={() => navigate('/resume')}
                            >
                                Resume
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> About Code</h4>
                                    <p>
                                        Paragraph explain topic title, ie top is Web Dev, writing what web stuff we can do
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> What I do</h4>
                                    <p>
                                        Paragraph explain what I can do in this role, like UI design or something
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> Job title I would want</h4>
                                    <p>
                                        Paragraph explain what position I'm looking for or can do
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};