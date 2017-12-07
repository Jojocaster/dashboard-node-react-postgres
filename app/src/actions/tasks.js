export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const REMOVE_TASK_SUCCESS = 'REMOVE_TASK_SUCCESS';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const TOGGLE_TASK_SUCCESS = 'TOGGLE_TASK_SUCCESS';
export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';

export function fetchTasks() {
  return (dispatch, getState, api) => {
    api.getTasks()
    .then((response) => {
      dispatch(fetchTasksSuccess(response.data))
    })
  }
}

export function fetchTasksSuccess(items) {
  return {type: FETCH_TASKS_SUCCESS, items}
}

export function addTask(task) {
  return (dispatch, getState, api) => {
    api.addTask(task)
    .then((response) => {
      dispatch(addTaskSuccess(response.data))
    });
  }
}

export function addTaskSuccess(task) {
  return {type: ADD_TASK_SUCCESS, task};
}

export function toggleTask(task) {
  return (dispatch, getState, api) => {
    api.toggleTask(task)
    .then((response) => {
      dispatch(toggleTaskSuccess(response.data))
    })
  }
}

export function toggleTaskSuccess(task) {
  return {type: TOGGLE_TASK_SUCCESS, task}
}

export function removeTask(task) {
  return (dispatch, getState, api) => {
    api.removeTask(task)
    .then((response) => {
      dispatch(removeTaskSuccess(task))
    })
  }
}

export function removeTaskSuccess(task) {
  return {type: REMOVE_TASK_SUCCESS, task}  
}