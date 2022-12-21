
import './App.css';
import {useState} from "react";
import Draggable from 'react-draggable'; // Both at the same time

function App() {
  const [text, setText] = useState('')
  const [spisok, setSpisok] = useState([]);
  const [card, setCard] = useState(null)

  function AddText(e){
    e.preventDefault();
    setSpisok([...spisok, text]);
    setText('');
    
  }
function log(event,data){
  console.log(event, data)
}

function dragStartHendler (e, item){
  setCard(item) 
console.log('drag',item)
}

function dragEndHendler (e){
  e.target.style.background='aqua'
 
}
function dragOverHendler (e){
e.preventDefault()
e.target.style.background='red'
}

function dropHendler (e, item){
  e.preventDefault()

  console.log('drag',item)
}


  return (
    <div className="App">
    
     <div className='stolb'>
     
    <ul>  
    
     {spisok.map((item, index) =>
    
     <li 
      onDragStart={(e)=>dragStartHendler(e,item)}
      onDragLeave={(e)=>dragEndHendler(e)}
      onDragEnd={(e)=>dragEndHendler(e)}
      onDragOver={(e)=>dragOverHendler(e)}
      onDrag={(e)=>dropHendler(e,item)}
      key={index}
      draggable={true}
      >{item}</li>
      
      )}
    
   </ul>
  
     </div>
     <div className='stolb'></div>
     <div className='stolb'></div>

     <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
     <input type="submit" value="добавить" onClick={AddText} />

     <Draggable
       
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={log}
        onDrag={log}
        onStop={log}>
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
   
    </div>
    
  );
}

export default App;

 
