import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { RANKING_LOCAL_STORAGE } from '../helpers/localstorage';
import Header from '../components/Header';
import '../Feedback.css';

class Feedback extends Component {
  handleAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleRanking = () => {
    const { history } = this.props;
    this.saveRankingList();
    history.push('/ranking');
  };

  getSavedRanking = () => {
    const rankingsSaved = localStorage.getItem('Ranking');
    return rankingsSaved ? JSON.parse(rankingsSaved) : [];
  };

  saveRankingList = () => {
    const { score, email, userName } = this.props;
    const storageAgr = this.getSavedRanking();
    const rankingList = [...storageAgr, [email, userName, score]];
    localStorage.setItem('Ranking', JSON.stringify(rankingList));
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
              Right Questions:
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
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  email: state.player.gravatarEmail,
  userName: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
