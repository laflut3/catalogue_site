"use client";

import React, { useEffect, useRef, useState } from "react";
import "../styles/CarrousselPropre.css";

const Carrousel: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const carrouselRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [currentMousePos, setCurrentMousePos] = useState(0);
    const [lastMousePos, setLastMousePos] = useState(0);
    const [lastMoveTo, setLastMoveTo] = useState(0);
    const [moveTo, setMoveTo] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        const carrousel = carrouselRef.current;

        if (!container || !carrousel) return;

        const carrouselItems = carrousel.querySelectorAll<HTMLDivElement>(".carrossel-item");

        const createCarrousel = () => {
            const carrouselProps = onResize();
            const length = carrouselItems.length;
            const degrees = 360 / length;
            const gap = 20;
            const tz = distanceZ(carrouselProps.w, length, gap);

            const fov = calculateFov(carrouselProps);
            const height = calculateHeight(tz);

            container.style.width = tz * 2 + gap * length + "px";
            container.style.height = height + "px";

            carrouselItems.forEach((item, i) => {
                const degreesByItem = degrees * i + "deg";
                item.style.setProperty("--rotatey", degreesByItem);
                item.style.setProperty("--tz", `${tz}px`);
            });
        };

        const lerp = (a: number, b: number, n: number) => n * (a - b) + b;

        const distanceZ = (widthElement: number, length: number, gap: number) => {
            return widthElement / 2 / Math.tan(Math.PI / length) + gap;
        };

        const calculateHeight = (z: number) => {
            const t = Math.atan((90 * Math.PI) / 180 / 2);
            const height = t * 2 * z;
            return height;
        };

        const calculateFov = (carrouselProps: { w: number; h: number }) => {
            const perspective = window
                .getComputedStyle(container.querySelector(".container-carrossel") as Element)
        .perspective.split("px")[0];

            const length =
                Math.sqrt(carrouselProps.w * carrouselProps.w) +
                Math.sqrt(carrouselProps.h * carrouselProps.h);
            const fov = 2 * Math.atan(length / (2 * parseFloat(perspective))) * (180 / Math.PI);
            return fov;
        };

        const getPosX = (x: number) => {
            setCurrentMousePos(x);
            setMoveTo((prevMoveTo) => (currentMousePos < lastMousePos ? prevMoveTo - 2 : prevMoveTo + 2));
            setLastMousePos(currentMousePos);
        };

        const update = () => {
            setLastMoveTo((prevLastMoveTo) => lerp(moveTo, prevLastMoveTo, 0.05));
            carrousel.style.setProperty("--rotatey", `${lastMoveTo}deg`);
            requestAnimationFrame(update);
        };

        const onResize = () => {
            const boundingCarrousel = container.querySelector(".container-carrossel")!.getBoundingClientRect();
            const carrouselProps = {
                w: boundingCarrousel.width,
                h: boundingCarrousel.height,
            };
            return carrouselProps;
        };

        const initEvents = () => {
            carrousel.addEventListener("mousedown", () => {
                setIsMouseDown(true);
                carrousel.style.cursor = "grabbing";
            });
            carrousel.addEventListener("mouseup", () => {
                setIsMouseDown(false);
                carrousel.style.cursor = "grab";
            });
            container.addEventListener("mouseleave", () => setIsMouseDown(false));

            carrousel.addEventListener("mousemove", (e) => isMouseDown && getPosX(e.clientX));

            carrousel.addEventListener("touchstart", () => {
                setIsMouseDown(true);
                carrousel.style.cursor = "grabbing";
            });
            carrousel.addEventListener("touchend", () => {
                setIsMouseDown(false);
                carrousel.style.cursor = "grab";
            });
            container.addEventListener("touchmove", (e) => isMouseDown && getPosX(e.touches[0].clientX));

            window.addEventListener("resize", createCarrousel);

            update();
            createCarrousel();
        };

        initEvents();
    }, [isMouseDown, currentMousePos, lastMousePos, lastMoveTo, moveTo]);

    return (
        <div className="conteudo__geral">
            <div className="container" ref={containerRef}>
                <div className="container-carrossel">
                    <div className="carrossel" ref={carrouselRef}>
                        <div className="carrossel-item">
                            <img src="../assets/ressources/image/Acceuil/professional.png" alt="Professionnalisme" />
                            <h3>Professionnalisme</h3>
                            <p>Nous sommes des étudiants qualifiés et passionnés par le développement web, offrant des services professionnels à des tarifs compétitifs.</p>
                        </div>
                        <div className="carrossel-item">
                            <img src="../assets/ressources/image/Acceuil/heart-in-hand.png" alt="Approche Personnalisée" className="représentation" />
                            <h3>Approche Personnalisée</h3>
                            <p>Nous prenons le temps de comprendre vos besoins et de créer des solutions sur mesure pour chaque projet.</p>
                        </div>
                        <div className="carrossel-item">
                            <img src="../assets/ressources/image/Acceuil/technology.png" alt="Technologies Modernes" className="représentation" />
                            <h3>Technologies Modernes</h3>
                            <p>Nous utilisons les technologies et outils les plus récents pour garantir des solutions efficaces et innovantes.</p>
                        </div>
                        <div className="carrossel-item">
                            <img src="../assets/ressources/image/Acceuil/collaboration.png" alt="Collaboration" className="représentation" />
                            <h3>Collaboration</h3>
                            <p>Nous croyons en une communication ouverte et une collaboration étroite avec nos clients tout au long du projet.</p>
                        </div>
                        <div className="carrossel-item">
                            <img src="../assets/ressources/image/Acceuil/engagement.png" alt="Engagement" className="représentation" />
                            <h3>Engagement</h3>
                            <p>Nous nous engageons à livrer des projets de haute qualité, dans les délais et le budget convenus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrousel;
