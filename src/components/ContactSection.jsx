import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Twitter, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

export const ContactSection = () => {
    const form = useRef();
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsSubmitting(true);

        emailjs.sendForm(
            'service_kwc4c4e',    
            'template_4hpsbig',   
            form.current,
            'lc3GI7BONMgn1nU29'     
        )
        .then(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out! I'll get back to you as soon as possible.",
            });
            form.current.reset();
            setIsSubmitting(false);
        }, () => {
            toast({
                title: "Message Failed!",
                description: "Sorry, something went wrong. Please try again later.",
                variant: "destructive",
            });
            setIsSubmitting(false);
        });
    };
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Paraagraph about how to get in touch with me. If they want to collaborate or recuiter trying to reach out.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> 
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text" /> 
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <div className="flex flex-col gap-1">
                                        <a 
                                            href="mailto:ryanyu365@gmail.com" 
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <span className="font-semibold">Personal:</span> ryanyu365@gmail.com
                                        </a>
                                        <a 
                                            href="mailto:ryanrui.yu@mail.utoronto.ca" 
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <span className="font-semibold">School:</span> ryanrui.yu@mail.utoronto.ca
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text" /> 
                                </div>
                                <div>
                                    <h4 className="font-medium"> Linkedin</h4>
                                    <a 
                                        href="https://www.linkedin.com/in/ryan-yu-383721273/"
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        linkedin.com/in/ryan-yu-383721273/
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Github className="h-6 w-6 text" /> 
                                </div>
                                <div>
                                    <h4 className="font-medium"> Github</h4>
                                    <a 
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        href="https://github.com/xaderF"
                                        target="_blank"
                                    >
                                        github.com/xaderF
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/ryan-yu-383721273/" target="_blank">
                                    <Linkedin />
                                </a> 
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="https://github.com/xaderF" target="_blank">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>

                     <div 
                        className="bg-card p-8 rounded-lg shadow-xs" 
                        aria-label="Contact form"
                    >
                        <h3 className="text-2xl font-semibold mb-6"> Send A Message</h3>

                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium mb-2"
                                > 
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder="John Bob..."
                                    aria-label="Your Name"
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium mb-2"
                                > 
                                    Your Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary"
                                    placeholder="JohnBob@gmail.com..."
                                    aria-label="Your Email"
                                />
                            </div>

                            <div>
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font-medium mb-2"
                                > 
                                    Your Message
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                    aria-label="Your Message"
                                />
                            </div>

                            <input 
                                type="hidden" 
                                name="time" 
                                value={new Date().toLocaleString()} 
                            />

                            <input
                                type="text"
                                name="website"
                                tabIndex="-1"
                                autoComplete="off"
                                style={{ display: "none" }}
                            />

                            <button 
                                type="submit"
                                aria-label="Send Message"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                     </div>
                </div>
            </div>
        </section>
    )
    
}