import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Homepage/HomeApp';
import About from './Aboutpage/About'
import Service from './Servicepage/Service'
import Navbar from './Navbar/Navbar';

import "./App.scss"
import Modal from './Modal/Modal';

function App() {
  const [active,setactive] = useState(false)
  return (
    <div className="App">
      <Navbar active={active} setactive={setactive}/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
      </Routes>
      <Modal active={active} setactive={setactive} />
      
    </div>
  );
}

export default App;
