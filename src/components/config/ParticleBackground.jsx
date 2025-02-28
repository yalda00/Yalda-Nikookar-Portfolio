import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Importing the slim version of tsParticles

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    autoPlay: true,
    background: {
      color: {
        value: "#0a0a0a",
      },
      opacity: 1,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.1,
          opacity: 0.7,  
        },
        lines: {
          enable: false, 
        },
      },
      move: { 
        enable: true, 
        speed: 6, 
        direction: "none", 
        outModes: { default: "bounce" }, 
        random: true, 
        straight: false 
      },
      number: { value: 50, density: { enable: true } },
      opacity: {
        value: 0.5,
        animation: {
          count: 0,
          enable: true,
          speed: 5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: "auto",
          startValue: "random",
          destroy: "none"
        },
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
      rotate: { value: 45, direction: "clockwise", animation: { enable: true, speed: 5 } },
      wobble: { enable: true, distance: 50, speed: 2 },
    },
    detectRetina: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          particles: { number: { value: 50 } },
        },
      },
      {
        breakpoint: 480,
        options: {
          particles: { number: { value: 30 } },
        },
      },
    ],
  }), []);

  if (!init) return null; 

  return <Particles id="tsparticles" options={options} />;
};

export default App;
