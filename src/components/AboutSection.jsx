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
                            University of Toronto CS & Stats
                        </h3>

                        <p className="text-muted-foreground">
                            I'm a Computer Science and Statistics student at the University of Toronto interested in full stack development and applied AI. I enjoy building practical software through hands on projects, from privacy focused analytics platforms to full stack web apps using React, FastAPI, and Node.js. I value collaboration, clear communication, and learning through feedback. Outside of coding, I enjoy playing and making music, especially piano and guitar, which keeps me creative and balanced.
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
                                    <h4 className="text-semibold text-lg">Technical Experience</h4>
                                    <p>
                                        Full-stack web apps, React, FastAPI, Node.js, and applied AI.
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
                                    <h4 className="text-semibold text-lg">How I Work</h4>
                                    <p>
                                        Collaborative, feedback-driven, and focused on clear communication.
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
                                    <h4 className="text-semibold text-lg">Beyond Coding</h4>
                                    <p>
                                        Musician (piano & guitar), creative, and balanced.
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