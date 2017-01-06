import { UPDATE_CURRENT_LOCATION } from '../actions/update_current_location_action';
import { UPDATE_ROOT } from '../actions/update_root_action';

const initialState = {
  city: '',
  id: '',
  boundary: {
    northeast: { lat: '', lng: '' },
    southwest: { lat: '', lng: '' },
  },
};

const currentLocation = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_LOCATION:
      return {
        city: action.payload.address_components[0].long_name,
        id: action.payload.place_id,
        boundary: action.payload.geometry.viewport,
      };

    default:
      return state;
  }
};

export default currentLocation;
