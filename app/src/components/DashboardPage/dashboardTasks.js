import React from 'react';
import Task from '../TaskList/task';

class DashboardTasks extends React.Component {

  state = {activeTask: 0};

  componentDidMount() {
    this.props.fetchTasks();
  }

  // componentWillReceiveProps(props) {
  // }

  render() {
    const {tasks} = this.props;

    return (
      <div className="dashboard-tasks">
        {tasks.map((task, i) => (
          <Task key={task.id} index={i} activeTask={this.state.activeTask} task={task}/>
        ))}
      </div>
    )
  }
};

export default DashboardTasks;