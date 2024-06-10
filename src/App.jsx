import './App.css';
import Button from './component/Button.jsx';
import { useRef, useState, useEffect } from 'react';
import format from './text_format.js';

export default function App() {
  const time = useRef(0)
  const [display, setDisplay] = useState("00:00:00");
  const pressed = useRef(false);
  const intervalId = useRef(null); // Store the interval ID

  function start() {
    if (!pressed.current){
      console.log(time.current)
      intervalId.current = setInterval(() => {
        time.current += 1
        setDisplay(format(time.current));
      }, 10);
      pressed.current = true
    }

  }

  function stop() {
    clearInterval(intervalId.current); // Clear the interval
    pressed.current = false
  }

  function restart() {
    stop();
    time.current = 0
    setDisplay("00:00:00");
  }

  return (
    <div className='main-div'>
      <h1 className='time'>{display}</h1>
      <div className="button-holder">
        <Button title="Start" onClick={start} />
        <Button title="Stop" onClick={stop} />
        <Button title="Restart" onClick={restart} />
      </div>
    </div>
  );
}
