import React from 'react';
import styles from '../../styles/DNAAnimation.module.css';

const DNAAnimation: React.FC = () => {
    return (
        <div className={styles.dnaContainer}>
            <div className={styles.dna}>
                <div className={styles.dnaSegment}></div>
                <div className={styles.dnaSegment}></div>
                <div className={styles.dnaSegment}></div>
                <div className={styles.dnaSegment}></div>
                <div className={styles.dnaSegment}></div>
            </div>
        </div>
    );
};

export default DNAAnimation;
