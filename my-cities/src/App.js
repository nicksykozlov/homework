import react from 'react'
import  ReactDOM  from 'react-dom/client';
import json from './areas.json'
import {useEffect} from 'react'
import Section from './Section';


function App() {
  


  

  return (
    <div className="App">

      <Section areas={json}/>
     
      
    </div>
  );
}

export default App;
