import { Button } from 'react-bootstrap';
import React from 'react';
import { useUserAuth } from '../Authentication/UserAuthContext';


const Home = () => {

  const {user, logout} = useUserAuth();

  const handleLogout = async () =>{
     try {
        await logout();
     } catch (err) {
        alert(err.message);
     }
  }



  return (
    <div>
        <p>Helloo {user && user.email} </p>
        <Button variant='primary' onClick={handleLogout}>Log Out</Button>
    </div>
  )
}

export default Home