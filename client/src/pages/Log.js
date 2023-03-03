function Log({logs, setLogs}) {
  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white">
      <div className="relative px-4">
        {logs.map((log) => {
        return (
          <div className="border-b-2 py-4" key={log.date}>
            <p className="text-2xl font-bold text-left">{log.date}</p>
            <p className="text-2xl font-bold text-left">
              Total:{" "}
              <span className="text-2xl font-bold text-red-500">
                {log.logs.reduce((acc, log) => {
                  acc = acc + log.caffeine;
                  return acc;
                }, 0)}{" "}
                mg{" "}
              </span>
            </p>
            {log.logs.map((item) => {
              return (
                <div
                  className="block p-6 bg-amber-50 border border-amber-200 rounded-lg shadow hover:bg-gray-100 my-2 flex justify-between items-center"
                  key={item._id}
                >
                  <div>
                    <span>
                      {item.name} {item.baseAmount}ml :
                    </span>
                    <span className="text-red-500 font-bold">
                      {" "}
                      {item.caffeine}mg{" "}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    at{" "}
                    {new Date(item.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Log;



