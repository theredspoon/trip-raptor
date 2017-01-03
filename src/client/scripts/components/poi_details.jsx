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

  render() {
    return (
      <div>
        <button className="btn btn-primary">Add to List</button>
        <button className="btn btn-danger">Remove from List</button>
      </div>
    );
  }
}

POIDetails.propTypes = {
  //propname: PropTypes.string.isRequired,
};

export default POIDetails;
