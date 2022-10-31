import React from 'react';
import Todo from './features/counter/todo';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Todo />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
