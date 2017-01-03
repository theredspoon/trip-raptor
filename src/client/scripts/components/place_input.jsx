import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-google-autocomplete';
import '../../styles/place_input.scss';

class Place extends Component {
  render() {
    return (
      <div className="jumbotron" styleName="orange">
        <h1>Tell me:</h1>
        <h2 styleName="red"> Where are you going?</h2>
        <Autocomplete
          placeholder=""
          onChange={this.handleChange}
          style={{ width: '50%' }}
          onPlaceSelected={(place) => {
            console.log(place);
            const = 
          }}
        />
      </div>
    );
  }
}

export default Place;
