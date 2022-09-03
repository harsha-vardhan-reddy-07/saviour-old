import React from 'react'
import { LoginForm, GoogleSignin, FbSignin } from './AuthenticationElements'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  
  let navigate = useNavigate();
  const signUpPage = (e) =>{
    e.preventDefault();
    navigate('/signUp')
  }

  



  return (
    <div>
      <LoginForm>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" />
          <i className="bi bi-eye-slash" id="togglePassword"></i>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <div >
          <GoogleSignin />
          <FbSignin />
        </div>
        <a href="/signUp" onClick={signUpPage}>Don't have an account?</a>
        
      </LoginForm>
    </div>
  )
}

export default Login