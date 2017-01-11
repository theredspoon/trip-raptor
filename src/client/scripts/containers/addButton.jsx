// TODO: refactor buttons into containers
// TODO: refactor itinerary and POIDetails into presentational components

// FIX ME: these buttons break on any of their this.props calls

export function addButton(selectedDetails, itinerary) {
  return (
    <button
      className="btn btn-primary"
      onClick={() =>
      this.props.onAddToListClick(
      this.props.currentLocation.city,
      selectedDetails, itinerary)}
    >
    Add to List
  </button>
  );
}