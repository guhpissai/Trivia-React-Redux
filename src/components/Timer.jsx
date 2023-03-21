/* refencias: https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
https://www.youtube.com/watch?v=KV1ph8CYWi4
https://www.w3schools.com/jsref/met_win_setinterval.asp
https://gist.github.com/aerrity/f30411d2f575daa36c74494cf9c65a22 */
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
      this.setState({
      });
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

export default connect()(Timer);
