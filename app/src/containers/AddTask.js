import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { addTask } from '../actions/tasks';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {...this.state, todoId: this.props.match.params.id};

    this.props.dispatch(addTask(task));
    this.setState({title: '', content: ''});
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  render() {
    if(!this.props.match.params.id) {
      return null;
    }

    return (
      <div className="add-todo">
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="title"
            label="Title"
            className="textfField"
            onChange={this.handleChange}
            value={this.state.title}
            margin="normal"
          />
          <TextField
            name="content"
            label="Content"
            className="textfField"
            onChange={this.handleChange}
            value={this.state.content}
            margin="normal"
          />
          <Button type="submit" raised color="primary" className="button">
            Primary
          </Button>
        </form>
      </div>
    )
  }
}

export default withRouter(connect()(AddTodo));