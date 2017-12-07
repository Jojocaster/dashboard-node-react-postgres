export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TODO_SUCCESS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS = 'FETCH_TASKS';

export function fetchTasks() {
  return (dispatch, getState, api) => {
    api.getTasks()
    .then((response) => {
      dispatch(fetchTasksSuccess(response.data))
    })
  }
}

export function clickTask(id) {
  return {type: 'CLICK_TODO', id};
}

export function fetchTasksSuccess(items) {
  return {type: FETCH_TASKS_SUCCESS, items}
}

export function addTask(content) {
  return (dispatch, getState, api) => {
    api.addTodo
    .then((response) => {
      dispatch(addTaskSuccess(response.data))
    });
  }
}

export function addTaskSuccess(task) {
  return {type: ADD_TASK_SUCCESS, task}
}

export function toggleTask(id) {
  return {type: TOGGLE_TASK, id}
}

export function removeTask(id) {
  return {type: REMOVE_TASK, id}  
}