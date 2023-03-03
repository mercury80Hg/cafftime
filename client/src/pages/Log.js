import { useState } from 'react'

function Log() {
  const [logs, setLogs] = useState([]);
  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white">
      <h1> log timeline page </h1>
    </div>
  );
}

export default Log;
