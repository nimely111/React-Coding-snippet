import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { useState, createContext } from 'react';

const RouterApp = () => {
  const [userName, setUserName] = useState("JesTech");
  const AppContext = createContext()

  return (
    <div>
      <AppContext.Provider value={userName}>
        <Router>
          <Navbar />
          <Routes>
              <Route path='/' element={<Home username={userName} />} />
              <Route path='/profile' element={<Profile username={userName} setUserName={setUserName} />}/>
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<h1>Oops! PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
        </AppContext.Provider>
    </div>
  )
}

export default RouterApp
