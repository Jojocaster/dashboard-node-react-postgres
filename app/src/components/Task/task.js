import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './task.css';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const Task = (props) => {
  const tasks = props.tasks.map((task, i) => (
    <Card className="task" key={i}>
      <CardContent>
        <Typography type="body1">{task.title}</Typography>
        <button onClick={() => props.remove(task.id)}>Remove</button>
      </CardContent>
    </Card>
  ));

  return (
    <div className="tasks">
      <ReactCSSTransitionGroup
      transitionName="task-item"
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}>
        {tasks}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Task;