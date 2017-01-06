const REMOVE_FROM_ITINERARY = 'REMOVE_FROM_ITINERARY';

const removeFromItinerary = payload => (
  {
    type: REMOVE_FROM_ITINERARY,
    payload,
  }
);

export default removeFromItinerary;
