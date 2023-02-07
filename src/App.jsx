import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';

const client = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;

function App() {

  const [token, setToken] = useState("");

  const authenticate = async () => {
    let authParams = {
      method: 'post',
      url: import.meta.env.VITE_AUTH_ENDPOINT,
      data: `grant_type=client_credentials&client_id=${client}&client_secret=${secret}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded'} 
    }
    const res = await axios(
      authParams
    );
    setToken(res.data.access_token);
  }

  useEffect(() => {
    authenticate();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<></>} />
      </Routes>
    </div>
  )
}

export default App;
