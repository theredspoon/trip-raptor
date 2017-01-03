import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Share from './share';

import '../../styles/itinerary.scss';

// actions: REMOVE_FROM_ITINERARY

class Itinerary extends Component {
  constructor(props) {
    super(props);

    // this container receives props from Redux
    // this.state.itineraryList (suggested name) = {}; (initial state)
    // this.state.itineraryList = {city1: [POI1, POI2...], city2: [POI3, POI4..]}
  }

  render() {
    // if itineraryList is empty, this container does not display

    // the first time the itineraryList is not empty, display a handlebar at the
    // middle right-hand side of the window and shake it to suggest to the user
    // that it should be explored (hovered over)

    // if the itineraryList is not empty, and the handlebar is hovered over,
    // slide out a container from the right-hand side

    // on hover, this container slides out from the right-hand side

    // on blur, this container slides back into the right side of the screen

    // insider the container, render the list of added POIs and the cities they correspond to
    // along the bottom of the container, render the share component <Share></Share>

  }
}

Itinerary.propTypes = {
  // propname: PropTypes.string.isRequired,
};

export default Itinerary;
