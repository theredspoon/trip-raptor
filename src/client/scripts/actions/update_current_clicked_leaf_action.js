export const UPDATE_CURRENT_CLICKED_LEAF = 'UPDATE_CURRENT_CLICKED_LEAF';

export function updateCurrentClickedLeaf(title) {
  return {
    type: UPDATE_CURRENT_CLICKED_LEAF,
    payload: title,
  };
}
