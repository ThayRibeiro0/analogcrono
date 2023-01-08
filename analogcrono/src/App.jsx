import React, { Component } from 'react';

import './App.css';
import './components/Clock.css';

import { useContext } from 'react';
import { TimersContext } from './context/analogcron';

import Timer from './components/Timer';
import Clock from './components/Clock';

class App extends Component {
  state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0
  }

  componentDidMount (){
    setInterval(()=>{
      this.setClock()
    },1000)
  }

  setClock = () =>{
    const currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    

    this.setState({secondRatio: secondRatio})
    this.setState({minuteRatio: minuteRatio})
    this.setState({hourRatio: hourRatio})
  }
  
  return(){
    const [TimersState, dispatch] = useContext(TimersContext);

    <div className='clock'>
      {TimersState.numberPages === "First" && <Clock />}
      {TimersState.numberPages === "Last" && <Timer />}
    </div>  
  }

  render(){
    const { secondRatio, minuteRatio, hourRatio} = this.state
    return (
      <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
    );
  }
  
}

export default App;