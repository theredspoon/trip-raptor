import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/share.scss';

const mapStateToProps = state => ({
  itinerary: state.itinerary,
});

class Share extends Component {

  createMessageBody(itinerary) {
    const newline = '%0A%0A';
    const lineBreak = '%0A';
    const indent = '%20%20';
    const dash = '%2D%20';

    return 'My Trip Details'.concat(newline) + Object.keys(itinerary)
      .reduce((body, city) => (
        body.concat(`${city}${newline}`,
          itinerary[city].reduce((acc, POI) => (
            acc.concat(`${dash}${POI.name}${newline}${indent}${POI.formatted_phone_number}${lineBreak}${indent}${POI.international_phone_number}${lineBreak}${indent}${POI.formatted_address}${newline}`)
          ), ''),
        )
    ), '');
  }

  render() {
    const itinerary = this.props.itinerary.itinerary;
    const message = this.createMessageBody(itinerary);

    return (
      <div>
        <a
          target="_blank"
          href={`mailto:?subject=My%20Trip%20Itinerary&body=${message}`}
        >
          Email Me This Info
        </a>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Share);
