export const UPDATE_CURRENT_LOCATION = 'UPDATE_CURRENT_LOCATION';
export const UPDATE_BRANCH_TITLES = 'UPDATE_BRANCH_TITLES';
export const FETCH_POI_INFO = 'FETCH_POI_INFO';
export const UPDATE_ROOT = 'UPDATE_ROOT';
export const ADD_TO_ITINERARY = 'ADD_TO_ITINERARY';
export const REMOVE_FROM_ITINERARY = 'REMOVE_FROM_ITINERARY';

export function updateCurrentLocation(payload) {
  return {
    type: UPDATE_CURRENT_LOCATION,
    // FIX ME put the city name in here
    payload: '',
  };
}

export function updateBranchTitles(payload) {
  return {
    type: UPDATE_BRANCH_TITLES,
    // FIX ME put the default branch in here/ render info from whatever is click
    payload: '',
  };
}

export function fetchPoiInfo(payload) {
  return {
    type: FETCH_POI_INFO,
    // FIX ME the API req for general detail
    payload: '',
  };
}

export function updateRoot(payload) {
  return {
    type: UPDATE_ROOT,
    // FIX ME connect to whatever is click if it's a root or branch
    payload: '',
  };
}
export function addToItinerary(payload) {
  return {
    type: ADD_TO_ITINERARY,
    // FIX ME push POI to the array
    payload: '',
  };
}

export function removeFromItinerary(payload) {
  return {
    type: REMOVE_FROM_ITINERARY,
    // FIX ME splice item from itinerary
    payload: '',
  };
}

