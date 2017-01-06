export const UPDATE_CURRENT_LOCATION = 'UPDATE_CURRENT_LOCATION';
export function updateCurrentLocation(location) {
  return {
    type: UPDATE_CURRENT_LOCATION,
    payload: location,
  };
}
