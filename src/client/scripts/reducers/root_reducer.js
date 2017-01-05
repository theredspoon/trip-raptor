const intialState = {};

const root = (state = intialState, action) => {
  switch (action.type) {
    case 'UPDATE_ROOT':
      return { ...state, root: action.payload };
    default:
      return state;
  }
};

export default root;
