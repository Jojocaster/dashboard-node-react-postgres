import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import { fetchTodos } from 'actions/todos';

import TodoList from 'components/TodoList/';

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => {
      dispatch(fetchTodos());
    }
  }
}

const TodosContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));

export default TodosContainer;