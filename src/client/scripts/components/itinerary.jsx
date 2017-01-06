import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import itineraryReducer from '../reducers/itinerary_reducer';
// import Share from './share';

import '../../styles/itinerary.scss';

// TODO: incorporate 'REMOVE_FROM_ITINERARY' action and dispatch
// TODO: add Share component
// TODO: styling

// actions: REMOVE_FROM_ITINERARY

class Itinerary extends Component {
  constructor(props) {
    super(props);

    // this container receives props from Redux
    // this.state.itinerary = {}; (initial state)
    // this.state.itinerary = {city1: [POI1, POI2...], city2: [POI3, POI4..]}
  }

  render() {
    const itineraryLength = Object.keys(this.props.itinerary).length;
    const cities = Object.keys(this.props.itinerary);
    // if itinerary is empty, this container does not display
    if (itineraryLength <= 0) {
      return <div />;
    }
    return (
      <div>
        <ul>
          {cities.map(city => (
            this.props.itinerary[city].map(POI => (
              <li>
                {city}
                <div>
                  <ul>
                    <li>
                      {POI.name}<br />
                      {POI.phoneNumber}<br />
                      {POI.internationalPhoneNumber}<br />
                    </li>
                  </ul>
                </div>
              </li>
            ))
          ))}
        </ul>
      </div>
    );
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

const mapStatetoProps = state => ({
  itinerary: state.itinerary,
});
// mapDispatchToProps (for remove from itinerary)
connect(mapStatetoProps/* , mapDispatchToProps */)(Itinerary);

Itinerary.propTypes = {
  itinerary: PropTypes.object,
  // propname: PropTypes.string.isRequired,
};

export default Itinerary;
