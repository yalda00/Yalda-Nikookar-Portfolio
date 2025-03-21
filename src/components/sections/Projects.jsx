import { RevealOnScroll } from "../ReviewOnScroll";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

export const Projects = () => {
    const handleHover = (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            projectCard.style.transform = "translateY(-5px)";
            projectCard.style.boxShadow = "0 0 15px rgba(236, 72, 153, 0.4)";

            const viewProjectLink = projectCard.querySelector('.view-project');
            if (viewProjectLink) {
                viewProjectLink.style.color = "#ec4899";
                viewProjectLink.style.textShadow = "0 0 5px #ec4899";
            }
        }
    };

    const handleMouseLeave = (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            projectCard.style.transform = "translateY(0)";
            projectCard.style.boxShadow = "none";

            const viewProjectLink = projectCard.querySelector('.view-project');
            if (viewProjectLink) {
                viewProjectLink.style.color = "";
                viewProjectLink.style.textShadow = "";
            }
        }
    };

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-center">
                    My Projects 🛠️
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        className="project-card text-left p-6 rounded-xl border border-white/10 transition-all"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h3 className="font-semibold text-pink-300">TremorTracker: Neuro-GLoves</h3>
                        <p className="mb-2">
                            Device designed to suppress hand tremors, offering a solution for individuals with Parkinson’s disease or other conditions causing involuntary hand movements.
                        </p>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {["Arduino", "Figma", "React"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-pink-500/10 text-pink-500 py-1 px-2 rounded-full text-sm transition-all"
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center space-x-3">
                            <a 
                                className="view-project text-pink-400 my-2 flex items-center space-x-3"  
                                onMouseEnter={handleHover} 
                                onMouseLeave={handleMouseLeave}
                            >
                                <span>View Project →</span>
                                <a href="https://github.com/yalda00/Steady---Neuro-Gloves" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="h-5 w-5" />
                                </a>
                            </a>
                        </div>

                    </div>

                    <div
                        className="project-card text-left p-6 rounded-xl border border-white/10 transition-all"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h3 className="font-semibold text-pink-300">Aikya: NASA/NSS Prize Winner</h3>
                        <p className="mb-3">
                            Designed 'Aikya,' a settlement orbiting Ganymede, using advanced CAD techniques and UI design to sustain 10,000 habitants.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["UI/UX", "Figma", "Python"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm transition-all"
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center space-x-2 my-4">
                        <Link
                            to="/project/aikya"
                            className="text-pink-400 flex items-center space-x-3"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span>View Project →</span>
                            <FaExternalLinkAlt className="h-5 w-5" />
                        </Link>
                        </div>
                    </div>

                    <div
                        className="project-card text-left p-6 rounded-xl border border-white/10 transition-all"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h3 className="font-semibold text-pink-300">3D Modeling Projects</h3>
                        <p className="mb-3">
                        Designed and developed intricate 3D models using SolidWorks, focusing on precision engineering and functional optimization.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Solidworks", "Rendering", "FEA"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm transition-all"
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                        <Link
                            to="/project/model"
                            className="text-pink-400 flex items-center space-x-3"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span>View Project →</span>
                            <FaExternalLinkAlt className="h-5 w-5" />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
