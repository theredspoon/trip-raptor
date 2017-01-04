export const UPDATE_BRANCH_TITLES = 'UPDATE_BRANCH_TITLES';

export function updateBranchTitles(payload) {
  return {
    type: UPDATE_BRANCH_TITLES,
    // FIX ME put the default branch in here/ render info from whatever is click
    payload: '',
  };
}
