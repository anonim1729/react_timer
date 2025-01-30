import { useState, useRef, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Time from './Time';
import Buttons from './Buttons';
import LapTable from './LapTable';
import timeDifference from './timeDifference';

function App() {
  const [timerOn, setTimerOn] = useState(false);
  const [lapItems, setLapItems] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [second, setSecond] = useState(0);
  const [seconds, setSeconds] = useState('');
  const [minutes, setMinutes] = useState('');
  const [micros, setMicros] = useState('');


  const findMinutes = (second) => {
    return Math.floor(second / 6000);
  };

  const findSeconds = (second) => {
    return Math.floor((second / 100) % 60);
  };

  const findMicroSeconds = (second) => {
    return second % 100;
  };

  useEffect(() => {
    const mins = findMinutes(second).toString().padStart(2, '0');
    const secs = findSeconds(second).toString().padStart(2, '0');
    const microSecs = findMicroSeconds(second).toString().padStart(2, '0');
    setSeconds(secs);
    setMinutes(mins);
    setMicros(microSecs);
  }, [second])


  const timer = useRef(0);

  const handleStart = () => {
    timer.current = setInterval(() => {
      setSecond(prev => prev + 1);
    }, 10);
    setTimerOn(true);
  };

  const handlePause = () => {
    clearInterval(timer.current);
    timer.current = 0;
    setIsPaused(true);
  };

  const handleResume = () => {
    timer.current = setInterval(() => {
      setSecond(prev => prev + 1);
    }, 10);
    setIsPaused(false);
  };

  const handleReset = () => {
    clearInterval(timer.current);
    timer.current = 0;
    setTimerOn(false);
    setSecond(0);
    setIsPaused(false);
    setLapItems([]);
  };

  const handleLap = () => {
    const newLap = {
      lap: lapItems.length ? timeDifference(minutes + ':' + seconds + ':' + micros, lapItems[lapItems.length - 1].total) : minutes + ':' + seconds + ':' + micros,
      total: minutes + ':' + seconds + ':' + micros
    };
    const newLapItems = [...lapItems, newLap];
    setLapItems(newLapItems);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center mb-8">
        <Time
          seconds={seconds}
          minutes={minutes}
          microSeconds={micros}
        />
        <Buttons
          timerOn={timerOn}
          handleLap={handleLap}
          handlePause={handlePause}
          handleResume={handleResume}
          handleReset={handleReset}
          handleStart={handleStart}
          isPaused={isPaused}
        />
        <LapTable
          laps={lapItems}
        />
      </div>
    </div>
  );
}

export default App;
