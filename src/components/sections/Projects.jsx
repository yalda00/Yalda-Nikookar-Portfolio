import { RevealOnScroll } from "../ReviewOnScroll";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

export const Projects = () => {
    const handleHover = (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            projectCard.classList.add('hover:scale-[1.02]', 'hover:shadow-lg', 'hover:shadow-pink-500/20');
            
            const viewProjectLink = projectCard.querySelector('.view-project');
            if (viewProjectLink) {
                viewProjectLink.classList.add('text-pink-500', 'hover:text-pink-400');
            }
        }
    };

    const handleMouseLeave = (e) => {
        const projectCard = e.target.closest('.project-card');
        if (projectCard) {
            projectCard.classList.remove('hover:scale-[1.02]', 'hover:shadow-lg', 'hover:shadow-pink-500/20');
            
            const viewProjectLink = projectCard.querySelector('.view-project');
            if (viewProjectLink) {
                viewProjectLink.classList.remove('text-pink-500', 'hover:text-pink-400');
            }
        }
    };

    const ProjectCard = ({ title, description, technologies, githubLink, projectLink, imageUrl, isExternalLink = true }) => {
        return (
            <div
                className="project-card group relative text-left p-6 rounded-xl border border-white/10 transition-all 
                           bg-gradient-to-br from-white/5 to-white/10 
                           hover:border-pink-500/30 
                           overflow-hidden"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            >
                <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {imageUrl && (
                    <div className="mb-4 -mx-6 -mt-6 h-48 overflow-hidden">
                        <img 
                            src={imageUrl} 
                            alt={title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                    </div>
                )}
                
                <h3 className="font-semibold text-pink-300 mb-3 relative z-10">{title}</h3>
                <p className="mb-3 text-gray-300 relative z-10">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {technologies.map((tech, key) => (
                        <span
                            key={key}
                            className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm 
                                       transition-all hover:bg-pink-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                
                <div className="flex items-center space-x-3 relative z-10">
                    {isExternalLink ? (
                        <a 
                            href={projectLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="view-project text-pink-400 my-2 flex items-center space-x-3 
                                       hover:text-pink-300 transition-colors group"
                        >
                            <span>View Project →</span>
                            {githubLink && (
                                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">
                                    <FaGithub className="h-5 w-5" />
                                </a>
                            )}
                        </a>
                    ) : (
                        <Link
                            to={projectLink}
                            className="view-project text-pink-400 my-2 flex items-center space-x-3 
                                       hover:text-pink-300 transition-colors group"
                        >
                            <span>View Project →</span>
                            <FaExternalLinkAlt className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20 
                       bg-gradient-to-b from-transparent to-pink-500/5"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-400 
                                   bg-clip-text text-transparent text-center 
                                   tracking-tight">
                        My Projects 🛠️
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8">
                        <ProjectCard 
                            title="TremorTracker: Neuro-GLoves"
                            description="Device designed to suppress hand tremors, offering a solution for individuals with Parkinson's disease or other conditions causing involuntary hand movements."
                            technologies={["Arduino", "Robotics", "Circuit Design"]}
                            githubLink="https://github.com/yalda00/Steady---Neuro-Gloves"
                            projectLink="https://github.com/yalda00/Steady---Neuro-Gloves"
                            imageUrl="/Yalda-Nikookar-Portfolio/steay-pic.jpeg"
                        />
                        <ProjectCard 
                            title="Aikya: NASA/NSS Prize Winner"
                            description="Designed 'Aikya,' a settlement orbiting Ganymede, using advanced CAD techniques and UI design to sustain 10,000 habitants."
                            technologies={["UI/UX", "Figma", "Python"]}
                            projectLink="/project/aikya"
                            isExternalLink={false}
                            imageUrl="/Yalda-Nikookar-Portfolio/Aikya Settlement Poster (3)_page-0001.png"
                        />
                        <ProjectCard 
                            title="3D Modeling Projects"
                            description="Designed and developed intricate 3D models using SolidWorks, focusing on precision engineering and functional optimization."
                            technologies={["Solidworks", "Rendering", "Finite Element Analysis"]}
                            projectLink="/project/model"
                            isExternalLink={false}
                            imageUrl="/Yalda-Nikookar-Portfolio/solidworks-vector-logo.png"
                        />
                        <ProjectCard 
                            title="Legislative LLM"
                            description="Designed and evaluated four RAG-based architectures in decision-making frameworks, comparing a Fast Mind–Slow Mind and a courtroom model with two lawyers and a judge."
                            technologies={["LLM", "LangChain", "Python"]}
                            githubLink="https://github.com/Madhav-Malhotra/political-chatbot.git"
                            projectLink="https://github.com/Madhav-Malhotra/political-chatbot.git"
                            imageUrl="/Yalda-Nikookar-Portfolio/political-llm.jpeg"
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};