import React, { useState } from 'react'
import { LoginForm, GoogleSignin, FbSignin } from './AuthenticationElements'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from './UserAuthContext';
import Alert from "react-bootstrap/Alert";
import { toast } from 'react-toastify';


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {signUp} = useUserAuth();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await signUp(email, password);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
      
    }

    const loginPage = (e) =>{
      e.preventDefault();
      navigate('/login')
    }

  return (
    <div>
      
        
      <LoginForm onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="inputname" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputname" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)}/>
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