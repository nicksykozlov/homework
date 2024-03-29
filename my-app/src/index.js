import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter,  } from "react-router-dom";
import User from './User';
import AddUser from './AddUser';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/:id' element={<User/>} />
          <Route path='/newuser'  element={<AddUser/>} />
  
      </Routes >
      </BrowserRouter>
    
  </React.StrictMode>
);


