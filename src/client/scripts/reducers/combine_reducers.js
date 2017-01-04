import { combineReducers } from 'redux';
import currentLocation from './location_reducer';
import branch from './branch_reducer';

export default combineReducers({
  currentLocation,
  branch,
});
