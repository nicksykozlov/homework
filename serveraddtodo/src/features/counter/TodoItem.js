import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from './todoSlice'
import {useParams} from 'react-router-dom'

const TodoItem = ({  text, completed }) => {
  const dispatch = useDispatch();
  const {id} = useParams();

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
