import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage/Homepage';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';

function App() {

  return (
    <div>
      <Header></Header>
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About/>} />

        
      </Routes>
    </div>
  );
}

export default App;
