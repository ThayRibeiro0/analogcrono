import { useContext } from 'react';
import { TimersContext } from '../context/analogcron';
import '../App.css';
import { useState } from 'react';

const Timer = () => {
  const [TimersState, dispatch] = useContext(TimersContext);
  console.log(TimersState);

  let [time, setTime] = useState({
    millis: '00',
    secs: '00',
    hours: '00',
  });

  let [isStarted, setIsStarted] = useState(false);

  function startTimer() {
    if (!isStarted) 33:50
  }

  function resetTimer() {

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
              {time.hours}:{time.secs}:{time.millis}
            </div>
          </div>
        </div>
        <div className="spacer">
          <div className='button-container'>
            <div onClick={startTimer} className='button'>Start</div>
            <div onClick={resetTimer} className='button'>Restart</div>            
          </div>
        </div>
      </div>
    </div>
  )
};

export default Timer;