import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="spin">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;