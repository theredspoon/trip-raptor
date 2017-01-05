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
     branchTitles: state.branchTitles,
     POIs: state.POIs,
   });

const mapDispatchToProps = dispatch => ({
  onBranchClick: (branchTitle) => {
    dispatch(POIInfo.fetchPoiInfo(branchTitle));
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
      console.log(this);
      // browserHistory.push(`/city/${this.state.branchTitle}`);
    } else if (this.state.nodePosition === 'leaf') {
      console.log(this.state);
      // clicking will display POIDetails
      // <POIDetails></POIDetails>
    }
  }

  render() {
    return (
      // circle with this.state.name centered
      // fix results to grab results from state
      <div>
        <div onClick={() => this.props.onBranchClick(this.state.query)}>{this.state.name}</div>
      </div>
    );
  }
}

// POI.propTypes = {
//   nodePosition: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(POI);
