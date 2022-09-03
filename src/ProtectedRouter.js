import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './components/Authentication/UserAuthContext';

const ProtectedRouter = ({children}) => {

    let {user} = useUserAuth();
    if (!user) {
       return  <Navigate to = '/auth' />
    } 
    return children;
}

export default ProtectedRouter;