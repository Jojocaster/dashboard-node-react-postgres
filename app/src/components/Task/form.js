import React, {Component} from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTask = this.state.input;
    this.props.addTodo(newTask);
    this.setState({input: ''});
  }

  render() {
    return (
      <div className="task-header">
        <form noValidate onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default ToDoForm;