import axios from 'axios';

const service = new google.maps.places.PlacesService(document.createElement('container'));

export const FETCH_POI_INFO_SUCCESS = 'FETCH_POI_INFO_SUCCESS';
export const FETCH_POI_INFO_ERROR = 'FETCH_POI_INFO_ERROR';
export const FETCH_POI_DETAILS_SUCCESS = 'FETCH_POI_DETAILS_SUCCESS';
export const FETCH_POI_DETAILS_ERROR = 'FETCH_POI_DETAILS_ERROR';

function fetchPoiInfoSuccess(data) {
  return {
    type: FETCH_POI_INFO_SUCCESS,
    payload: data,
  };
}

function fetchPoiInfoError(data) {
  return {
    type: FETCH_POI_INFO_ERROR,
    payload: data,
  };
}

export function fetchPoiInfo(query) {
  return function (dispatch, getState) {
    const { currentLocation } = getState();
    const search = {
      bounds: currentLocation.boundary,
      keyword: query,
      type: query,
    };

    service.nearbySearch(search, (res, err) => {
      if (err) {
        dispatch(fetchPoiInfoError(err));
      }
      const temp = res.sort((a, b) => b.rating - a.rating).slice(0, 5);
      const results = {};
      results[query] = temp;
      dispatch(fetchPoiInfoSuccess(results));
    });
  };
}

function fetchPoiDetailsSuccess(response) {
  return {
    type: FETCH_POI_DETAILS_SUCCESS,
    payload: response,
  };
}

function fetchPoiDetailsError(err) {
  return {
    type: FETCH_POI_DETAILS_ERROR,
    payload: err,
  };
}

export function fetchPoiDetails(poiID, index) {
  return function (dispatch, getState) {
    const { branchTitles } = getState();
    const search = {
      placeId: poiID,
    };
    service.getDetails(search, (res, err) => {
      if (err) {
        dispatch(fetchPoiDetailsError(err));
      }
      // Updating branchTitles w/o mutation through slice and spread operator
      const result = [...branchTitles.branchTitles.slice(0, index), res, ...branchTitles.branchTitles.slice(index + 1)];
      dispatch(fetchPoiDetailsSuccess(result));
    });
  };
}
