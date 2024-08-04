import React, { useState } from 'react';
import Countdown from '@/components/utils/Countdown';
import styles from '../../styles/loadersStyle/LoadingAnimation.module.css';

interface LoadingAnimationProps {
    onCountdownComplete: () => void;
    handleTransition: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onCountdownComplete, handleTransition }) => {
    const [isCountdownComplete, setIsCountdownComplete] = useState(false);

    const handleCountdownComplete = () => {
        setIsCountdownComplete(true);
        onCountdownComplete();
    };

    const handleClick = () => {
        if (isCountdownComplete) {
            handleTransition();
        }
    };

    return (
        <div className={styles.loaderContainer}>
            <div className={`${styles.spinnerContainer} ${isCountdownComplete ? styles.spinnerComplete : ''}`}>
                <div className={`${styles.spinner} ${isCountdownComplete ? styles.spinnerStop : ''}`}></div>
                {isCountdownComplete ? (
                    <div
                        className={`font-Russo text-3xl cursor-pointer ${styles.countdownText}`}
                        onClick={handleClick}
                    >
                        Entrez
                    </div>
                ) : (
                    <Countdown initialSeconds={3} onComplete={handleCountdownComplete} />
                )}
            </div>
        </div>
    );
};

export default LoadingAnimation;
