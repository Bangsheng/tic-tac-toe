import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

class Game extends Component {
  render () {
    return (
      <div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Game);
