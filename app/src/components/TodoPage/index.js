import React from 'react';

import './todopage.css';
import AddTask from 'containers/AddTask';
import TasksContainer from 'containers/TasksContainer';
import TodosContainer from 'containers/TodosContainer';

const TodoPage = (props) => (
  <div className="todo-page">
    <TodosContainer {...props}/>
    <AddTask />
    <TasksContainer {...props}/>
  </div>
)

export default TodoPage;