import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  handleAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div>
        <Header />
        <butoon
          data-testid="btn-play-again"
          onClick={ this.handleAgain }
        >
          Play Again
        </butoon>
      </div>
    );
  }
}

export default connect()(Feedback);

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
