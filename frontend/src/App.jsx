import React from 'react'
import Navbar from './features/home/components/Navbar.jsx'
import Home from './features/home/Home.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration (ms)
      once: true,       // animate only once
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <div>
  <Home />
      
    </div>
  )
}

export default App
