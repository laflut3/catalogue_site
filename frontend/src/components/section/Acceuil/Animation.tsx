"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import styles from '@/styles/Index.module.css';
import TroisiemeSectionAcceuil from "@/components/section/Acceuil/TroisiemeSectionAcceuil";
import DeuxiemeSectionAcceuil from "@/components/section/Acceuil/DeuxiemeSectionAcceuil";
import PremiereSectionAcceuil from "@/components/section/Acceuil/PremiereSectionAcceuil";
import { useAnimation } from '@/../context/AnimationContext';

const Animation: React.FC = () => {
    const [showEnterButton, setShowEnterButton] = useState(true);
    const [startTypewriter, setStartTypewriter] = useState(false);
    const [textWritten, setTextWritten] = useState(false);
    const [textErased, setTextErased] = useState(false);
    const [startShake, setStartShake] = useState(false);
    const [startTransition, setStartTransition] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const { isAnimationComplete, setIsAnimationComplete } = useAnimation();

    useEffect(() => {
        setIsClient(true); // Ensuring the component is mounted on the client side
    }, []);

    const handleEnterClick = () => {
        setShowEnterButton(false); // Masquer le bouton "Entrez"
        setStartTypewriter(true); // Commencer l'animation d'écriture
    };

    useEffect(() => {
        if (textWritten) {
            setTimeout(() => {
                setTextErased(true); // Effacer le texte après une pause
            }, 500);
        }
    }, [textWritten]);

    useEffect(() => {
        if (textErased) {
            setStartShake(true); // Commencer l'effet de tremblement après que le texte est effacé
            setTimeout(() => {
                setStartTransition(true); // Déclencher l'effet hyperspace après le tremblement
            }, 500);
        }
    }, [textErased]);

    useEffect(() => {
        if (startTransition) {
            setTimeout(() => {
                setIsAnimationComplete(true); // Marquer l'animation comme complète
            }, 1500); // Durée de l'animation de transition
        }
    }, [startTransition, setIsAnimationComplete]);

    useEffect(() => {
        if (isAnimationComplete) {
            document.getElementById('content')!.style.display = 'block';
        }
    }, [isAnimationComplete]);

    const hyperspaceEffect = {
        hidden: {
            opacity: 1,
            scale: 1
        },
        visible: {
            opacity: 0,
            scale: 1.5,
            transition: {
                duration: 1.5,
                ease: "easeInOut"
            }
        }
    };

    const shakeEffect = {
        shake: {
            x: [0, -10, 10, -10, 10, -10, 10, 0],
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            {!isAnimationComplete && (
                <motion.div
                    className={`text-white flex flex-col items-center justify-center h-screen ${styles.gradientBg}`}
                    initial="hidden"
                    animate={startTransition ? "visible" : "hidden"}
                    variants={hyperspaceEffect}
                >
                    <div className={styles.contentContainer}>
                        {showEnterButton && (
                            <div
                                className={`font-Russo text-6xl cursor-pointer ${styles.countdownText}`}
                                onClick={handleEnterClick}
                            >
                                Entrez
                            </div>
                        )}
                        {!showEnterButton && startTypewriter && (
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: textErased ? 0 : 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className={styles.typewriterContainer}
                            >
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString('PRÊT POUR L\'EXPÉRIENCE FLEO')
                                            .callFunction(() => setTextWritten(true))
                                            .pauseFor(500)
                                            .deleteAll()
                                            .callFunction(() => setTextErased(true))
                                            .start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 50,
                                    }}
                                />
                            </motion.div>
                        )}
                        {startShake && (
                            <motion.div
                                className={styles.shakeContainer}
                                animate="shake"
                                variants={shakeEffect}
                            >
                                {/* Div vide pour appliquer l'effet de tremblement */}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isAnimationComplete ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div id="content" className={styles.visibleContent}>
                    <PremiereSectionAcceuil />
                    <DeuxiemeSectionAcceuil />
                    <TroisiemeSectionAcceuil />
                </div>
            </motion.div>
            {!isAnimationComplete && isClient && (
                <div className={styles.hyperspaceEffect}>
                    {[...Array(100)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.star}`}
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                            animate={{ opacity: 1, x: Math.random() * window.innerWidth - window.innerWidth / 2, y: Math.random() * window.innerHeight - window.innerHeight / 2, scale: 1 }}
                            transition={{ duration: Math.random() * 1.5 + 0.5, ease: "linear" }}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default Animation;
