import React from 'react';
import Task from './task';

const Arrow = ({children, onClick}) => (
  <div className="arrow" onClick={onClick}>{children}</div>
);

class DashboardTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTask: 0};
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  prevTask() {
    const current = this.state.activeTask;

    if(current === 0) {
      this.setState({activeTask: this.props.tasks.length -1});
    } else {
      this.setState({activeTask: current-1});
    }
  }

  nextTask() {
    const current = this.state.activeTask;

    if(current === this.props.tasks.length - 1) {
      this.setState({activeTask: 0});
    } else {
      this.setState({activeTask: current+1});
    }
  }

  render() {
    const {tasks} = this.props;

    return (
      <div>
        {tasks.map((task, i) => (
          <Task key={task.id} index={i} activeTask={this.state.activeTask} task={task} tasksLength={tasks.length}/>
        ))}

        <Arrow onClick={this.prevTask.bind(this)}>Prev</Arrow>
        <Arrow onClick={this.nextTask.bind(this)}>Next</Arrow>
      </div>
    )
  }
};

export default DashboardTasks;