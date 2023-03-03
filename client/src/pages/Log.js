import { useState, useEffect } from 'react'
import { getLogs } from "../ApiService";

function Log() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs().then((res) => setLogs(res));
  }, [])


  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white">
      <div class="relative px-4">
        <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
      {logs.map((log) => {
        return (
          <div class="flex items-center w-full my-6 -ml-1.5">
            <div class="w-1/6 z-10">
              <div class="w-3.5 h-3.5 bg-amber-600 rounded-full"></div>
            </div>
            <div class="w-5/6">
              <p class="text-sm">
                {log.baseAmount}ml of {log.name}
              </p>
              <p class="text-sm text-red-500">{log.caffeine}mg</p>
              <p class="text-xs text-gray-500">{log.timestamp}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Log;



