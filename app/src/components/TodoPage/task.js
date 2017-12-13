import React from 'react';
import Moment from 'react-moment';
import classNames from 'classnames/bind';

import styles from './task.scss';
let cx = classNames.bind(styles);

const Task = ({task, removeTask, toggleTask, i}) => {
  let className = cx({
    task: true,
    active: task.complete
  });

  return (
    <span onClick={toggleTask} className={className}>
      <span className={styles.todo}>{task.todoId}</span>
      <span className={styles.title}>{task.title}</span>
      <span className={styles.date}>
        <Moment className={styles.day} format="DD">{task.due}</Moment>
        <Moment className={styles.month} format="MMMM 'YY">{task.due}</Moment>
      </span>
    </span>
  )
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
}

export default Task;