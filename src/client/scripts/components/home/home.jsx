import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { browserHistory } from 'react-router';
import './home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      lat: '',
      lng: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      console.log(this.state);
    });
    this.setState({ address: '' });
    browserHistory.push('/planner');
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
      </div>
    );
  }

}

export default Home;
