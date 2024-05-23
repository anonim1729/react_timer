import { useState, useRef } from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  const [timerOn, setTimerOn] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [second, setSecond] = useState(0);
  const timer = useRef(0);

  const handleStart = () => {
    timer.current = setInterval(() => {
      setSecond(prev => prev + 1);
    }, 1000);
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
    }, 1000);
    setIsPaused(false);
  };

  const handleReset = () => {
    clearInterval(timer.current);
    timer.current = 0;
    setTimerOn(false);
    setSecond(0);
    setIsPaused(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center mb-8">
        <p className="text-6xl font-bold mb-4">Seconds: {second}</p>
        <div className="space-x-4">
          {!timerOn ? (
            <button
              className="px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 focus:outline-none"
              onClick={handleStart}
            >
              Start
            </button>
          ) : (
            <>
              {isPaused ? (
                <button
                  className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
                  onClick={handleResume}
                >
                  Resume
                </button>
              ) : (
                <button
                  className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 focus:outline-none"
                  onClick={handlePause}
                >
                  Pause
                </button>
              )}
              <button
                className="px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 focus:outline-none"
                onClick={handleReset}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
