import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Authentication from './components/Authentication';
import Home from './components/Home';
import {UserAuthContextProvider} from './components/Authentication/UserAuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRouter from './ProtectedRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
        <Route path='/' element={
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
          }/>
          <Route path='/auth' element={<Authentication />}  />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>

        <ToastContainer position='top-center'/>

      </UserAuthContextProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
