import React from 'react';

// TODO: refactor buttons into containers
// TODO: refactor itinerary and POIDetails into presentational components

// FIX ME: these buttons break on any of their this.props calls

export function removeButton(index, city) {
  return (
    <button
      className="btn btn-danger"
      onClick={() =>
        this.props.onRemoveFromListClick(
          index, city, this.props.itinerary.itinerary)}
    >
      Remove From List
    </button>
  );
}
