"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import styles from "@/styles/section/Acceuil/TroisiemeSectionAcceuilStyle.module.css";

const Model: React.FC<{ path: string; position: [number, number, number]; scale?: number; offset?: number }> = ({
                                                                                                                    path,
                                                                                                                    position,
                                                                                                                    scale = 1,
                                                                                                                    offset = 0
                                                                                                                }) => {
    const obj = useLoader(OBJLoader, path);
    const groupRef = useRef<THREE.Group>(null);
    const initialPositionY = useRef(position[1]);

    useEffect(() => {
        if (groupRef.current) {
            groupRef.current.position.set(...position);
            groupRef.current.scale.set(scale, scale, scale);
            groupRef.current.rotation.set(0, 0, 0);
        }
    }, [position, scale]);

    useEffect(() => {
        obj.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
            }
        });
    }, [obj]);

    // Animation de mouvement de haut en bas avec décalage pour effet de vague
    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.position.y = initialPositionY.current + Math.sin(clock.getElapsedTime() + offset) * 10;
        }
    });

    return (
        <group ref={groupRef}>
            <primitive object={obj} />
        </group>
    );
};

const CameraController: React.FC = () => {
    useFrame(({ camera }) => {
        camera.position.set(0, 30, 100); // Dézoomer davantage la caméra pour inclure toutes les lettres
        camera.lookAt(0, 0, 0); // Orienter la caméra vers le centre
    });
    return null;
};

const TroisiemeSectionAcceuil: React.FC = () => {
    return (
        <section className={`font-Russo relative min-h-screen flex flex-col items-center justify-center bg-white ${styles.canvasContainer}`}>
            <h1 className="text-6xl font-bold mb-4 pt-8 pb-1">Nos statistiques</h1>
            <span className="bg-blue-300 h-2 w-32 block mb-8" style={{ backgroundColor: "#99B7DE", height: "10px", width: "300px" }}></span>
            <Canvas className={styles.canvasContainer} camera={{ position: [0, 30, 150], fov: 100 }}>
                <ambientLight />
                <pointLight position={[0, 0, 0]} />
                <Suspense fallback={null}>
                    <Model path="/assets/models/F.obj" position={[-100, 0, 0]} scale={2} offset={0} />
                    <Model path="/assets/models/L.obj" position={[-50, 0, 0]} scale={2} offset={0.5} />
                    <Model path="/assets/models/E.obj" position={[0, 0, 0]} scale={2} offset={1} />
                    <Model path="/assets/models/O.obj" position={[50, 0, 0]} scale={2} offset={1.5} />
                </Suspense>
                <CameraController />
            </Canvas>
            <div className="absolute flex justify-around w-full" style={{ top: "calc(50% - 120px)" }}>
                <div className="bg-transparent border border-black w-52 h-72 rounded-2xl"></div>
                <div className="bg-transparent border border-black w-52 h-72 rounded-2xl"></div>
                <div className="bg-transparent border border-black w-52 h-72 rounded-2xl"></div>
                <div className="bg-transparent border border-black w-52 h-72 rounded-2xl"></div>
            </div>
        </section>
    );
};

export default TroisiemeSectionAcceuil;
