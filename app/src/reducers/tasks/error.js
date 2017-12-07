import { ADD_TASK_ERROR, ADD_TASK_SUCCESS, FETCH_TASKS_SUCCESS } from 'actions/tasks';

const error = (state = null, action) => {
  switch (action.type) {
    case ADD_TASK_ERROR:
      return action.error;
    case ADD_TASK_SUCCESS:
    case FETCH_TASKS_SUCCESS:
    default:
      return null;
  }
}

export default error;