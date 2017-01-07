const intialState = { default: [
  { name: 'hotels', query: 'hotel' },
  { name: 'points of interest', query: 'point of interest' },
  { name: 'museums', query: 'museum' },
  { name: 'nightlife', query: 'night club' },
  { name: 'restaurants', query: 'restaurant' },
] };

const branchTitles = (state = intialState, action) => {
  switch (action.type) {
    case 'UPDATE_BRANCH_TITLES':
      return Object.assign({}, state, {
        branchTitles: action.payload,
      });
    default:
      return state;
  }
};

export default branchTitles;
