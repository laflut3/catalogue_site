"use client";

import React, {useEffect, useRef} from 'react';
import { useSession } from "next-auth/react";
import UserPage from "./userUtils/UserInfo";
import Typewriter from "typewriter-effect";
import * as THREE from "three";
import {createCube, createHalfTorus, createTorus} from "../../../../Lib/threeLib/FormeGradiantFactoryLib";
import {router} from "next/client";
import {useRouter} from "next/navigation";

const SectionUserInfo = () => {
    const { data: session, status } = useSession();

    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/Sign');
        }
    }, [status, router]);

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
            createCube(new THREE.Vector3(8, 3, 3), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa)),
            createCube(new THREE.Vector3(-8, -3, 3), new THREE.Color(0x0000ff), new THREE.Color(0x87cefa)),
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
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 relative">
            <div className="z-10">
                {status === "authenticated" ? (
                    <>
                        <UserPage
                            firstName={session?.user?.firstName || 'undefined'}
                            lastName={session?.user?.lastName || 'undefined'}
                            email={session?.user?.email || 'undefined'}
                            image={session?.user?.image || 'undefined'}
                            name={session?.user?.name || 'undefined'}
                            imageVerif={!!session?.user?.image}
                        />
                    </>
                ) : (
                    <div className="text-center">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Aucun compte n'est connecté").start();
                            }}
                            options={{
                                autoStart: true,
                                loop: false,
                                delay: 50,
                            }}
                        />
                    </div>
                )}
            </div>
            <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0 threejsContainer"></div>
        </section>
    );
}

export default SectionUserInfo;
