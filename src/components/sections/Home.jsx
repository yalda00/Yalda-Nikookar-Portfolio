import React from 'react';
import { RevealOnScroll } from "../ReviewOnScroll";
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa'; 
import { FaEnvelope } from 'react-icons/fa'; 
import { FaLinkedin } from 'react-icons/fa';

export const Home = () => {
    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/yalda00",
            label: "GitHub"
        },
        {
            icon: FaEnvelope,
            href: "mailto:yaldanikookar06@gmail.com",
            label: "Email"
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/yalda-nikookar-074977219/",
            label: "LinkedIn"
        }
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Hi, I'm Yalda! 👋
                    </motion.h1>
                
                    <motion.p 
                        className="text-gray-300 text-lg mb-8 max-w-lg mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I'm a Systems Design Engineering student passionate about AI, software development, and human-centered design.
                    </motion.p>
                    
                    <motion.div 
                        className="flex justify-center space-x-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <motion.a
                            href="#projects"
                            className="bg-pink-500 text-white py-3 px-6 rounded-lg font-medium"
                            whileHover={{ 
                                y: -5, 
                                boxShadow: "0 0 15px rgba(236, 72, 153, 0.4)",
                                scale: 1.05
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            View Projects
                        </motion.a>
                    
                        <motion.a
                            href="#contact"
                            className="bg-black/20 text-pink-500 py-3 px-6 rounded-lg font-medium border border-pink-500/20"
                            whileHover={{ 
                                y: -5, 
                                boxShadow: "0 0 15px rgba(236, 72, 153, 0.4)",
                                scale: 1.05
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                    
                    <motion.div 
                        className="flex justify-center space-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black/20 p-3 rounded-full border border-pink-500/20 text-pink-500 hover:text-white transition-all duration-300"
                                whileHover={{ 
                                    scale: 1.1,
                                    boxShadow: "0 0 15px rgba(236, 72, 153, 0.4)"
                                }}
                            >
                                <link.icon className="h-6 w-6" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </RevealOnScroll>
        </section>
    );
};