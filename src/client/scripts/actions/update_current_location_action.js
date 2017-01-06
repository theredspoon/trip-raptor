export const UPDATE_CURRENT_LOCATION = 'UPDATE_CURRENT_LOCATION';
export function updateCurrentLocation(payload) {
  return {
    type: UPDATE_CURRENT_LOCATION,
    payload,
  };
}
