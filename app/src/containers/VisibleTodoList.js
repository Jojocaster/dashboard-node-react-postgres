import React from 'react';
import { removeTask } from 'actions';
import { connect } from 'react-redux';

import TodoList from 'components/TodoList';

// const getVisibleTasks = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos;
//     case 'SHOW_COMPLETED':
//       return todos.filter(todo => task.complete);
//     case 'SHOW_ACTIVE':
//       return todos.filter(task => !task.completed);
//     default:
//       return todos;
//   }
// }

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTaskClick: id => {
      dispatch(removeTask(id));
    }
  }
}

class VisibleTodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.todos.length > 0 && 
          <TodoList {...this.props}/>
        }
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);