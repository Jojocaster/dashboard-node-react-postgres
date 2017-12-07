import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Task from './task';
import './tasklist.css';

class TaskList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const {
      tasks,
      removeTask,
      toggleTask
    } = this.props;

    return (
      <div className="tasklist">
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
  toggleTask: PropTypes.func.isRequired
}

export default TaskList;