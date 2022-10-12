import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {

  
  incrementByAmount,
  incrementAsync,
 
  selectCount,
} from './counterSlice';

import { fetchCount } from './counterAPI';




export function Counter() {
 const users = useSelector(selectCount);
 const dispatch = useDispatch()
 useEffect(()=>{
 dispatch(incrementAsync())
},[dispatch] )
 
  return (
    <li>
      {users.map(user=><li key={user.id}>{user.firstName}</li>)}
    </li>
  );
}
