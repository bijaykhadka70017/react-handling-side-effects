import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('INTERVAL RUNNING');
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        // Cleanup function runs when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress value={remainingTime} max={timer} />
}