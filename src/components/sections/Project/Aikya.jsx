import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const Aikya = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 5);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        const ganymedeTexture = textureLoader.load('/textures/ganymede_texture_11k.jpg'); // Ensure the filename matches your downloaded texture

        const geometry = new THREE.SphereGeometry(1, 64, 64);
        const material = new THREE.MeshStandardMaterial({
            map: ganymedeTexture,
        });

        const ganymede = new THREE.Mesh(geometry, material);
        scene.add(ganymede);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 3, 5);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0x404040));

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const animate = () => {
            requestAnimationFrame(animate);
            ganymede.rotation.y += 0.002;
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="aikya" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-6 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    🛰️ Aikya: A Space Settlement for the Future of Humanity
                </h1>
            </div>
            <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0"></div>
        </section>
    );
};

export default Aikya;
