import { useContext, useEffect } from 'react';
import { TimersContext } from '../context/analogcron';
import '../App.css';
import { useState } from 'react';


const defaultState = {
  millis: '00',
  secs: '00',
  hours: '00',
  minutes: '00',
};

let startDuration = null;

function getZeroAppendedString(num){
  return ('0' + num).slice(-2);
}

function calculateTime() {
  let millisecondsPassed = new Date().getTime() - startDuration;
  let millisecondsTimer =  getZeroAppendedString(
    String(millisecondsPassed % 1000).substring(0, 2)
  );
  let secondsPassed = Math.floor(millisecondsPassed / 1000);
  let secondsPassedTimer = Math.floor(millisecondsPassed / 1000) % 60; 
  let minutesPassed = Math.floor(secondsPassed / 60);
  let minutesPassedTimer = Math.floor(secondsPassed / 60) % 60;
  let hoursPassed = Math.floor(minutesPassed / 60) % 24;
 
  secondsPassed = getZeroAppendedString(secondsPassedTimer);
  minutesPassed = getZeroAppendedString(minutesPassedTimer);
  hoursPassed = getZeroAppendedString(hoursPassed);
  
  return {
    millis: millisecondsTimer,
    secs: secondsPassed,
    hours: hoursPassed,
    minutes: minutesPassed,
  };
}

const Timer = () => {
  const [TimersState, dispatch] = useContext(TimersContext);
  console.log(TimersState);
  
  let [time, setTime] = useState({
    millis: '00',
    secs: '00',
    hours: '00',
    minutes: '00',
  });
  
  let [isStarted, setIsStarted] = useState(false);
  let [interval, _setInterval] = useState(null);
  useEffect(() => {
    return () => {
      if (interval){
        clearInterval(interval);
        _setInterval(null);
      }
    };
  }, []);

  function startTimer(){
    if (!isStarted) {
      startDuration = new Date().getTime();
      _setInterval(
        setInterval(() => {
          setTime(calculateTime());
        }, 20)
      );   
    }
    setIsStarted(bIsStarted => !bIsStarted);
  }

  function resetTimer(){
    setTime(defaultState);
    setIsStarted(false);
    clearInterval(interval);
    _setInterval(null);
    startDuration = null;
  }

  return (
    <div className="container">
      <div>
        <button className='botao2'>
          Clock ⇦
        </button>
      </div>
      <div className="stopwatch">
        <div className="heading-bar">
          <span>Stopwatch</span>
          <div className="settings-icon">⏲</div>
        </div>
        <div className="timer-container">
          <div className="stripes">
            <div className="timer">
              {time.hours}:{time.minutes}:{time.secs}:{time.millis}
            </div>
          </div>
        </div>
        <div className="spacer">
          <div className='button-container'>
            <div 
            onClick={startTimer} 
            className={`button ${isStarted ? 'active' : ''}`}
            >
              {isStarted ? 'Stop' : 'Start'}
            </div>
            <div 
            onClick={resetTimer} 
            className='button'>
              Reset</div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;