import { RevealOnScroll } from "../ReviewOnScroll";
import { FaGithub } from 'react-icons/fa'; 
import { FaEnvelope } from 'react-icons/fa'; 
import { FaLinkedin } from 'react-icons/fa';

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-right">Hi, I'm Yalda! 👋</h1>
        
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
        I'm a Systems Design Engineering student passionate about AI, software development, and human-centered design.
        </p>
        <div className="flex justify-center space-x-4">
            <a
            href="#projects"
            className="bg-pink-500 text-white py-3 px-6 rounded font-medium"
            style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.4)"
            }}
            onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            }}
            >
            View Projects
            </a>
        
            <a
            href="#contact"
            className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium"
            style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.2)"
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 0 15px rgba(236, 72, 153, 0.4)";
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 0 15px rgba(236, 72, 153, 0.2)";
            }}
            >
            Contact Me
            </a>
        </div>
        <div className="flex justify-center space-x-6 mt-8"> 
            <a href="https://github.com/yalda00" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-8 w-8" /> 
            </a>
            <a href="mailto:yaldanikookar06@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/yalda-nikookar-074977219/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-8 w-8" />
            </a>
        </div>
        </div>
        </RevealOnScroll>
    </section>;
};