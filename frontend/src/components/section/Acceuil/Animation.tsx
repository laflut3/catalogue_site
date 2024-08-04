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
    const [isCountdownComplete, setIsCountdownComplete] = useState(false);
    const [startTransition, setStartTransition] = useState(false);
    const { isAnimationComplete, setIsAnimationComplete } = useAnimation(); // Ajout de isAnimationComplete

    const handleTransition = () => {
        setStartTransition(true);
    };

    useEffect(() => {
        if (startTransition) {
            setTimeout(() => {
                setIsAnimationComplete(true);
            }, 1500); // Duration of the fade-out animation
        }
    }, [startTransition, setIsAnimationComplete]);

    useEffect(() => {
        if (isAnimationComplete) {
            document.getElementById('content')!.style.display = 'block';
        }
    }, [isAnimationComplete]);

    return (
        <>
            {!isAnimationComplete && (
                <motion.div
                    className={`text-white flex flex-col items-center justify-center h-screen ${styles.gradientBg}`}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={startTransition ? { opacity: 0, scale: 0.5, rotate: 180 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <div className={styles.contentContainer}>
                        {!isCountdownComplete && (
                            <div className={`font-Russo ${styles.typewriterContainer}`}>
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
                            </div>
                        )}
                        <LoadingAnimation
                            onCountdownComplete={() => setIsCountdownComplete(true)}
                            handleTransition={handleTransition}
                        />
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
