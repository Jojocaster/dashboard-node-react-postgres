import React from 'react';

import './todopage.css';
import AddTask from 'containers/AddTask';
import TasksContainer from 'containers/TasksContainer';
import TodosContainer from 'containers/TodosContainer';

const TodoPage = (props) => (
  <div className="todo-page">
    <div className="todos-column">
      <TodosContainer {...props}/>
    </div>
    <div className="tasks-column">
      {props.match.params.id && (
        <AddTask />
      )}
      <TasksContainer {...props}/>
    </div>
  </div>
)

export default TodoPage;