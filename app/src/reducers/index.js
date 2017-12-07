import {combineReducers} from 'redux';
import tasks from './tasks';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  visibilityFilter,
  tasks,
  todos
});

export default todoApp;