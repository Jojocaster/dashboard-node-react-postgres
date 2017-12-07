import { connect } from 'react-redux';

import { fetchTasks, toggleTask } from 'actions/tasks';
import TaskList from 'components/TaskList';

const getFilteredTasks = (tasks, match) => {
  if(match.params.id) {
    return tasks.filter((task) => {
      return task.todoId === parseInt(match.params.id, 10);
    });
  } else {
    return tasks;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: getFilteredTasks(state.tasks, ownProps.match)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => {
      dispatch(fetchTasks())
    },
    onTaskClick: task => {
      dispatch(toggleTask(task))
    }
  }
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TasksContainer;