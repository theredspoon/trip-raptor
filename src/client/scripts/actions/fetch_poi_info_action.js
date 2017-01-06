import axios from 'axios';

const service = new google.maps.places.PlacesService(document.createElement('container'));

export const FETCH_POI_INFO_SUCCESS = 'FETCH_POI_INFO_SUCCESS';
export const FETCH_POI_INFO_ERROR = 'FETCH_POI_INFO_ERROR';
export const FETCH_POI_DETAILS_SUCCESS = 'FETCH_POI_DETAILS_SUCESSS';
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
    console.log(currentLocation);
    const search = {
      bounds:
      // currentLocation.boundary, current hardcoded
      {
        west: -122.52699999999999,
        east: -122.34820000000002,
        north: 37.812,
        south: 37.70339999999999,
      },
      keyword: query,
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

export function fetchPoiDetails(poiID) {
  return function (dispatch) {
    const search = {
      placeId: poiID,
    };
    service.getDetails(search, (res, err) => {
      if (err) {
        dispatch(fetchPoiDetailsError(err));
      }
      dispatch(fetchPoiDetailsSuccess(res));
    });
  };
}
