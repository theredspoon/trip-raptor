import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import POIDetails from './poi_details';

import '../../styles/poi.scss';

class POI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.currentRoot || this.props.branchTitle,
      nodePosition: this.props.nodePosition,
      bounds: {
        west: -122.52699999999999,
        east: -122.34820000000002,
        north: 37.812,
        south: 37.70339999999999,
      },
      results: [1, 2, 3, 4, 5],
    }; // root, branch, or leaf
  }

  // componentWillMount() {
  //   const service = new google.maps.places.PlacesService(document.createElement('container'));
  //   const search = {
  //     bounds: this.state.bounds,
  //     keyword: this.state.branch,
  //   };
  //   service.nearbySearch(search, (res) => {
  //     console.log(res.sort((a, b) => b.rating - a.rating).slice(0, 5));
  //     this.setState({ results: res.sort((a, b) => b.rating - a.rating).slice(0, 5) });
  //       // browserHistory.push(`/city/${this.state.branch}`);
  //   });
  // }
  // does some/all of functionality below get handled by Redux reducers?
  clickHandler() {
    if (this.state.nodePosition === 'root') {
      // clicking will go back up a level,
      // making this container the branch it was previously
      // and recreating the previous root
      this.setState({
        nodePosition: 'branch',
      });
      console.log(this.state);
    } else if (this.state.nodePosition === 'branch') {
      // clicking will make this container the new root
      this.setState({
        nodePosition: 'root',
      });
      console.log(this.state);
      browserHistory.push(`/city/${this.state.branchTitle}`);
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
        <div onClick={this.clickHandler.bind(this)}>{this.state.name}</div>
        {this.state.results.map(item => <div>{item}</div>)}
      </div>
    );
  }
}

// POI.propTypes = {
//   nodePosition: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
// };

export default POI;
