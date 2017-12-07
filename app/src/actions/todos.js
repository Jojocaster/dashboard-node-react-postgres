export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';

export function fetchTodos() {
  return (dispatch, getState, api) => {
    api.getTodos()
    .then((response) => {
      dispatch(fetchTodosSuccess(response.data))
    });
  }
};

export function fetchTodosSuccess(items) {
  return {type: FETCH_TODOS_SUCCESS, items}
}

export function addTodo(title) {
  return {type: ADD_TODO, title}
}