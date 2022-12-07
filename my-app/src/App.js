import {  Link,  } from "react-router-dom";

import React,{useEffect, useState} from 'react'
import './App.css';


//добавить добовление редактирование и удаление смотреть на сайте https://reqres.in/


export default function App(){

 const [users, setUsers]= useState([]) 
 
 useEffect(()=>{

  (async()=>{
    const response = await fetch(`https://reqres.in/api/users`)
    const json = await response.json()
    setUsers(json.data)
    console.log(json.data);
  })()
 },[])
  




return(
  <div>
      
    <h1>Hello ReqRes users!</h1>
    <Link to={'/newuser'}>Add New User</Link>
  <div className='user'>
    <>{users.map(user=><Link key={user.id} to={`/${user.id}`}>
    
    <h3>{user.first_name}</h3>
    <p>{user.email}</p> 
    <img  src={user.avatar} alt="#"/>
       
    </Link>) 
    }</>
    
    </div>
    
   
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