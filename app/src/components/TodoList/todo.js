import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Todo = ({todo, onTodoClick}) => (
  <NavLink to={`/todos/${todo.id}`} key={todo.id}>
    <div className="todo" onClick={onTodoClick}>
      {todo.title}
    </div>
  </NavLink>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default Todo;