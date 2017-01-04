import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/google_autocomplete.scss';

export default class ReactGoogleAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.autocomplete = null;
  }

  componentDidMount() {
    const { types=['(cities)'], componentRestrictions={}, bounds, } = this.props;

    this.autocomplete = new google.maps.places.Autocomplete(this.refs.input, {
      types,
      componentRestrictions,
      bounds,
    });

    this.autocomplete.addListener('place_changed', this.onSelected.bind(this));
  }

  onSelected() {
    if (this.props.onPlaceSelected) {
      this.props.onPlaceSelected(this.autocomplete.getPlace());
    }
  }

  render() {
    const {onPlaceSelected, types, componentRestrictions, bounds, ...rest} = this.props;

    return (
      <div className="input-group input-group-lg">
        Test
        <input
          ref="input"
          {...rest}
        />
      </div>
    );
  }
}
