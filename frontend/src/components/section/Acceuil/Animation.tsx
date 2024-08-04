"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import LoadingAnimation from '@/components/loaders/LoadingAnimation';
import styles from '@/styles/Index.module.css';
import TroisiemeSectionAcceuil from "@/components/section/Acceuil/TroisiemeSectionAcceuil";
import DeuxiemeSectionAcceuil from "@/components/section/Acceuil/DeuxiemeSectionAcceuil";
import PremiereSectionAcceuil from "@/components/section/Acceuil/PremiereSectionAcceuil";
import { useAnimation } from '@/../context/AnimationContext';

const Animation: React.FC = () => {
    const [showEnterButton, setShowEnterButton] = useState(true);
    const [isCountdownComplete, setIsCountdownComplete] = useState(false);
    const [startTransition, setStartTransition] = useState(false);
    const { isAnimationComplete, setIsAnimationComplete } = useAnimation();

    const handleEnterClick = () => {
        setShowEnterButton(false); // Masquer le bouton "Entrez"
    };

    const handleCountdownComplete = () => {
        setIsCountdownComplete(true); // Indiquer que le compteur est terminé
        setTimeout(() => {
            setStartTransition(true); // Déclencher la transition
        }, 100); // Petite attente pour assurer le bon déroulement
    };

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
                        {!showEnterButton && !isCountdownComplete && (
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: startTransition ? 1.5 : 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className={styles.typewriterContainer}
                            >
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString('READY FOR THE FLEO EXPERIENCE').start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 50,
                                    }}
                                />
                            </motion.div>
                        )}
                        {!showEnterButton && !isCountdownComplete && (
                            <LoadingAnimation
                                onCountdownComplete={handleCountdownComplete}
                                handleTransition={() => setStartTransition(true)}
                            />
                        )}
                    </div>
                </motion.div>
            )}
            {isAnimationComplete && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <div id="content" className={styles.visibleContent}>
                        <PremiereSectionAcceuil />
                        <DeuxiemeSectionAcceuil />
                        <TroisiemeSectionAcceuil />
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Animation;
