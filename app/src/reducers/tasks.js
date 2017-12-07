import {ADD_TASK, REMOVE_TASK, TOGGLE_TASK, FETCH_TASKS_SUCCESS} from 'actions/tasks';

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: 
      return [
        ...state,
        {
          content: action.content,
          completed: false
        }
      ];
    case TOGGLE_TASK:
      return state.map((todo, i) => {
        if(i === action.id) {
          return Object.assign({}, todo, {
            content: todo.content,
            completed: !todo.completed
          });
        }
        return todo;
      })
    case REMOVE_TASK:
      return state.filter(todo => {
        return todo.id !== action.id
      })
    case FETCH_TASKS_SUCCESS:
      return action.items;
    default:
      return state;
  }
}

export default tasks;