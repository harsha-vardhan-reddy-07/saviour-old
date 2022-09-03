import React, { useState } from 'react'
import { LoginForm, GoogleSignin, FbSignin } from './AuthenticationElements'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from './UserAuthContext';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {login, googleSignin} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    
  }


  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    try {
      await googleSignin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }
  


  const signUpPage = (e) =>{
    e.preventDefault();
    navigate('/signUp')
  }

  



  return (
    <div>
      <LoginForm onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)}/>
          <i className="bi bi-eye-slash" id="togglePassword"></i>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <div >
          <GoogleSignin onClick={handleGoogleSignin} />
          <FbSignin />
        </div>
        <a href="/signUp" onClick={signUpPage}>Don't have an account?</a>
        
      </LoginForm>
    </div>
  )
}

export default Login