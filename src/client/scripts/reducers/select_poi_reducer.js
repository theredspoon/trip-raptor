import { FETCH_POI_DETAILS_SUCCESS } from '../actions/fetch_poi_info_action';

const intialState = {};

const selectPOI = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_POI_DETAILS_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default selectPOI;
