import React from 'react';
import styles from '../../styles/loadersStyle/LoadingAnimation.module.css';

const LoadingAnimation: React.FC = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.helix}></div>
        </div>
    );
};

export default LoadingAnimation;
