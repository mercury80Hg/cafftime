import './App.css';
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Log from './pages/Log';
import Daily from './pages/Daily';
import AddData from './pages/AddData';

function App() {
  const location = useLocation();
  if (location.pathname === '/add') {
    return (
      <div className="App relative">
        <Routes>
          <Route path="/log" element={<Log />} />
          <Route path="/" element={<Daily />} />
          <Route path="/add" element={<AddData />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="App relative">
      <Routes>
        <Route path="/log" element={<Log />} />
        <Route path="/" element={<Daily />} />
        <Route path="/add" element={<AddData />} />
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
