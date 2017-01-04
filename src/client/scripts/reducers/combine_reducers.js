import { combineReducers } from 'redux';
import currentLocation from './location_reducer';
import branchTitles from './branchTitles_reducer';

export default combineReducers({
  currentLocation,
  branchTitles,
});
