// const Time = ({ second }) => {
//     const findMinutes = (second) => {
//         return parseInt((second / 100) / 60);
//     }
//     const findSeconds = (second) => {
//         return parseInt(((second) / 100) % 60);
//     }
//     const findMicroSeconds = (second) => {
//         return parseInt((second) % 100);
//     }
//     return (
//         <p className="text-6xl font-bold mb-4">{findMinutes(second) < 10 ? '0' + findMinutes(second) : findMinutes(second)}:{findSeconds(second) < 10 ? '0' + findSeconds(second) : findSeconds(second)}:{findMicroSeconds(second) < 10 ? '0' + findMicroSeconds(second) : findMicroSeconds(second)}</p>
//     )
// }
// export default Time;

const Time = ({ seconds, minutes, microSeconds }) => {
    return (
        <p className="text-6xl font-bold mb-4">
            {minutes}:{seconds}:{microSeconds}
        </p>
    );
};

export default Time;
