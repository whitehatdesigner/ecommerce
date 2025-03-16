import React, { useState } from 'react'

const Login = () => {

const [currentState, setCurrentState] = useState('Sign up')

  return (
    <form className='login-form section-padding'>
      <div className="container">
        <div className="main-login-form">
          <h3>{currentState}</h3>

          <div className="login-inputs">
           {currentState === 'Login' ? '' : <div className="box">
              <input type="text" placeholder='Enter Your Name' />
            </div> } 
            <div className="box">
              <input type="email" placeholder='Enter Your Mail' />
            </div>
            <div className="box">
              <input type="password" placeholder='Password' />
            </div>
            <div className="login-other">
              <p>Forgot Password?</p>
              {
                currentState === 'Login' ? 
                <p onClick={()=> setCurrentState('Sign Up')}>Create a account</p> :
                <p onClick={()=> setCurrentState('Login')}>Login Here</p>
              }
            </div>
            <button className='primary-btn'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login