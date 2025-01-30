const parseTime = (timeString) => {
    const [minutes, seconds, microseconds] = timeString.split(':').map(Number);
    return { minutes, seconds, microseconds };
};

const timeToMicroseconds = ({ minutes, seconds, microseconds }) => {
    return (minutes * 60 * 100) + (seconds * 100) + microseconds;
};

const microsecondsToTime = (totalMicroseconds) => {
    const minutes = Math.floor(totalMicroseconds / 6000);
    const remainingMicroseconds = totalMicroseconds % 6000;
    const seconds = Math.floor(remainingMicroseconds / 100);
    const microseconds = remainingMicroseconds % 100;

    return {
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        microseconds: String(microseconds).padStart(2, '0')
    };
};

const formatTime = ({ minutes, seconds, microseconds }) => {
    return `${minutes}:${seconds}:${microseconds}`;
};

const timeDifference = (time1, time2) => {
    const time1Parsed = parseTime(time1);
    const time2Parsed = parseTime(time2);

    const time1Microseconds = timeToMicroseconds(time1Parsed);
    const time2Microseconds = timeToMicroseconds(time2Parsed);

    const differenceMicroseconds = Math.abs(time1Microseconds - time2Microseconds);

    const differenceTime = microsecondsToTime(differenceMicroseconds);

    return formatTime(differenceTime);
};

export default timeDifference;