import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import Navbar from './Nav/Navbar';

const RouterApp = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>Oops! PAGE NOT FOUND</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterApp
