import { connect } from 'react-redux';

import { fetchTasks, removeTask , toggleTask } from 'actions/tasks';
import { fetchTodos } from 'actions/todos';

import TodoPage from './todoPage';

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
    todos: state.todos,
    tasks: getFilteredTasks(state.tasks.items, ownProps.match)
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
    },
    fetchTodos: () => {
      dispatch(fetchTodos());
    }
  }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoPage);

export default TodosContainer;