import React, { Component, PropTypes } from 'react';
import POI from './poi';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import '../../styles/canvas.scss';

// pulls currentCity
function mapStateToProps(state) {
  console.log(state);
  return {
    location: state.location,
    types: state.type };
}


class Canvas extends Component {
  render() {
    // replace all branches with .map off of state.types array
    // something like: .map(node => <POI nodePosition="branch">{node.type}</POI>)
    return (
      <div>
        <POI nodePosition="root" type={this.props.location.city} />
        {this.props.types.map(item => <POI nodePosition="branch" type={item} key={item} />)}
      </div>
    );
  }
}

// Canvas.propTypes = {
//   currentCity: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps)(Canvas);
