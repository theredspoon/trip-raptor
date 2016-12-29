import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete from 'react-places-autocomplete';
import { browserHistory } from 'react-router';
import Autocomplete from 'react-google-autocomplete';
import '../../../styles/place.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      place_id: '',
    };
  }

  handleChange(e) {
    this.setState({ address: e });
  }

  handleSubmit(event) {
    event.preventDefault();
    geocodeByAddress(this.state.address, (err, res) => {
      if (err) {
        console.log('Oh no! Error: ', err);
      }
      this.setState({
        lat: res.lat,
        lng: res.lng,
      });
      this.props.router.push('/planner');
      console.log(this.state);
    });
    this.setState({ address: '' });
  }

  render() {
    return (
      <div className="jumbotron" styleName="orange">
        <h1>Tell me:</h1>
        <h2 styleName="red"> Where are you going?</h2>
        <form onSubmit={this.handleSubmit}>
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn">Search</button>
        </form>
        <Autocomplete
          placeholder=""
          onChange={this.handleChange}
          style={{ width: '50%' }}
          onPlaceSelected={(place) => {
            this.setState({ location: place.formatted_address,
              place_id: place.place_id });
            console.log(place);
            this.props.router.push('/planner');
          }}
        />
      </div>
    );
  }

}

export default Home;
