import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import POI from './poi';
import Itinerary from './itinerary';
import NavBar from './nav';

import '../../styles/canvas.scss';

const mapStateToProps = state =>
  // check state
  // console.log('This is state inside of Canvas', state);
   ({
     currentLocation: state.currentLocation,
     branchTitles: state.branchTitles,
     POIs: state.POIs,
     currentRoot: state.currentRoot,
   });

class Canvas extends Component {
  componentDidUpdate() {
    // checking for updates
    // console.log('CurrentRoot in CANVAS is', this.props);
  }
  render() {
    const localRoot = this.props.currentRoot.currentRoot;
    const currentCity = this.props.currentLocation.city;
    const numberStrings = ['zero', 'one', 'two', 'three', 'four'];
    let canvas = null;
    let branch = null;
    let leaf = null;

    if (localRoot === currentCity) {
      branch = (
        <div>
          { this.props.branchTitles.default.map(
            (item, index) => (
              <div styleName={numberStrings[index]}>
                <POI
                  nodePosition="branch"
                  branchTitle={item.name}
                  key={index}
                  query={item.query}
                />
              </div>
              ),
            )}
        </div>
      );
    } else {
      branch = <div />;
    }

    if (localRoot !== currentCity && localRoot) {
      leaf = (
        <div>
          { this.props.branchTitles.branchTitles.map(
            (item, index) => (
              <div styleName={numberStrings[index]}>
                <POI
                  nodePosition="leaf"
                  branchTitle={item.name}
                  key={index}
                  query={item.place_id}
                  details={item}
                  index={index}
                />
              </div>
              ),
            )}
        </div>);
    } else {
      leaf = <div />;
    }

    canvas = (
      <div>
        <div styleName="branchRoot">
          <POI nodePosition="root" />
        </div>
        { branch }
        { leaf }
      </div>
    );

    return (
      <div>
        <NavBar />
        {canvas}
        <Itinerary />
      </div>
    );
  }
}

// Canvas.propTypes = {
//   currentLocation: PropTypes.shape({
//     city: React.PropTypes.string,
//     id: React.PropTypes.string,
//     boundary: React.PropTypes.objectOf(React.PropTypes.objectOf(React.PropTypes.number)),
//   }).isRequired,
//   branchTitles: PropTypes.arrayOf(React.PropTypes.string).isRequired,
// };

export default connect(mapStateToProps)(Canvas);
