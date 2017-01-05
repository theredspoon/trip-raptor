import axios from 'axios';

export const FETCH_POI_INFO_SUCCESS = 'FETCH_POI_INFO';
export const FETCH_POI_DETAILS_SUCCESS = 'FETCH_POI_DETAILS_SUCESSS';
export const FETCH_POI_DETAILS_ERROR = 'FETCH_POI_DETAILS_ERROR';

function fetchPoiInfoSuccess(data) {
  return {
    type: FETCH_POI_INFO_SUCCESS,
    payload: data,
  };
}


export function fetchPoiInfo(query) {
  return function (dispatch, getState) {
    console.log(query);
    const { location } = getState();
    const service = new google.maps.places.PlacesService(document.createElement('container'));
    const search = {
      bounds: {
        west: -122.52699999999999,
        east: -122.34820000000002,
        north: 37.812,
        south: 37.70339999999999,
      },
      keyword: query,
    };
    service.nearbySearch(search, (res) => {
      const temp = res.sort((a, b) => b.rating - a.rating).slice(0, 5);
      const results = {};
      results[query] = temp;
      dispatch(fetchPoiInfoSuccess(results));
      console.log('in promise after dispatch', query, temp, getState());
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
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${poiID}&key=${process.env.GOOGLE_API_KEY}`)
    .then((response) => {
      dispatch(fetchPoiDetailsSuccess(response));
    })
    .catch((err) => {
      dispatch(fetchPoiDetailsError(err));
    });
    return null;
  };
}
