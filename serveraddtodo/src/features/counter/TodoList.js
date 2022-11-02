import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import {selectCount} from './todoSlice'

const TodoList = () => {
    const todos = useSelector(selectCount);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
