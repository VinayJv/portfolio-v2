import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { LandingPage } from './pages/Landing';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 3800);
  })

  return (
    <BrowserRouter>
      {
        loader ? <Loader /> : <Routes>
          <Route path='/' element={<LandingPage />}></Route>
        </Routes>
      }
    </BrowserRouter>
  )
}

export default App
