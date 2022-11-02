import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from './todoSlice'

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span>{text}</span>
      <button onClick={() => dispatch(removeTodo({id}))}>delete</button>
    </li>
  );
};

export default TodoItem;
