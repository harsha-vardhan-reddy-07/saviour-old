import React from 'react';
import {LoginBtn} from './AuthenticationElements';
import {useNavigate} from 'react-router-dom';

const Authentication = () => {

  let navigate = useNavigate();
  const loginPage = () =>{
    navigate('/login')
  }

  return (
    <div>
        <LoginBtn onClick={loginPage}>Go to Login Page</LoginBtn>
    </div>
  )
}

export default Authentication