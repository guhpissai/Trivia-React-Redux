import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Timer extends Component {
  componentDidMount() {
    const { funcTimer } = this.props;
    funcTimer();
  }

  render() {
    return (
      <div>{ ' ' }</div>
    );
  }
}

Timer.propTypes = {
  funcTimer: PropTypes.func.isRequired,
};

export default connect()(Timer);
