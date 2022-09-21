import React,{useEffect, useState} from 'react'
import './App.css';

function App() {
  const [text, setText]= useState(0);
const [spisok, setSpisok] = useState([]);
function addItem() {
  setSpisok([...spisok, text]);
  setText('');
}
function delItem(item) {
  setSpisok(spisok.filter(el => el !== item));

}
function TrItem(item){
  setSpisok(spisok.filter(el =>(el==item) ? item.className='TRitem':item.className='item'))
}

  return (
    <div className="App">
     <input type="text"
      onChange={(e) => setText(e.target.value)} /> 
     <button onClick={() => addItem()}>Click</button>
     <ul>

                {spisok.map((item, index) =>

                    <li 
                    key={index}>{item}
                        <input type="checkbox" onChange={()=> TrItem()}></input>
                        <button onClick={() => delItem(item)}> del</button>
                    </li>)}
            </ul>
    </div>
  );
}

export default App;
