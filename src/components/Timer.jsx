import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { TimersContext } from '../context/analogcron';
import '../App.css';

const defaultState = {
  millis: '00',
  secs: '00',
  mins: '00',
  hours: '00',
};

let startTimestamp = null;

function Timer() {
  const [TimersState, dispatch] = useContext(TimersContext);
  const [time, setTime] = useState(defaultState);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      startTimestamp = new Date().getTime();

      const interval = setInterval(() => {
        const currentTime = calculateTime();
        setTime(currentTime);
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const calculateTime = () => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTimestamp;

    const milliseconds = (`00` + (elapsedTime % 1000)).slice(-3).slice(0, 2);
    const seconds = (`0` + Math.floor((elapsedTime / 1000) % 60)).slice(-2);
    const minutes = (`0` + Math.floor((elapsedTime / (1000 * 60)) % 60)).slice(-2);
    const hours = (`0` + Math.floor((elapsedTime / (1000 * 60 * 60)) % 24)).slice(-2);

    return {
      millis: milliseconds,
      secs: seconds,
      mins: minutes,
      hours: hours,
    };
  };

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(defaultState);
  };

  const handlePageChange = () => {
    dispatch({ type: 'CHANGE_PAGES' });
  };

  return (
    <div className="container">
      <div>
        <button className="botao2" onClick={handlePageChange}>
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
              {time.hours}:{time.mins}:{time.secs}:{time.millis}
            </div>
          </div>
        </div>
        <div className="spacer">
          <div className="button-container">
            <div className={`button ${isRunning ? 'active' : ''}`} onClick={handleStartStop}>
              {isRunning ? 'Stop' : 'Start'}
            </div>
            <div className="button" onClick={handleReset}>
              Reset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
