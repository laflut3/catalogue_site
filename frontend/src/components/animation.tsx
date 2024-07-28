"use client";

import React, { useState } from "react";
import { helix } from 'ldrs';
import Typewriter from 'typewriter-effect';
import Countdown from "@/components/utils/Countdown";

const AnimationPages: React.FC = () => {
    helix.register();

    const [isCountdownComplete, setIsCountdownComplete] = useState(false);

    const handleCountdownComplete = () => {
        setIsCountdownComplete(true);
    };

    return (
        <div className="flex flex-col space-y-4 text-center justify-center items-center h-screen text-xl relative">
            {!isCountdownComplete && (
                <>
                    <l-helix size="45" speed="2.5" color="white"></l-helix>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Ready for the FLEO experience')
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 75,
                        }}
                    />
                </>
            )}
            <span
                className={`font-Russo rounded-full border-4 flex items-center justify-center text-center text-4xl transition-all duration-700 ${
                    isCountdownComplete ? "w-full h-full absolute top-0 left-0" : "w-32 h-32"
                }`}
            >
                <Countdown initialSeconds={5} onComplete={handleCountdownComplete} />
            </span>
        </div>
    );
}

export default AnimationPages;