import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import '../Feedback.css';

class Feedback extends Component {
  handleAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { assertions, score } = this.props;
    const three = 3;
    return (
      <section className="feedback-container">
        <Header />
        <div className="score-container">
          <p data-testid="feedback-text">
            {
              assertions < three ? 'Could be better...' : 'Well Done!'
            }
          </p>
          <div className="scoreboard">
            <span>
              {' '}
              Your score:
              <p data-testid="feedback-total-score">{score}</p>
            </span>
            <span>
              {' '}
              Questions right:
              <p data-testid="feedback-total-question">
                {assertions}
              </p>
            </span>
          </div>
        </div>
        <div className="buttons-feedback">
          <button
            data-testid="btn-play-again"
            onClick={ this.handleAgain }
          >
            Play Again
          </button>
          <button
            data-testid="btn-ranking"
            onClick={ this.handleRanking }
          >
            Ver Ranking
          </button>
        </div>
      </section>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
