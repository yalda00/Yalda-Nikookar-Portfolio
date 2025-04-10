import React, { useState, useEffect } from 'react';

const Model = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  const beaverDamImages = [
    {
        src: "/Yalda-Nikookar-Portfolio/Models/giphy.gif",
        caption: "Animated view of the beaver dam assembly",
    },
    {
        src: "/Yalda-Nikookar-Portfolio/Models/Screenshot 2025-03-02 225156.png",
        caption: "Full View of the model with the Beaver",
    },
    {
        src: "/Yalda-Nikookar-Portfolio/Models/Screenshot 2025-03-03 200540.png",
        caption: "Detailed view of the components and dam structure",
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col relative bg-gradient-to-b from-black/70 to-black/80 text-white">
      {/* Full-Screen Header Section */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className={`text-5xl md:text-7xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent max-w-4xl transition-all duration-1000 ease-out ${
            isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> 🖌️ 3D Modeling Project Gallery </h1>
        <p className={`text-xl text-gray-400 max-w-2xl mt-4 transition-all duration-1000 ease-out ${
            isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 delay-300'}`}>Exploring the world through detailed 3D modeling and simulation</p>
        <button onClick={scrollToProjects} className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-all">View Models</button>
      </div>

      {/* Full-Screen Projects Section */}
      <div id="projects-section" className="h-screen flex flex-col items-center justify-center w-full px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-14">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent w-16 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">Beaver Dam Project</h2>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent w-16 ml-4"></div>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out ${
              isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 delay-500'}`}>
            {beaverDamImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg bg-black/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)}>
                <div className="relative">
                  <img src={image.src} alt={image.caption} className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${
                      activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-white font-medium p-4">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-16 text-center transition-all duration-1000 ease-out ${
              isPageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 delay-700'}`}>
            <a href="https://docs.google.com/presentation/d/1eg2abKjcC2-xmuAgs1ML8ArVoMVfm2Hp6q60IoXDtn8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="bg-pink-500 text-white py-3 px-8 rounded-lg font-medium hover:bg-pink-600 transition-all">View Full Project Details</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
