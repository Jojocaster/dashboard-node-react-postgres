import React, { Component } from 'react';
import Moment from 'react-moment';

import styles from './task.scss';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {state: ''};
  }

  componentDidMount() {
    this.handleState();
  }

  componentWillReceiveProps(newProps) {
    this.handleState(newProps);
  }

  handleState(newProps = this.props) {
    const {index, tasksLength} = this.props;
    const {activeTask} = newProps;
    
    let newState;
  
    if(index === activeTask) {
      newState = styles.active;
    } else if(index  === activeTask + 1 || activeTask === tasksLength -1 && index === 0) {
      newState = styles.next;
    } else if(index === activeTask - 1 || activeTask === 0 && index === tasksLength - 1) {
      newState = styles.previous;
    } else {
      newState = styles.inactive;
    }
  
    if(this.state.state === styles.inactive && newState === styles.previous) {
      newState = styles.back;
    }
  
    this.setState({state: newState});
  }

  render() {
    const {index, task, tasksLength} = this.props;

    return (
      <div className={styles.task + ' ' + this.state.state}>
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
            <Moment format="MMMM">{task.due}</Moment>
            <span>
              '<Moment format="YY">{task.due}</Moment>
            </span>
          </div>
        </footer>
      </div>
    )
  }
}

export default Task;