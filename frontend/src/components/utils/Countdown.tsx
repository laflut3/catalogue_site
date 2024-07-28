import React, { useState, useEffect } from 'react';

interface CountdownProps {
    initialSeconds: number;
    onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ initialSeconds, onComplete }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            onComplete();
        }
    }, [seconds, onComplete]);

    return (
        <div className="font-Russo text-6xl text-center">
            {seconds > 0 ? (
                <h1>{seconds}</h1>
            ) : (
                <h1></h1>
            )}
        </div>
    );
};

export default Countdown;
