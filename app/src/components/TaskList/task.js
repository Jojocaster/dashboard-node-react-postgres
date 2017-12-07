import React from 'react';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import DoneIcon from 'material-ui-icons/Done';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const Task = ({task, removeTask, toggleTask, classes}) => (
  <Card className={task.complete ? 'task active' : 'task'}>
    <CardContent>
      <Typography type="body1">{task.content}</Typography>
      <IconButton onClick={removeTask} className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={toggleTask} className={classes.button} aria-label="Delete">
        <DoneIcon />
      </IconButton>
    </CardContent>
  </Card>
  // <div onClick={onTaskClick}>{task.content}</div>
);

export default withStyles(styles)(Task);