const intialState = { default: [
  { name: 'Hotels', query: 'hotel' },
  { name: 'Points of Interest', query: 'point of interest' },
  { name: 'Museums', query: 'museum' },
  { name: 'Nightlife', query: 'night club' },
  { name: 'Restaurants', query: 'restaurant' },
] };

const branchTitles = (state = intialState, action) => {
  switch (action.type) {
    case 'UPDATE_BRANCH_TITLES':
      return Object.assign({}, state, {
        branchTitles: action.payload,
      });
    case 'FETCH_POI_DETAILS_SUCCESS' :
      return Object.assign({}, state, {
        branchTitles: action.payload,
      });
    default:
      return state;
  }
};

export default branchTitles;
