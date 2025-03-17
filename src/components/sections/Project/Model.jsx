import React, { useState } from 'react';

const Model = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
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

  return (
    <section className="min-h-screen flex flex-col relative">
      <div className="relative pt-32 pb-16">
        <div className="w-full flex flex-col items-center justify-center text-center px-6">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent max-w-4xl">
              🖌️ 3D Modeling Project Gallery
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mt-4">Exploring the world through detailed 3D modeling and simulation</p>
        </div>
      </div>

      <div className="w-full px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent w-16 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">Beaver Dam Project</h2>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent w-16 ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beaverDamImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-xl shadow-lg bg-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="h-90 overflow-hidden relative">
                  <img 
                    src={image.src} 
                    alt={image.caption} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-white font-medium p-4">{image.caption}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
          <a
            href="https://docs.google.com/presentation/d/1eg2abKjcC2-xmuAgs1ML8ArVoMVfm2Hp6q60IoXDtn8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              View Full Project Details
            </button>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;