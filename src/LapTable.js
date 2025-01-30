const LapTable = ({ laps }) => {
    return (
        <div className="overflow-x-auto mt-8 w-full max-w-4xl">
            <table className="table-auto w-full bg-white text-gray-800 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left text-gray-700 font-semibold">Lap</th>
                        <th className="px-4 py-2 text-left text-gray-700 font-semibold">Lap times</th>
                        <th className="px-4 py-2 text-left text-gray-700 font-semibold">Overall times</th>
                    </tr>
                </thead>
                <tbody>
                    {laps.map((lap, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border-t px-4 py-2">{index + 1}</td>
                            <td className="border-t px-4 py-2">{lap.lap}</td>
                            <td className="border-t px-4 py-2">{lap.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LapTable;
