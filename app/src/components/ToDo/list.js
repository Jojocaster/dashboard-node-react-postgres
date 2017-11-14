import React, {Component}  from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import './list.css';
import Tasks from '../Tasks/tasks';
import TaskForm from '../Tasks/form';

import ApiHelper from '../../helpers/api';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    ApiHelper.getTodos()
      .then(response => {
        this.setState({todos: response.data})
      });
  }

  addTodo(todo) {
    ApiHelper.createTodo(todo)
      .then(response => {
        this.setState({todos: [...this.state.todos, response.data]});
      })
      .catch(error => {
        console.log(error);
      });
  }

  removeTodo(id) {
    ApiHelper.removeTodo(id)
      .then(() => {
        const tasksRemaining = this.state.todos.filter((task) => {
          return task.id !== id;
        });
        
        this.setState({todos: tasksRemaining});
      })
      .catch(error => {
        console.log(error);
      });
  }

    render() {
      const todos = this.state.todos;

      return (
        <div className="todolist">
          <TaskForm addTodo={this.addTodo.bind(this)}/>
          <Tasks tasks={todos} remove={this.removeTodo.bind(this)} />
          {/* <Route path={`${this.props.match.path}/:id`} render={(props) => */}
            {/* <TaskForm {...props} addTask={this.addTask.bind(this)}/> */}
          {/* }/> */}
        </div>
      );
    }
}

export default ToDo;