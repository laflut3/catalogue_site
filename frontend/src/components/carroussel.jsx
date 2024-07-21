"use client";

import React, { useEffect, useRef} from "react";
import "../styles/Carroussel propre.css";

const Carrousel = () => {
    const containerRef = useRef(null);
    const carrouselRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const carrousel = carrouselRef.current;
        const carrouselItems = carrousel.querySelectorAll(".carrossel-item");

        let isMouseDown = false;
        let currentMousePos = 0;
        let lastMousePos = 0;
        let lastMoveTo = 0;
        let moveTo = 0;

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
                item.style.setProperty("--tz", tz + "px");
            });
        };

        const lerp = (a, b, n) => n * (a - b) + b;

        const distanceZ = (widthElement, length, gap) => {
            return widthElement / 2 / Math.tan(Math.PI / length) + gap;
        };

        const calculateHeight = (z) => {
            const t = Math.atan((90 * Math.PI) / 180 / 2);
            const height = t * 2 * z;
            return height;
        };

        const calculateFov = (carrouselProps) => {
            const perspective = window
                .getComputedStyle(container.querySelector(".container-carrossel"))
                .perspective.split("px")[0];

            const length =
                Math.sqrt(carrouselProps.w * carrouselProps.w) +
                Math.sqrt(carrouselProps.h * carrouselProps.h);
            const fov = 2 * Math.atan(length / (2 * perspective)) * (180 / Math.PI);
            return fov;
        };

        const getPosX = (x) => {
            currentMousePos = x;
            moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2;
            lastMousePos = currentMousePos;
        };

        const update = () => {
            lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
            carrousel.style.setProperty("--rotatey", lastMoveTo + "deg");
            requestAnimationFrame(update);
        };

        const onResize = () => {
            const boundingCarrousel = container.querySelector(".container-carrossel").getBoundingClientRect();
            const carrouselProps = {
                w: boundingCarrousel.width,
                h: boundingCarrousel.height,
            };
            return carrouselProps;
        };

        const initEvents = () => {
            carrousel.addEventListener("mousedown", () => {
                isMouseDown = true;
                carrousel.style.cursor = "grabbing";
            });
            carrousel.addEventListener("mouseup", () => {
                isMouseDown = false;
                carrousel.style.cursor = "grab";
            });
            container.addEventListener("mouseleave", () => (isMouseDown = false));

            carrousel.addEventListener("mousemove", (e) => isMouseDown && getPosX(e.clientX));

            carrousel.addEventListener("touchstart", () => {
                isMouseDown = true;
                carrousel.style.cursor = "grabbing";
            });
            carrousel.addEventListener("touchend", () => {
                isMouseDown = false;
                carrousel.style.cursor = "grab";
            });
            container.addEventListener("touchmove", (e) => isMouseDown && getPosX(e.touches[0].clientX));

            window.addEventListener("resize", createCarrousel);

            update();
            createCarrousel();
        };

        initEvents();
    }, []);

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
