import {combineReducers} from 'redux';

import items from './items';
import error from './error';

const task = combineReducers({
  items,
  error
});

export default task;