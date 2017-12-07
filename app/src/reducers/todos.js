import { FETCH_TODOS_SUCCESS, ADD_TODO } from 'actions/todos';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, 
        { 
          title: action.title 
        }
      ];
    case FETCH_TODOS_SUCCESS: 
      return action.items;
    default:
      return state;
  }
}

export default todos;