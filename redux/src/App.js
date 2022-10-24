import React from 'react';
import {  Counter } from './features/counter/Counter';
import {UserCounter} from './features/counter/user'
import './App.css';

function App() {
  return (
    <div className="App">

        <Counter/>
        <UserCounter/>
            
    </div>
  );
}

export default App;
