import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as POIInfo from '../actions/fetch_poi_info_action';
import * as UpdateRoot from '../actions/update_root_action';
import POIDetails from './poi_details';

import '../../styles/poi.scss';

const mapStateToProps = state =>
  // check state
  ({
    // branchTitles needs to be an array
    currentLocation: state.currentLocation,
    currentRoot: state.currentRoot,
    branchTitles: state.branchTitles,
    POIs: state.POIs,
    root: state.root,
  });

const mapDispatchToProps = dispatch => ({
  onBranchCreation: (branchTitle) => {
    dispatch(POIInfo.fetchPoiInfo(branchTitle));
  },
  onLeafCreation: (branchTitle) => {
    dispatch(POIInfo.fetchPoiDetails(branchTitle));
  },
  onUpdateRoot: (branchTitle) => {
    dispatch(UpdateRoot.updateRoot(branchTitle));
    browserHistory.push(`/city/${branchTitle}`);
  },
});

class POI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentRoot || this.props.branchTitle,
      nodePosition: this.props.nodePosition,
      query: this.props.query,
    }; // root, branch, or leaf
  }
  componentWillMount() {
    if (this.props.nodePosition === 'root') {
      console.log('hello');
      this.setState({ name: this.props.root.currentRoot });
    }
    if (this.props.nodePosition === 'branch') {
      this.props.onBranchCreation(this.state.query);
    }
    if (this.props.nodePosition === 'leaf') {
      this.props.onLeafCreation(this.state.query);
    }
  }
  componentWillReceiveProps() {
  }
  // does some/all of functionality below get handled by Redux reducers?

  render() {
    const hasPOIProp = this.props.POIs[this.state.query];
    let status = null;
    if (hasPOIProp || this.props.nodePosition === 'root') {
      status = (<div>
        <div onClick={() => this.props.onUpdateRoot(this.state.name)}>{this.state.name} yes</div>
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
