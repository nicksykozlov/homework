
import './App.css';
import List from './List';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import {ReactFragment} from "react";
import Posts from './Posts';
import Categories from './Categories';

function App() {
 
  return (
    
    <div className="App">
      <Categories/>
     <List/>
      <Posts/>
      
    </div>
    
  );
}

export default App;
