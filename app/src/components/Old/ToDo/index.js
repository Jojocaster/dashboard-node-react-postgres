import React, {Component}  from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import './index.css';
import ToDoList from './list';

import Task from '../Task/task';
import TaskForm from '../Task/form';

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
    // const todos = this.state.todos.map((todo, i) => (
    //   <Link to={`/todos/${todo.id}`} key={i}>
    //     <Card className="todo">
    //       <CardContent>
    //         <Typography type="body1">{todo.title}</Typography>
    //         <button onClick={() => this.removeTodo(todo.id)}>Remove</button>
    //       </CardContent>
    //     </Card>
    //   </Link>
    // ));

    // const activeTodo = this.state.todos.find((todo) => {
    //   return todo.id == this.props.match.params.id;
    // });

    // console.log(activeTodo);

    return (
      <div className="todos">
        <TaskForm addTodo={this.addTodo.bind(this)}/>

        {/* <Route path="/todos/:id" render={() => {
          activeTodo.todoItems.map((task, i)=> (
            <Task task={task} key={i}/>
            // <div>{task}</div>
          ));
        }}/> */}
      </div>
    );
  }
}

export default ToDo;