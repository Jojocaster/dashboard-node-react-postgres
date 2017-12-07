import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './tasklist.css';
import Task from './task';
import ErrorMessage from 'components/ErrorMessage/';

class TaskList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const {
      tasks,
      removeTask,
      toggleTask,
      error
    } = this.props;

    return (
      <div className="tasklist">
        <ErrorMessage error={error}/>
        {tasks.map(task => (
          <Task key={task.id} task={task} removeTask={() => removeTask(task)} toggleTask={() => toggleTask(task)}/>
        ))}
      </div>
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default TaskList;