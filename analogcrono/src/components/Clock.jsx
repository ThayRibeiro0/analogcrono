import { useContext } from 'react';
import { TimersContext } from '../context/analogcron';
import React, { useState } from 'react';
import '../App.css';


function Clock({hourRatio, minuteRatio, secondRatio}){
    
    //context
    const [TimersState, dispatch] = useContext(TimersContext);
    
    //digital watch
    let time = new Date().toLocaleTimeString();    
    const [currentTime, setCurrentTime] = useState(time);
    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(updateTime, 1000);

    //base Clock
    return (
        <div className="container1">
            <div className="clockin">
                <div className="heading-bar">
                    <span>Clock</span>
                <div className="settings-icon">⏰</div>
                </div>
            <div className='clock_digital'>
                <h1>{currentTime}</h1>
            </div>
            <div className="clock">
                <div className="hand hour" style={{transform:`translate(-50%) rotate(${hourRatio * 360}deg)`}}></div>
                <div className="hand minute" style={{transform:`translate(-50%) rotate(${minuteRatio * 360}deg)`}}></div>
                <div className="hand second" style={{transform:`translate(-50%) rotate(${secondRatio * 360}deg)`}}></div>
                <div className="number number1"><div>|</div></div>
                <div className="number number2"><div>|</div></div>
                <div className="number number3"><div>3</div></div>
                <div className="number number4"><div>|</div></div>
                <div className="number number5"><div>|</div></div>
                <div className="number number6"><div>6</div></div>
                <div className="number number7"><div>|</div></div>
                <div className="number number8"><div>|</div></div>
                <div className="number number9"><div>9</div></div>
                <div className="number number10"><div>|</div></div>
                <div className="number number11"><div>|</div></div>
                <div className="number number12"><div>12</div></div>
                <button onClick={() => dispatch({type: "CHANGE_PAGES"})} className='botao1'>
                Stopwatch ⇨
                </button>
                </div>
            </div>
        </div>
    )
}

export default Clock