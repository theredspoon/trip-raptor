import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Autocomplete from './google_autocomplete';
import '../../styles/place_input.scss';

function mapStateToProps(state) {
  console.log(state);
  return { currentLocation: state.currentLocation };
}

// function mapDispatchToProps(dispatch) {
  // will add action from action corresponding with location
//   return { actions: bindActionCreators(actionCreators, dispatch) };
// }

class PlaceInput extends Component {
  render() {
    return (
      <div styleName="orange" >
        <h1>Tell me:</h1>
        <h2 styleName="red"> Where are you going?</h2>
        <Autocomplete
          placeholder="Where are you going?"
          styleName="red"
          types={['(regions)']}
          componentRestrictions={{ country: 'us' }}
          onPlaceSelected={(place) => {
            // need to set city name, viewport, and location ID
            // place.address_components[0].longname
            // place.geometry.viewport
            // place.place_id
            console.log(place);
            browserHistory.push('/city');
          }}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(PlaceInput);
