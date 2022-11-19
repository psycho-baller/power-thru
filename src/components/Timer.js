import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function Timer() {

    const current = new Date()  // current date
    const lastRelapse = Date.parse(localStorage.getItem('date')) // date of last relapse
    
    var difference = (current - lastRelapse) / 1000; // seconds since last relapse
    
    const stopwatchOffset = new Date(); 
    stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + difference); // setting the offset for the timer

    const {
        seconds,
        minutes,
        hours,
        days,
        // isRunning,
        // start,
        // pause,
        reset,
    } = useStopwatch({ autoStart: true, offsetTimestamp: stopwatchOffset });

    const relapse = () => 
    {
        localStorage.setItem('date', new Date())
        reset()
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h1>TIME SINCE LAST RELAPSE:</h1>
            <div style={{fontSize: '100px'}}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <button onClick={relapse}>RELAPSE</button>
        </div>
  );
}
