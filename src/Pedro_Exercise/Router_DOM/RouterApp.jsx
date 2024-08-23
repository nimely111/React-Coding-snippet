import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home'
import Menu from './Pages/Menu';
import Contact from './Contact';

const RouterApp = () => {
  return (
    <div>
      <Router>
        <div>
          <Link to='/'> Home</Link>
          <Link to='/menu'> Menu</Link>
          <Link to='/contact'> Contact</Link>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>Oops! PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterApp
