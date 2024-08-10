import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Content from './Component/Content';
import About from './Component/About';
import Contacts from './Component/Contacts';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/about' element={<About/>} />
          <Route path='contact' element={<Contacts/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
