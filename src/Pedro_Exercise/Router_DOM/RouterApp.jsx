import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Menu from './Pages/Menu';
import Contact from './Contact';

const RouterApp = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />}/>
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterApp
