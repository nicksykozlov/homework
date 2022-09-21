import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Slider from './slider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Slider
            slides={true}
            loop={true}
            navs={true}
            pags={true} 
            auto={true} 
            stopMouseHover={true}
            delay={3} 
        />
  </React.StrictMode>
);

