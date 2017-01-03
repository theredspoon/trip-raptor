import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import POIDetails from './poi_details';

import '../../styles/poi.scss';

class POI extends Component {
  constructor(props) {
    super(props);
    this.state.nodePosition = props.nodePosition; // root, branch, or leaf
  }

  // does some/all of functionality below get handled by Redux reducers?
  clickHandler() {
    if (this.state.nodePosition === 'root') {
      // clicking will go back up a level,
      // making this container the branch it was previously
      // and recreating the previous root
      this.setState({
        nodePosition: 'branch',
      });
    } else if (this.state.nodePosition === 'branch') {
      // clicking will make this container the new root
      this.setState({
        nodePosition: 'root',
      });
    } else if (this.state.nodePosition === 'leaf') {
      // clicking will display POIDetails
      // <POIDetails></POIDetails>

    }
  }

  render() {
    return (
      // circle with this.state.name centered
      <div onClick={this.clickHandler}>

      </div>
    );
  }
}

POI.propTypes = {
  nodePosition: PropTypes.string.isRequired,
};

export default POI;
