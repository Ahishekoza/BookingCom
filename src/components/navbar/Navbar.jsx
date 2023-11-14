import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <span className="logo">
          booking.com
        </span>
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