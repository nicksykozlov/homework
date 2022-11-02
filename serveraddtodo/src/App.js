import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/counter/todoSlice';
import NewTodoForm from './features/counter/NewTodoForm';
import TodoList from './features/counter/TodoList';
import TodoItem from './features/counter/TodoItem';
import './App.css';



function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  };

  return (
    <div className='App'>
     
      {/* <TodoItem/> */}
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;
