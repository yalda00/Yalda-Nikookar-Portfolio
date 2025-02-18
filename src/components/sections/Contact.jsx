import { RevealOnScroll } from "../ReviewOnScroll";
import emailjs from 'emailjs-com'
import { useState } from "react"

export const Contact = () => {
    
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_API_KEY).then((result) => {
            alert("Message sent!");
            setFormdata({ name: "", email: "", message: "" });
        }).catch(() => alert("Something went wrong! Please try again."));
    }

    const handleButtonHover = (e) => {
        e.target.style.transform = 'translateY(-4px)';
        e.target.style.boxShadow = '0 0 15px rgba(236, 72, 153, 0.4)';
        e.target.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    }

    const handleButtonMouseLeave = (e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">Get In Touch! 💬</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white-10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormdata({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                required
                                className="w-full bg-white/5 border border-white-10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                                placeholder="reachout@gmail.com"
                                onChange={(e) => setFormdata({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                rows={5}
                                className="w-full bg-white/5 border border-white-10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5"
                                placeholder="Message..."
                                onChange={(e) => setFormdata({ ...formData, message: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden"
                            onMouseEnter={handleButtonHover}
                            onMouseLeave={handleButtonMouseLeave}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
