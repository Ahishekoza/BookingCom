import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className="loginContainer">
            <div className='loginContainer'>
                <form >
                    <div className='inputTab'>
                        <label htmlFor="">Email</label>
                        <input type='text' placeholder='Enter your name'></input>
                    </div>
                    <div className='inputTab'>
                        <label htmlFor="">Password</label>
                        <input type='text' placeholder='Enter your password'></input>
                    </div>
                    <button className='loginbtn' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login