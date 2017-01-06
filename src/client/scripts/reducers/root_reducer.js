import { UPDATE_ROOT } from '../actions/update_root_action';


const intialState = {
  currentRoot: '',
};

const currentRoot = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_ROOT:
      return {
        ...state,
        currentRoot: action.payload,
      };
    default:
      return state;
  }
};

export default currentRoot;
