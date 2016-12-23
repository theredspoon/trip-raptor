import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { address: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <h2> Where are you going ?</h2>
        <form onSubmit={this.handleSubmit}>
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ address: e });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(PlacesAutocomplete);
    geocodeByAddress(this.state.address, (err, res) => {
      if (err) {
        console.log('Oh no!', err);
      }
      console.log(res);
    });
  }
}


ReactDOM.render(<Home />, document.getElementById('home'));
