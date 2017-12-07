import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { addTask } from 'actions/tasks';
import TextField from 'material-ui/TextField';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if(!this.state.input.trim()) {
      return;
    }

    let task = {
      content: this.state.input,
      todoId: this.props.match.params.id
    };

    this.props.dispatch(addTask(task));
    this.setState({input: ''});
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="task"
            label="New task"
            className="textfField"
            onChange={this.handleChange}
            value={this.state.input}
            margin="normal"
          />
        </form>
      </div>
    )
  }
}

export default withRouter(connect()(AddTodo));