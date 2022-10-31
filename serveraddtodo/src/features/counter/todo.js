import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodo, fetchTodo } from "./todoSlice";

import {delTodo,
  addTodos

} from "./todoSlice";

export default function Todo() {
  const todo = useSelector(selectTodo);

  const dispatch = useDispatch();

  const [text, setText] = useState({})

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodos(text));
      setText({});
    }
  }

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={handleAction} >Add</button>
      <table>
        <thead>
          <tr>
            <th>todo</th>
            
          </tr>
        </thead>
        <tbody>
          {todo.map((todos) => (
            <tr key={todos.id}>
              <td>
                {todos.todo}
               
                <button 
                onClick={() => dispatch(delTodo(todos.id))}
                >Delete</button>
              </td>
              
            </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
}
