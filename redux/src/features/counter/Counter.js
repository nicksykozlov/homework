import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   userAsync,//тут лежить json user вызываем через диспач
   selectCount, //масив user вызовим через хук useSelector
   del,
   info
} from './counterSlice';






export function Counter() {

 const users = useSelector(selectCount);//хук useSelector вызовет результат функции selectCount и запишет в userы
//тут лежит масив users
 const dispatch = useDispatch()
//  const [info, setInfo]=useState()

 useEffect(()=>{
 dispatch(userAsync()) //функуция котороя в counetr slice создает json user.
},[dispatch] )
 
  return (
    
    <ul>
      {console.log(users)}
      {users.map(user=>
      <li key={user.id}
      
      >
                    
        {user.firstName} 
        {user.lastName}      
        <button
        onClick={() => dispatch(del(user.id))}
        >DELETE</button>     
        </li>)}
        
        
    </ul>
  );
}
