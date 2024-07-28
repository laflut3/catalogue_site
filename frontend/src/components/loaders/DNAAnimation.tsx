import React from 'react';
import '@/styles/loadersStyle/DNAAnimation.module.css';

const AnimationComponent: React.FC = () => {
    return (
        <div className="animation-container">
            <div className="animated-element">
                <div className="inner-element">Contenu</div>
            </div>
        </div>
    );
};

export default AnimationComponent;
