import React, {useState, ChangeEvent, FormEvent, useRef, useEffect} from 'react';
import ExDivThreeForme from "../../../../Lib/threeLib/ExempleDivThreeForme"
import * as THREE from 'three';
import Image from "next/image";
import leoCard from "@/../public/assets/images/leoCard.png"
import floCard from "@/../public/assets/images/florianCard.png"
import ContactForm from "@/components/section/Contact/formulaire/ContactForm";
import { createCube, createSphere, createTorus, createHalfTorus } from '@/../Lib/threeLib/FormeGradiantFactoryLib';



export default function Contact() {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const mount = mountRef.current;

        // Create the scene
        const scene = new THREE.Scene();

        // Create the camera
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.z = 10;  // Adjusted for better view

        // Create the renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // Add shapes to the scene using the imported functions
        const shapes = [
            createTorus(new THREE.Vector3(-6, 2, 2), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa)),
            createHalfTorus(new THREE.Vector3(5.2, -3, -3), new THREE.Euler(0, 0, Math.PI / 2), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa)),
            createCube(new THREE.Vector3(8, 3, 3), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa)),
            createCube(new THREE.Vector3(-8, -3, 3), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa))
        ];

        shapes.forEach(shape => scene.add(shape));

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            const time = Date.now() * 0.001;
            shapes.forEach(shape => {
                shape.rotation.x += 0.01;
                shape.rotation.y += 0.01;
                shape.position.y += Math.sin(time) * 0.005; // Subtle up-and-down movement
            });
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            if (mount) {
                camera.aspect = mount.clientWidth / mount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(mount.clientWidth, mount.clientHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mount) mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, [mountRef]);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            <ContactForm/>
            <div ref={mountRef} className="absolute top-0 left-0 w-full h-full"></div>
        </section>
    );
}