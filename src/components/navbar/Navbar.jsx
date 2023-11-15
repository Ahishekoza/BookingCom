import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link to={'/'} style={{textDecoration:'none'}}  className="logo">
          booking.com
        </Link> 
        <div className="btnContainer">
          <button className="register">
            Register
          </button>
          <button className="login">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar