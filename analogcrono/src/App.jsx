import React, { useEffect, useState, useContext } from 'react';

import './App.css';
import './components/Clock.css';
import { TimersContext } from './context/analogcron';
import Timer from './components/Timer';
import Clock from './components/Clock';

const App = () => {
  const [state, setState] = useState({
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0
  })

const setClock = () => {
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    setState({ secondRatio, minuteRatio, hourRatio })
  }

  useEffect(() => {
    setInterval(() => {
      setClock()
    }, 1000)
  }, []);

  const [TimersState, dispatch] = useContext(TimersContext);
  return (
      <div>
        {TimersState.numberPages === "First" && <div className='clock'><Clock {...state} /></div>}
        {TimersState.numberPages === "Last" && <Timer />}
      </div>
  )
}

export default App;