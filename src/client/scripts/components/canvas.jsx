import React, { Component, PropTypes } from 'react';
import POI from './poi';
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
    root: state.root,
  };
};

class Canvas extends Component {
  componentWillUpdate() {
    console.log(this.props.root);
  }
  render() {
    // replace all branches with .map off of state.branchTitles array
    // something like: .map(node => <POI nodePosition="branch">{node.type}</POI>)
    const currentRoot = this.props.root.currentRoot;
    let canvas = null;
    if (currentRoot) {
      canvas = (<div>
        <POI nodePosition="root" currentRoot={this.props.root.currentRoot} />
        { this.props.branchTitles.map(item => <POI nodePosition="branch" branchTitle={item.name} key={item.query} query={item.query} />)};
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
