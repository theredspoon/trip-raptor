export const UPDATE_ROOT = 'UPDATE_ROOT';

export function updateRoot(position) {
  return {
    type: UPDATE_ROOT,
    payload: position,
  };
}
