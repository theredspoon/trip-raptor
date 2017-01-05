import React, { Component, PropTypes } from 'react';
import POI from './poi';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as POIInfo from '../actions/fetch_poi_info_action';
import '../../styles/canvas.scss';

// pulls currentCity
const mapStateToProps = (state) => {
  // check state
  console.log(state);
  return {
    currentLocation: state.currentLocation,
    // branchTitles needs to be an array
    branchTitles: state.branchTitles,
    POIs: state.POIs,
  };
};


class Canvas extends Component {
  render() {
    // replace all branches with .map off of state.branchTitles array
    // something like: .map(node => <POI nodePosition="branch">{node.type}</POI>)
    return (
      <div>
        <POI nodePosition="root" currentRoot={this.props.currentLocation.city} />
        {this.props.branchTitles.map(item => <POI nodePosition="branch" branchTitle={item.name} key={item.query} query={item.query} />)}
      </div>
    );
  }
}

Canvas.propTypes = {
  currentLocation: PropTypes.shape({
    city: React.PropTypes.string,
    id: React.PropTypes.string,
    boundary: React.PropTypes.objectOf(React.PropTypes.string),
  }).isRequired,
  branchTitles: PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Canvas);
