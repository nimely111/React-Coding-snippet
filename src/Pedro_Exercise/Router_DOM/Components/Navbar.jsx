import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'> Home</Link>
        <Link to='/profile'> Profile</Link>
        <Link to='/contact'> Contact</Link>
    </div>
  )
}

export default Navbar
