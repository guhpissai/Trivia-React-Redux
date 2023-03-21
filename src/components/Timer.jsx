import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { disabledButton } from '../redux/actions';

class Timer extends Component {
  state = {
    seconds: 30,
  };

  componentDidMount() {
    const second = 1000;
    const thirtySeconds = 30000;

    const timer = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }));
    }, second);

    setTimeout(() => {
      clearInterval(timer);
    }, thirtySeconds);
  }

  componentDidUpdate() {
    const { seconds } = this.state;
    const { dispatch } = this.props;
    if (seconds === 0) { dispatch(disabledButton(true)); }
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>{seconds}</div>
    );
  }
}

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  stopTimer: state.game.questionSelected,
});

export default connect(mapStateToProps)(Timer);
