//testerino
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { getLogs } from '../src/ApiService';
import { getDatabase } from '../src/ApiService';
import { DateTime } from 'luxon';
import Log from './pages/Log';
import Daily from './pages/Daily';
import AddData from './pages/AddData';
import EditData from './pages/EditData';
import Setting from './pages/Setting';
import {
  calculateRemaining,
  setGraphTime,
  setGraphTimeforTomorrow,
} from './Utilities';
import type { Logs, Log as LogType } from './Types';

const times: number[] = [];
for (let i = 6; i <= 24; i++) {
  times.push(setGraphTime(i));
}

for (let i = 1; i <= 4; i++) {
  times.push(setGraphTimeforTomorrow(i));
}

type LogsState = { date: string; logs: Logs }[];

function App() {
  const location = useLocation();
  const [logs, setLogs] = useState<LogsState>([]);
  const [flattenedLogs, setFlattenedLogs] = useState<Logs>([]);
  const [todaySum, setTodaySum] = useState(0);
  const [foodDb, setFoodDb] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [remainingByTime, setRemainingByTime] = useState<number[]>([]);
  const [remainingatBedtime, setRemainingatBedTime] = useState(0);
  const [userSetting, setUserSetting] = useState({
    dailyLimit: 400,
    sleepTreshold: 50,
    sleepTime: '10PM',
  });

  /* Get food DB */
  useEffect(() => {
    getDatabase().then((res) => {
      setFoodDb(res);
    });
  }, []);

  /* Get user logs grouped by date*/
  useEffect(() => {
    let groupedLogsArray: LogsState = [];
    getLogs().then((res) => {
      const groupedLogs: Record<string, Logs> = res.reduce(
        (acc: Record<string, Logs>, log: LogType) => {
          const date = log.timestamp;
          if (acc[date]) {
            acc[date].push(log);
          } else {
            acc[date] = [log];
          }
          return acc;
        },
        {}
      );

      groupedLogsArray = Object.entries(groupedLogs).map(([date, logs]) => {
        return { date, logs };
      });

      setLogs(groupedLogsArray);

      if (
        DateTime.fromISO(groupedLogsArray[0].date).hasSame(
          DateTime.now(),
          'day'
        )
      ) {
        setTodaySum(
          groupedLogsArray[0].logs.reduce((acc, log) => {
            return acc + log.caffeine;
          }, 0)
        );
      }

      setFlattenedLogs(groupedLogsArray.flatMap((log) => log.logs));
    });
  }, []);

  useEffect(() => {
    console.log('flattenedloigs', flattenedLogs);
    function filterLogByTime(logArr: Logs, time) {
      const filteredLogByTime = logArr.filter(
        (log) => DateTime.fromISO(log.timestamp).hour < time
      );

      return filteredLogByTime;
    }

    console.log(userSetting);
    /* convert bedtime string(from userSetting) to real time format*/
    const now = DateTime.local();
    const tomorrow = DateTime.local().plus({ days: 1 });
    const parsedTime = DateTime.fromFormat(userSetting.sleepTime, 'ha');
    let sleepTime: DateTime;
    if (userSetting.sleepTime.slice(-2) !== 'AM') {
      sleepTime = parsedTime.set({
        year: now.year,
        month: now.month,
        day: now.day,
      });
    } else {
      sleepTime = parsedTime.set({
        year: tomorrow.year,
        month: tomorrow.month,
        day: tomorrow.day,
      });
    }

    /* Calculate remaining caffeine in body using helper function*/

    console.log(
      'calculateRemaining(flattenedLogs)',
      calculateRemaining(flattenedLogs)
    );
    setRemaining(calculateRemaining(flattenedLogs));
    setRemainingByTime(
      times.map((time: number) =>
        calculateRemaining(
          filterLogByTime(flattenedLogs, time)
          // DateTime.local().set({ hour: time })
        )
      )
    );
    setRemainingatBedTime(calculateRemaining(flattenedLogs, sleepTime));
  }, [flattenedLogs]);

  /* if we're in add page or edit page, don't show '+' button */
  if (
    location.pathname === '/add' ||
    location.pathname.includes('edit') ||
    location.pathname === '/setting'
  ) {
    return (
      <div className='App relative'>
        <Routes>
          <Route path='/log' element={<Log logs={logs} />} />
          <Route
            path='/'
            element={
              <Daily
                todaySum={todaySum}
                remaining={remaining}
                remainingByTime={remainingByTime}
                remainingatBedtime={remainingatBedtime}
                userSetting={userSetting}
              />
            }
          />
          <Route path='/add' element={<AddData foodDb={foodDb} />} />
          <Route path='/log/edit/:id' element={<EditData />} />
          <Route
            path='/setting'
            element={
              <Setting
                userSetting={userSetting}
                setUserSetting={setUserSetting}
              />
            }
          />
        </Routes>
      </div>
    );
  }

  return (
    <div className='App relative'>
      <Routes>
        <Route path='/log' element={<Log logs={logs} />} />
        <Route
          path='/'
          element={
            <Daily
              todaySum={todaySum}
              logs={logs}
              remaining={remaining}
              remainingByTime={remainingByTime}
              remainingatBedtime={remainingatBedtime}
              userSetting={userSetting}
            />
          }
        />
        <Route path='/add' element={<AddData />} />
        <Route path='/log/edit/:id' element={<EditData />} />
        <Route
          path='/setting'
          element={
            <Setting
              userSetting={userSetting}
              setUserSetting={setUserSetting}
            />
          }
        />
      </Routes>
      <Link to='/add'>
        <button className='absolute bottom-16 right-4 min-w-auto w-14 h-14 bg-green-500 p-2 rounded-full hover:bg-green-700 text-white font-semibold'>
          +
        </button>
      </Link>
    </div>
  );
}

export default App;
