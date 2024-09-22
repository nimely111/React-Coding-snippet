import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { AppContext } from './Context/AppContext';
import { useState, createContext } from 'react';

const RouterApp = () => {
  const [userName, setUserName] = useState("JesTech");

  return (
    <div>
      <AppContext.Provider value={{userName, setUserName}}>
        <Router>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />}/>
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<h1>Oops! PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
        </AppContext.Provider>
    </div>
  )
}

export default RouterApp;
