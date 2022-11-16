import react from 'react'
import  ReactDOM  from 'react-dom/client';
import json from './areas.json'
import {useEffect} from 'react'
import Section from './Section';
import Weather from './Weather';

function App() {
  


  

  return (
    <div className="App">

      <Section areas={json}/>
      <Weather/>
      
    </div>
  );
}

export default App;
