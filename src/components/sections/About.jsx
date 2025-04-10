import React, { useRef, useState } from 'react';
import { RevealOnScroll } from "../ReviewOnScroll";
import { motion } from 'framer-motion'; 

export const About = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "NextJS", "HTML/CSS", "Figma", "SEO", "ThreeJS", "Vercel/Vite"];
  const backendSkills = ["C++", "NodeJS", "Python", "AWS Lambda", "AWS S3", "Linux", "MongoDB", "MATLAB", "API Gateway"];
  const engSkills = ["SOLIDWORKS", "PCB Design", "AutoCAD", "Fusion360", "Adobe", "Robotics"];

  const educationItems = [
    {
      degree: "B.S. in Systems Design Engineering",
      institution: "University of Waterloo",
      period: "2024 - 2029",
      courses: "Digital Computation, Visual Communications, Introduction to Design"
    }
  ];

  const workItems = [
    {
      title: "AI Development & Product Manager",
      company: "RemitBee/Hostalky",
      period: "March. 2025 - Present",
      description: "Developing an MVP of an AI-powered HR platform to enhance hiring fairness, featuring AI-driven resume screening and bias mitigation."
    },
    {
      title: "AI Software Engineer",
      company: "RemitBee/Hostalky",
      period: "Jan. 2025 - Present",
      description: "Developing note scanning, speech-to-text, and improving various AI functionalities to optimize healthcare workflows."
    },
    {
      title: "Front-End Developer",
      company: "While She is True",
      period: "Jan. 2025 - April 2025",
      description: "Led the creation of user-friendly websites, improving design to ensure a positive experience for all users."
    },
    {
      title: "Systems Integration Engineer",
      company: "UWAFT",
      period: "Sept. 2024 - Present",
      description: "Integrating AWD electric powertrain into a Cadillac Lyriq SUV"
    },
    {
      title: "Machine Learning Researcher",
      company: "WAT.AI",
      period: "Sept. 2024 - March 2025",
      description: "Training LLM agents to make informed and strategic political decisions."
    },
    {
      title: "Systems Engineer & Project Lead",
      company: "National Space Society",
      period: "Sept. 2023 - May 2024",
      description: "Led design of Aikya, a self-sustaining habitat; integrated systems including life support, energy, and structural subsystems."
    }
  ];

  const SkillTag = ({ skill }) => (
    <motion.span 
      className="bg-black/150 text-pink-500 py-1.5 px-4 rounded-full text-sm inline-block border border-pink-500/20"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 0 15px rgba(236, 72, 153, 0.4)",
        scale: 1.05
      }}
      transition={{ duration: 0.3 }}
    >
      {skill}
    </motion.span>
  );

  const TimelineItem = ({ title, subtitle, period, description }) => (
    <motion.div 
      className="relative pl-8 pb-8 border-l border-pink-500/30 last:border-l-0 last:pb-0"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500"></div>
      <h4 className="font-semibold text-pink-300">{title} @ {subtitle}</h4>
      <span className="inline-block px-2 py-0.5 bg-black/60 text-pink-200 text-xs rounded-full mb-2">{period}</span>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black/90 to-black/110">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">About Me</h2>
            <div className="flex items-center justify-center">
              <span className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full"></span>
              <span className="mx-2 text-2xl">💡</span>
              <span className="h-1 w-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl space-y-10">
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-2xl mx-auto">
              With experience in AI and software engineering, I create user-friendly solutions 
              that balance optimization and exceptional user experience.
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Skills & Expertise</h3>
              
              <div className="flex justify-center space-x-2 mb-6">
                {['frontend', 'backend', 'misc'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg transition ${
                      activeTab === tab 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-black/50 text-gray-300 hover:bg-black/70 border border-pink-500/20'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="min-h-[120px]">
                {activeTab === 'frontend' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-3 justify-center"
                  >
                    {frontendSkills.map((tech, key) => (
                      <SkillTag key={key} skill={tech} />
                    ))}
                  </motion.div>
                )}
                
                {activeTab === 'backend' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-3 justify-center"
                  >
                    {backendSkills.map((tech, key) => (
                      <SkillTag key={key} skill={tech} />
                    ))}
                  </motion.div>
                )}
                
                {activeTab === 'misc' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-wrap gap-3 justify-center"
                  >
                    {engSkills.map((tech, key) => (
                      <SkillTag key={key} skill={tech} />
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-black/40 flex items-center justify-center text-pink-300 border border-pink-500/20">
                  <span className="text-xl">🏫</span>
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="bg-black/40 rounded-xl p-6 hover:shadow-lg hover:shadow-pink-500/10 transition duration-300 border border-white/5">
                {educationItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-xl font-semibold text-pink-300">{item.degree}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300">{item.institution}</span>
                      <span className="h-1 w-1 rounded-full bg-pink-500"></span>
                      <span className="text-gray-400">{item.period}</span>
                    </div>
                    <p className="text-gray-300">
                      <span className="font-medium text-pink-200">Relevant Course Work:</span> {item.courses}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-black/40 flex items-center justify-center text-pink-300 border border-pink-500/20">
                  <span className="text-xl">👩‍💻</span>
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              
              <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                <div className="space-y-0">
                  {workItems.map((item, index) => (
                    <TimelineItem 
                      key={index}
                      title={item.title}
                      subtitle={item.company}
                      period={item.period}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};