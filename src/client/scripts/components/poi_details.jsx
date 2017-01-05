import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../../styles/poi_details.scss';

// actions: ADD_TO_ITINERARY, REMOVE_FROM_ITINERARY, FETCH_POI_INFO

class POIDetails extends Component {
  constructor(props) {
    super(props);
  }

  // need a way to handle displaying different relevant data
  // (the data to display for hotels may be different than from restaurants)


  // todo add src tag to img.
  // current info within render is example data. change as needed
    // example src=`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.photos[0].photo_reference}&key=AIzaSyC535s39VzBWKFSXSlMaOllvk5ocBGNh9E`
  render() {
    return (
      <div>
        <div>
          <img />
          <h1>Name of Establishment</h1> Rating
          <span>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>International Phone Number</li>
            </ul>
          </span>
          Website
        </div>
        <div>
          <button className="btn btn-primary">Add to List</button>
          <button className="btn btn-danger">Remove from List</button>
        </div>
      </div>
    );
  }
}

POIDetails.propTypes = {
  // propname: PropTypes.string.isRequired,
};

export default POIDetails;
