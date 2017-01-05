const intialState = ['hotels', 'points of interest', 'museums', 'nightlife', 'restaurants'];

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
