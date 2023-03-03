import { useState, useEffect } from 'react'
import { getLogs } from "../ApiService";

function Log() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs().then((res) => {
      const groupedLogs = res.reduce((acc, log) => {
        const date = new Date(log.timestamp).toDateString();
        if (acc[date]) {
          acc[date].push(log);
        } else {
          acc[date] = [log];
        }
        return acc;
      }, {});

      const groupedLogsArray = Object.entries(groupedLogs).map(
        ([date, logs]) => {
          return { date, logs };
        }
      );

      setLogs(groupedLogsArray);
    });
  }, []);


  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white">
      <div className="relative px-4">
        {logs.map((log) => {
        return (
          <div className="border-b-2 py-4" key={log.date}>
            <p className="text-2xl font-bold text-left">{log.date}</p>
            {log.logs.map((item) => {
              return (
                <div
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-2"
                  key={item._id}
                >
                  <span>
                    {item.name} {item.baseAmount}ml --- 
                  </span>
                  <span className="text-red-500"> {item.caffeine}mg</span>
                  <p>
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



