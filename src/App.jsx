import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {

  return (
    <div className="App">
      <nav>
        <div className="nav-left">
          <Link to="/">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAd0lEQVR4nO2XUQqAIBAFPUOJdJfwo/sfJiz6HhGNor8gV7CdC4w+nstqTC8ADhilpR7YgFVMTpbuZAIwSEjnctPEASwq/QyNtypoe3uM196kaRz66tKm4mZRn6gcjR0tnAD8+Z37x3prpeWhHMCJic31hZlEpW+IwObfu+3/VrMAAAAASUVORK5CYII="/>
          </Link>
        </div>
        <div className="nav-right">
        <img className="nav-mic-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABC0lEQVR4nO2VwUoCURiFL65N3Rtkoa0jwRYuogerXiN6gxiM9hX4EIL4CpaS0wN8cesIP8n8XuPu8odBOJz/fHpmvBNCwgCHQAGUukZAL2U3NXzB5kStnQNQUD0POQClA/jIAXBnDwh+QfuKQuaKgE/tHRhtlfI/ABrSSg8wk+nMaCMHUBjfubSpB7iX6dpop8B7xVnUNb5b6Xce4EqmefzJRm/Hc0d1rXQ+2fCW+RKXlQCZxzLGamqu+cdfA5608xoSFjrAUguPQNPxtkx4rOxoK0CLF+Yd8Abc6CbW4xMG9NX5upb4OUgKN5AT4IXt8wwc7xT+CzTU0zUxoRNpwz8HV8C+J2to+PeAL9ZY/qvCumfbAAAAAElFTkSuQmCC"/>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nO2W0WuPURjH35+wxYZdWOFqWcSUzN3U+P3kaiZ2R9yJMBd2SS7GuLU/YMt/4MZqcyMXLAlhSkokLigRS1nho6d9z/b02rvfeX/e1Grfenvre87zPN/znOec5yTJIhYyEP5HoArQGysAqAPKRQVvBX4BU8BWYD8wCIwFAcAIcBXYDZSAS+L7ixIxLIcmpBpeSqzN3VVE8OXAdRfgNTAAdDuuW9wbx02Yba1B+4EOBb8lhx+Ao8CSrBqwMeAY8FFDY0EEsDE2eNml21ZheAasz1GEG5ytZW9I/ioxAupVRLaPhnfAWje+GrgIPHLpHgfO+JQDzcB7N8f8nY3NQknFZNjr+G0SlIXHwDo3f5/432YbFdyg42S4nVp5KLK7wB5gBdAIHAReOBF1zu6O+K4kFkyfacNxx5139TATICUwiJi5tIAT4gbzCBiR0SbH2coMB+axO6Q59x23WdxoTOA0GtzYd3HN89iv0pxJxzWkneYR0JhTgG2D4ZvjmqIFBLh7fovjHkZsQY/mjDtup7ibWXZ/Qc3GcBJYCpwGPlcpwjXu6D6wy0h8n7iBJBZAl4yeAs9d9n7of08teqX2vccFD/gq4SbY0JlHQFuq871ShRv/lmzYNrUDN1K8iSvFBu9117Dhpzl143bxXFCwSa3UMnLKtsvNO+d8TOl6r48RUNHqh1wbtuu3JUcGW1ymJlw2y9GvoGT2LRBOxBfgcITtEeCTbEblo6Pm1xHTDkJrNTxR59uhyrdvu3W6VIe07C2rKaiH1Ic3YbrS54J1PsNwUgSYfWBeVpvuBK64foG26ZqOb5t7E7YWJaI8VwWH6Bknqfrr51+RJWARCwp/ANEWYWoCCz5IAAAAAElFTkSuQmCC" />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App;
