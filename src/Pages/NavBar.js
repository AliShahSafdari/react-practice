import {Link} from 'react-router-dom';
import '../Style/NavStyle.css'
export const NavBar =()=>{
    return(         <nav className='navbar'>
    <Link className='first' to="/">Home</Link>
    <Link className='first' to="/about">About</Link>
    <Link className='first' to="/contact">Contact</Link>
    <Link className='first' to="/profile">Profile</Link>
  </nav>)
}