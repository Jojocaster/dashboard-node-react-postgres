import React, {Component}  from 'react';

import './list.css';
import Tasks from '../Tasks/tasks';
import TaskForm from '../Tasks/form';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        id: 0, content: 'First todo'
      },{
        id: 1, content: 'Second todo'
      }]
    };
  }

  addTask(task) {
    const tasks = this.state.tasks;
    const id = tasks[tasks.length -1].id + 1;
    const newTask = {id: id, content: task};
    
    tasks.push(newTask);
    this.setState({tasks: tasks});
  }

  removeTask(id) {
    const tasksRemaining = this.state.tasks.filter((task) => {
      return task.id !== id;
    });

    this.setState({tasks: tasksRemaining});
  }

    render() {
      const tasks = this.state.tasks;

      return (
        <div className="todolist">
          <TaskForm addTask={this.addTask.bind(this)}/>
          <Tasks tasks={tasks} remove={this.removeTask.bind(this)} />
        </div>
      );
    }
}

export default ToDoList;