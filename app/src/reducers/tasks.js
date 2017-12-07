import {ADD_TASK_SUCCESS, REMOVE_TASK, TOGGLE_TASK, FETCH_TASKS_SUCCESS} from 'actions/tasks';

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK_SUCCESS:
      return [
        ...state,
        action.task
      ];
    case TOGGLE_TASK:
      return state.map((task, i) => {
        if(i === action.id) {
          return Object.assign({}, task, {
            content: task.content,
            completed: !task.completed
          });
        }
        return task;
      })
    case REMOVE_TASK:
      return state.filter(task => {
        return task.id !== action.id
      })
    case FETCH_TASKS_SUCCESS:
      return action.items;
    default:
      return state;
  }
}

export default tasks;