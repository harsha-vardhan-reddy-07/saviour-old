import React from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {

let navigate = useNavigate();
const loginPage = () =>{
navigate('/login')
}


  return (
    <div>
        <button onClick={loginPage}>Go to Login Page</button>
    </div>
  )
}

export default Authentication