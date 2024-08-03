"use client";

import React, { useEffect, useRef, Suspense, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useInView } from 'react-intersection-observer';
import styles from "@/styles/section/Acceuil/TroisiemeSectionAcceuilStyle.module.css";
import BrandBox from "@/components/section/Acceuil/AcceuilUtils/BrandBox";
import Vitrine from "@/../public/assets/images/Offre/Vitrine.webp";
import Ecommerce from "@/../public/assets/images/Offre/E-commerce.webp";
import Blog from "@/../public/assets/images/Offre/Blog.webp";
import Portfolio from "@/../public/assets/images/Offre/Portfolio.webp";
import Model from "@/components/section/Acceuil/AcceuilUtils/FleoThree";

const CameraController: React.FC = () => {
    useFrame(({ camera }) => {
        camera.position.set(0, 30, 100);
        camera.lookAt(0, 0, 0);
    });
    return null;
};

const TroisiemeSectionAcceuil: React.FC = () => {
    const [ref1, inView1] = useInView({ threshold: 0.5 });
    const [ref2, inView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3] = useInView({ threshold: 0.5 });
    const [ref4, inView4] = useInView({ threshold: 0.5 });

    return (
        <section className={`font-Russo relative min-h-screen flex flex-col items-center justify-center bg-white ${styles.canvasContainer}`}>
            <h1 className="text-6xl font-bold mb-4 pt-8 pb-1">Nos Offre</h1>
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
                <div ref={ref1}>
                    <BrandBox imageSrc={Vitrine} title={"Site Vitrine"} prix={"750 - 1200"} isVisible={inView1} />
                </div>
                <div ref={ref2}>
                    <BrandBox imageSrc={Ecommerce} title={"Site E-commerce"} prix={"1200 - 2500"} isVisible={inView2} />
                </div>
                <div ref={ref3}>
                    <BrandBox imageSrc={Blog} title={"Blog"} prix={"1500 - 2000"} isVisible={inView3} />
                </div>
                <div ref={ref4}>
                    <BrandBox imageSrc={Portfolio} title={"Portfolio"} prix={"750 - 3000"} isVisible={inView4} />
                </div>
            </div>
        </section>
    );
};

export default TroisiemeSectionAcceuil;
