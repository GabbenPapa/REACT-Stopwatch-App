import React, { useState, useEffect, useRef } from 'react'

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [ellapsedTime, setEllapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {  
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setEllapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - ellapsedTime;
    }
    
    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setEllapsedTime(0);
        setIsRunning(false);

    }

    function formatTime(time) {
        let hours = Math.floor( ellapsedTime / (1000*60*60));
        let minutes = Math.floor(ellapsedTime / (1000*60) % 60);
        let seconds = Math.floor(ellapsedTime / (1000) % 60);
        let milliseconds = Math.floor((ellapsedTime % 1000)/10);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0') }:${milliseconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button className='start-button' onClick={start} >Start</button>
                <button className='stop-button' onClick={stop}>Stop</button>
                <button className='reset-button' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch