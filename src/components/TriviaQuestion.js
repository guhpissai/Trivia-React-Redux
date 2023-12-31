import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from './Timer';
import '../Game.css';
import {
  indexChange,
  playerScore,
  hits,
} from '../redux/actions';

class TriviaQuestion extends Component {
  state = {
    shuffler: true,
    questions: [],
    isToClear: false,
    seconds: 30,
    isDisabled: false,
  };

  scorePlayer = (answer, target) => {
    const { seconds } = this.state;
    const { eachQuestion, dispatch } = this.props;
    const correctAnswer = target;
    const { difficulty } = eachQuestion;
    const ten = 10;
    const three = 3;
    if (correctAnswer === answer) {
      dispatch(hits());
      if (difficulty === 'easy') {
        return ten + seconds;
      }
      if (difficulty === 'medium') {
        return ten + (seconds * 2);
      }
      if (difficulty === 'hard') {
        return ten + (seconds * three);
      }
    } return 0;
  };

  handleClick = (answer, target) => {
    const { dispatch } = this.props;
    const correct = 'correct-answer answer-button';
    const wrong = 'wrong-answer answer-button';
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((element) => {
      if (element.value === answer) {
        element.className = correct;
      } else {
        element.className = wrong;
      }
    });
    this.setState({
      isToClear: true,
      isDisabled: true,
    });
    const score = this.scorePlayer(answer, target);
    dispatch(playerScore(score));
  };

  funcTimer = () => {
    const second = 1000;
    const myTimeout = setInterval(() => {
      const { seconds, isToClear } = this.state;
      if (seconds > 0 && isToClear === false) {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1,
        }));
      } else {
        clearInterval(myTimeout);
        this.setState({
          isDisabled: true,
        });
      }
    }, second);
  };

  shufflerCondition = () => {
    const { eachQuestion } = this.props;
    const { shuffler, questions } = this.state;
    const correctAnswer = eachQuestion.correct_answer;
    const incorrectAnswers = eachQuestion.incorrect_answers;
    const fisherYates = 0.5;
    if (shuffler) {
      const shuffledAnswers = [...incorrectAnswers, correctAnswer]
        .sort(() => Math.random() - fisherYates);
      this.setState({
        questions: shuffledAnswers,
        shuffler: false,
      });
      return shuffledAnswers;
    } return questions;
  };

  nextIndex = () => {
    const { dispatch, index, history } = this.props;
    const four = 4;
    const buttons = document.querySelectorAll('.answer-button');
    dispatch(indexChange(index + 1));
    if (index === four) { history.push('/feedback'); }
    this.setState({
      shuffler: true,
      seconds: 30,
      isToClear: false,
      isDisabled: false,
    });
    buttons.forEach((element) => {
      element.className = 'answer-button';
    });
    this.funcTimer();
  };

  render() {
    const correct = 'correct-answer';
    const { eachQuestion } = this.props;
    console.log(eachQuestion);
    if (!eachQuestion) {
      return (<p>Error</p>);
    }
    const { question, category } = eachQuestion;
    const correctAnswer = eachQuestion.correct_answer;
    const shuffledAnswers = this.shufflerCondition();
    const { seconds, isDisabled } = this.state;
    return (
      <div>
        <Timer funcTimer={ this.funcTimer } />
        <p className="seconds" data-testid="clock">{ `🕗 ${seconds}` }</p>
        <div className="game-container">
          <div className="question-container">
            <h3 data-testid="question-category">
              {category}
            </h3>
            <h2 data-testid="question-text">
              {question}
            </h2>
          </div>
          <div className="buttons-container">
            <li
              data-testid="answer-options"
              className="button-list"
            >
              {shuffledAnswers.map((answer, index) => (
                <button
                  key={ index }
                  className="answer-button"
                  disabled={ isDisabled }
                  onClick={ ({ target }) => this.handleClick(
                    correctAnswer,
                    target.value,
                  ) }
                  value={ answer }
                  data-testid={
                    answer === correctAnswer
                      ? correct
                      : `wrong-answer-${index}`
                  }
                >
                  { answer }
                </button>

              ))}
            </li>
          </div>
        </div>
        {
          isDisabled
                   && (
                     <button
                       className="next-button"
                       data-testid="btn-next"
                       onClick={ this.nextIndex }
                     >
                       Next
                     </button>
                   )
        }
      </div>
    );
  }
}
TriviaQuestion.propTypes = {
  eachQuestion: PropTypes.shape({
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  index: state.game.indexQuestions,
});

export default connect(mapStateToProps)(TriviaQuestion);
