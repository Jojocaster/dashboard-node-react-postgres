import React from 'react';
import TaskItem from './taskItem';

const Arrow = ({children, onClick}) => (
  <div className="arrow" onClick={onClick}>{children}</div>
);

const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

class DashboardTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTask: 0};

    this.onKeyDown = this.onKeyDown.bind(this);
    this.switchTask = this.switchTask.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
    this.container.focus();
  }

  onKeyDown(e) {
    if(e.key === ARROW_LEFT || e.key === ARROW_RIGHT) {
      this.switchTask(e.key);
    }
  }

  switchTask(direction) {
    const {activeTask} = this.state;
    const {length} = this.props.tasks;
    let nextTask;
    console.log(direction, activeTask, length);
    
    if(direction === ARROW_LEFT) {
      nextTask = (activeTask === 0) ? length - 1 : activeTask -1;
    } else if(direction === ARROW_RIGHT) {
      nextTask = (activeTask === length -1) ? 0 : activeTask + 1;
    }

    this.setState({activeTask: nextTask});
  }

  render() {
    const {tasks} = this.props;

    return (
      <div onKeyDown={this.onKeyDown} tabIndex="0" style={{height: '100%'}} ref={node => this.container = node}>
        {tasks.map((task, i) => (
          <TaskItem key={task.id} index={i} activeTask={this.state.activeTask} task={task} tasksLength={tasks.length}/>
        ))}

        <Arrow onClick={() => this.switchTask(ARROW_LEFT)}>Prev</Arrow>
        <Arrow onClick={() => this.switchTask(ARROW_RIGHT)}>Next</Arrow>
      </div>
    )
  }
};

export default DashboardTasks;