import React from 'react'
import { Link } from 'react-router-dom'
import Home  from './Home'
import About from './About'
import Contect from './Contect'
const Navbar = () => {
  return (
    <div>
      
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contect">Contact</Link>
        </li>
      
    </div>
  )
}

export default Navbar