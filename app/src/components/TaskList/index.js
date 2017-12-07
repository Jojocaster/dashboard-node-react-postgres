import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Task from './task';
import './tasklist.css';

class TaskList extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  componentWillReceiveProps() {
    console.log(this.props);
  }

  render() {
    const {
      tasks,
      onTaskClick
    } = this.props;

    return (
      <div className="tasklist">
        {tasks.map(task => (
          <Task key={task.id} task={task} onTaskClick={() => onTaskClick(task.id)} />
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
  onTaskClick: PropTypes.func.isRequired
}

export default TaskList;