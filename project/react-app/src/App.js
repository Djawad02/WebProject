import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import './App.css'
import Signup from './components/Signup';
import { Route,Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Navbar/>
        
        <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>

      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route exact path="/signup" element={<Signup />} />
      </Routes>

      <Routes>
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

       
    </>
  )
}

export default App
