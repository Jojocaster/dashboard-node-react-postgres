import {combineReducers} from 'redux';

import items from './items';
import error from './error';

export default combineReducers({
  items,
  error
});
