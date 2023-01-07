import { useContext } from 'react';
import { TimersContext } from '../context/analogcron';

const Timer = () => {
  const [TimersState, dispatch] = useContext(TimersContext);

  console.log(TimersState);

  return <div>Timer</div>;
};

export default Timer;