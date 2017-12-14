import React, { Component } from 'react';
import Moment from 'react-moment';

import styles from './taskItem.scss';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {currentState: styles.back};
  }

  componentDidMount() {
    this.handleState();  
  }

  componentWillReceiveProps(newProps) {
    this.handleState(newProps);
  }

  handleState(newProps = this.props) {
    const {currentState} = this.state;
    const {index, tasksLength} = this.props;
    const {activeTask} = newProps;
    
    let newState = styles.inactive;
  
    if(index === activeTask) {
      newState = styles.active;
    } else if(index  === activeTask + 1 || (activeTask === tasksLength -1 && index === 0)) {
      newState = styles.next;
    } else if(index === activeTask - 1 || activeTask === 0 && index === tasksLength - 1) {
      newState = (currentState === styles.next || currentState === styles.inactive) ? styles.back : styles.previous;
    }
  
    this.setState({currentState: newState});
  }

  render() {
    const {index, task, tasksLength} = this.props;

    return (
      <div className={styles.task + ' ' + this.state.currentState}>
        <header className={styles.header}>Task {index + 1} of {tasksLength}</header>
        <div className={styles.content}>
          <h1>{task.title}</h1>
        </div>
        <footer className={styles.footer}>
          <div>
            <Moment format="dddd">{task.due}</Moment>
          </div>
          <div className={styles.day}>
            <Moment format="DD">{task.due}</Moment>
          </div>
          <div className={styles.month}>
            <Moment format="MMMM 'YY">{task.due}</Moment>
          </div>
        </footer>
      </div>
    )
  }
}

export default TaskItem;