import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AddToItinerary from '../actions/add_to_itinerary_action';

const mapStateToProps = state =>
  ({
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
  });

class AddButton extends Component {
  componentWillMount() {
    console.log(this);
  }
  render() {
    const selectedDetails = this.props.details;
    const itinerary = this.props.itinerary.itinerary;
    const city = this.props.city;
    return (<button
      onClick={() =>
      this.props.onAddToListClick(city, selectedDetails, itinerary)
      }
      className="btn btn-primary"
    >
      Add to List
    </button>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
