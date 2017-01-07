import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { push, goBack, go } from 'react-router-redux';
import * as POIInfo from '../actions/fetch_poi_info_action';
import * as UpdateRoot from '../actions/update_root_action';
import * as UpdateBranch from '../actions/update_branch_titles_action';
import * as UpdateCurrentLeaf from '../actions/update_current_clicked_leaf_action';
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
    selectPOI: state.selectPOI,
    currentClickedLeaf: state.currentClickedLeaf,
    routing: state.routing,
  });

const mapDispatchToProps = dispatch => ({
  onBranchCreation: (branchTitle) => {
    dispatch(POIInfo.fetchPoiInfo(branchTitle));
  },
  onLeafCreation: (branchTitle) => {
    dispatch(POIInfo.fetchPoiDetails(branchTitle));
  },
  onUpdateRoot: (name, query) => {
    dispatch(UpdateRoot.updateRoot(name));
    dispatch(UpdateBranch.updateBranchTitles(query));
    dispatch(push(`/city/${name}`));
  },
  onLeafClick: (branchTitle, type, id) => {
    if (id) {
      dispatch(push(`/city/${type}/${branchTitle}${id}`));
      dispatch(UpdateCurrentLeaf.updateCurrentClickedLeaf(branchTitle));
    } else {
      dispatch(push(`/city/${type}/${branchTitle}`));
      dispatch(UpdateCurrentLeaf.updateCurrentClickedLeaf(branchTitle));
    }
  },
  // TODO: allow dynamic routing
  goBack: (location) => {
    if (location.currentLocation.city !== location.currentRoot.currentRoot) {
      dispatch(go('/city'));
    }
    dispatch(goBack());
  },
});

class POI extends Component {
  /* constructor(props) {
    super(props);
    this.state = { isPopoverOpen: false }
  } */

  componentWillMount() {
    if (this.props.nodePosition === 'root') {
      // this.setState({ name: this.props.root.currentRoot });
    }
    if (this.props.nodePosition === 'branch') {
      this.props.onBranchCreation(this.props.query);
    }
    if (this.props.nodePosition === 'leaf') {
      this.props.onLeafCreation(this.props.query);
    }
  }
  // does some/all of functionality below get handled by Redux reducers?

  // for component state handling popover
  /* onHover(e) {
    this.setState({isPopoverOpen: !this.state.isPopoverOpen });
  } */

  render() {
    const hasPOIProp = this.props.POIs[this.props.query];
    const localRoot = this.props.currentRoot.currentRoot;
    const currentCity = this.props.currentLocation.city;
    const clickPOI = this.props.selectPOI;

    let status = null;
    if (this.props.nodePosition === 'root') {
      // if node is a root
      status =
        (
          <div
            styleName="branchRoot"
            onClick={() => this.props.goBack(this.props)}
          >
            <div>
              { localRoot }
            </div>
          </div>
        );
    } else if (hasPOIProp) {
      // if promise is returned inside of branch
      status =
        (
          <div styleName="branch">
            <div
              onClick={
                () => this.props.onUpdateRoot(
                  this.props.branchTitle,
                  this.props.POIs[this.props.query],
                )
              }
            >
              {this.props.branchTitle}
            </div>
          </div>
        );
    } else if (clickPOI.hasOwnProperty(this.props.query)) {
      // if promise is returned inside of leaf
      // does HTML in tooltip need to be added as an attribute?
      if (this.props.currentClickedLeaf.currentClickedLeaf === this.props.branchTitle) {
        status = (
          <div styleName="poiBranchClick" onClick={() => this.props.onLeafClick('', localRoot)}>
            {clickPOI[this.props.query].name}
            <POIDetails details={this.props.query} />
            {/*
            // BUGFIX: gracefully handle not receiving images in POI Details
            <img
              src={`${clickPOI[this.props.query].photos[0].getUrl({ maxWidth: 400 })}`}
            /> */}
          </div>
          );
      } else {
        status =
          (
            <div styleName="poiBranch" onClick={() => this.props.onLeafClick(this.props.branchTitle, localRoot, this.props.query)}>
              {clickPOI[this.props.query].name}
              {/*
              // BUGFIX: gracefully handle not receiving images in POI Details
              <img
                src={`${clickPOI[this.props.query].photos[0].getUrl({ maxWidth: 400 })}`}
              /> */}
            </div>
          );
      }
    } else {
      // if promise is not returned (and all other cases)
      status = <div>{this.props.branchTitle} nope</div>;
    }
    return (
      // circle with this.state.name centered
      // fix results to grab results from state
      <div>
        { status }
      </div>
    );
  }
}

// POI.propTypes = {
//   nodePosition: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(POI);
