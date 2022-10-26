import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import{selectTodo, fetchTodo} from './counterSlice'


import {
 
} from './counterSlice';


export default function Counter() {

  const todo = useSelector(selectTodo);

  const dispatch = useDispatch();

  useEffect(()=>{
    
    dispatch(fetchTodo())

},[dispatch])
  

  return (
    <div>
      {todo.map(todos=><ul key={todos.id}>
        <li>{todos.todo}</li>
      </ul>)}
    </div>
  );
}
