import { useEffect, useState } from "react";
import "./timer.css"

function Timer({ seconds = 60, onTimeUp }) {
    const [time, setTime] = useState(seconds);

    useEffect(() => {
        if (time <= 0) {
            onTimeUp();
            return;
        }

        const timer = setInterval(() => {
            setTime(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time, onTimeUp]);

    const minutes = Math.floor(time / 60);
    const secs = time % 60;

    return (
        <div className="timer">
            {String(minutes).padStart(2, "0")}:
            {String(secs).padStart(2, "0")}
        </div>
    );
}

export default Timer;
