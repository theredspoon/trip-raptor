import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { push, goBack, go } from 'react-router-redux';
import { Overlay, Popover, OverlayTrigger, Button } from 'react-bootstrap';
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
    currentClickedLeaf: state.currentClickedLeaf,
    routing: state.routing,
  });

const mapDispatchToProps = dispatch => ({
  onBranchCreation: (branchTitle) => {
    dispatch(POIInfo.fetchPoiInfo(branchTitle));
  },
  onLeafCreation: (placeid, index) => {
    dispatch(POIInfo.fetchPoiDetails(placeid, index));
  },
  onUpdateRoot: (name, query) => {
    dispatch(UpdateRoot.updateRoot(name));
    dispatch(UpdateBranch.updateBranchTitles(query));
    dispatch(push(`/city/${name}`));
  },
  onLeafClick: (branchTitle, type, id) => {
    if (id) {
      dispatch(push(`/city/${type}/${branchTitle}/${id}`));
      dispatch(UpdateCurrentLeaf.updateCurrentClickedLeaf(branchTitle));
    } else {
      dispatch(push(`/city/${type}/${branchTitle}`));
      dispatch(UpdateCurrentLeaf.updateCurrentClickedLeaf(branchTitle));
    }
  },
  // TODO: allow dynamic routing
  goBack: (current, destination) => {
    console.log('trying to go to', destination);
    if (current !== destination) {
      dispatch(UpdateRoot.updateRoot(destination));
    } else {
      dispatch(push('/'));
    }
  },
});


class POI extends Component {
  /* constructor(props) {
    super(props);
    this.state = { isPopoverOpen: false }
  } */

  componentWillMount() {
    console.log('Maybe leaf?', this.props);
    if (this.props.nodePosition === 'root') {
      // this.setState({ name: this.props.root.currentRoot });
    }
    if (this.props.nodePosition === 'branch') {
      this.props.onBranchCreation(this.props.query);
    }
    if (this.props.nodePosition === 'leaf') {
      console.log('This is a leaf prop', this.props);
      this.props.onLeafCreation(this.props.query, index);
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
    const showDetail = (
      <Popover id="popover-trigger-click">
        <POIDetails index={this.props.index} details={this.props.details} />
      </Popover>
);

    let status = null;
    if (this.props.nodePosition === 'root') {
      // if node is a root
      status =
        (
          <div
            onClick={() => this.props.goBack(localRoot, currentCity)}
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
          <div>
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
    }
    // else if (this.props.currentClickedLeaf.currentClickedLeaf === this.props.query) {
    //   // if promise is returned inside of leaf
    //   // does HTML in tooltip need to be added as an attribute?
    //   status = (
    //     <div>
    //       <div onClick={() => this.props.onLeafClick('', localRoot)}>
    //         {this.props.branchTitle}
    //       </div>

    //       <div
    //         data-toggle="popover" data-trigger="focus hover" data-html="true" data-content={<POIDetails details={this.props.details} />} data-placement="left" data-template='<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    //       />
    //     </div>
    //     );
    // }
    else if (this.props.nodePosition === 'leaf') {
      status = (
        <OverlayTrigger trigger="click" delayShow={2800} placement="bottom" overlay={showDetail} rootClose>
          <div onClick={() => this.props.onLeafClick(this.props.query, localRoot, this.props.query)}>
            {this.props.branchTitle}
          </div>
        </OverlayTrigger>
        );
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
