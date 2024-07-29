import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import LoadingAnimation from '@/components/loaders/loadingAnimation';
import styles from '../styles/Index.module.css';
import { useRouter } from 'next/router';

const Index: React.FC = () => {
    const [showLoading, setShowLoading] = useState(true);
    const [isCountdownComplete, setIsCountdownComplete] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 8790); // Duration of the video in milliseconds

        return () => clearTimeout(timer);
    }, []);

    const handleTransition = () => {
        const transitionElement = document.getElementById('transition');
        if (transitionElement) {
            transitionElement.classList.add(styles.transitionActive);
            setTimeout(() => {
                router.push('/Accueil');
            }, 500); // Adjust time to match your animation duration
        }
    };

    return (
        <div className={`text-white flex flex-col items-center justify-center h-screen ${styles.gradientBg}`}>
            <div className={styles.contentContainer}>
                {!isCountdownComplete && (
                    <div className={styles.typewriterContainer}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Ready for the FLEO experience').start();
                            }}
                            options={{
                                autoStart: true,
                                loop: false,
                                delay: 50,
                            }}
                        />
                    </div>
                )}
                <LoadingAnimation onCountdownComplete={() => setIsCountdownComplete(true)} handleTransition={handleTransition} />
            </div>
            <div id="transition" className={styles.transition}></div>
        </div>
    );
};

export default Index;
