import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'

const RouterApp = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='' />
            <Route path='' />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterApp
