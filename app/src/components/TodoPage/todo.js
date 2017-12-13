import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const styles = {
  todo: {
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '10px',
    textTransform: 'uppercase'
  }
};

const Todo = ({todo, onTodoClick}) => (
  <NavLink to={`/todos/${todo.id}`} key={todo.id}>
    <div style={styles.todo} onClick={onTodoClick}>
      {todo.title}
    </div>
  </NavLink>
);

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoClick: PropTypes.func
}

export default Todo;