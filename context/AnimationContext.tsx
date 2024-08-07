"use client"

import React, { createContext, useState, useContext } from 'react';

interface AnimationContextProps {
    isAnimationComplete: boolean;
    setIsAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
    resetAnimation: () => void;
}

const AnimationContext = createContext<AnimationContextProps | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    const resetAnimation = () => {
        setIsAnimationComplete(false);
        localStorage.removeItem('hasVisited');
    };

    return (
        <AnimationContext.Provider value={{ isAnimationComplete, setIsAnimationComplete, resetAnimation }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error('useAnimation must be used within an AnimationProvider');
    }
    return context;
};
