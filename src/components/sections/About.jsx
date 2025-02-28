import React, { useRef } from 'react';
import { RevealOnScroll } from "../ReviewOnScroll";


export const About = () => {
  const educationRef = useRef(null);
  const workRef = useRef(null);

  const handleHover = (ref) => {
    ref.current.style.transition = 'transform 0.3s ease-in-out';
    ref.current.style.transform = 'translateY(-4px)'; 
    ref.current.style.boxShadow = '0 0 15px rgba(236, 72, 153, 0.4)';
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transition = 'transform 0.3s ease-in-out';
    ref.current.style.transform = 'translateY(0)'; 
    ref.current.style.boxShadow = 'none';
  };

  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "NextJS", "HTML/CSS"];
  const backendSkills = ["C++", "NodeJS", "Python", "AWS", "Linux", "MongoDB", "MATLAB"];
  const engSkills = ["SOLIDWORKS", "PCB Design", "AutoCAD", "Fusion360", "Adobe", "Figma"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">About Me 💡</h2>

        <div className="rounded-xl p-8 border-white/10 border space-y-8">
          <p className="text-gray-300 text-lg leading-relaxed">With experience in AI and software engineering, I create user-friendly solutions that balance optimization and user experience.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-bold">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((tech, key) => (
                  <span key={key} className="bg-pink-500/10 text-pink-500 py-1.5 px-4 rounded-full text-sm"
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-5px)";
                      e.target.style.transition = "transform 0.3s ease";
                      e.target.style.boxShadow = "0 0 15px rgba(236, 72, 153, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-bold">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((tech, key) => (
                  <span key={key} className="bg-pink-500/10 text-pink-500 py-1.5 px-4 rounded-full text-sm"
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-5px)";
                      e.target.style.transition = "transform 0.3s ease";
                      e.target.style.boxShadow = "0 0 15px rgba(236, 72, 153, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-bold">Miscellaneous</h3>
              <div className="flex flex-wrap gap-3">
                {engSkills.map((tech, key) => (
                  <span key={key} className="bg-pink-500/10 text-pink-500 py-1.5 px-4 rounded-full text-sm"
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-5px)";
                      e.target.style.transition = "transform 0.3s ease";
                      e.target.style.boxShadow = "0 0 15px rgba(236, 72, 153, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div ref={educationRef} onMouseEnter={() => handleHover(educationRef)} onMouseLeave={() => handleMouseLeave(educationRef)} className="p-6 rounded-xl border-white/10 border space-y-4">
              <h3 className="text-xl font-bold">🏫 Education</h3>
              <p className="text-pink-300 font-semibold">B.S. in Systems Design Engineering</p>
              <p className="text-gray-300">University of Waterloo (2024 - 2029)</p>
              <p className="text-gray-300">Relevant Course Work: Digital Computation, Visual Communications, Introduction to Design</p>
            </div>

            <div ref={workRef} onMouseEnter={() => handleHover(workRef)} onMouseLeave={() => handleMouseLeave(workRef)} className="p-6 rounded-xl border-white/10 border space-y-6">
              <h3 className="text-xl font-bold">👩‍💻 Work Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-pink-300">AI Software Engineer @ RemitBee/Hostalky (Jan. 2025 - Present)</h4>
                  <p className="text-gray-300">Developing note scanning, speech-to-text, and improving various AI functionalities to optimize healthcare workflows.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-300">Machine Learning Researcher @ WAT.AI (Sept. 2024 - Present)</h4>
                  <p className="text-gray-300">Training LLM agents to make informed and strategic political decisions.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-300">Internal Systems Lead @ National Space Society (Sept. 2023 - May 2024)</h4>
                  <p className="text-gray-300">Designed 'Aikya,' a settlement orbiting Ganymede, using advanced CAD techniques and UI design to support and sustain 10,000 residents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}