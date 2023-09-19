import './App.css';
import Home from './pages/Home';
import Nav from "./components/Nav";
import Stock from "./pages/Stock";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
