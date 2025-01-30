const Buttons = ({ timerOn, handleLap, handlePause, handleReset, handleResume, handleStart, isPaused }) => {
    return (
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
                    {
                        !isPaused ?
                            <button
                                className="px-6 py-3 bg-gray-400 text-white rounded-full shadow-md hover:bg-gray-800 focus:outline-none"
                                onClick={handleLap}
                            >
                                Lap
                            </button>
                            : <button
                                className="px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 focus:outline-none"
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                    }
                </>
            )}
        </div>
    )
}
export default Buttons