
import './App.css';
import {useState} from "react";


function App() {
  const [text, setText] = useState('')
  const [spisok, setSpisok] = useState([]); //прилетают данные из инпута
  const [card, setCard] = useState(null) // сюда прилетает дроп файл 

  function AddText(e){
    e.preventDefault();
    setSpisok([...spisok, text]);
    setText('');
    
  }

//когда взяли карточку
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

// отпустили карточку
function dropHendler (e, item){
  e.preventDefault()
  console.log('drop',item)
  setSpisok(spisok.map(c=>{
    if(c===item){
      return{...c, card}
    }
    if(c===card){
      return{...c, item}
    }
    return c
  }))
  e.target.style.background='aqua'
  
}
 const sortCard=(a,b)=>{
  if(a.spisok>b.spisok){
    return 1
  }
  else{
    return-1
  }
 }


  return (
    <div className="App">
    
  
     
    
    
     {spisok.sort(sortCard).map((item )=>
    
     <div className='card'
      onDragStart={(e)=>dragStartHendler(e,item)}//когда взяли карточку
      onDragLeave={(e)=>dragEndHendler(e)}// вышли за пределы другой карточки 
      onDragEnd={(e)=>dragEndHendler(e)}// отпустили перемещение 
      onDragOver={(e)=>dragOverHendler(e)}//находимся над другим объектом
      onDrag={(e)=>dropHendler(e,item)}// отпустили карточку
      draggable={true}
      key={item}
      >{item}
      </div>
      
      )}
 
     <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
     <input type="submit" value="добавить" onClick={AddText} />

      
    </div>
    
  );
}

export default App;

 
