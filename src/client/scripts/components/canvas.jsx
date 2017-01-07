import React, { Component, PropTypes } from 'react';

import POI from './poi';
import POIDetails from './poi_details';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as POIInfo from '../actions/fetch_poi_info_action';
import { updateRoot } from '../actions/update_root_action';

import '../../styles/canvas.scss';

const mapStateToProps = (state) => {
  // check state
  console.log('This is state inside of Canvas', state.currentLocation.city, state);

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
    console.log('in canvase root is', this.props.currentRoot.currentRoot);
    console.log(this.props.branchTitles);
  }
  render() {
    const localRoot = this.props.currentRoot.currentRoot;
    const currentCity = this.props.currentLocation.city;
    // replace all branches with .map off of state.branchTitles array
    // something like: .map(node => <POI nodePosition="branch">{node.type}</POI>)
    let canvas = null;
    if (localRoot === currentCity) {
      canvas = (<div>
        <POI nodePosition="root" />
        { this.props.branchTitles.map(
          item => <POI nodePosition="branch" branchTitle={item.name} key={item.query} query={item.query} />)}
      </div>
      );
    } else if (localRoot !== currentCity && localRoot) {
      canvas = (<div>
        <POI nodePosition="root" />
        { this.props.branchTitles.branchTitles.map(
          item =>
            <POI
              nodePosition="leaf"
              details={item}
              branchTitle={item.name}
              key={item.query}
              query={item.place_id}
            />
        )}
      </div>
      );
    } else {
      canvas = <div>Loading...</div>;
    }
    return (
      <div >
        {canvas}
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
