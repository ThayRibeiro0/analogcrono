import { useContext } from 'react';
import { TimersContext } from '../context/analogcron';
import '../App.css';

const Timer = () => {

  const [TimersState, dispatch] = useContext(TimersContext);
  console.log(TimersState);
  let [timer, setTime] = useState({
    millis: '00',
    secs: '00',
    hours: '00',
  });

  //the name changed and the idea too of timer
  return <div className="container">
    <div className="stopwatch">
      <div className="heading-bar">
        <span>Stopwatch</span>
      <div className="settings-icon">⚙</div>
    </div>
    <div className="timer-container">a
    <div className="stripes">
      <div className="timer"></div>
    </div>
    </div>
  </div>
  </div>
};

export default Timer;