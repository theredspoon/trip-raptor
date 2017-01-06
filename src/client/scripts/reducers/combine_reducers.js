import { combineReducers } from 'redux';
import currentLocation from './location_reducer';
import branchTitles from './branchTitles_reducer';
import POIs from './poi_details_reducer';
import root from './root_reducer';

export default combineReducers({
  currentLocation,
  branchTitles,
  POIs,
  root,
});
