import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RemoveButton from '../containers/removeButton';
import Share from './share';

import '../../styles/itinerary.scss';

const mapStateToProps = state => ({
  itinerary: state.itinerary,
});


class Itinerary extends Component {
  populateDetails(string) {
    if (string !== undefined && string.length > 0) {
      return (
        <div>
          { string }
          <br />
        </div>
      );
    }
  }

  render() {
    const itineraryLength = Object.keys(this.props.itinerary.itinerary).length;
    const cities = Object.keys(this.props.itinerary.itinerary);

    if (itineraryLength <= 0) {
      return <div />;
    }


    return (


      <div styleName="listbox">
        {cities.map(city => (
          <ul> <h2>{city} </h2>
            {this.props.itinerary.itinerary[city].map((POI, index) => (
              <li>
                <h3>{ this.populateDetails(POI.name) }</h3>
                { this.populateDetails(POI.formatted_phone_number) }
                { this.populateDetails(POI.international_phone_number) }
                { this.populateDetails(POI.formatted_address) }
                <RemoveButton details={POI} city={city} index={index} />
              </li>
            ))}
          </ul>
          ))
        }
        <Share />
      </div>
    );
  }
}

Itinerary.propTypes = {
  itinerary: PropTypes.object,
  // propname: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Itinerary);
