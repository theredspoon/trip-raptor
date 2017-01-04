const initialState = {
  city: '',
  id: '',
  boundary: '',
};

const currentLocation = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_LOCATION':
      return Object.assign({}, state, {
        info: action.info,
      });
    default:
      return state;
  }
};

export default currentLocation;
