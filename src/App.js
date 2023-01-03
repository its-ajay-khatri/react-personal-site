import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/services" element={<Services/>} />
        {/* <Route path="*" element={<Error/>} /> */}
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </>
  );
}

export default App;
