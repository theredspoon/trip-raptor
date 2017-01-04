import React, { Component, PropTypes } from 'react';
import POI from './poi';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import '../../styles/canvas.scss';

// pulls currentCity
function mapStateToProps(state) {
  console.log(state);
  return {
    currentLocation: state.currentLocation,
    branchTitles: state.branchTitles };
}


class Canvas extends Component {
  render() {
    // replace all branches with .map off of state.branchTitles array
    // something like: .map(node => <POI nodePosition="branch">{node.type}</POI>)
    return (
      <div>
        <POI nodePosition="root" currentRoot={this.props.location.city} />
        {this.props.branchTitles.map(item => <POI nodePosition="branch" branchTitle={item} key={item} />)}
      </div>
    );
  }
}

// Canvas.propbranchTitles = {
//   currentCity: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps)(Canvas);
