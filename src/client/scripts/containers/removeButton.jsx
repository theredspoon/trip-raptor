import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as RemoveFromItinerary from '../actions/remove_from_itinerary_action';

// TODO: refactor buttons into containers
// TODO: refactor itinerary and POIDetails into presentational components

// FIX ME: these buttons break on any of their this.props calls

const mapStateToProps = state =>
  ({
    currentCity: state.currentLocation.city,
    itinerary: state.itinerary,
    currentLocation: state.currentLocation,
  });

const mapDispatchToProps = dispatch =>
  ({
    onRemoveFromListClick: (POIindex, cityOfPOI, oldItinerary, POI) => {
      if (!POI) {
        for (let i = 0; i < oldItinerary.length; i++) {
          if (oldItinerary[cityOfPOI].place_id === POI.place_id) {
            POIindex = i;
            return;
          }
        }
      }
      const updatedCityPOIArray =
        [...oldItinerary[cityOfPOI].slice(0, POIindex),
          ...oldItinerary[cityOfPOI].slice(POIindex + 1)];

    // property is empty, remove it

      const newItinerary = oldItinerary;
      if (updatedCityPOIArray.length <= 0) {
        delete newItinerary[cityOfPOI];
        dispatch(RemoveFromItinerary.removeFromItinerary({
          ...newItinerary,
        }));
      } else {
        dispatch(RemoveFromItinerary.removeFromItinerary({
          ...oldItinerary,
          [cityOfPOI]: updatedCityPOIArray,
        }));
      }
    },
  });

class RemoveButton extends Component {
  render() {
    const city = this.props.currentCity;
    const POI = this.props.details;
    const itinerary = this.props.itinerary.itinerary;

    return (
      <button
        className="btn btn-danger"
        onClick={() =>
          this.props.onRemoveFromListClick(
            this.props.index, city, itinerary, POI)}
      >
        Remove From List
      </button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);
