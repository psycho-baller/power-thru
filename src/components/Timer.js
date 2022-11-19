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
                    <div className="timer-text-d">{ days }<br/></div>
                    <div className="timer-text-h">{ hours }<br/></div>
                    <div className="timer-text-m">{ minutes }<br/></div>
                    <div className="timer-text-s">{ seconds }<br/></div>
                </div>
                <div className="timer-text">
                    <div className="timer-text-d">Days <br/></div>
                    <div className="timer-text-h">Hours <br/></div>
                    <div className="timer-text-m">Minutes <br/></div>
                    <div className="timer-text-s">Seconds <br/></div>
                </div>
            </div>
            
            <button className="relapse-button" onClick={relapse}>R E L A P S E</button>
        </div>
    </div>
        
  );
}
