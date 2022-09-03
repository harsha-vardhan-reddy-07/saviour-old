import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Authentication from "./components/Authentication";
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/Auth' element={<Authentication />}  />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
