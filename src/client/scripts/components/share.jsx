import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/share.scss';

let itineraryBody = 'test';

const mapStateToProps = state => ({
  itinerary: state.itinerary,
});

class Share extends Component {
  // email and share buttons;
  render() {
    return (
      <div>
        <a
          target="_blank"
          href={`mailto:?subject=My%20Trip%20Itinerary&body=${itineraryBody}`}
        >
          Email Me This Info
        </a>
      </div>
    );
  }
}

My Trip Details

City Name

- POI.name
- POI.formatted_phone_number
- POI.international_phone_number
- POI.formatted_address

for (let city of this.props.itinerary.itinerary) {
  for (let POI of this.props.itinerary.itinerary[city])
}

this.props.itinerary.itinerary.forEach(city => {
  this.props.itinerary.itinerary.forEach(POI => {
    
  })
})

// <a href={`mailto:subject=My%20Trip%20Itinerary&body=${itineraryBody}`}>

/*const itineraryBody = `

                      {POI.name}<br />
                      {POI.formatted_phone_numberphoneNumber}<br />
                      {POI.international_phone_number}<br />
                      {POI.formatted_address}<br />

`;

`mailto:subject=My%20Trip%20Itinerary&body=${itinerarybody}`*/

export default connect(mapStateToProps)(Share);
