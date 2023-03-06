import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { getLogs } from "../src/ApiService"
import { getDatabase } from '../src/ApiService';
import Log from './pages/Log';
import Daily from './pages/Daily';
import AddData from './pages/AddData';
import EditData from './pages/EditData';


/* helper function to calculate remaining caffeine : this is for CaffSimulator, LineGraph on Daily page */
function calculateRemaining(logs, selectedTime = Date.now()) {
  const halfLife = 5;
  const flattenedLogs = logs.flatMap((log) => log.logs);
  const remainingCaffeine = flattenedLogs.reduce((acc, item) => {
    const timePassed =
      (new Date(selectedTime) - new Date(item.timestamp)) / (60 * 60 * 1000);
    const halfLivesPassed = timePassed / halfLife;
    acc += item.caffeine * Math.pow(0.5, halfLivesPassed);
    return acc;
  }, 0);
  return remainingCaffeine;
}

/* helper function to set time for line graph*/
function setGraphTime(hour) {
  return new Date().setHours(hour, 0, 0, 0);
}

function setGraphTimeforTomorrow(hour) {
  const now = new Date();
  return new Date(now.setDate(now.getDate() + 1)).setHours(hour, 0, 0, 0);
}

/* App */
function App() {
  const location = useLocation();
  const [logs, setLogs] = useState([]);
  const [todaySum, setTodaySum] = useState(0);
  const [foodDb, setFoodDb] = useState([]);
  const [remaining, setRemaining] = useState(calculateRemaining(logs));
  const [remainingByTime, setRemainingByTime] = useState([]);
  const times = [
    setGraphTime(6),
    setGraphTime(8),
    setGraphTime(10),
    setGraphTime(12),
    setGraphTime(14),
    setGraphTime(16),
    setGraphTime(18),
    setGraphTime(20),
    setGraphTime(22),
    setGraphTime(24),
    setGraphTimeforTomorrow(2),
    setGraphTimeforTomorrow(4)
  ];

  /* Get food DB */
  useEffect(() => {
    getDatabase().then((res) => {
      setFoodDb(res);
    });
  }, []);

  /* Get user logs grouped by date*/
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
      if (groupedLogsArray[0].date === new Date().toDateString()) {
        setTodaySum(
          groupedLogsArray[0].logs.reduce((acc, log) => {
            acc = acc + log.caffeine;
            return acc;
          }, 0)
        );
      }
    });

    /* Calculate remaining caffeine in body using helper function*/
    setRemaining(calculateRemaining(logs));
    setRemainingByTime(times.map(time => calculateRemaining(logs, time)));
  }, [logs]);



  /* if we're in add page or edit page, don't show '+' button */
  if (location.pathname === "/add" || location.pathname.includes("edit")) {
    return (
      <div className="App relative">
        <Routes>
          <Route path="/log" element={<Log logs={logs} />} />
          <Route
            path="/"
            element={<Daily todaySum={todaySum} remaining={remaining} remainingByTime={remainingByTime} />}
          />
          <Route path="/add" element={<AddData foodDb={foodDb} />} />
          <Route path="/log/edit/:id" element={<EditData />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App relative">
      <Routes>
        <Route path="/log" element={<Log logs={logs} />} />
        <Route
          path="/"
          element={
            <Daily
              todaySum={todaySum}
              logs={logs}
              remaining={remaining}
              remainingByTime={remainingByTime}
            />
          }
        />
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
