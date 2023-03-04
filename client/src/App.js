import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { getLogs } from "../src/ApiService"
import Log from './pages/Log';
import Daily from './pages/Daily';
import AddData from './pages/AddData';
import EditData from './pages/EditData';

function App() {
  const location = useLocation();
  const [logs, setLogs] = useState([]);
  const [todaySum, setTodaySum] = useState(null);

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
      setTodaySum(groupedLogsArray[0].logs.reduce((acc, log) => {
        acc = acc + log.caffeine;
        return acc;
      }, 0))
    });
  }, [logs]);

    if (location.pathname === '/add' || location.pathname.includes('edit')) {
    return (
      <div className="App relative">
        <Routes>
          <Route path="/log" element={<Log logs={logs} />} />
          <Route path="/" element={<Daily todaySum={todaySum} />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/log/edit/:id" element={<EditData />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="App relative">
      <Routes>
        <Route path="/log" element={<Log logs={logs} />} />
        <Route path="/" element={<Daily todaySum={todaySum} />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/log/edit/:id" element={<EditData />} />
      </Routes>
      <Link to="/add">
        <button className="absolute bottom-16 right-4 min-w-auto w-14 h-14 bg-green-500 p-2 rounded-full hover:bg-green-700 text-white font-semibold">
          +
        </button>
      </Link>
    </div>
  );
}

export default App;
