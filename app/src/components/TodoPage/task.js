import React from 'react';
import Moment from 'react-moment';
import classNames from 'classnames/bind';
import AnimateHeight from 'react-animate-height';

import styles from './task.scss';
const cx = classNames.bind(styles);

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    const {task} = this.props;
    if(!task.content) return;

    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const {task, removeTask, toggleTask, i} = this.props;
    const {open} = this.state;

    const taskClassName = cx({task: true, active: task.complete});
    const contentClassName = cx({content: true, contentOpen: open});

    return(
      <span onClick={this.toggleState} className={taskClassName}>
        <span className={styles.todo}>{task.todoId}</span>
        <span className={styles.title}>{task.title}</span>
        <span className={styles.date}>
          <Moment className={styles.day} format="DD">{task.due}</Moment>
          <Moment className={styles.month} format="MMM 'YY">{task.due}</Moment>
        </span>
        <AnimateHeight contentClassName={styles.contentWrapper} duration={200} height={open ? "auto" : 0}>
          <div className={contentClassName}>{task.content}</div>
        </AnimateHeight>
      </span>
    )
  }
}

// const Task = ({task, removeTask, toggleTask, i}) => {


//   return (
//     <span onClick={toggleTask} className={className}>
//       <span className={styles.todo}>{task.todoId}</span>
//       <span className={styles.title}>{task.title}</span>
//       <span className={styles.date}>
//         <Moment className={styles.day} format="DD">{task.due}</Moment>
//         <Moment className={styles.month} format="MMM 'YY">{task.due}</Moment>
//       </span>
//     </span>
//   )
  // <Card className={task.complete ? 'task active' : 'task'}>
  //   <CardContent>
  //     <Typography type="body1">{task.title}</Typography>
  //     <IconButton onClick={removeTask} className={classes.button} aria-label="Delete">
  //       <DeleteIcon />
  //     </IconButton>
  //     <IconButton onClick={toggleTask} className={classes.button} aria-label="Delete">
  //       <DoneIcon />
  //     </IconButton>
  //   </CardContent>
  // </Card>
  // <div onClick={onTaskClick}>{task.content}</div>
// }

export default Task;