import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Task from './task';
// import ErrorMessage from '../ErrorMessage/';

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
      <div>
        {/* <ErrorMessage error={error}/> */}
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