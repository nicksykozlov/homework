import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    userInfo,//тут лежить json user вызываем через диспач
    infoCount, //масив user вызовим через хук useSelector
   
} from './userSlice';



export function UserCounter() {

 const info = useSelector(infoCount);//хук useSelector вызовет результат функции selectCount и запишет в userы
//тут лежит масив users
 const dispatch = useDispatch()


 useEffect(()=>{
 dispatch(userInfo()) //функуция котороя в counetr slice создает json user.
},[dispatch] )
 
  return (
    <div>
    <ul>
      {info.map(user=>
      <li key={user.id}
      
      >
             
        {user.firstName} 
        {user.lastName}           
        </li>)}
        {console.log(info)}
    </ul>
    </div>
  );
}
