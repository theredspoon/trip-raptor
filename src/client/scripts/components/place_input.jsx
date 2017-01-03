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
            // need to set city name, viewport, and location ID
            console.log(place);
            /* the following is a request for points of interests within the vacinity of user's input
            const service = new google.maps.places.PlacesService(document.createElement('container'));
            const search = {
              bounds: place.geometry.viewport,
             // query type/name will be fetched from the store and results will be different depending on such
              types: ['restaraunt'],
            };
            service.nearbySearch(search, (res) => {
              console.log(res);
              res.sort((a,b) => {
                return b.rating - a.rating;
              });
              // filter by rating and return the first 5 results
            });*/
          }}
        />
      </div>
    );
  }
}

export default Place;
