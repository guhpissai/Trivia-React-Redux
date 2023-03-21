import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TriviaQuestion from '../components/TriviaQuestion';
import Header from '../components/Header';

class Game extends Component {
  tokenCheck = () => {
    const { history, questions } = this.props;
    const responseCode = questions.response_code;
    const invalidToken = 3;
    if (responseCode === invalidToken) {
      localStorage.clear();
      history.push('/');
    }
  };

  render() {
    this.tokenCheck();
    const { questions, index } = this.props;
    const first = questions.results[index];
    return (
      <>
        <Header />

        <TriviaQuestion eachQuestion={ first } />

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.game.questions,
  index: state.game.indexQuestions,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf.string),
}.isRequired;

export default connect(mapStateToProps)(Game);
