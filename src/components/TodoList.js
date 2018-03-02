import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import DeleteIcon from './DeleteIcon';

const TodoList = ({ todos, onTodoClick, onDeleteIconClick }) => (
  <ul>
    {todos.map(todo => (
      <li key={`${todo.id} 'li'`}>
        <Todo
          key={`${todo.id} 'todo'`}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />{' '}
        <DeleteIcon
          key={`${todo.id} 'del'`}
          onClick={() => onDeleteIconClick(todo.id)}
        />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteIconClick: PropTypes.func.isRequired
};

export default TodoList;
