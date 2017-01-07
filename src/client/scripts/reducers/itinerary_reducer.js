import { ADD_TO_ITINERARY } from '../actions/add_to_itinerary_action';
import { REMOVE_FROM_ITINERARY } from '../actions/remove_from_itinerary_action';

const initialState = { itinerary: [] };

const itinerary = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ITINERARY:
      return Object.assign({}, state, {
        // TODO: in component logic(?), concat or use spread operator
        // to join POI to the state.itinerary array
        itinerary: action.payload,
      });
    case REMOVE_FROM_ITINERARY:
      return Object.assign({}, state, {
        itinerary: action.payload,
        // TODO: in component logic (?), slice+concat array to remove item from
        // itinerary (avoid splice because it mutates)
        // try: [...list.slice(0, index), ...list.slice(index+1)]
      });
    default:
      return state;
  }
};

export default itinerary;
