import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const Aikya = () => {
    const mountRef = useRef(null);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (!mountRef.current) return;
        
        while (mountRef.current.firstChild) {
            mountRef.current.removeChild(mountRef.current.firstChild);
        }
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, dimensions.width / dimensions.height, 0.1, 1000);
        camera.position.set(0, 1, 5);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(dimensions.width, dimensions.height);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        // Adjust shadow opacity
        renderer.shadowMap.opacity = 0.5; // Decrease shadow intensity
        mountRef.current.appendChild(renderer.domElement);
        
        const textureLoader = new THREE.TextureLoader();
        const ganymedeTexture = textureLoader.load('/Yalda-Nikookar-Portfolio/textures/ganymede_texture_map_by_planetmapmaker_diz313n.png');
        
        const calculateSphereSize = () => {
            const baseSize = 1;
            
            const scaleFactor = Math.min(Math.max(dimensions.width / 1920, 0.6), 1.2);
            
            return baseSize * scaleFactor;
        };
        
        const sphereSize = calculateSphereSize();
        const geometry = new THREE.SphereGeometry(sphereSize, 64, 64);
        const material = new THREE.MeshStandardMaterial({ 
            map: ganymedeTexture,
            // Increase roughness to scatter light more evenly
            roughness: 0.7,
            // Decrease metalness to reduce specular highlights
            metalness: 0.1
        });
        
        const ganymede = new THREE.Mesh(geometry, material);
        ganymede.castShadow = true; 
        ganymede.receiveShadow = true; 
        
        const yPosition = -0.3 * (dimensions.height / dimensions.width > 1.2 ? 0.8 : 1);
        ganymede.position.y = yPosition;
        
        scene.add(ganymede);
        
        // Adjust light intensity and distance for lighter shadows
        const sunLight = new THREE.PointLight(0xffffff, 1.5, 15);
        sunLight.castShadow = true;
        
        // Configure shadow properties
        sunLight.shadow.mapSize.width = 512;
        sunLight.shadow.mapSize.height = 512;
        sunLight.shadow.camera.near = 0.5;
        sunLight.shadow.camera.far = 20;
        sunLight.shadow.bias = -0.001;
        
        // Decrease shadow darkness/opacity
        sunLight.shadow.normalBias = 0.02;
        scene.add(sunLight);
        
        // Increase ambient light to reduce shadow contrast
        scene.add(new THREE.AmbientLight(0x404040, 0.8));
        
        // Add a gentle hemisphere light to brighten shadowed areas
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x404040, 0.6);
        scene.add(hemiLight);
        
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableZoom = false;
        controls.enablePan = false;  
        controls.enableRotate = true;
        
        controls.maxPolarAngle = Math.PI / 2;  
        controls.minPolarAngle = Math.PI / 2;

        let angle = 0;
        
        const animate = () => {
            requestAnimationFrame(animate);
            
            ganymede.rotation.y += 0.01;

            angle += 0.01; 
            sunLight.position.x = Math.sin(angle) * 2; 
            sunLight.position.z = Math.cos(angle) * 2; 
            sunLight.position.y = Math.sin(angle) * 2;

            controls.update();
            renderer.render(scene, camera);
        };
        animate();
        
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            setDimensions({ width, height });
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            
            // Update sphere size and position on resize
            const newSphereSize = calculateSphereSize();
            ganymede.geometry.dispose();
            ganymede.geometry = new THREE.SphereGeometry(newSphereSize, 64, 64);
            
            // Recalculate y-position
            const newYPosition = -0.3 * (height / width > 1.2 ? 0.8 : 1);
            ganymede.position.y = newYPosition;
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            if (mountRef.current) {
                while (mountRef.current.firstChild) {
                    mountRef.current.removeChild(mountRef.current.firstChild);
                }
            }
            window.removeEventListener('resize', handleResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
        
    }, [dimensions]);
    
    return (
        <section className="min-h-screen flex flex-col relative">
            <div className="h-screen relative">
                <div ref={mountRef} className="absolute inset-0 w-full h-full z-0"></div>

                {/* Header with ID */}
                <div 
                    id="aikya" 
                    className="absolute z-10 w-full left-0 flex flex-col items-center justify-center text-center px-6" 
                    style={{ top: '25%' }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent max-w-4xl">
                        🛰️ Aikya: A Space Settlement
                    </h1>
                </div>

                <div className="absolute w-full left-0 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-4 md:space-y-0 mt-10 md:mt-0 px-6 z-10" style={{ bottom: '20%' }}>
                    <a
                        href="/Yalda-Nikookar-Portfolio/Aikya (1).pdf" 
                        download="Aikya_Report.pdf" 
                        className="bg-pink-500 text-white py-3 px-6 rounded font-medium inline-flex min-w-fit max-w-[250px] justify-center"
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
                        View Report
                    </a>

                    <a
                        href="/Yalda-Nikookar-Portfolio/Aikya Settlement Poster (3)_page-0001.png" 
                        download="Aikya_Poster.png" 
                        className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-medium inline-flex min-w-fit max-w-[250px] justify-center"
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
                        View Poster
                    </a>
                </div>
            </div>

            <section className="py-16 px-6 flex items-center justify-center mt-40">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-20">

                    <div 
                        className="relative md:w-6/12 max-w-lg p-1 border-4 border-pink-500 rounded-lg shadow-lg 
                                transition-transform duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] 
                                hover:-translate-y-1"
                    >
                        <div className="p-8 rounded-md">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-400 text-center">
                            🏆 Top 3 Winners – 2024 NASA/NSS Space Settlement Contest
                        </h2>
                        <p className="text-gray-300 mt-3 text-center text-lg">
                            Recognized by the <span className="font-semibold">National Space Society </span>  
                            for groundbreaking innovation in space settlement design.
                        </p>
                        <p className="text-gray-400 mt-3 text-center text-sm">
                            Out of <span className="font-semibold">29,000+</span> participants and  
                            <span className="font-semibold"> 5000+ entries</span> worldwide, our project  
                            stood among the <span className="font-semibold">top 3</span>, shaping the future of space habitation.
                        </p>
                        </div>
                    </div>

                    <div className="md:w-6/12 max-w-lg">
                        <img
                        src="/Yalda-Nikookar-Portfolio/20240526_155001 (1).png"
                        alt="Aikya Settlement Poster"
                        className="w-full h-auto object-cover shadow-xl rounded-lg"
                        />
                        <p className="mt-2 text-center text-gray-400 text-lg">
                        Celebrating the moment with the Director of the Gerard O’Neill Contest  
                        and our inspiring mentor, <span className="font-semibold">Ms. Matei</span>! 🚀
                        </p>
                    </div>
                    
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Aikya;