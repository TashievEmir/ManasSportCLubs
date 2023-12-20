import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from './components/authentification/SignIn';
import SignUp from './components/authentification/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/signin"
       element = {<SignIn/>} />
    </Routes>
    <Routes>
      <Route path="/signup"
       element = {<SignUp/>} />
    </Routes>
    <Routes>
      <Route path="/main"
       element = {<App/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

