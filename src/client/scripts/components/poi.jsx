import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as POIInfo from '../actions/fetch_poi_info_action';

import POIDetails from './poi_details';

import '../../styles/poi.scss';

const mapStateToProps = state =>
  // check state
  ({
    // branchTitles needs to be an array
    currentRoot: state.currentRoot,
    branchTitles: state.branchTitles,
    POIs: state.POIs,
  });

const mapDispatchToProps = dispatch => ({
  onBranchCreation: (branchTitle) => {
    dispatch(POIInfo.fetchPoiInfo(branchTitle));
  },
  onLeafCreation: (branchTitle) => {
    dispatch(POIInfo.fetchPoDetauls(branchTitle));
  },
});

class POI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoot: this.props.currentRoot,
      branchTitle: this.props.branchTitle,
      nodePosition: this.props.nodePosition,
      query: this.props.query,
    }; // root, branch, or leaf
  }
  componentWillMount() {
    if (this.props.nodePosition === 'root') {
      console.log('should be city');
    }
    if (this.props.nodePosition === 'branch') {
      this.props.onBranchCreation(this.state.query);
    }
    if (this.props.nodePosition === 'leaf') {
      this.props.onLeafCreation(this.state.query);
    }
  }
  componentWillReceiveProps() {
    console.log('hello');
  }
  // does some/all of functionality below get handled by Redux reducers?

  render() {
    const hasPOIProp = this.props.POIs[this.state.query];
    let status = null;
    if (hasPOIProp || this.props.nodePosition === 'root') {
      status = (<div>
        <div>{this.state.name} yes</div>
      </div>);
    } else {
      status = <div>{this.state.name} nope</div>;
    }
    return (
      // circle with this.state.name centered
      // fix results to grab results from state
      <div>
        {status}
      </div>
    );
  }
}

// POI.propTypes = {
//   nodePosition: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(POI);
