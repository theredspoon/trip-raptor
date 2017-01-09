import { ADD_TO_ITINERARY } from '../actions/add_to_itinerary_action';
import { REMOVE_FROM_ITINERARY } from '../actions/remove_from_itinerary_action';

const initialState = { itinerary: {} };

const itinerary = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ITINERARY:
      return Object.assign({}, state, {
        itinerary: action.payload,
      });
    case REMOVE_FROM_ITINERARY:
      return Object.assign({}, state, {
        itinerary: action.payload,
      });
    default:
      return state;
  }
};

export default itinerary;
