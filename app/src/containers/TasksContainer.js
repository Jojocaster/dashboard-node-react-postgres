import { connect } from 'react-redux';

import { fetchTasks, removeTask , toggleTask } from '../actions/tasks';
import TaskList from '../components/TaskList';

const getFilteredTasks = (tasks, {params}) => {
  if(params.id) {
    return tasks.filter(task => {
      return task.todoId === parseInt(params.id, 10);
    });
  } else {
    return tasks;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: getFilteredTasks(state.tasks.items, ownProps.match),
    error: state.tasks.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => {
      dispatch(fetchTasks())
    },
    removeTask: task => {
      dispatch(removeTask(task))
    },
    toggleTask: task => {
      dispatch(toggleTask(task))
    }
  }
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TasksContainer;