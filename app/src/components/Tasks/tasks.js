import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './tasks.css';

import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

class Task extends Component {
    render() {
        const tasks = this.props.tasks.map((task, i) => (
          <Card className="task" key={i}>
            <CardContent>
                <Typography type="body1">{task.title}</Typography>
                <button onClick={() => this.props.remove(task.id)}>Remove</button>
            </CardContent>
          </Card>
        ));

        return (
            <div className="tasks">
                <ReactCSSTransitionGroup
                transitionName="test"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}>
                  {tasks}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default Task;