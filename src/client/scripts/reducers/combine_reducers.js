import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import currentLocation from './location_reducer';
import branchTitles from './branchTitles_reducer';
import POIs from './poi_details_reducer';
import currentRoot from './root_reducer';
import selectPOI from './select_poi_reducer';
import currentClickedLeaf from './current_leaf_reducer';
import itinerary from './itinerary_reducer';

export default combineReducers({
  currentLocation,
  branchTitles,
  POIs,
  currentRoot,
  selectPOI,
  currentClickedLeaf,
  routing: routerReducer,
  itinerary,
});
