import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AddToItinerary from '../actions/add_to_itinerary_action';

// needs to dispatch to itinerary

import '../../styles/poi_details.scss';

// actions: ADD_TO_ITINERARY, FETCH_POI_INFO

const mapStateToProps = state =>
  ({
    itinerary: state.itinerary,
    currentLocation: state.currentLocation,
  });

const mapDispatchToProps = dispatch =>
  ({
    onAddToListClick: (currentCity, selectedDetails, oldItinerary) => {
      // logic for handling new city vs existing city
      console.log('Old Itinerary is ', oldItinerary);
      const POIsInCity =
      // if currentCity is defined
        oldItinerary[currentCity] ?
          oldItinerary[currentCity].concat([selectedDetails]) :
      // if currentCity is undefined
          [selectedDetails];
      dispatch(AddToItinerary.addToItinerary({
        ...oldItinerary,
        [currentCity]: POIsInCity,
      }));
    },
  });

class POIDetails extends Component {
  // need a way to handle displaying different relevant data
  // (the data to display for hotels may be different than from restaurants)


  // todo add src tag to img.
  // current info within render is example data. change as needed
    // example src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.photos[0].photo_reference}&key=AIzaSyC535s39VzBWKFSXSlMaOllvk5ocBGNh9E`
  render() {
    const selectedDetails = this.props.details;
    let poiDetails = null;
    if (selectedDetails.photos) {
      poiDetails = (
        <div
          styleName="poiDetail"
        >
          <div>
            <img
              src={`${selectedDetails.photos[0].getUrl({ maxWidth: 250 })}`}
            />
            <h2>{selectedDetails.name}</h2>
            Rating: {selectedDetails.rating}
            <div>
              <ul>
                <li>Address: {selectedDetails.formatted_address}</li>
                <li>Phone Number: {selectedDetails.formatted_phone_number}</li>
                <li>International Phone Number: {selectedDetails.international_phone_number}</li>
              </ul>
            </div>
            {selectedDetails.website}
            <div>
              <button
                onClick={() =>
                this.props.onAddToListClick(
                this.props.currentLocation.city,
                selectedDetails, this.props.itinerary.itinerary)}
                className="btn btn-primary"
              >Add to List</button>
            </div>
          </div>
        </div>
      );
    } else {
      poiDetails = (
        <div
          styleName="poiDetail"
        >
          <div >
            <h2>{selectedDetails.name}</h2>
            Rating: {selectedDetails.rating}
            <div>
              <ul>
                <li>Address: {selectedDetails.formatted_address}</li>
                <li>Phone Number: {selectedDetails.formatted_phone_number}</li>
                <li>International Phone Number: {selectedDetails.international_phone_number}</li>
              </ul>
            </div>
            {selectedDetails.website}
            <div>
              <button
                onClick={() =>
                  this.props.onAddToListClick(
                    this.props.currentLocation.city,
                    selectedDetails, this.props.itinerary.itinerary)}
                className="btn btn-primary"
              >
                Add to List
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        { poiDetails }
      </div>
    );
  }
}

POIDetails.propTypes = {
  // propname: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(POIDetails);
