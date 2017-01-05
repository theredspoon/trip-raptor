export const UPDATE_BRANCH_TITLES = 'UPDATE_BRANCH_TITLES';

/* Cases to handle:

 * branch at initialState is clicked (move deeper into the tree)
 *  branches will come from state.POIs.X where X is
 *  hotel || restaurant || nightlife || point of interest || museum

 * root is clicked (move shallower out of the tree)
 *  branches will come from { initialBranches } from branchTitles_reducer.js

*/

const updateBranchTitles = payload => (
  {
    type: UPDATE_BRANCH_TITLES,
    payload,
  }
);

export default updateBranchTitles;
