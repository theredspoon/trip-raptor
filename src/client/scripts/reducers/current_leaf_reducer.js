import { UPDATE_CURRENT_CLICKED_LEAF } from '../actions/update_current_clicked_leaf_action';

const intialState = { currentClickedLeaf: null };

const POIDetails = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_CLICKED_LEAF:
      return Object.assign({}, state, {
        currentClickedLeaf: action.payload,
      });
    default:
      return state;
  }
};

export default POIDetails;
