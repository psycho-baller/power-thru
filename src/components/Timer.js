import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import dummy from './dummy-rings.png'
import "./Timer.css"

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
    <div className="timer">
        <div className="left-timer">
            <img src={ dummy }></img>
        </div>

        <div className="right-timer">

            <h1>TIME SINCE LAST RELAPSE:</h1>

            <div className="stats">
                <div className="timer-numbers">
                    { days }<br/>
                    { hours }<br/>
                    { minutes }<br/>
                    { seconds }
                </div>
                <div className="timer-text">
                    Days <br/>
                    Hours <br/>
                    Minutes <br/>
                    Seconds
                </div>
            </div>
            
            <button onClick={relapse}>RELAPSE</button>
        </div>
    </div>
        
  );
}
