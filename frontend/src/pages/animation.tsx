import React, { useState } from "react";
import { useRouter } from 'next/router';
import { helix } from 'ldrs';
import Typewriter from 'typewriter-effect';
import Countdown from "@/components/utils/Countdown";
import "../styles/animationPageStyle.css"

const AnimationPage: React.FC = () => {
    helix.register();
    const router = useRouter();

    const [isCountdownComplete, setIsCountdownComplete] = useState(false);

    const handleCountdownComplete = () => {
        setIsCountdownComplete(true);
    };

    const handleClick = () => {
        if (isCountdownComplete) {
            router.push("/nouvelle-page");
        }
    };

    return (
        <div className="flex flex-col space-y-4 text-center justify-center items-center h-screen text-xl relative bg-gradient-to-b from-[#79A5FC] via-[#2C6EEE] to-[#0C38BD]">
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
                className={`font-Russo rounded-full border-4 flex items-center justify-center text-center text-4xl transition-transform duration-700 ease-in-out cursor-pointer ${
                    isCountdownComplete ? "transform scale-150 w-48 h-48" : "w-16 h-16"
                }`}
                style={{ transformOrigin: 'center' }}
                onClick={handleClick}
            >
                {isCountdownComplete ? "Entrez" : <Countdown initialSeconds={5} onComplete={handleCountdownComplete} />}
            </span>
        </div>
    );
}

export default AnimationPage;
