import React, { Component, PropTypes } from 'react';

import POI from './poi';
import POIDetails from './poi_details';
import Itinerary from './itinerary';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as POIInfo from '../actions/fetch_poi_info_action';
import { updateRoot } from '../actions/update_root_action';

import '../../styles/canvas.scss';

const mapStateToProps = (state) => {
  // check state
  console.log('This is state inside of Canvas', state);

  return {
    currentLocation: state.currentLocation,
    branchTitles: state.branchTitles,
    POIs: state.POIs,
    currentRoot: state.currentRoot,
  };
};

class Canvas extends Component {
  componentDidUpdate() {
    // checking for updates
    // console.log('CurrentRoot in CANVAS is', this.props);
  }

  render() {
    const localRoot = this.props.currentRoot.currentRoot;
    const currentCity = this.props.currentLocation.city;
    // replace all branches with .map off of state.branchTitles array
    // something like: .map(node => <POI nodePosition="branch">{node.type}</POI>)
    let canvas = null;
    if (localRoot === currentCity) {
      canvas = (<div styleName="rootCity">
        <div>
          <POI nodePosition="root" />
          { this.props.branchTitles.default.map(
          (item, index) =>
            <POI
              nodePosition="branch"
              branchTitle={item.name}
              key={index}
              query={item.query}
              index={index}
            />,
            )}
        </div>
      </div>
      );
    } else if (localRoot !== currentCity && localRoot) {
      canvas = (
        <div styleName="titles">
          <POI nodePosition="root" />
          { this.props.branchTitles.branchTitles.map(
            (item, index) =>
              <POI
                nodePosition="leaf"
                details={item}
                branchTitle={item.name}
                key={index}
                query={item.place_id}
              />)
          }
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
