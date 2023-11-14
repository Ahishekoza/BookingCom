import React from 'react'
import './MailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save Time, save Money !</h1>
        <span className='mailDesc'> Sign Up and we`ll send you mail</span>
        <div className='mailInputContainer'>
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList