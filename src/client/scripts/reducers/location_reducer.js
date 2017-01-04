import { UPDATE_CURRENT_LOCATION } from '../actions/update_current_location_action';

const initialState = {
  city: '',
  id: '',
  boundary: '',
};

const currentLocation = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_LOCATION:
      return Object.assign({}, state, {
        // todo updated/fix to work with data flow
        info: action.info,
      });
    default:
      return state;
  }
};

export default currentLocation;
