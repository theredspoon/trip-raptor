import React, { Component, PropTypes } from 'react';

import POI from './poi';
import POIDetails from './poi_details';
import Itinerary from './itinerary';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as POIInfo from '../actions/fetch_poi_info_action';
import { updateRoot } from '../actions/update_root_action';

import '../../styles/canvas.scss';

const mapStateToProps = (state) => 
  // check state
  // console.log('This is state inside of Canvas', state);

   ({
    currentLocation: state.currentLocation,
    branchTitles: state.branchTitles,
    POIs: state.POIs,
    currentRoot: state.currentRoot,
  });

class Canvas extends Component {
  componentDidUpdate() {
    // checking for updates
    // console.log('CurrentRoot in CANVAS is', this.props);
  }

  render() {
    const localRoot = this.props.currentRoot.currentRoot;
    const currentCity = this.props.currentLocation.city;
    const numberStrings = ['zero', 'one', 'two', 'three', 'four'];

    let canvas = null;
    if (localRoot === currentCity) {
      canvas = (
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">TRIP_RAPTOR
                <span> | Planning your trip to {currentCity} city</span>
              </a>
            </div>
          </nav>
          <div styleName="branchRoot">
            <POI nodePosition="root" />
          </div>
          <div>
            { this.props.branchTitles.default.map(
            (item, index) => (
              <div styleName={numberStrings[index]}>
                <POI
                  nodePosition="branch"
                  branchTitle={item.name}
                  key={index}
                  query={item.query}

                />
              </div>
              ),
            )}
          </div>
        </div>
      );
    } else if (localRoot !== currentCity && localRoot) {
      canvas = (
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">TRIP_RAPTOR
                <span> | Choosing {localRoot} you like</span>
              </a>
            </div>
          </nav>
          <div styleName="branchRoot">
            <POI nodePosition="root" />
          </div>
          <div>
            { this.props.branchTitles.branchTitles.map(
            (item, index) => (
              <div styleName={numberStrings[index]}>
                <POI
                  nodePosition="leaf"
                  branchTitle={item.name}
                  key={index}
                  query={item.place_id}
                  details={item}
                  index={index}
                />
              </div>
              ),
            )}
          </div>
        </div>
      );
    } else {
      canvas = <div>Loading...</div>;
    }
    return (
      <div>
        {canvas}
        <Itinerary />
      </div>
    );
  }
}

// pulls currentCity

// Canvas.propTypes = {
//   currentLocation: PropTypes.shape({
//     city: React.PropTypes.string,
//     id: React.PropTypes.string,
//     boundary: React.PropTypes.objectOf(React.PropTypes.objectOf(React.PropTypes.number)),
//     // FIX ME: find the proper shape ====> Is it a Number PropTypes??
//   }).isRequired,
//   branchTitles: PropTypes.arrayOf(React.PropTypes.string).isRequired,
// };

export default connect(mapStateToProps)(Canvas);
