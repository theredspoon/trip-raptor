export const UPDATE_ROOT = 'UPDATE_ROOT';

export function updateRoot(payload) {
  return {
    type: UPDATE_ROOT,
    // FIX ME connect to whatever is click if it's a root or branch
    payload: '',
  };
}
