import React, {Component} from 'react';
import {connect} from 'react-redux';

import { addTask } from 'actions/tasks';
import TextField from 'material-ui/TextField';

class AddTodo extends React.Component {
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

    this.props.dispatch(addTask(this.state.input));
    this.setState({input: ''});
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    const {dispatch, styles} = this.props;
    return (
      // <p>Hey</p>
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

export default connect()(AddTodo);