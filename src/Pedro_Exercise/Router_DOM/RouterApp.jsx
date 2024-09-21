import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home'
import Menu from './Pages/Menu';
import Contact from './Contact';
import Navbar from './Nav/Navbar';

const RouterApp = () => {
  return (
    <div>
      <Router>
        <Navbar />
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
