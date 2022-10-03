// Описание: Создаем пустое поле и кнопку для добавления в TODO лист. 
//При нажатии на кнопку добавлем новый элемент задания в общий массив дел. 
//Все задания выводится списком, каждое задание можно перечеркнуть как выполненое или полностью удалить 
//(можно две кнопки вывести)
// После того как сделаем функционал как в примере, добавьте возможность массовых действий 
//(добавляем чекбокс рядом с каждым заданием) и если хоть один элемент выбран, то появляется две кнопки:
// "Сделать выполненным" и "удалить". Соответсвенно мы можем выбрать как один, так и много чекбоксов и 
//все отмеченные удалить или сделать выполненными.
// Далее добавить кнопку "Выбрать все", при клике на нее мы проставлем на все элементы, что они выбраны
// Добавить кнопку "Очистить выбор" - она снимает все чекбосы (Данныя кнопка становится видна,
// если хотябы один чекбокс выбран).
// ВЫПОЛНЕНИЕ В ПАПКЕ INPUT_ul_LI_CHEK

import React,{useEffect, useState} from 'react'
import './App.css';


export default function App(){
  const [text, setText] = useState('')//для отслеживания что вводим в инпут
  const [task, setTask] = useState([])// масив который потом вывести в список дел
  const [activeState, setActiveState] = useState(false); 
  
  function AddTask(){
    setTask([text, ...task])
    setText('') 
  }

  function DelTask(item){
    setTask(task.filter(el => el !==item))//останеться массивы которые не равны сами себе 
  }

  function GhangeClass(){
    setActiveState(prev => !prev); 
    
  }

  // function CrossOut(item){
   
  //   setTask(task.filter(el =>(el===item) ? item.className='TRitem': item.className='item'))
  //  }




return(
  <div>
  <input type="text"
  onChange={(e)=>setText(e.target.value)} // onChange необходимо для отлова что вводим и кладем в text
  />
  <button onClick={()=>AddTask()}>Добавить дело</button>
  <ul>
    {task.map((item, index)=>
    <li key={index}
    className={`item ${activeState ? 'active' : ''}`}
    >{item}
    <button onClick={(e)=>GhangeClass(e.currentTarget )}>Сross out</button>
    <button onClick={()=>DelTask(item)}>Delete</button>
    </li>
    )}
    
  </ul>
   
  </div>
)

}



























// function App() {
//   const [text, setText]= useState("");
//   const [spisok, setSpisok] = useState([]);

// function addItem() {
//   setSpisok([text, ...spisok]);
//   setText(" ");
// }

// }
// function TrItem(item){
  
//   setSpisok(spisok.filter(el =>(el===item) ? item.className='TRitem':item.className='item'))
// }

//   return (
//     <div className="App">
//      <input type="text"
//       onChange={(e) => setText(e.target.value)} /> 
//      <button onClick={() => addItem()}>Click</button>
//      <ul>

//                 {spisok.map((item, index) =>

//                     <li key={index} className="TRitem">            
//                         {item}
//                         <input type="checkbox" onChange={()=> TrItem()}></input>
//                         <button onClick={() => delItem(item)}> del</button>
//                     </li>)}
//             </ul>
//     </div>
//   );
// }

// export default App;