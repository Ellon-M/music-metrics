import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
