import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './todolist.css';
import Todo from './todo';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const {
      todos,
      onTodoClick
    } = this.props;

    return (
      <div className="todolist">
        {todos.map(todo => (
          <Todo key={todo.id} onTodoClick={() => onTodoClick(todo.id)} todo={todo}/>
        ))}
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;