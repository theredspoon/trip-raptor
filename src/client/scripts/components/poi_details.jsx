import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AddToItinerary from '../actions/add_to_itinerary_action';
import * as RemoveFromItinerary from '../actions/remove_from_itinerary_action';
import * as POIInfo from '../actions/fetch_poi_info_action';


// needs to dispatch to itinerary

import '../../styles/poi_details.scss';

// actions: ADD_TO_ITINERARY, FETCH_POI_INFO

const mapStateToProps = state =>
  ({
    currentCity: state.currentLocation.city,
    itinerary: state.itinerary,
    currentLocation: state.currentLocation,
  });

const mapDispatchToProps = dispatch =>
  ({
    onAddToListClick: (currentCity, selectedDetails, oldItinerary) => {
      // logic for handling new city vs existing city
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
    fetchDetails: (placeId, index) => {
      dispatch(POIInfo.fetchPoiDetails(placeId, index));
    },
  });

class POIDetails extends Component {
  // need a way to handle displaying different relevant data
  // (the data to display for hotels may be different than from restaurants)
  componentWillMount() {
    this.props.fetchDetails(this.props.details.place_id, this.props.index);
  }

  // todo add src tag to img.
  // current info within render is example data. change as needed
    // example src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.photos[0].photo_reference}&key=AIzaSyC535s39VzBWKFSXSlMaOllvk5ocBGNh9E`

  addButton(selectedDetails, itinerary) {
    return (<button
      onClick={() =>
      this.props.onAddToListClick(
      this.props.currentLocation.city,
      selectedDetails, itinerary)}
      className="btn btn-primary"
    >
      Add to List
    </button>);
  }

  removeButton(index, city) {
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

  render() {
    const selectedDetails = this.props.details;
    const itinerary = this.props.itinerary.itinerary;
    let image = null;
    const cityArray = itinerary[this.props.currentCity] || [];
    let button = null;


    if (selectedDetails.photos) {
      image = (
        <img
          role="presentation"
          styleName="picDetail"
          src={`${selectedDetails.photos[0].getUrl({ maxWidth: 250, maxHeight: 250 })}`}
        />
      );
    } else {
      image = <div />;
    }

    if (cityArray && cityArray.indexOf(selectedDetails) !== -1) {
      button = this.removeButton(cityArray.indexOf(selectedDetails), this.props.currentCity);
    } else {
      button = this.addButton(selectedDetails, itinerary);
    }

    return (
      <div>
        <div styleName="poiDetail">
          <div >
            { image }
            <h3>{selectedDetails.name}</h3>
            <h4>Rating: {selectedDetails.rating}</h4>
            <ul>
              <li>Address: {selectedDetails.formatted_address}</li>
              <li>Phone Number: {selectedDetails.formatted_phone_number}</li>
              <li>International Phone Number: {selectedDetails.international_phone_number}</li>
              <li>Website: <a target="_blank" rel="noopener noreferrer" href={selectedDetails.website} styleName="webDetailLink"> {selectedDetails.website} </a> </li>
            </ul>
            {button}
          </div>
        </div>
      </div>
    );
  }
}

POIDetails.propTypes = {
  // propname: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(POIDetails);
