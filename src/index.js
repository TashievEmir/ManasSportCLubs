import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from './components/authentification/SignIn';
import SignUp from './components/authentification/SignUp';
import ResetPassword from './components/authentification/ResetPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/"
       element = {<SignIn/>} />
    </Routes>
    <Routes>
      <Route path="/signin"
       element = {<SignIn/>} />
    </Routes>
    <Routes>
      <Route path="/signup"
       element = {<SignUp/>} />
    </Routes>
    <Routes>
      <Route path="/resetPassword"
       element = {<ResetPassword/>} />
    </Routes>
    <Routes>
      <Route path="/main"
       element = {<App/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

