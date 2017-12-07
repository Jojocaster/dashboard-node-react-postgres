import {ADD_TASK_SUCCESS, REMOVE_TASK_SUCCESS, TOGGLE_TASK_SUCCESS, FETCH_TASKS_SUCCESS} from 'actions/tasks';

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK_SUCCESS:
      return [
        ...state,
        action.task
      ];
    case TOGGLE_TASK_SUCCESS:
      return state.map((task, i) => {
        if(task.id === action.task.id) {
          return Object.assign({}, task, {
            complete: !task.complete
          });
        }
        return task;
      })
    case REMOVE_TASK_SUCCESS:
      return state.filter(task => {
        return task.id !== action.task.id
      })
    case FETCH_TASKS_SUCCESS:
      return action.items;
    default:
      return state;
  }
}

export default tasks;