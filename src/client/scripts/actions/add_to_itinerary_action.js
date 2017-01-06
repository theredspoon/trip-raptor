const ADD_TO_ITINERARY = 'ADD_TO_ITINERARY';

const addToItinerary = payload => (
  {
    type: ADD_TO_ITINERARY,
    payload,
  }
);

export default addToItinerary;
