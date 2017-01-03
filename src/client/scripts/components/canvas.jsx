import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import '../../styles/canvas.scss';

// pulls currentCity

class Canvas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // replace all branches with .map off of state.types array
    //something like: .map(node => <POI nodePosition="branch">{node.type}</POI>)
    return (
      <div>
        <POI nodePosition="root"></POI>
        <POI nodePosition="branch"></POI>
        <POI nodePosition="branch"></POI>
        <POI nodePosition="branch"></POI>
        <POI nodePosition="branch"></POI>
        <POI nodePosition="branch"></POI>
      </div>
    );
  }
}

Canvas.propTypes = {
  currentCity: PropTypes.string.isRequired,
};

export default Canvas;
