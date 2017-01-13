import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/share.scss';

const mapStateToProps = state => ({
  itinerary: state.itinerary,
});

const lineBreak = '%0A';
const indent = '%20%20';
const newline = '%0A%0A';
const dash = '%2D%20';

class Share extends Component {

  populateDetails(string) {
    if (string !== undefined && string.length > 0) {
      console.log('encodeURIComponent(string) is', encodeURIComponent(string));
      return `${encodeURIComponent(string)}${lineBreak}${indent}`;
    }
  }

  createMessageBody(itinerary) {
    return 'Here are the highlights for my trip:'.concat(newline) + Object.keys(itinerary)
      .reduce((body, city) => (
        body.concat(`${city}${newline}`,
          itinerary[city].reduce((acc, POI) => (
            acc.concat(`${dash}${encodeURIComponent(POI.name)}${newline}${indent}${this.populateDetails(POI.formatted_phone_number)}${this.populateDetails(POI.international_phone_number)}${this.populateDetails(POI.formatted_address)}${newline}`)
          ), ''),
        )
    ), '');
  }

  render() {
    const itinerary = this.props.itinerary.itinerary;
    const message = this.createMessageBody(itinerary);

    return (
      <a
        role="button"
        className="btn btn-success pull-right"
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:?subject=My%20Trip%20Details&body=${message}`}
      >
        Email Me This Info
      </a>
    );
  }
}

export default connect(mapStateToProps)(Share);
