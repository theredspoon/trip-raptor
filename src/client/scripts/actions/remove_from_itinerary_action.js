export const REMOVE_FROM_ITINERARY = 'REMOVE_FROM_ITINERARY';

export function removeFromItinerary(payload) {
  return {
    type: REMOVE_FROM_ITINERARY,
    // FIX ME splice item from itinerary
    payload: '',
  };
}

