import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Autocomplete from 'react-google-autocomplete';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UpdateCurrentLocation from '../actions/update_current_location_action';
import * as UpdateRoot from '../actions/update_root_action';

import '../../styles/place_input.scss';
const mapDispatchToProps = dispatch => ({
  onInputSubmit: (place) => {
    dispatch(UpdateCurrentLocation.updateCurrentLocation(place));
    dispatch(UpdateRoot.updateRoot(place.name));
  },
});

class PlaceInput extends Component {

  render() {
    return (
      <div className="jumbotron" styleName="orange">
        <h1>Tell me:</h1>
        <h2 styleName="red"> Where are you going?</h2>
        <Autocomplete
          id="AutoForm"
          ref="AutoForm"
          placeholder="Where are you going?"
          onPlaceSelected={(place) => {
            if (!place.place_id) {
              console.log('Please passing in the right City...');
            } else {
              this.props.onInputSubmit(place);
              browserHistory.push('/city');
            }
          }}

        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('This is the state inside the PlaceInput', state);
  return {
    currentLocation: state.currentLocation,
  };
}

PlaceInput.propTypes = {
  currentLocation: PropTypes.shape({
    city: React.PropTypes.string,
    id: React.PropTypes.string,
    boundary: React.PropTypes.objectOf(React.PropTypes.objectOf(React.PropTypes.number)),
    // FIX ME: find the proper shape ====> Is it a Number PropTypes??
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceInput);

