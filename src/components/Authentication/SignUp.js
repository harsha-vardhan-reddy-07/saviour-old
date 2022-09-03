import React from 'react'
import { LoginForm, GoogleSignin, FbSignin } from './AuthenticationElements'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    let navigate = useNavigate();
    const loginPage = (e) =>{
      e.preventDefault();
      navigate('/login')
    }

  return (
    <div>
      <LoginForm>
      <div className="mb-3">
          <label htmlFor="inputname" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputname" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="confirmPassword" />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
        <div >
          <GoogleSignin />
          <FbSignin />
        </div>
        <a href="/signUp" onClick={loginPage}>Already have an account?</a>
        
      </LoginForm>
    </div>
        
  )
}

export default SignUp