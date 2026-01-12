import React from "react";
import Navbar from "./features/home/components/Navbar.jsx";
import Home from "./features/home/Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/auth/Login.jsx";
import JobDetails from "./features/jobs/JobDetails.jsx";
// import About from "./features/home/components/About.jsx";
// import Contact from "./features/home/components/Contact.jsx";
import Register from "./features/auth/Register.jsx";
import PostJob from "./features/jobs/PostJob.jsx";
import Jobs from "./features/jobs/Jobs.jsx";
import About from "./features/about/About.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/post-job" element={<PostJob />} />
    {/* <Route path="/about" element={<About />} /> */}
    {/* <Route path="/contact" element={<Contact />} /> */}
    <Route path="/register" element={<Register />} />
    <Route path="/find-jobs" element={<Jobs />} />
     <Route path="/about" element={<About />} />

      </Routes>
     
    </div>
  );
};

export default App;
